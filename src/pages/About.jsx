import React from 'react';
import { APP_NAME } from '../utils/constants';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About {APP_NAME}</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At {APP_NAME}, we're committed to providing you with the best online shopping
              experience. Our mission is to offer quality products at competitive prices while
              ensuring excellent customer service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wide selection of products across multiple categories</li>
              <li>Secure and easy payment options</li>
              <li>Fast and reliable shipping</li>
              <li>24/7 customer support</li>
              <li>Easy returns and refunds</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Quality</h3>
                <p className="text-gray-600">We never compromise on the quality of our products.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Trust</h3>
                <p className="text-gray-600">Building lasting relationships through transparency.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly improving your shopping experience.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
