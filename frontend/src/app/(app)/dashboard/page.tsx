'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12%', trend: 'up' },
    { title: 'Active Users', value: '1,892', change: '+8%', trend: 'up' },
    { title: 'AI Usage Today', value: '45,678', change: '+15%', trend: 'up' },
    { title: 'System Health', value: '99.2%', change: 'Stable', trend: 'up' }
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'user account created', time: '2 hours ago' },
    { user: 'Sarah Smith', action: 'AI model updated', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'system backup completed', time: '6 hours ago' },
    { user: 'Emma Wilson', action: 'admin login detected', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your AIRA AI system today.</p>
        </div>

        {/* Period Selector */}
        <div className="mb-6">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200 inline-flex">
            {['day', 'week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Overview</h2>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Chart visualization will appear here</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: '📊', label: 'View Reports', color: 'bg-blue-500' },
              { icon: '👥', label: 'Manage Team', color: 'bg-green-500' },
              { icon: '📁', label: 'File Manager', color: 'bg-purple-500' },
              { icon: '⚙️', label: 'Settings', color: 'bg-gray-500' }
            ].map((action, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                  {action.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}