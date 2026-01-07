import { REGEX } from './constants';

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const validateEmail = (email) => {
  if (!email) return false;
  return REGEX.EMAIL.test(email);
};

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const validatePhone = (phone) => {
  if (!phone) return false;
  const cleanPhone = phone.replace(/\D/g, '');
  return REGEX.PHONE.test(cleanPhone);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid and message
 */
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  if (!/[@$!%*?&]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character (@$!%*?&)' };
  }
  
  return { isValid: true, message: 'Password is strong' };
};

/**
 * Validate name (min 2 characters, only letters and spaces)
 * @param {string} name - Name to validate
 * @returns {boolean} True if valid
 */
export const validateName = (name) => {
  if (!name) return false;
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
};

/**
 * Validate pincode (6 digits)
 * @param {string} pincode - Pincode to validate
 * @returns {boolean} True if valid
 */
export const validatePincode = (pincode) => {
  if (!pincode) return false;
  return REGEX.PINCODE.test(pincode);
};

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @returns {boolean} True if not empty
 */
export const validateRequired = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return !isNaN(value);
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value);
};

/**
 * Validate credit card number (basic Luhn algorithm)
 * @param {string} cardNumber - Card number to validate
 * @returns {boolean} True if valid
 */
export const validateCardNumber = (cardNumber) => {
  if (!cardNumber) return false;
  
  const cleanNumber = cardNumber.replace(/\D/g, '');
  
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Validate CVV
 * @param {string} cvv - CVV to validate
 * @returns {boolean} True if valid
 */
export const validateCVV = (cvv) => {
  if (!cvv) return false;
  return /^\d{3,4}$/.test(cvv);
};

/**
 * Validate expiry date (MM/YY format)
 * @param {string} expiry - Expiry date to validate
 * @returns {boolean} True if valid
 */
export const validateExpiryDate = (expiry) => {
  if (!expiry) return false;
  
  const [month, year] = expiry.split('/');
  
  if (!month || !year) return false;
  
  const monthNum = parseInt(month);
  const yearNum = parseInt('20' + year);
  
  if (monthNum < 1 || monthNum > 12) return false;
  
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  
  if (yearNum < currentYear) return false;
  if (yearNum === currentYear && monthNum < currentMonth) return false;
  
  return true;
};

/**
 * Validate UPI ID
 * @param {string} upiId - UPI ID to validate
 * @returns {boolean} True if valid
 */
export const validateUPI = (upiId) => {
  if (!upiId) return false;
  return /^[\w.-]+@[\w.-]+$/.test(upiId);
};

/**
 * Validate quantity (positive integer)
 * @param {number} quantity - Quantity to validate
 * @returns {boolean} True if valid
 */
export const validateQuantity = (quantity) => {
  return Number.isInteger(quantity) && quantity > 0;
};

/**
 * Validate address
 * @param {Object} address - Address object
 * @returns {Object} Validation result with errors object
 */
export const validateAddress = (address) => {
  const errors = {};
  
  if (!validateRequired(address.fullName)) {
    errors.fullName = 'Full name is required';
  } else if (!validateName(address.fullName)) {
    errors.fullName = 'Please enter a valid name';
  }
  
  if (!validateRequired(address.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(address.email)) {
    errors.email = 'Please enter a valid email';
  }
  
  if (!validateRequired(address.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(address.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }
  
  if (!validateRequired(address.address)) {
    errors.address = 'Address is required';
  }
  
  if (!validateRequired(address.city)) {
    errors.city = 'City is required';
  }
  
  if (!validateRequired(address.state)) {
    errors.state = 'State is required';
  }
  
  if (!validateRequired(address.pincode)) {
    errors.pincode = 'Pincode is required';
  } else if (!validatePincode(address.pincode)) {
    errors.pincode = 'Please enter a valid 6-digit pincode';
  }
  
  if (!validateRequired(address.country)) {
    errors.country = 'Country is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Get validation error message for form field
 * @param {string} fieldName - Name of the field
 * @param {string} validationType - Type of validation
 * @returns {string} Error message
 */
export const getValidationMessage = (fieldName, validationType) => {
  const messages = {
    required: `${fieldName} is required`,
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    password: 'Password must be at least 8 characters with uppercase, lowercase, number and special character',
    minLength: (min) => `${fieldName} must be at least ${min} characters`,
    maxLength: (max) => `${fieldName} must not exceed ${max} characters`,
    pattern: `Please enter a valid ${fieldName.toLowerCase()}`,
  };
  
  return messages[validationType] || 'Invalid input';
};
