import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';

const ShippingPolicy = () => {
  return (
    <AnimatedPage>
      <SEO 
        title="Shipping Policy"
        description="ShopHub's shipping policy. Learn about delivery timelines, costs, tracking, international shipping, and our commitment to getting orders to you safely."
        keywords="shipping policy, delivery, tracking, free shipping, international shipping"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
              Shipping Policy
            </h1>
            <p className="text-gray-600 text-base md:text-lg">Last updated: January 8, 2026</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Delivering Excellence to Your Doorstep</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At ShopHub, we're committed to getting your orders to you quickly and safely. This Shipping Policy outlines 
                our delivery process, timelines, costs, and everything you need to know about receiving your purchases.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partner with trusted shipping carriers to ensure reliable and trackable delivery service across the nation.
              </p>
            </section>

            {/* Shipping Methods */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Methods & Timelines</h2>
              <p className="text-gray-600 text-lg mb-6">We offer multiple shipping options to meet your needs:</p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Shipping (FREE over $100)</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Delivery Time:</strong> 5-7 business days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Cost:</strong> $5.99 (Free on orders over $100)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Tracking:</strong> Provided via email</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Express Shipping</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Delivery Time:</strong> 2-3 business days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Cost:</strong> $12.99</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Tracking:</strong> Real-time tracking available</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Next Day Delivery</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Delivery Time:</strong> 1 business day</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Cost:</strong> $24.99</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Tracking:</strong> Priority tracking with SMS updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-lg"><strong>Note:</strong> Order before 2 PM for next-day delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                <p className="text-gray-700 text-base">
                  <strong>Free Shipping:</strong> All orders over $100 qualify for FREE standard shipping automatically applied at checkout!
                </p>
              </div>
            </section>

            {/* Processing Time */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Processing Time</h2>
              <p className="text-gray-600 text-lg mb-4">
                Once you place your order, here's what happens behind the scenes:
              </p>
              
              <ol className="space-y-4 ml-6 list-decimal list-outside">
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Order Confirmation:</strong> You'll receive an email within minutes confirming your order
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Processing:</strong> Orders are typically processed within 1-2 business days
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Quality Check:</strong> Each item is inspected and carefully packaged
                </li>
                <li className="text-gray-600 text-lg pl-2">
                  <strong className="text-gray-800">Shipment:</strong> Once shipped, you'll receive a tracking number via email
                </li>
              </ol>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-700 text-base">
                  <strong>Important:</strong> Business days exclude weekends and public holidays. Orders placed after 2 PM Friday 
                  will be processed on the next business day.
                </p>
              </div>
            </section>

            {/* Shipping Areas */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Coverage</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Domestic Shipping</h3>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">We ship to all 50 states in the USA</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">P.O. Boxes and APO/FPO addresses accepted (standard shipping only)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">Remote areas may require additional 1-2 business days</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">International Shipping</h3>
              <p className="text-gray-600 text-lg mb-3">Currently, we ship domestically only. International shipping coming soon!</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-gray-400 mr-2">○</span> Canada - Coming Q2 2026
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-gray-400 mr-2">○</span> United Kingdom - Coming Q3 2026
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <span className="text-gray-400 mr-2">○</span> Australia - Coming Q4 2026
                </li>
              </ul>
            </section>

            {/* Order Tracking */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Track Your Order</h2>
              <p className="text-gray-600 text-lg mb-4">Stay updated on your order's journey:</p>
              
              <ul className="space-y-4 ml-6">
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">📧</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Email Updates:</strong>
                    <span className="text-gray-600 text-lg">Receive tracking information as soon as your order ships</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">🔍</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Order History:</strong>
                    <span className="text-gray-600 text-lg">Check real-time status in your account under "My Orders"</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">📱</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">Carrier Tracking:</strong>
                    <span className="text-gray-600 text-lg">Use the tracking number on the carrier's website for detailed updates</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">💬</span>
                  <div>
                    <strong className="text-gray-800 text-lg block mb-1">SMS Notifications:</strong>
                    <span className="text-gray-600 text-lg">Opt-in for text updates on delivery status (available for Express & Next Day)</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Delivery Issues */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Delivery Issues</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lost or Stolen Packages</h3>
              <p className="text-gray-600 text-lg mb-4">If your tracking shows delivered but you haven't received your package:</p>
              <ol className="space-y-3 ml-6 list-decimal list-outside mb-6">
                <li className="text-gray-600 text-lg pl-2">Check with neighbors or building management</li>
                <li className="text-gray-600 text-lg pl-2">Look for a delivery notice or safe location</li>
                <li className="text-gray-600 text-lg pl-2">Wait 24 hours for delayed scans</li>
                <li className="text-gray-600 text-lg pl-2">Contact us if still not found - we'll investigate and resolve</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Delayed Shipments</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">Weather or natural disasters may cause delays</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">Peak season (holidays) may extend delivery times</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-lg">We'll proactively notify you of any significant delays</span>
                </li>
              </ul>
            </section>

            {/* Additional Information */}
            <section className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Additional Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">📦 Packaging</h3>
                  <p className="text-gray-600 text-lg ml-6">
                    All items are securely packaged with protective materials to ensure they arrive in perfect condition. 
                    We use eco-friendly packaging materials whenever possible.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">📝 Signature Required</h3>
                  <p className="text-gray-600 text-lg ml-6">
                    Orders over $200 may require a signature upon delivery for security purposes. Someone must be present 
                    to sign, or the carrier will leave a notice for pickup or redelivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">🏢 Multiple Addresses</h3>
                  <p className="text-gray-600 text-lg ml-6">
                    Each order can only ship to one address. To send items to multiple locations, please place separate orders 
                    for each shipping address.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">✉️ Address Changes</h3>
                  <p className="text-gray-600 text-lg ml-6">
                    Contact us immediately if you need to change your shipping address. Once shipped, we cannot modify the 
                    address, but we may be able to intercept with the carrier.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Shipping?</h2>
              <p className="text-lg mb-4">
                Our shipping support team is ready to help with tracking, delivery issues, or any shipping questions:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">📧 Email: <a href="mailto:shipping@shophub.com" className="ml-2 hover:underline">shipping@shophub.com</a></li>
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

export default ShippingPolicy;
