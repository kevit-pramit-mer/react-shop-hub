import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg">Last updated: January 8, 2026</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Introduction</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At ShopHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website and use our services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By using ShopHub, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Information We Collect</h2>
              <p className="text-gray-600 text-lg mb-4">We collect several types of information to provide and improve our services:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1. Personal Information</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Name, email address, and phone number when you register</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Shipping and billing addresses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Payment information (processed securely through third-party providers)</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Usage Data</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">IP address and browser type</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Pages visited and time spent on pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Products viewed and search queries</span>
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">How We Use Your Information</h2>
              <p className="text-gray-600 text-lg mb-4">We use the collected information for various purposes:</p>
              
              <ol className="space-y-4 ml-6 list-decimal list-outside">
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">To process and fulfill orders</strong> - Including payment processing, shipping, and order tracking
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">To improve our services</strong> - Analyzing user behavior to enhance website functionality and user experience
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">To communicate with you</strong> - Sending order confirmations, updates, and promotional offers (with your consent)
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">To provide customer support</strong> - Responding to inquiries and resolving issues
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">To prevent fraud</strong> - Monitoring and detecting fraudulent activities and securing our platform
                </li>
              </ol>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Data Security</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use 
                commercially acceptable means to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Rights</h2>
              <p className="text-gray-600 text-lg mb-4">You have the following rights regarding your personal information:</p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg"><strong>Access:</strong> Request a copy of your personal data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg"><strong>Correction:</strong> Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg"><strong>Deletion:</strong> Request deletion of your personal data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg"><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                </li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="text-lg mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="space-y-2 text-lg">
                <li>📧 Email: privacy@shophub.com</li>
                <li>📞 Phone: +1 234 567 8900</li>
                <li>📍 Address: 123 Shop Street, City, State 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
