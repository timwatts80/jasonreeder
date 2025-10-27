import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phone, fundingGoal } = formData;
    
    if (!firstName || !lastName || !email || !phone || !fundingGoal) {
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
      PHONE: phone,
      FUNDING_GOAL: fundingGoal,
      PERSONAL_INCOME: formData.personalIncome || '',
      BUSINESS_OWNER: formData.businessOwner || '',
      BUSINESS_REVENUE: formData.businessRevenue || '',
      CREDIT_SCORE: formData.creditScore || '',
      CREDIT_LIMITS: formData.creditLimits || '',
      CREDIT_PROFILE: Array.isArray(formData.creditProfile) ? formData.creditProfile.join(', ') : '',
      FORM_TYPE: 'Funding Application',
      FORM_SUBMITTED_DATE: new Date().toISOString(),
      SOURCE: 'Website Funding Form'
    };

    // Add to funding inquiry list
    if (process.env.BREVO_FUNDING_LIST_ID) {
      const fundingListId = parseInt(process.env.BREVO_FUNDING_LIST_ID);
      console.log('Adding contact to Funding Inquiry list ID:', fundingListId);
      createContact.listIds = [fundingListId];
    } else {
      console.log('No BREVO_FUNDING_LIST_ID specified in environment variables');
    }

    // Create contact in Brevo
    console.log('Creating funding form contact in Brevo...');
    console.log('Contact data:', JSON.stringify(createContact, null, 2));
    const contactResult = await apiInstance.createContact(createContact);
    console.log('Funding contact created successfully:', contactResult.body?.id);
    console.log('Full contact creation response:', JSON.stringify(contactResult.body, null, 2));

    // Send notification email to you
    console.log('Sending funding notification email to:', process.env.NOTIFICATION_EMAIL);
    const notificationEmail = new brevo.SendSmtpEmail();
    notificationEmail.to = [{ email: process.env.NOTIFICATION_EMAIL! }];
    notificationEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
    notificationEmail.subject = `New Funding Application - ${fundingGoal}`;
    notificationEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Funding Application Submitted</h2>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        
        <h3 style="color: #1e3a8a;">Contact Information</h3>
        <ul style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        
        <h3 style="color: #1e3a8a;">Funding Details</h3>
        <ul style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <li><strong>Funding Goal:</strong> ${fundingGoal}</li>
          <li><strong>Personal Income:</strong> ${formData.personalIncome || 'Not specified'}</li>
          <li><strong>Business Owner:</strong> ${formData.businessOwner || 'Not specified'}</li>
          ${formData.businessRevenue ? `<li><strong>Business Revenue:</strong> ${formData.businessRevenue}</li>` : ''}
        </ul>
        
        <h3 style="color: #1e3a8a;">Credit Profile</h3>
        <ul style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <li><strong>Credit Score:</strong> ${formData.creditScore || 'Not specified'}</li>
          <li><strong>Credit Limits:</strong> ${formData.creditLimits || 'Not specified'}</li>
          <li><strong>Credit Issues:</strong> ${Array.isArray(formData.creditProfile) ? formData.creditProfile.join(', ') : 'Not specified'}</li>
        </ul>
        
        <hr style="margin: 30px 0;">
        <p style="color: #64748b; font-size: 14px;"><em>This contact has been automatically added to your Brevo CRM.</em></p>
      </div>
    `;

    const notificationResult = await transactionalEmailsApi.sendTransacEmail(notificationEmail);
    console.log('Funding notification email sent successfully:', notificationResult.body?.messageId);

    // Send confirmation email to user
    console.log('Sending funding confirmation email to:', email);
    const confirmationEmail = new brevo.SendSmtpEmail();
    confirmationEmail.to = [{ email: email, name: `${firstName} ${lastName}` }];
    confirmationEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
    
    confirmationEmail.subject = 'Your Funding Application Has Been Received';
    confirmationEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">Thank you, ${firstName}!</h2>
        <p style="font-size: 16px; line-height: 1.6;">I've received your funding application and will analyze your profile to find the best funding opportunities for you.</p>
        
        <h3 style="color: #1e3a8a;">What's Next?</h3>
        <ol style="font-size: 16px; line-height: 1.8;">
          <li>I'll review your financial profile and funding goals</li>
          <li>Research the best funding options for your situation</li>
          <li>Contact you within 24 hours with personalized recommendations</li>
          <li>Guide you through the application process for the best options</li>
        </ol>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #1e3a8a; margin-bottom: 10px;">Your Application Summary:</h4>
          <p><strong>Funding Goal:</strong> ${fundingGoal}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">If you have any immediate questions, feel free to reply to this email.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Best regards,</strong></p>
          <p style="font-size: 16px; margin-bottom: 5px;"><strong>Jason Reeder</strong></p>
          <p style="font-size: 14px; color: #64748b;">JReeder REI Solutions</p>
        </div>
      </div>
    `;

    const confirmationResult = await transactionalEmailsApi.sendTransacEmail(confirmationEmail);
    console.log('Funding confirmation email sent successfully:', confirmationResult.body?.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Funding application submitted successfully',
      contactId: contactResult.body?.id 
    });

  } catch (error) {
    console.error('Funding form submission error:', error);
    
    // Log specific error details
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // Check if it's a Brevo API error
    if (error && typeof error === 'object' && 'body' in error) {
      console.error('Brevo API error body:', error.body);
    }
    
    return NextResponse.json(
      { error: 'Failed to submit funding application. Please try again.' },
      { status: 500 }
    );
  }
}