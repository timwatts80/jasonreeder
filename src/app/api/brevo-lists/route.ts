import { NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function GET() {
  try {
    // Initialize Brevo API
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

    // Get all lists with folder information
    const listsResult = await apiInstance.getLists();
    console.log('All Brevo lists with folders:', JSON.stringify(listsResult.body, null, 2));

    // The lists response should include folder information
    // Look for folderId in each list to see which folder it belongs to

    return NextResponse.json({ 
      success: true, 
      lists: listsResult.body,
      message: 'Check console for detailed folder and list structure'
    });

  } catch (error) {
    console.error('Error fetching Brevo lists:', error);
    return NextResponse.json({ error: 'Failed to fetch lists' }, { status: 500 });
  }
}