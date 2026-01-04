import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Enhanced AI responses for productivity assistant
    let response = "I'm AIRA, your personal productivity assistant. ";
    
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      response += "Hello! I'm here to help you manage your tasks, meetings, and productivity. What would you like to work on today?";
    } else if (message.toLowerCase().includes('meeting') || message.toLowerCase().includes('schedule')) {
      response += "I can help you manage your meetings efficiently. I can transcribe meetings, extract action items, and suggest optimal meeting times based on your work patterns. Would you like to schedule a meeting or review your upcoming ones?";
    } else if (message.toLowerCase().includes('task') || message.toLowerCase().includes('todo')) {
      response += "I can automatically create tasks from our conversations and sync them with your preferred task management tool. I also prioritize tasks based on deadlines and importance. What tasks are you working on?";
    } else if (message.toLowerCase().includes('productivity') || message.toLowerCase().includes('focus')) {
      response += "I track your productivity patterns and suggest optimal work schedules. Based on your patterns, I recommend 25-minute focus sessions with 5-minute breaks for maximum efficiency. Would you like me to set up a focus session?";
    } else if (message.toLowerCase().includes('help')) {
      response += "I can assist you with: 1) Meeting transcription and action item extraction, 2) Intelligent task management, 3) Smart scheduling, 4) Productivity insights, 5) Tool integration with your favorite apps. What would you like help with?";
    } else if (message.toLowerCase().includes('integration') || message.toLowerCase().includes('sync')) {
      response += "I integrate with popular tools like Google Calendar, Todoist, Notion, Slack, and Microsoft Teams. I can automatically sync your tasks, meetings, and notes across all your tools to keep everything organized.";
    } else if (message.toLowerCase().includes('insights') || message.toLowerCase().includes('analytics')) {
      response += "I provide personalized productivity insights based on your work patterns, meeting effectiveness, and task completion rates. I can identify your most productive hours and suggest improvements to your workflow.";
    } else if (message.toLowerCase().includes('setting') || message.toLowerCase().includes('preference')) {
      response += "You can customize your experience in the Settings page. Configure your work hours, focus time duration, meeting preferences, notification settings, and tool integrations to match your work style.";
    } else {
      response += `I understand you're asking about "${message}". As your productivity assistant, I can help you organize tasks, manage meetings, and optimize your work patterns. Could you provide more details about what you'd like to accomplish?`;
    }

    return NextResponse.json({ 
      success: true, 
      response: response 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
