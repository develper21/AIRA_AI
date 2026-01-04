import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock analytics data
    const analytics = {
      totalConversations: 2547,
      activeUsers: 1234,
      responseTime: 0.8,
      satisfactionRate: 94,
      recentActivity: [
        { id: 1, user: 'John Doe', action: 'Started conversation', time: '2 minutes ago' },
        { id: 2, user: 'Jane Smith', action: 'Asked about analytics', time: '5 minutes ago' },
        { id: 3, user: 'Bob Johnson', action: 'Completed onboarding', time: '12 minutes ago' },
        { id: 4, user: 'Alice Brown', action: 'Requested report', time: '18 minutes ago' },
      ],
      performance: {
        cpu: 45,
        memory: 62,
        apiRequests: 78,
      },
      insights: {
        engagementTrend: [
          { month: 'Jan', value: 65 },
          { month: 'Feb', value: 78 },
          { month: 'Mar', value: 90 },
          { month: 'Apr', value: 81 },
          { month: 'May', value: 95 },
          { month: 'Jun', value: 88 },
        ],
        queryCategories: [
          { category: 'Technical', value: 35 },
          { category: 'General', value: 28 },
          { category: 'Support', value: 22 },
          { category: 'Analytics', value: 15 },
        ],
        responseAccuracy: 87,
        peakUsageTimes: [
          { time: '9AM', usage: 45 },
          { time: '12PM', usage: 78 },
          { time: '3PM', usage: 65 },
          { time: '6PM', usage: 82 },
          { time: '9PM', usage: 55 },
        ],
      },
      keyMetrics: {
        userSatisfaction: 92,
        avgResponseTime: 1.2,
        qualityScore: 8.5,
      }
    };

    return NextResponse.json({ 
      success: true, 
      data: analytics 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
