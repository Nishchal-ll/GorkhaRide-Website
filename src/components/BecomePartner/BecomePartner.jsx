import React, { useState, useEffect, useRef } from 'react';
import { Store, Truck, Wrench, CheckCircle, Users, Smartphone, Clock, Headphones, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function BecomePartner() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]);
    const [visibleFeatures, setVisibleFeatures] = useState([]);
    const [visibleStats, setVisibleStats] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const featureRefs = useRef([]);
    const statsRefs = useRef([]);
    const whyPartnerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === sectionRef.current && entry.isIntersecting) {
                        setIsVisible(true);
                    }
                    
                    if (entry.target === whyPartnerRef.current && entry.isIntersecting) {
                        setVisibleFeatures([0, 1, 2, 3]);
                    }
                    
                    const cardIndex = cardRefs.current.indexOf(entry.target);
                    if (cardIndex !== -1 && entry.isIntersecting) {
                        setVisibleCards(prev => {
                            if (!prev.includes(cardIndex)) {
                                return [...prev, cardIndex];
                            }
                            return prev;
                        });
                    }
                    
                    const statsIndex = statsRefs.current.indexOf(entry.target);
                    if (statsIndex !== -1 && entry.isIntersecting) {
                        setVisibleStats(prev => {
                            if (!prev.includes(statsIndex)) {
                                return [...prev, statsIndex];
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        if (whyPartnerRef.current) {
            observer.observe(whyPartnerRef.current);
        }
        cardRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        statsRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (whyPartnerRef.current) {
                observer.unobserve(whyPartnerRef.current);
            }
            cardRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
            statsRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const openModal = (type) => {
        setModalType(type);
        setShowModal(true);
        setFormData({
            name: '',
            phone: '',
            address: ''
        });
        setIsSubmitted(false);
        setIsLoading(false);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
        setFormData({
            name: '',
            phone: '',

            address: ''
        });
        setIsSubmitted(false);
        setIsLoading(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError(null);
    //     setSubmitted(false);

    //     let endpoint = '';
    //     let payload = { ...formData };

    //     switch (modalType) {
    //         case 'vendor':
    //             endpoint = 'https://api.gorkharide.com/api/vendor';
    //             break;
    //         case 'driver':
    //             endpoint = 'https://api.gorkharide.com/api/driver';
    //             break;
    //         case 'expert':
    //             endpoint = 'https://api.gorkharide.com/api/expert';
    //             break;
    //         default:
    //             setError('Unknown modal type');
    //             setLoading(false);
    //             return;
    //     }

    //     try {
    //         const response = await fetch(endpoint, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(payload)
    //         });

    //         const data = await response.json();

    //         if (!response.ok) throw new Error(data.message || 'Something went wrong');
    //         setSubmitted(true);
    //         setIsSubmitted(true);
    //         setFormData({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             address: ''
    //         });
    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSubmitted(false);

  // Define EmailJS template IDs for each modalType
  const templateIds = {
    vendor: 'template_hygsxnl',
    driver: 'template_hygsxnl',
    expert: 'template_hygsxnl',
  };

  // Get the corresponding template ID
  const templateId = templateIds[modalType];

  if (!templateId) {
    setError('Unknown modal type');
    setLoading(false);
    return;
  }

  // Prepare template params — adapt keys as needed by your EmailJS templates
  const templateParams = {
    name: formData.name,
    phone: formData.phone,
    message: formData.message,
  };

  try {
    const result = await emailjs.send(
      'service_f7rp8ma',      // your EmailJS service ID
      templateId,             // template ID based on modalType
      templateParams,
      'tSIJTmoI0b4cBFdwp'       // your EmailJS public key (user ID)
    );

    console.log('Email sent:', result.text);
    setSubmitted(true);
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      message: '',
    });
  } catch (err) {
    console.error('EmailJS error:', err);
    setError(err.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};

    const getModalTitle = () => {
        switch (modalType) {
            case 'vendor':
                return 'Register as Vendor Partner';
            case 'driver':
                return 'Register as Ride & Delivery Partner';
            case 'expert':
                return 'Register as Service Expert Partner';
            default:
                return 'Partner Registration';
        }
    };

    const partnerTypes = [
        {
            icon: Store,
            title: "Vendor Partner",
            description: "Transform your business with our powerful marketplace platform",
            benefits: [
                "Connect with thousands of active customers",
                "Intuitive product management dashboard", 
                "Bank-grade secure payment processing",
                "Advanced analytics & insights"
            ],
            buttonText: "Register as Vendor",
            buttonAction: () => openModal('vendor'),
            gradient: "from-green-500 via-green-600 to-emerald-600",
            checkColor: "text-green-500"
        },
        {
            icon: Truck,
            title: "Ride & Delivery Partner", 
            description: "Earn premium income with complete work-life flexibility",
            benefits: [
                "Complete schedule flexibility",
                "Daily instant payouts",
                "Smart GPS navigation system",
                "Performance-based rewards program"
            ],
            buttonText: "Register as Driver",
            buttonAction: () => openModal('driver'),
            gradient: "from-green-500 via-green-600 to-emerald-600",
            checkColor: "text-emerald-500"
        },
        {
            icon: Wrench,
            title: "Service Expert Partner",
            description: "Showcase your skills and build your professional reputation", 
            benefits: [
                "Verified professional certification",
                "Instant job opportunity alerts", 
                "Protected payment guarantee",
                "Customer review & rating system"
            ],
            buttonText: "Register as Expert",
            buttonAction: () => openModal('expert'),
            gradient: "from-green-500 via-green-600 to-emerald-600",
            checkColor: "text-teal-500"
        }
    ];

    const whyPartnerFeatures = [
        {
            icon: Users,
            title: "Massive Customer Reach",
            description: "Access to 100,000+ active users"
        },
        {
            icon: Smartphone,
            title: "Intuitive Partner App", 
            description: "Modern, user-friendly interface"
        },
        {
            icon: Clock,
            title: "Lightning Fast Payments",
            description: "Get paid within 24 hours"
        },
        {
            icon: Headphones,
            title: "24/7 Premium Support",
            description: "Always here when you need us"
        }
    ];

    const stats = [
        { value: "1K+", label: "Active Partners" },
        { value: "Nrs 50K+", label: "Monthly Earnings" },
        { value: "10K+", label: "Happy Customers" },
        { value: "4.8★", label: "Partner Rating" }
    ];

    return (
        <section id="become-partner" ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full opacity-20 transition-all duration-2000 ${
                    isVisible ? 'animate-pulse scale-100 opacity-20' : 'scale-50 opacity-0'
                }`}></div>
                <div className={`absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-100 rounded-full opacity-30 transition-all duration-2000 delay-500 ${
                    isVisible ? 'scale-100 opacity-30' : 'scale-50 opacity-0'
                }`}></div>
                <div className={`absolute top-1/2 right-1/4 w-40 h-40 bg-teal-100 rounded-full opacity-25 transition-all duration-2000 delay-1000 ${
                    isVisible ? 'scale-100 opacity-25' : 'scale-50 opacity-0'
                }`}></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`text-center mb-12 sm:mb-16 md:mb-20 mt-6 sm:mt-8 md:mt-10 px-4 transform transition-all duration-10 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'sm:translate-y-20 sm:opacity-0'
                }`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-green-500 rounded-full mb-4 sm:mb-5 md:mb-6 shadow-lg transform transition-all duration-800 delay-200 ${
                        isVisible ? 'scale-100 rotate-0' : 'sm:scale-0 sm:rotate-180'
                    }`}>
                        <Users className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                    </div>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-green-500 bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6 transform transition-all duration-1000 delay-400 leading-tight ${
                        isVisible ? 'translate-y-0 opacity-100' : 'sm:translate-y-10 sm:opacity-0'
                    }`}>
                        Become a Partner
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'sm:translate-y-10 sm:opacity-0'
                    }`}>
                        Join our thriving ecosystem of partners and unlock unlimited growth potential with 
                        <span className="font-semibold text-green-600"> Gorkha Ride</span>
                    </p>
                </div>  
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {partnerTypes.map((partner, index) => {
                        const IconComponent = partner.icon;
                        const isCardVisible = visibleCards.includes(index);
                        
                        return (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-green-100 ${
                                    isCardVisible 
                                        ? 'translate-y-0 opacity-100 scale-100' 
                                        : 'translate-y-16 opacity-0 scale-95'
                                }`}
                                style={{ 
                                    transitionDelay: isCardVisible ? `${index * 200}ms` : '0ms'
                                }}
                            >
                                <div className={`bg-gradient-to-br ${partner.gradient} p-8 text-white relative overflow-hidden`}>
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 transition-all duration-1000 ${
                                        isCardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                    }`} style={{ transitionDelay: `${300 + index * 100}ms` }}></div>
                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-4 transition-all duration-500 ${
                                            isCardVisible ? 'animate-bounce' : ''
                                        }`} style={{ animationDelay: `${index * 100}ms`, animationDuration: '1s', animationIterationCount: '1' }}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-3 transform transition-all duration-700 ${
                                            isCardVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                        }`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                                            {partner.title}
                                        </h3>
                                        <p className={`opacity-90 text-green-50 transform transition-all duration-700 ${
                                            isCardVisible ? 'translate-y-0 opacity-90' : 'translate-y-4 opacity-0'
                                        }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-4 mb-8">
                                        {partner.benefits.map((benefit, benefitIndex) => (
                                            <li key={benefitIndex} className={`flex items-start transform transition-all duration-500 ${
                                                isCardVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                            }`} style={{ transitionDelay: `${600 + index * 100 + benefitIndex * 50}ms` }}>
                                                <CheckCircle className={`w-5 h-5 ${partner.checkColor} mt-1 mr-3 flex-shrink-0`} />
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        onClick={partner.buttonAction}
                                        className={`w-full bg-green-600 text-white py-4 rounded-2xl font-semibold hover:from-green-400 hover:to-emerald-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                                            isCardVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
                                        }`} 
                                        style={{ transitionDelay: `${1000 + index * 100}ms` }}
                                    >
                                        {partner.buttonText}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <div ref={whyPartnerRef} className={`bg-white rounded-3xl p-10 shadow-2xl border border-green-100 relative overflow-hidden transform transition-all duration-1000 ${
                    visibleFeatures.length > 0 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                }`}>
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transition-all duration-1000 ${
                        visibleFeatures.length > 0 ? 'scale-x-100' : 'scale-x-0'
                    }`} style={{ transformOrigin: 'left' }}></div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-10">
                            <h3 className={`text-4xl font-bold bg-green-500 bg-clip-text text-transparent mb-8 transform transition-all duration-1000 ${
                                visibleFeatures.length > 0 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                            }`} style={{ transitionDelay: '200ms' }}>
                                Why Partner With Us?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {whyPartnerFeatures.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    const isFeatureVisible = visibleFeatures.includes(index);
                                    
                                    return (
                                        <div key={index} className={`flex items-start group transform transition-all duration-700 ${
                                            isFeatureVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                                            <div className={`flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${
                                                isFeatureVisible ? 'animate-pulse' : ''
                                            }`} style={{ animationDelay: `${index * 100}ms`, animationDuration: '1s', animationIterationCount: '1' }}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={`lg:w-1/3 flex justify-center transform transition-all duration-1000 ${
                            visibleFeatures.length > 0 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'
                        }`} style={{ transitionDelay: '800ms' }}>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300">
                                <div className="text-center mb-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 transition-all duration-500 ${
                                        visibleFeatures.length > 0 ? 'animate-bounce' : ''
                                    }`} style={{ animationDelay: '1000ms', animationDuration: '1s', animationIterationCount: '1' }}>
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-bold text-2xl text-gray-900 mb-2">Ready to Start?</h4>
                                    <p className="text-gray-600 text-sm">Join thousands of successful partners</p>
                                </div>
                                <a href="https://gorkharide.github.io/Gorkha-Ride/" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold hover:from-green-400 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                                        Join Our Partner Network
                                    </button>
                                </a>
                                <p className="text-gray-500 text-sm text-center">
                                    Download the partner app to get started instantly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const isStatVisible = visibleStats.includes(index);
                        
                        return (
                            <div
                                key={index}
                                ref={el => statsRefs.current[index] = el}
                                className={`text-center bg-white rounded-2xl p-6 shadow-lg border border-green-100 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                                    isStatVisible 
                                        ? 'translate-y-0 opacity-100 scale-100' 
                                        : 'translate-y-8 opacity-0 scale-95'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className={`text-3xl font-bold text-green-600 mb-2 transition-all duration-500 ${
                                    isStatVisible ? 'animate-bounce' : ''
                                }`} style={{ 
                                    animationDelay: `${index * 100}ms`, 
                                    animationDuration: '1s', 
                                    animationIterationCount: '1' 
                                }}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                        <div className="relative p-8">
                            <button 
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-8 animate-fade-in">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Your registration has been submitted. We'll get in touch with you soon.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="bg-green-500 text-white py-3 px-8 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {getModalTitle()}
                                        </h3>
                                        <p className="text-gray-600">
                                            Fill in your details to get started
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>


                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isLoading}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none disabled:bg-gray-50 disabled:text-gray-500"
                                                placeholder="Enter your complete message"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                                                    isLoading 
                                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                                        : 'bg-green-500 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105'
                                                }`}
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center">
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                        Submitting...
                                                    </div>
                                                ) : (
                                                    'Submit Registration'
                                                )}
                                            </button>
                                        </div>
                                    </form>

                                    <p className="text-center text-sm text-gray-500 mt-6">
                                        By submitting this form, you agree to our terms and conditions
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default BecomePartner;