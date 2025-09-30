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
      content: (
        <div>
          <div>+34 666 49 37 11</div>
          <div>+598 95 751 736</div>
          <div>+1 829 486-2763</div>
        </div>
      ),
      description: t('contact.info.phoneDesc')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.info.office'),
      content: (
        <div className="space-y-1">
          <div>Spain</div>
          <div>Uruguay</div>
          <div>Dominican Republic</div>
        </div>
      ),
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
    'generalinquiry',
    'openbravoconsultation',
    'odooimplementation',
    'aisolutions',
    'customdevelopment',
    'technicalsupport',
    'partnershipopportunity',
    'other'
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
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Contact and communication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10">
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
                      placeholder={t('contact.form.placeholders.fullName')}
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
                      placeholder={t('contact.form.placeholders.email')}
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
                      placeholder={t('contact.form.placeholders.phone')}
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
                      placeholder={t('contact.form.placeholders.company')}
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
                    <option value="">{t('contact.form.selectSubject')}</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {t(`contact.form.subjects.${subject.toLowerCase().replace(/\s+/g, '')}`)}
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
                    placeholder={t('contact.form.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 px-6 rounded-lg font-semibold hover-lift hover-glow transition-all duration-300 flex items-center justify-center space-x-2 transform"
                  style={{ backgroundColor: '#5c9c98' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a8480'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5c9c98'}
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
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#e8f4f3' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1ebe9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e8f4f3'}>
                        <div style={{ color: '#5c9c98' }}>{info.icon}</div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-lg text-gray-900 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="rounded-xl p-6 hover-lift transition-all duration-300 animate-fadeInUp" style={{ backgroundColor: '#e8f4f3', borderColor: '#5c9c98', borderWidth: '1px', animationDelay: '0.6s' }}>
                <h3 className="font-semibold mb-4" style={{ color: '#2d5a57' }}>{t('contact.whyContact.title')}</h3>
                <ul className="space-y-3" style={{ color: '#2d5a57' }}>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#5c9c98' }}></div>
                    <span>Free initial consultation and project assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#5c9c98', animationDelay: '0.5s' }}></div>
                    <span>Customized solutions tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#5c9c98', animationDelay: '1s' }}></div>
                    <span>Expert team with proven track record in enterprise solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#5c9c98', animationDelay: '1.5s' }}></div>
                    <span>Ongoing support and maintenance for all our implementations</span>
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