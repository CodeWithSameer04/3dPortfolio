import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration
 * Pulls from Vite environment variables (VITE_EMAILJS_*) with fallbacks to user-provided credentials.
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xh6ke8g',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_d5wnhay',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'e2gUMTdWN5vNmKiLT',
};

// Initialize EmailJS with the public key
if (EMAILJS_CONFIG.publicKey) {
  try {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  } catch (e) {
    console.warn('EmailJS initialization warning:', e);
  }
}

/**
 * Frontend Validation for Contact Form Fields
 * @param {Object} fields - { name, email, subject, message }
 * @returns {string|null} Validation error message if invalid, null if valid
 */
export function validateContactForm({ name, email, subject, message }) {
  if (!name || !name.trim()) {
    return 'Please enter your name.';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters long.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. name@example.com).';
  }

  if (!subject || !subject.trim()) {
    return 'Please enter a subject.';
  }
  if (subject.trim().length < 3) {
    return 'Subject must be at least 3 characters long.';
  }

  if (!message || message.trim().length < 10) {
    return 'Message must be at least 10 characters long.';
  }
  if (message.trim().length > 3000) {
    return 'Message cannot exceed 3,000 characters.';
  }

  return null;
}

/**
 * Submits the contact form element directly to EmailJS using emailjs.sendForm()
 *
 * @param {HTMLFormElement} formElement
 * @returns {Promise<{ success: boolean, text: string }>}
 */
export async function sendContactForm(formElement) {
  if (!formElement) {
    throw new Error('Form reference is missing.');
  }

  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not fully configured. Please check environment variables.');
  }

  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      formElement,
      { publicKey }
    );

    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        text: response.text || 'OK'
      };
    }

    throw new Error(response.text || 'Failed to deliver message. Please try again.');
  } catch (error) {
    console.error('EmailJS sendForm error:', error);
    const message =
      error?.text ||
      error?.message ||
      'Could not deliver your message right now. Please try again or reach out directly.';
    throw new Error(message);
  }
}

/**
 * Submits contact parameters directly using emailjs.send()
 * Provided for backwards compatibility or programmatic dispatches.
 */
export async function sendContactMessage({ name, email, subject, message }) {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || '').trim(),
      message: message.trim(),
      reply_to: email.trim(),
      from_name: name.trim(),
      from_email: email.trim(),
    },
    { publicKey }
  );
}
