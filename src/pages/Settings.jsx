import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    smsNotifications: false,
    newsletter: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success('Setting updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
            Settings
          </h1>
          <p className="text-gray-600">Manage your account preferences</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Notifications</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email notifications for account activity</p>
                </div>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Order Updates</p>
                  <p className="text-sm text-gray-500">Get notified about your order status</p>
                </div>
                <button
                  onClick={() => handleToggle('orderUpdates')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    settings.orderUpdates ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings.orderUpdates ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Promotional Emails</p>
                  <p className="text-sm text-gray-500">Receive emails about special offers and deals</p>
                </div>
                <button
                  onClick={() => handleToggle('promotionalEmails')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    settings.promotionalEmails ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings.promotionalEmails ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-500">Receive text messages for important updates</p>
                </div>
                <button
                  onClick={() => handleToggle('smsNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    settings.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Newsletter</p>
                  <p className="text-sm text-gray-500">Subscribe to our weekly newsletter</p>
                </div>
                <button
                  onClick={() => handleToggle('newsletter')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    settings.newsletter ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings.newsletter ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Privacy & Security</h3>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium text-gray-900">Two-Factor Authentication</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span className="font-medium text-gray-900">Download Your Data</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between p-4 border-2 border-red-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="font-medium text-red-600">Delete Account</span>
                </div>
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
