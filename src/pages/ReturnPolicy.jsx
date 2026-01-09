import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';

const ReturnPolicy = () => {
  return (
    <AnimatedPage>
      <SEO 
        title="Return Policy"
        description="ShopHub's hassle-free return policy. Learn about our 30-day return window, eligibility criteria, and refund process."
        keywords="return policy, refund, exchange, 30 day return, hassle-free returns"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
              Return Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg">Last updated: January 8, 2026</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Return Promise</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At ShopHub, we want you to be completely satisfied with your purchase. If you're not happy with your order, 
                we offer a hassle-free return policy to ensure your peace of mind.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This Return Policy explains the process, eligibility criteria, and timeframes for returning products purchased from ShopHub.
              </p>
            </section>

            {/* Return Eligibility */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Return Eligibility</h2>
              <p className="text-gray-600 text-lg mb-4">To be eligible for a return, items must meet the following conditions:</p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Items must be returned within <strong>30 days</strong> of delivery</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Products must be unused and in the same condition as received</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Items must be in their original packaging with all tags attached</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">You must provide proof of purchase (order number or receipt)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Items must not show signs of wear, damage, or alteration</span>
                </li>
              </ul>
            </section>

            {/* Non-Returnable Items */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Non-Returnable Items</h2>
              <p className="text-gray-600 text-lg mb-4">For hygiene and safety reasons, the following items cannot be returned:</p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Intimate apparel and undergarments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Cosmetics, perfumes, and personal care products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Perishable goods and food items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Gift cards and downloadable software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Personalized or custom-made products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-lg">Sale or clearance items marked as "Final Sale"</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700 text-base">
                  <strong>Note:</strong> Electronics can only be returned if unopened and in original sealed packaging.
                </p>
              </div>
            </section>

            {/* How to Initiate a Return */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">How to Initiate a Return</h2>
              <p className="text-gray-600 text-lg mb-4">Follow these simple steps to return your product:</p>
              
              <ol className="space-y-4 ml-6 list-decimal list-outside">
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Login to Your Account:</strong> Visit the "My Orders" section in your account dashboard
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Select the Order:</strong> Find the order containing the item you wish to return
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Request Return:</strong> Click "Return Item" and select the reason for return
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Print Return Label:</strong> We'll email you a prepaid return shipping label within 24 hours
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Pack the Item:</strong> Securely pack the item in its original packaging with all accessories
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Ship the Package:</strong> Attach the return label and drop off at any authorized shipping location
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Track Your Return:</strong> Use the tracking number to monitor your return shipment
                </li>
              </ol>
            </section>

            {/* Refund Process */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Refund Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Timeline</h3>
              <ul className="space-y-4 ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">📦</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Return Received:</strong>
                    <span className="text-gray-600 text-lg">We inspect returns within 2-3 business days of receipt</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">✅</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Approval:</strong>
                    <span className="text-gray-600 text-lg">Once approved, refunds are processed within 5-7 business days</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">💰</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Refund Method:</strong>
                    <span className="text-gray-600 text-lg">Refunds are issued to the original payment method</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">⏱️</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Bank Processing:</strong>
                    <span className="text-gray-600 text-lg">Your bank may take an additional 3-5 business days to credit your account</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Amount</h3>
              <p className="text-gray-600 text-lg mb-3">Your refund will include:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-green-600 mr-2">✓</span> Full product price
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-green-600 mr-2">✓</span> Original shipping charges (if item is defective or wrong)
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-red-600 mr-2">✗</span> Return shipping costs (deducted from refund unless item is defective)
                </li>
              </ul>
            </section>

            {/* Exchanges */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Exchanges</h2>
              <p className="text-gray-600 text-lg mb-4">
                We currently don't offer direct exchanges. If you need a different size, color, or product:
              </p>
              
              <ol className="space-y-3 ml-6 list-decimal list-outside mb-6">
                <li className="text-gray-600 text-lg pl-2">Return the original item following our return process</li>
                <li className="text-gray-600 text-lg pl-2">Once your return is approved and refunded</li>
                <li className="text-gray-600 text-lg pl-2">Place a new order for the desired item</li>
              </ol>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 text-base">
                  <strong>Pro Tip:</strong> To get your replacement faster, place a new order before initiating the return, 
                  and your refund will be processed once we receive the returned item.
                </p>
              </div>
            </section>

            {/* Damaged or Defective Items */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Damaged or Defective Items</h2>
              <p className="text-gray-600 text-lg mb-4">
                If you receive a damaged, defective, or wrong item, please contact us immediately:
              </p>
              
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">Contact us within <strong>48 hours</strong> of delivery</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">Provide photos of the damaged/defective item and packaging</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">We'll arrange a free pickup and full refund or replacement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">No return shipping charges for damaged/defective items</span>
                </li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Help with Returns?</h2>
              <p className="text-lg mb-4">
                Our customer service team is here to assist you with any return-related questions:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">📧 Email: <a href="mailto:returns@shophub.com" className="ml-2 hover:underline">returns@shophub.com</a></li>
                <li className="flex items-center">📞 Phone: <a href="tel:+12345678900" className="ml-2 hover:underline">+1 234 567 8900</a></li>
                <li>💬 Live Chat: Available 9 AM - 6 PM (Mon-Sat)</li>
                <li>📍 Address: 123 Shop Street, City, State 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default ReturnPolicy;
