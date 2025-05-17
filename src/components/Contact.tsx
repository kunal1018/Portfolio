import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, ExternalLink, Copy, Check, ArrowRight } from 'lucide-react';

type VisitorType = 'recruiter' | 'collaborator' | 'general' | '';
type OpportunityType = 'internship' | 'full-time' | 'collaboration' | 'other' | '';

interface FormData {
  name: string;
  email: string;
  visitorType: VisitorType;
  opportunityType: OpportunityType;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    visitorType: '',
    opportunityType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getEmailTemplate = () => {
    let subject = '';
    let body = '';

    switch (formData.visitorType) {
      case 'recruiter':
        subject = 'Opportunity Discussion - ' + formData.opportunityType;
        body = `Hi Kunal,\n\nI came across your portfolio and I'm interested in discussing ${formData.opportunityType} opportunities with you.\n\nBest regards,\n${formData.name}`;
        break;
      case 'collaborator':
        subject = 'Collaboration Opportunity';
        body = `Hi Kunal,\n\nI'd love to explore potential collaboration opportunities with you.\n\nBest regards,\n${formData.name}`;
        break;
      default:
        subject = 'Getting in Touch';
        body = `Hi Kunal,\n\nI visited your portfolio and wanted to connect.\n\nBest regards,\n${formData.name}`;
    }

    return { subject, body };
  };

  const copyEmailTemplate = async () => {
    const { subject, body } = getEmailTemplate();
    const template = `Subject: ${subject}\n\n${body}`;
    
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy template:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const mailtoLink = `mailto:kunalgandhi1018@gmail.com?subject=${encodeURIComponent(
        getEmailTemplate().subject
      )}&body=${encodeURIComponent(getEmailTemplate().body)}`;

      window.location.href = mailtoLink;
      setSuccess(true);
      setFormData({ name: '', email: '', visitorType: '', opportunityType: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getTailoredMessage = () => {
    switch (formData.visitorType) {
      case 'recruiter':
        return (
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm actively seeking internship and co-op roles in software development. With a strong foundation in full-stack development and a passion for creating impactful solutions, I'm excited to bring my skills to a dynamic team.
            </p>
            <div className="flex gap-4">
              <a 
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 transform shadow-lg shadow-primary-600/20"
              >
                <ExternalLink size={16} />
                Download Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/kunal-gandhi-9349852a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg shadow-[#0077B5]/20"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        );
      case 'collaborator':
        return (
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm always excited to collaborate on interesting projects! Whether it's building web applications, exploring new technologies, or contributing to open-source, I'm open to discussing ideas and potential collaborations.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/kunal1018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg shadow-zinc-800/20"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>
          </div>
        );
      case 'general':
        return (
          <p className="text-gray-300">
            Thanks for stopping by! Whether you're interested in my work or just want to connect, I'm always happy to chat about technology, development, or any interesting ideas you'd like to share.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="section-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/20 via-black to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-netflix bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always excited to connect—whether you're a recruiter, a fellow developer, or someone curious about my work.
              Let's chat and see how we can collaborate, learn from each other, or explore new opportunities!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* What I'm Looking For Section */}
              <div className="glass-effect rounded-2xl p-6 hover:border-primary-600/30 transition-all duration-300 group">
                <h3 className="font-medium text-white text-lg mb-4">Currently Open To:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Internships (Fall 2025)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Co-op Opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Junior Developer Roles</span>
                  </li>
                </ul>
              </div>

              {/* Email Card */}
              <div className="glass-effect rounded-2xl p-6 hover:border-primary-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg">Email</h3>
                    <a 
                      href="mailto:kunalgandhi1018@gmail.com"
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      kunalgandhi1018@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-effect rounded-2xl p-6 hover:border-primary-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg">Location</h3>
                    <p className="text-gray-400">Waterloo, ON, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/kunal-gandhi-9349852a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#0077B5] to-[#006399] rounded-xl flex items-center justify-center shadow-lg shadow-[#0077B5]/20 hover:scale-110 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/kunal1018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-xl flex items-center justify-center shadow-lg shadow-zinc-700/20 hover:scale-110 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <Github className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20 hover:scale-110 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <ExternalLink className="text-white" size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="visitorType" className="block text-sm font-medium text-gray-300 mb-2">
                      I am a...
                    </label>
                    <select
                      id="visitorType"
                      name="visitorType"
                      value={formData.visitorType}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select who you are</option>
                      <option value="recruiter">Recruiter / Hiring Manager</option>
                      <option value="collaborator">Fellow Developer / Collaborator</option>
                      <option value="general">Just Browsing</option>
                    </select>
                  </div>

                  {formData.visitorType === 'recruiter' && (
                    <div>
                      <label htmlFor="opportunityType" className="block text-sm font-medium text-gray-300 mb-2">
                        What type of opportunity?
                      </label>
                      <select
                        id="opportunityType"
                        name="opportunityType"
                        value={formData.opportunityType}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select opportunity type</option>
                        <option value="internship">Internship</option>
                        <option value="full-time">Full-time Position</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  {getTailoredMessage() && (
                    <div className="glass-effect rounded-xl p-6">
                      {getTailoredMessage()}
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none placeholder-gray-500"
                      placeholder="Tell me more about what you're looking for..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium shadow-lg shadow-primary-600/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <Loader2 size={24} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={24} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={copyEmailTemplate}
                      className="inline-flex items-center justify-center gap-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-zinc-900/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {copied ? (
                        <>
                          <Check size={24} className="text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={24} />
                          Copy Template
                        </>
                      )}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 mt-4"
                      >
                        {error}
                      </motion.p>
                    )}

                    {success && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-green-500 mt-4"
                      >
                        Opening your email client...
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;