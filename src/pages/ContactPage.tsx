import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.info.email'),
      content: 'info@doceleguas.com',
      description: t('contact.info.emailDesc')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.info.phone'),
      content: '+34 XXX XXX XXX',
      description: t('contact.info.phoneDesc')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.info.office'),
      content: 'Spain',
      description: t('contact.info.officeDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('contact.info.hours'),
      content: 'Monday - Friday',
      description: t('contact.info.hoursDesc')
    }
  ];

  const subjects = [
    'General Inquiry',
    'Openbravo Consultation',
    'Odoo Implementation',
    'AI Solutions',
    'Custom Development',
    'Technical Support',
    'Partnership Opportunity',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.form.success')}</h2>
            <p className="text-gray-600 mb-6">
              {t('contact.form.successDesc')}
            </p>
            <div className="animate-pulse">
              <div className="h-2 bg-green-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fullName')} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300"
                  >
                    <option value="">Please select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 hover-lift hover-glow transition-all duration-300 flex items-center justify-center space-x-2 transform"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.form.send')}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.info.title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 hover-lift transition-all duration-300 animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 hover:bg-blue-200 transition-colors duration-300">
                        <div className="text-blue-700">{info.icon}</div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-lg text-gray-900 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center hover-lift transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4 animate-float" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Location details available upon request</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover-lift transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-semibold text-blue-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                    <span>Free initial consultation and project assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Detailed proposal within 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>Transparent pricing and timeline</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <span>Expert guidance from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;