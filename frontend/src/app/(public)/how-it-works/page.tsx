import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      title: "User Speaks or Chats",
      description: "Start by speaking naturally or typing your thoughts. AIRA AI listens and understands your context.",
      icon: "🎤",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      id: 2,
      title: "AI Listens & Understands",
      description: "Our advanced AI processes your input, identifies key information, and understands your intent.",
      icon: "🧠",
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
    {
      id: 3,
      title: "Tasks & Insights Generated",
      description: "AI automatically extracts action items, schedules tasks, and provides productivity insights.",
      icon: "✨",
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
      id: 4,
      title: "Productivity Improves",
      description: "Watch your productivity soar with organized tasks, smart scheduling, and AI-powered assistance.",
      icon: "🚀",
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
    }
  ];

  const integrations = [
    { name: "Notion", icon: "📝", description: "Sync tasks and notes" },
    { name: "Todoist", icon: "✅", description: "Manage todos efficiently" },
    { name: "Google Calendar", icon: "📅", description: "Schedule and reminders" },
    { name: "Slack", icon: "💬", description: "Team communication" },
    { name: "Microsoft Teams", icon: "👥", description: "Collaboration hub" },
    { name: "Trello", icon: "📋", description: "Project management" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How AIRA AI Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your productivity with AI-powered assistance that understands your needs and helps you achieve more.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>
                
                {/* Step Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 h-full">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Complete Workflow
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl">{step.icon}</span>
                </div>
                <div className="hidden lg:block">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{step.description.substring(0, 50)}...</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            AIRA AI integrates with your favorite tools to create a unified productivity ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose AIRA AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-blue-100">Process information and generate insights in seconds, not hours.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Accurate & Reliable</h3>
              <p className="text-blue-100">Advanced AI ensures precise understanding and task extraction.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-blue-100">Your data is encrypted and protected with enterprise-grade security.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using AIRA AI to boost their productivity and achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
