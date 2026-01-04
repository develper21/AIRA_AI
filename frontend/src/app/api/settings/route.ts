import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { settings } = await request.json();
    
    // Simulate saving settings to database
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real application, you would save to database here
    console.log('Saving settings:', settings);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Settings saved successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to save settings' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Mock default settings
    const defaultSettings = {
      voice: {
        enabled: true,
        language: 'en-US',
        speed: 'normal',
        autoStart: false,
        meetingTranscription: true,
        actionItemDetection: true,
      },
      notifications: {
        email: true,
        push: true,
        sound: true,
        meetingReminders: true,
        taskDeadlines: true,
        productivityInsights: true,
      },
      privacy: {
        dataRetention: '30',
        shareAnalytics: true,
        encryption: true,
        meetingPrivacy: 'private',
        taskSharing: false,
      },
      productivity: {
        workHours: '9-5',
        focusTime: '25',
        breakDuration: '5',
        meetingBuffer: '15',
        autoTaskCreation: true,
        smartScheduling: true,
        contextAwareness: true,
      },
      appearance: {
        theme: 'light',
        fontSize: 'medium',
        compactMode: false,
        showProductivityMetrics: true,
        focusMode: false,
      },
      integration: {
        calendar: 'google',
        tasks: 'todoist',
        notes: 'notion',
        email: 'gmail',
        slack: true,
        teams: false,
      },
    };

    return NextResponse.json({ 
      success: true, 
      data: defaultSettings 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}
