import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, partnershipType, investmentExperience } = formData;
    
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Brevo API
    const apiInstance = new brevo.ContactsApi();
    const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
    
    // Set API key
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);
    transactionalEmailsApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

    // Create contact in Brevo CRM
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.updateEnabled = true; // Allow updates if contact already exists
    createContact.attributes = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      PHONE: formData.phone || '',
      COMPANY: formData.company || '',
      PARTNERSHIP_TYPE: partnershipType || '',
      INVESTMENT_EXPERIENCE: investmentExperience || '',
      INVESTMENT_AMOUNT: formData.investmentAmount || '',
      TIMEFRAME: formData.timeframe || '',
      MESSAGE: formData.message || '',
      FORM_SUBMITTED_DATE: new Date().toISOString(),
      SOURCE: 'Website Contact Form',
      INQUIRY_TYPE: 'Partnership Inquiry',
      FOLDER: 'Partnership Inquiry'
    };

    // Add to appropriate partnership list based on type
    let targetListId = null;
    if (partnershipType === 'gp' && process.env.BREVO_PARTNERSHIP_GP_LIST_ID) {
      targetListId = parseInt(process.env.BREVO_PARTNERSHIP_GP_LIST_ID);
      console.log('Adding to Partnership - GP list:', targetListId);
    } else if (partnershipType === 'lp' && process.env.BREVO_PARTNERSHIP_LP_LIST_ID) {
      targetListId = parseInt(process.env.BREVO_PARTNERSHIP_LP_LIST_ID);
      console.log('Adding to Partnership - LP list:', targetListId);
    } else if (formData.partnershipType === 'gp' && process.env.BREVO_PARTNERSHIP_GP_LIST_ID) {
      // Fallback to form data if partnershipType variable is empty
      targetListId = parseInt(process.env.BREVO_PARTNERSHIP_GP_LIST_ID);
      console.log('Adding to Partnership - GP list (from form data):', targetListId);
    } else if (formData.partnershipType === 'lp' && process.env.BREVO_PARTNERSHIP_LP_LIST_ID) {
      targetListId = parseInt(process.env.BREVO_PARTNERSHIP_LP_LIST_ID);
      console.log('Adding to Partnership - LP list (from form data):', targetListId);
    } else {
      // Default to GP list if type is unclear
      if (process.env.BREVO_PARTNERSHIP_GP_LIST_ID) {
        targetListId = parseInt(process.env.BREVO_PARTNERSHIP_GP_LIST_ID);
        console.log('Adding to Partnership - GP list (default):', targetListId);
      }
    }
    
    if (targetListId) {
      createContact.listIds = [targetListId];
    }

    // Create contact in Brevo
    console.log('Creating contact in Brevo...');
    const contactResult = await apiInstance.createContact(createContact);
    console.log('Contact created successfully:', contactResult.body?.id);

    // Send notification email to you
    console.log('Sending notification email to:', process.env.NOTIFICATION_EMAIL);
    const notificationEmail = new brevo.SendSmtpEmail();
    notificationEmail.to = [{ email: process.env.NOTIFICATION_EMAIL! }];
    notificationEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
    notificationEmail.subject = `New Partnership Inquiry - ${partnershipType?.toUpperCase() || 'General'}`;
    notificationEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Partnership Form Submission</h2>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        
        <h3 style="color: #1e3a8a;">Contact Information</h3>
        <ul style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
          <li><strong>Company:</strong> ${formData.company || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #1e3a8a;">Investment Details</h3>
        <ul style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <li><strong>Partnership Type:</strong> ${partnershipType || 'Not specified'}</li>
          <li><strong>Experience Level:</strong> ${investmentExperience || 'Not specified'}</li>
          <li><strong>Investment Amount:</strong> ${formData.investmentAmount || 'Not specified'}</li>
          <li><strong>Timeframe:</strong> ${formData.timeframe || 'Not specified'}</li>
        </ul>
        
        <h3 style="color: #1e3a8a;">Message</h3>
        <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <p>${formData.message || 'No message provided'}</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #64748b; font-size: 14px;"><em>This contact has been automatically added to your Brevo CRM.</em></p>
      </div>
    `;

    const notificationResult = await transactionalEmailsApi.sendTransacEmail(notificationEmail);
    console.log('Notification email sent successfully:', notificationResult.body?.messageId);

    // Send confirmation email to user
    console.log('Sending confirmation email to:', email);
    const confirmationEmail = new brevo.SendSmtpEmail();
    confirmationEmail.to = [{ email: email, name: `${firstName} ${lastName}` }];
    confirmationEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
    
    // Use custom HTML instead of template for better reliability
    confirmationEmail.subject = 'Thank you for your partnership inquiry';
    confirmationEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Thank you, ${firstName}!</h2>
        <p style="font-size: 16px; line-height: 1.6;">I've received your partnership inquiry and will be in touch within 24 hours.</p>
        
        <h3 style="color: #1e3a8a;">What's Next?</h3>
        <ol style="font-size: 16px; line-height: 1.8;">
          <li>I'll review your information and current opportunities</li>
          <li>Schedule a discovery call to discuss your investment goals</li>
          <li>Explore partnership options that align with your objectives</li>
        </ol>
        
        <p style="font-size: 16px; line-height: 1.6;">If you have any immediate questions, feel free to reply to this email.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Best regards,</strong></p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Jason Reeder</strong></p>
          <p style="font-size: 14px; color: #64748b;">JReeder REI Solutions</p>
        </div>
      </div>
    `;

    const confirmationResult = await transactionalEmailsApi.sendTransacEmail(confirmationEmail);
    console.log('Confirmation email sent successfully:', confirmationResult.body?.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      contactId: contactResult.body?.id 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Log specific error details
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // Check if it's a Brevo API error
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response?: { data?: unknown; status?: number } };
      console.error('Brevo API error response:', axiosError.response?.data);
      console.error('Brevo API error status:', axiosError.response?.status);
    }
    
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}