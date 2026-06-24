import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 bg-gray-900 text-center text-white relative overflow-hidden">
      {/* Abstract background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full filter blur-[120px] opacity-40 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full filter blur-[120px] opacity-40 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
          Ready to unlock the hidden gems in your data?
        </h2>
        <p className="text-2xl text-gray-400 font-medium">Let's build smarter solutions together.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 md:p-14 text-left shadow-2xl shadow-black/50 text-gray-900 relative z-10">
        <h3 className="text-3xl font-extrabold mb-8">Get In Touch</h3>
        
        {submitStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl mb-6">
            <h4 className="font-bold text-lg mb-2">Message Sent Successfully!</h4>
            <p className="text-sm font-medium">Thank you for reaching out. A Passageway representative will get back to you shortly.</p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-4 text-xs font-bold uppercase tracking-wider underline hover:text-green-950"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your organization"
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-secondary text-white font-extrabold text-lg py-5 rounded-xl transition-colors shadow-lg shadow-primary/30 mt-4 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-6 font-medium">
              By submitting, you agree to our <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
