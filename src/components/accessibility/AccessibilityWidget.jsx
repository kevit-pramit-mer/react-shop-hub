import React, { useState, useEffect } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting, resetSettings } = useAccessibility();

  // Keyboard shortcut: Alt + A to toggle widget
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open accessibility settings (Alt + A)"
        title="Accessibility Settings (Alt + A)"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
          A
        </span>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            className="fixed right-6 bottom-24 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[70vh] overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 id="accessibility-title" className="text-lg font-bold flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg transition"
                  aria-label="Close accessibility settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-xs mt-1 text-blue-100">Customize your browsing experience</p>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Font Size
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['small', 'normal', 'large', 'xlarge'].map(size => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                        settings.fontSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-pressed={settings.fontSize === size}
                    >
                      {size === 'small' ? 'A' : size === 'normal' ? 'A' : size === 'large' ? 'A' : 'A'}
                      <span className="sr-only">{size}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contrast */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Contrast
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['normal', 'high'].map(contrast => (
                    <button
                      key={contrast}
                      onClick={() => updateSetting('contrast', contrast)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        settings.contrast === contrast
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-pressed={settings.contrast === contrast}
                    >
                      {contrast === 'normal' ? 'Normal' : 'High Contrast'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle Settings */}
              <div className="space-y-3 pt-2 border-t border-gray-200">
                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <label htmlFor="reduced-motion" className="text-sm font-semibold text-gray-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Reduce Motion
                    </label>
                    <p className="text-xs text-gray-500 mt-0.5">Minimize animations</p>
                  </div>
                  <button
                    id="reduced-motion"
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Highlight */}
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <label htmlFor="focus-highlight" className="text-sm font-semibold text-gray-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Focus Highlight
                    </label>
                    <p className="text-xs text-gray-500 mt-0.5">Enhanced keyboard navigation</p>
                  </div>
                  <button
                    id="focus-highlight"
                    onClick={() => updateSetting('focusHighlight', !settings.focusHighlight)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      settings.focusHighlight ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={settings.focusHighlight}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        settings.focusHighlight ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <label htmlFor="keyboard-nav" className="text-sm font-semibold text-gray-700 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Keyboard Shortcuts
                    </label>
                    <p className="text-xs text-gray-500 mt-0.5">Enable keyboard navigation</p>
                  </div>
                  <button
                    id="keyboard-nav"
                    onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Guide */}
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h3 className="text-xs font-bold text-blue-900 mb-2 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Keyboard Shortcuts
                </h3>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li><kbd className="px-1 py-0.5 bg-white rounded border border-blue-300">Alt</kbd> + <kbd className="px-1 py-0.5 bg-white rounded border border-blue-300">A</kbd> - Toggle accessibility panel</li>
                  <li><kbd className="px-1 py-0.5 bg-white rounded border border-blue-300">Tab</kbd> - Navigate between elements</li>
                  <li><kbd className="px-1 py-0.5 bg-white rounded border border-blue-300">Esc</kbd> - Close dialogs</li>
                  <li><kbd className="px-1 py-0.5 bg-white rounded border border-blue-300">Enter</kbd> - Activate buttons/links</li>
                </ul>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset to Default
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;
