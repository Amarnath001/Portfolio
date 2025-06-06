import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Contact Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Let's Connect
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <FaEnvelope className="text-blue-500 text-xl" />
                      <a
                        href="mailto:amarnathskaushik@gmail.com"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        amarnathskaushik@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaPhone className="text-blue-500 text-xl" />
                      <span className="text-gray-300">Messages will be sent to your email.</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaLinkedin className="text-blue-500 text-xl" />
                      <a
                        href="https://www.linkedin.com/in/amarnathskaushik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaGithub className="text-blue-500 text-xl" />
                      <a
                        href="https://github.com/Amarnath001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 ${
                      status.submitting
                        ? 'bg-blue-600 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {status.submitted && (
                    <p className="text-green-500 text-center">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                  {status.error && (
                    <p className="text-red-500 text-center">
                      Oops! Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 