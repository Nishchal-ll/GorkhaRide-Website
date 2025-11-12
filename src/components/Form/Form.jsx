import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Headphones, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [visibleContactItems, setVisibleContactItems] = useState([]);
  const [visibleSocialItems, setVisibleSocialItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactItemRefs = useRef([]);
  const socialItemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          
          if (entry.target === formRef.current && entry.isIntersecting) {
            setFormVisible(true);
          }
          
          if (entry.target === contactInfoRef.current && entry.isIntersecting) {
            setContactInfoVisible(true);
          }
          
          // Check for contact items
          const contactIndex = contactItemRefs.current.indexOf(entry.target);
          if (contactIndex !== -1 && entry.isIntersecting) {
            setVisibleContactItems(prev => {
              if (!prev.includes(contactIndex)) {
                return [...prev, contactIndex];
              }
              return prev;
            });
          }
          
          // Check for social items
          const socialIndex = socialItemRefs.current.indexOf(entry.target);
          if (socialIndex !== -1 && entry.isIntersecting) {
            setVisibleSocialItems(prev => {
              if (!prev.includes(socialIndex)) {
                return [...prev, socialIndex];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe form section
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    // Observe contact info section
    if (contactInfoRef.current) {
      observer.observe(contactInfoRef.current);
    }

    // Observe contact items
    contactItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Observe social items
    socialItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (contactInfoRef.current) {
        observer.unobserve(contactInfoRef.current);
      }
      contactItemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      socialItemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('https://api.gorkharide.com/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setIsSubmitted(true);
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({ name: '', email: '', message: '' });
//       }, 3000);
//     } else {
//       alert('Failed to send message. Try again later.');
//     }
//   } catch (error) {
//     alert('Error sending message.');
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.send(
      'service_f7rp8ma', // Replace with your EmailJS service ID
      'template_hygsxnl', // Replace with your EmailJS template ID
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      },
      'tSIJTmoI0b4cBFdwp' // Replace with your EmailJS Public Key (User ID)
    );

    console.log('Email sent successfully:', result.text);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Error sending message. Try again later.');
  }
};


  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      info: "Talchikhel, Lalitpur",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
      delay: "100ms"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "01-5560791",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      delay: "200ms"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@gorkharide.com",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
      delay: "300ms"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      info: "24/7 Available",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      delay: "400ms"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/gorkharide", color: "bg-blue-600 hover:bg-blue-700", label: "facebook" },
    { icon: Instagram, href: "https://www.instagram.com/gorkharide", color: "bg-pink-600 hover:bg-pink-700", label: "instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/gorkha-ride/posts/?feedView=all", color: "bg-blue-700 hover:bg-blue-800", label: "linkedin" }
  ];

  return (
    <>
    <section ref={sectionRef} id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-20 left-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
        <div className={`absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 delay-1000 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className={`inline-block mb-4 transform transition-all duration-800 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <span className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Let's Connect
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-green-500 bg-clip-text text-transparent mb-6 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Have questions or feedback? We'd love to hear from you and help you get started.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div ref={formRef} className={`lg:w-1/2 transform transition-all duration-1000 ${
            formVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className={`relative transform transition-all duration-700 ${
                      formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'name' || formData.name ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300 transform hover:scale-105"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className={`relative transform transition-all duration-700 ${
                      formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '400ms' }}>
                      <label 
                        htmlFor="phone" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'phone' || formData.phone? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Phone
                      </label>
                     <input
  type="tel"
  id="phone"
  name="phone"
  value={formData.phone}
  onChange={handleInputChange}
  onFocus={() => setFocusedField('phone')}
  onBlur={() => setFocusedField('')}
  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300 transform hover:scale-105"
  placeholder="9812345678"
  required
/>
                    </div>

                    {/* Message Field */}
                    <div className={`relative transform transition-all duration-700 ${
                      formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '600ms' }}>
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'message' || formData.message ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300 resize-none transform hover:scale-105"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className={`group relative w-full bg-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-400 hover:to-emerald-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-green-200 overflow-hidden ${
                      formVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div ref={contactInfoRef} className={`lg:w-1/2 transform transition-all duration-1000 cursor-pointer ${
            contactInfoVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500">
              <h3 className={`text-2xl font-bold text-gray-900 mb-8 transform transition-all duration-700 ${
                contactInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const isItemVisible = visibleContactItems.includes(index);
                  
                  return (
                    <div 
                      key={index}
                      ref={el => contactItemRefs.current[index] = el}
                      className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-500 transform hover:scale-105 ${
                        isItemVisible 
                          ? 'translate-x-0 opacity-100 scale-100' 
                          : '-translate-x-8 opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: `${index * 10}ms` }}
                    >
                      <div className={`${item.bgColor} p-3 rounded-xl shadow-lg transition-all duration-300 ${
                        isItemVisible ? 'animate-bounce' : ''
                      }`} style={{ 
                        animationDelay: `${index * 10}ms`, 
                        animationDuration: '1s', 
                        animationIterationCount: '1' 
                      }}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Media */}
              <div className={`border-t border-gray-200 pt-8 transform transition-all duration-700 ${
                contactInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <h4 className="font-semibold text-gray-900 mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    const isSocialVisible = visibleSocialItems.includes(index);
                    
                    return (
                      <a
                        key={index}
                        ref={el => socialItemRefs.current[index] = el}
                        href={social.href}
                        className={`${social.color} p-3 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-offset-2 focus:ring-green-200 ${
                          isSocialVisible 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-8 opacity-0 scale-75'
                        }`}
                        style={{ transitionDelay: `${800 + index * 100}ms` }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className={`mt-8 text-center transform transition-all duration-700 ${
                contactInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '1200ms' }}>
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span>We typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      
    </section>
    <Footer />
   </>
  );

};

export default Form;