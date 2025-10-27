import { NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: Request) {
  console.log('Newsletter signup API called');
  
  try {
    const { email } = await request.json();
    console.log('Email received:', email);

    if (!email) {
      console.log('No email provided');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Initializing Brevo API...');
    
    // Check if API key exists
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize Brevo API
    const apiInstance = new brevo.ContactsApi();
    const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
    
    // Set API key
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
    transactionalEmailsApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    console.log('Brevo API initialized successfully');

    // Newsletter list ID (we'll add this to env)
    const newsletterListId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '10');
    console.log('Using newsletter list ID:', newsletterListId);

    // Create contact object
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.listIds = [newsletterListId];
    createContact.updateEnabled = true; // Allow updates if contact already exists

    console.log('Creating newsletter contact:', email);

    // Add contact to Brevo
    let contactResult;
    try {
      contactResult = await apiInstance.createContact(createContact);
      console.log('Newsletter contact created:', contactResult);
    } catch (contactError) {
      console.error('Error creating contact:', contactError);
      
      // Check if it's a duplicate contact error
      if (contactError && typeof contactError === 'object' && 'response' in contactError) {
        const axiosError = contactError as { response?: { status?: number; data?: unknown } };
        if (axiosError.response?.status === 400) {
          console.log('Contact already exists, continuing...');
        } else {
          throw contactError;
        }
      } else {
        throw contactError;
      }
    }

    // Send welcome email
    try {
      console.log('Sending welcome email...');
      const welcomeEmail = new brevo.SendSmtpEmail();
      welcomeEmail.to = [{ email: email }];
      welcomeEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
      welcomeEmail.subject = '🎯 Welcome to Jason Reeder\'s Investor Community!';
      welcomeEmail.htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Jason Reeder's Investor Community</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc;">
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; line-height: 1.2;">
                Welcome to Our Investor Community!
              </h1>
              <p style="color: #e0e7ff; margin: 15px 0 0 0; font-size: 16px;">
                Your journey to smart real estate investing starts here
              </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 20px 0;">
                Hi there,
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 25px 0;">
                Thank you for joining Jason Reeder's investor community! You've just taken a smart step toward building wealth through multifamily real estate investing.
              </p>

              <div style="background-color: #f1f5f9; padding: 25px; border-radius: 8px; margin: 25px 0;">
                <h3 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  Here's what you can expect:
                </h3>
                <ul style="margin: 0; padding: 0; list-style: none;">
                  <li style="margin: 0 0 12px 0; padding: 0 0 0 25px; position: relative; color: #374151; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0; color: #10b981; font-weight: bold;">✓</span>
                    <strong>Market Insights</strong> - Regular updates on multifamily market trends and opportunities
                  </li>
                  <li style="margin: 0 0 12px 0; padding: 0 0 0 25px; position: relative; color: #374151; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0; color: #10b981; font-weight: bold;">✓</span>
                    <strong>Deal Alerts</strong> - First access to new investment opportunities and syndications
                  </li>
                  <li style="margin: 0 0 12px 0; padding: 0 0 0 25px; position: relative; color: #374151; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0; color: #10b981; font-weight: bold;">✓</span>
                    <strong>Progress Reports</strong> - Transparent updates on current projects and performance
                  </li>
                  <li style="margin: 0 0 0 0; padding: 0 0 0 25px; position: relative; color: #374151; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0; color: #10b981; font-weight: bold;">✓</span>
                    <strong>Investment Education</strong> - Tips, strategies, and insights for successful real estate investing
                  </li>
                </ul>
              </div>

              <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0;">
                <p style="margin: 0; color: #92400e; font-size: 15px; line-height: 1.5;">
                  <strong>📧 No Spam Promise:</strong> I believe in transparency and clear communication. You'll only receive valuable, actionable information - no spam, no fluff, no daily bombardments. Quality over quantity, always.
                </p>
              </div>

              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 25px 0;">
                Have questions about real estate investing or want to explore partnership opportunities? Just reply to this email - I read and respond to every message personally.
              </p>

              <div style="text-align: center; margin: 35px 0;">
                <a href="https://jasonreeder.com/approach" style="display: inline-block; background-color: #1e3a8a; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Learn About Our Approach
                </a>
              </div>

              <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 25px 0 0 0;">
                Looking forward to connecting with you and helping you achieve your investment goals!
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 30px; border-top: 1px solid #e5e7eb;">
              <div style="text-align: center; margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; color: #1e3a8a; font-weight: 600; font-size: 18px;">
                  Jason Reeder
                </p>
                <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">
                  JReeder REI Solutions
                </p>
                <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">
                  Real Estate Partnerships Built on Trust, Speed & Results
                </p>
              </div>

              <div style="text-align: center; margin-bottom: 20px;">
                <a href="mailto:ceo@jreeder-reisolutions.com" style="color: #1e3a8a; text-decoration: none; margin: 0 15px; font-size: 14px;">
                  📧 ceo@jreeder-reisolutions.com
                </a>
                <a href="tel:+13852519781" style="color: #1e3a8a; text-decoration: none; margin: 0 15px; font-size: 14px;">
                  📞 (385) 251-9781
                </a>
              </div>

              <div style="text-align: center; margin-bottom: 20px;">
                <a href="https://www.linkedin.com/in/jason-reeder-1a7758109/" style="display: inline-block; margin: 0 10px; color: #1e3a8a; text-decoration: none;">
                  LinkedIn
                </a>
                <a href="https://instagram.com/theprofessionaljreeder" style="display: inline-block; margin: 0 10px; color: #1e3a8a; text-decoration: none;">
                  Instagram
                </a>
              </div>

              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.4;">
                  You're receiving this email because you subscribed to Jason Reeder's investor updates at jasonreeder.com
                </p>
                <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
                  <a href="#" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a> | 
                  <a href="#" style="color: #6b7280; text-decoration: underline;">Update Preferences</a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      await transactionalEmailsApi.sendTransacEmail(welcomeEmail);
      console.log('Welcome email sent to:', email);
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
      // Don't fail the whole request if email fails
    }

    // Send notification to Jason
    try {
      console.log('Sending notification email...');
      const notificationEmail = new brevo.SendSmtpEmail();
      notificationEmail.to = [{ email: process.env.NOTIFICATION_EMAIL || 'ceo@jreeder-reisolutions.com' }];
      notificationEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder - JReeder REI Solutions' };
      notificationEmail.subject = 'New Newsletter Subscription';
      notificationEmail.htmlContent = `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> Website Newsletter Signup</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `;

      await transactionalEmailsApi.sendTransacEmail(notificationEmail);
      console.log('Notification email sent');
    } catch (notificationError) {
      console.error('Error sending notification email:', notificationError);
      // Don't fail the whole request if notification email fails
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Check if it's a Brevo API error
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response?: { data?: unknown; status?: number } };
      console.error('Brevo API error response:', axiosError.response?.data);
      console.error('Brevo API error status:', axiosError.response?.status);
      
      // Handle duplicate contact error
      if (axiosError.response?.status === 400) {
        return NextResponse.json(
          { message: 'You are already subscribed to our newsletter!' },
          { status: 200 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again.' },
      { status: 500 }
    );
  }
}