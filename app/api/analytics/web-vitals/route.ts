import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const webVital = await request.json();
    
    // Validate the web vital data
    if (!webVital.name || !webVital.value) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real application, you would send this to your analytics provider
    // For now, we'll just log it
    console.log('Web Vital received:', {
      name: webVital.name,
      value: webVital.value,
      id: webVital.id,
      delta: webVital.delta,
      navigationType: webVital.navigationType,
      timestamp: new Date().toISOString(),
    });
    
    // You could send this to services like:
    // - Google Analytics
    // - DataDog
    // - New Relic
    // - Your own analytics database
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing web vital:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}