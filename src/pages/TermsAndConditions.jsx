import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';

const TermsAndConditions = () => {
  return (
    <AnimatedPage>
      <SEO 
        title="Terms & Conditions"
        description="Read ShopHub's Terms and Conditions. Understand our policies, user agreements, and guidelines for using our e-commerce platform."
        keywords="terms, conditions, legal, user agreement, policies"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 text-base md:text-lg">Last updated: January 8, 2026</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Agreement to Terms</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Welcome to ShopHub! These Terms and Conditions ("Terms") govern your use of our website and services. 
                By accessing or using ShopHub, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                If you do not agree with any part of these Terms, you must not use our website or services.
              </p>
            </section>

            {/* Account Registration */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Account Registration</h2>
              <p className="text-gray-600 text-lg mb-4">When creating an account with ShopHub, you agree to:</p>
              
              <ol className="space-y-4 ml-6 list-decimal list-outside">
                <li className="text-gray-600 text-lg pl-2">
                  Provide accurate, current, and complete information during registration
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  Maintain and promptly update your account information
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  Keep your password confidential and secure
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  Accept responsibility for all activities under your account
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  Immediately notify us of any unauthorized access or security breaches
                </li>
              </ol>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 text-base">
                  <strong>Note:</strong> You must be at least 18 years old to create an account and make purchases on ShopHub.
                </p>
              </div>
            </section>

            {/* Products and Services */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Products and Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Information</h3>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">We strive to display product colors and images as accurately as possible</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Actual colors may vary due to display settings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">We reserve the right to limit quantities and discontinue products</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">All prices are in USD unless otherwise stated</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Prices are subject to change without prior notice</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Additional taxes and shipping fees may apply at checkout</span>
                </li>
              </ul>
            </section>

            {/* Orders and Payment */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Orders and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Order Process</h3>
              <ol className="space-y-4 ml-6 list-decimal list-outside mb-6">
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Order Placement:</strong> When you place an order, you make an offer to purchase
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Order Confirmation:</strong> We send a confirmation email after receiving your order
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Order Acceptance:</strong> We reserve the right to accept or reject any order
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Payment Processing:</strong> Payment is charged upon order confirmation
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Methods</h3>
              <p className="text-gray-600 text-lg mb-3">We accept the following payment methods:</p>
              <ul className="grid md:grid-cols-2 gap-3 ml-6">
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-blue-600 mr-2">💳</span> Credit/Debit Cards
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-blue-600 mr-2">🏦</span> UPI
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-blue-600 mr-2">💰</span> Cash on Delivery
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-blue-600 mr-2">📱</span> Digital Wallets
                </li>
              </ul>
            </section>

            {/* Shipping and Delivery */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping and Delivery</h2>
              
              <ul className="space-y-4 ml-6">
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">📦</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Processing Time:</strong>
                    <span className="text-gray-600 text-lg">Orders are typically processed within 1-2 business days</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">🚚</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Delivery Time:</strong>
                    <span className="text-gray-600 text-lg">Standard shipping takes 5-7 business days</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">🌍</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Shipping Areas:</strong>
                    <span className="text-gray-600 text-lg">We currently ship nationwide</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">💸</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Free Shipping:</strong>
                    <span className="text-gray-600 text-lg">Available on orders over $100</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Returns and Refunds */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Returns and Refunds</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Return Policy</h3>
              <p className="text-gray-600 text-lg mb-4">We offer a 30-day return policy for most items. To be eligible for a return:</p>
              
              <ol className="space-y-3 ml-6 list-decimal list-outside mb-6">
                <li className="text-gray-600 text-lg pl-2">Item must be unused and in original condition</li>
                <li className="text-gray-600 text-lg pl-2">Item must be in original packaging</li>
                <li className="text-gray-600 text-lg pl-2">Receipt or proof of purchase is required</li>
                <li className="text-gray-600 text-lg pl-2">Return request must be initiated within 30 days of delivery</li>
              </ol>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-700 text-base">
                  <strong>Note:</strong> Some items are non-returnable, including perishable goods, intimate items, and personalized products.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Limitation of Liability</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                ShopHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-600 text-lg">Your use or inability to use our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-600 text-lg">Unauthorized access to your account or data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-600 text-lg">Errors or omissions in product information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-600 text-lg">Delays or interruptions in service</span>
                </li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-lg mb-4">
                If you have any questions about these Terms and Conditions, please don't hesitate to contact us:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">📧 Email: <a href="mailto:legal@shophub.com" className="ml-2 hover:underline">legal@shophub.com</a></li>
                <li className="flex items-center">📞 Phone: <a href="tel:+12345678900" className="ml-2 hover:underline">+1 234 567 8900</a></li>
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

export default TermsAndConditions;
