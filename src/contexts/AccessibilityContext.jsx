import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : {
      fontSize: 'normal',
      contrast: 'normal',
      reducedMotion: false,
      focusHighlight: true,
      keyboardNavigation: true,
    };
  });

  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));

    // Apply font size
    const fontSizes = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px',
    };
    document.documentElement.style.fontSize = fontSizes[settings.fontSize] || fontSizes.normal;

    // Apply contrast
    if (settings.contrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    // Apply focus highlight
    if (settings.focusHighlight) {
      document.documentElement.classList.add('focus-highlight');
    } else {
      document.documentElement.classList.remove('focus-highlight');
    }
  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 'normal',
      contrast: 'normal',
      reducedMotion: false,
      focusHighlight: true,
      keyboardNavigation: true,
    });
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
