export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About AIRA AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to transform how professionals work with intelligent AI-powered productivity solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              To empower every professional with AI assistants that understand their unique workflow and help them achieve more in less time.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe technology should adapt to people, not the other way around. That's why we built AIRA AI to learn from your patterns and provide intelligent assistance that feels natural and helpful.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What AIRA AI Solves
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2023, AIRA AI started from a simple observation: professionals spend too much time on administrative tasks and not enough on meaningful work.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our team of AI researchers, productivity experts, and user experience designers came together to create a solution that automates the mundane and amplifies human potential.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We push boundaries to create cutting-edge AI solutions that transform how people work.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                User-Centric
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature is designed with real user needs and feedback at the core.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Privacy & Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is yours. We use enterprise-grade security and never sell your information.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of professionals who trust AIRA AI for their daily productivity needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
