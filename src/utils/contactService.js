/**
 * Contact Service Abstraction
 * Decouples form submission logic from UI components.
 * Easily plug in EmailJS, Resend, or a custom backend endpoint here.
 */

export async function sendContactMessage({ name, email, message }) {
  // Input sanity validation
  if (!name || !name.trim()) {
    throw new Error('Please enter your name.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    throw new Error('Please enter a valid email address.');
  }

  if (!message || message.trim().length < 10) {
    throw new Error('Message must be at least 10 characters.');
  }

  // Simulated API dispatch delay
  // In production, configure environment variables:
  // e.g. import.meta.env.VITE_EMAILJS_SERVICE_ID
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Example integration placeholder:
  /*
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() })
  });
  if (!response.ok) throw new Error('Failed to deliver message.');
  */

  return {
    success: true,
    message: 'Thank you for your message! I will get back to you shortly.'
  };
}
