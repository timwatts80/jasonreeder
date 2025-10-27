'use client';

import { useState } from 'react';

export default function EmailTest() {
  const [email, setEmail] = useState('tim@onemorelight.cc');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const sendTestEmail = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(`✅ Success! Message ID: ${data.messageId}`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`❌ Network Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Email Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Test Email Address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <button
            onClick={sendTestEmail}
            disabled={loading}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Sending...' : 'Send Test Email'}
          </button>
          
          {result && (
            <div className="mt-4 p-4 rounded-md bg-gray-50">
              <pre className="text-sm">{result}</pre>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-sm text-gray-600">
          <p>This will test if the Brevo email integration is working correctly.</p>
          <p>Check your email (including spam folder) after clicking send.</p>
        </div>
      </div>
    </div>
  );
}