import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // Initialize Brevo API
    const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
    transactionalEmailsApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

    // Send test email
    const testEmail = new brevo.SendSmtpEmail();
    testEmail.to = [{ email: email }];
    testEmail.sender = { email: 'ceo@jreeder-reisolutions.com', name: 'Jason Reeder Test' };
    testEmail.subject = 'Test Email from Jason Reeder Website';
    testEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e3a8a;">Email Test Successful!</h2>
        <p>If you're receiving this email, the Brevo integration is working correctly.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p>The form emails should be working too - check your spam folder!</p>
        <p><strong>Message ID will be:</strong> Check console for details</p>
      </div>
    `;

    const result = await transactionalEmailsApi.sendTransacEmail(testEmail);
    console.log('Test email sent successfully:', result.body?.messageId);
    console.log('Full response body:', JSON.stringify(result.body, null, 2));
    console.log('Response status:', result.response?.statusCode);

    return NextResponse.json({ 
      success: true, 
      messageId: result.body?.messageId,
      fullResponse: result.body,
      message: 'Test email sent successfully!' 
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ error: 'Failed to send test email' }, { status: 500 });
  }
}