import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Clock, MapPin, ArrowUpRight, MessageCircle, Loader2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { sendContactForm, validateContactForm } from '../utils/contactService';
import { personalInfo } from '../data/personalInfo';
import { updatePageSEO } from '../utils/seo';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    updatePageSEO({
      title: `Contact — ${personalInfo.name}`,
      description: `Get in touch with ${personalInfo.name} regarding web development projects, collaborations, or internship opportunities.`
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side input validation
    const validationError = validateContactForm(formData);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');

    try {
      await sendContactForm(formRef.current);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
      // Keep formData preserved so visitor does not lose their input
    }
  };

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-6 glass-panel border border-white/10 text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>INQUIRIES & COLLABORATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Let’s build <br />
          <span className="text-gradient">something great.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed">
          Have a project, software idea, or internship opportunity? I’d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#1E1E1E] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

            {status === 'success' ? (
              <div
                className="py-12 flex flex-col items-center text-center space-y-4"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-accent-mint/10 border border-accent-mint/20 flex items-center justify-center text-accent-mint">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully</h3>
                <p className="text-muted text-sm sm:text-base max-w-md">
                  Thank you for reaching out! Your message has been delivered directly to my inbox via EmailJS. I will review and reply to your email within 24 hours.
                </p>
                <div className="pt-4">
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="secondary"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                noValidate
              >
                {/* EmailJS template variable compatibility & Reply-To configuration */}
                <input type="hidden" name="reply_to" value={formData.email} />
                <input type="hidden" name="from_name" value={formData.name} />
                <input type="hidden" name="from_email" value={formData.email} />

                {status === 'error' && (
                  <div
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-start gap-3 text-rose-300 text-sm"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">
                    Your Name <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus-visible:border-accent-cyan focus-visible:ring-1 focus-visible:ring-accent-cyan transition-all outline-none disabled:opacity-60"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">
                    Your Email <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus-visible:border-accent-cyan focus-visible:ring-1 focus-visible:ring-accent-cyan transition-all outline-none disabled:opacity-60"
                  />
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted mb-2">
                    Subject <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    placeholder="Project inquiry, collaboration, or software idea"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus-visible:border-accent-cyan focus-visible:ring-1 focus-visible:ring-accent-cyan transition-all outline-none disabled:opacity-60"
                  />
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted">
                      Message <span className="text-accent-cyan">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-muted/60">
                      {formData.message.length}/3000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    placeholder="What would you like to build or discuss?..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus-visible:border-accent-cyan focus-visible:ring-1 focus-visible:ring-accent-cyan transition-all outline-none resize-none disabled:opacity-60"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>

                <p className="text-[11px] text-center text-muted/60 font-mono">
                  Messages are delivered directly to {personalInfo.email}.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Direct Information</h2>

            {/* Email Card */}
            <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted uppercase block mb-0.5">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white font-medium hover:text-accent-cyan transition-colors text-sm sm:text-base break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent-cyan shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted uppercase block mb-0.5">Location</span>
                <span className="text-white font-medium text-sm sm:text-base block">
                  {personalInfo.location}
                </span>
                <span className="text-xs text-muted">Remote-friendly</span>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-mint/10 border border-accent-mint/20 text-accent-mint shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted uppercase block mb-0.5">Response Time</span>
                <span className="text-white font-medium text-sm sm:text-base block">
                  Within 24 hours
                </span>
                <span className="text-xs text-muted">Direct replies guaranteed</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-4">
              Connect With {personalInfo.firstName}
            </span>

            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] p-4 rounded-xl border border-white/10 flex items-center justify-between text-muted hover:text-white hover:border-accent-cyan/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">GitHub (CodeWithSameer04)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] p-4 rounded-xl border border-white/10 flex items-center justify-between text-muted hover:text-white hover:border-accent-cyan/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-accent-cyan" />
                  <span className="text-sm font-medium text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {personalInfo.whatsapp && (
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E1E1E] p-4 rounded-xl border border-white/10 flex items-center justify-between text-muted hover:text-white hover:border-accent-mint/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-accent-mint" />
                    <span className="text-sm font-medium text-white">WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
