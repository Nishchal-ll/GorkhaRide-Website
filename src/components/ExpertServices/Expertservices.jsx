
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Zap, Wrench, PaintBucket, Hammer, Smartphone, 
  Droplets, Car, Leaf, Shirt, Tv, Truck, 
  CreditCard, UserCheck, HardHat, 
  Compass, Briefcase, Sprout, Armchair, 
  Monitor, Printer, TestTube, Utensils, 
  ClipboardCheck, Navigation, CheckCircle, X
} from 'lucide-react';

function ExpertServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [scrollAnimations, setScrollAnimations] = useState({
    header: false,
    cards: false,
    howItWorks: false,
    benefits: false
  });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const benefitsRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch('https://api.gorkharide.com/api/book-expert', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //       mode: 'cors',
  //       credentials: 'same-origin'
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setIsSubmitted(true);
  //     setIsSubmitting(false);

  //     setTimeout(() => {
  //       setIsOpen(false);
  //       setIsSubmitted(false);
  //       setFormData({
  //         name: '',
  //         phone: '',
  //         address: '',
  //         service: '',
  //         time: '',
  //       });
  //     }, 3000);
  //   } catch (error) {
  //     setIsSubmitting(false);
  //     console.error('Error submitting booking:', error);
  //     alert(error.message || 'Failed to send booking request. Please try again later.');
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      'service_f7rp8ma', // Replace with your EmailJS service ID
      'template_ol2kvao', // Replace with your EmailJS template ID
      {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        time: formData.time,
      },
      'tSIJTmoI0b4cBFdwp'     // replace with your EmailJS public key (user ID)
    );

    console.log('Email sent successfully:', result.text);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        address: '',
        service: '',
        time: '',
      });
    }, 3000);
  } catch (error) {
    setIsSubmitting(false);
    console.error('Error sending email:', error);
    alert(error.message || 'Failed to send booking request. Please try again later.');
  }
};

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.dataset.animationTarget;
          
          if (targetId === 'header') {
            setScrollAnimations(prev => ({ ...prev, header: true }));
            setIsVisible(true);
          } else if (targetId === 'cards') {
            setScrollAnimations(prev => ({ ...prev, cards: true }));
            setTimeout(() => {
              const cards = document.querySelectorAll('.expert-category');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => new Set([...prev, index]));
                }, index * 50);
              });
            }, 100);
          } else if (targetId === 'howItWorks') {
            setScrollAnimations(prev => ({ ...prev, howItWorks: true }));
          } else if (targetId === 'benefits') {
            setScrollAnimations(prev => ({ ...prev, benefits: true }));
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (howItWorksRef.current) observer.observe(howItWorksRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Zap, name: "Electrician", bgColor: "bg-green-100", textColor: "text-dark" },
    { icon: Wrench, name: "Plumber", bgColor: "bg-green-200", textColor: "text-dark" },
    { icon: PaintBucket, name: "Painter", bgColor: "bg-green-300", textColor: "text-dark" },
    { icon: Hammer, name: "Carpenter", bgColor: "bg-green-300", textColor: "text-emerald-600" },
    { icon: Wrench, name: "Cleaner", bgColor: "bg-green-200", textColor: "text-emerald-700" },
    { icon: Smartphone, name: "Technician", bgColor: "bg-green-100", textColor: "text-teal-600" },
    { icon: Droplets, name: "Water Tanker", bgColor: "bg-green-200", textColor: "text-cyan-600" },
    { icon: Car, name: "Mechanic", bgColor: "bg-green-300", textColor: "text-green-600" },
    { icon: Leaf, name: "Gardener", bgColor: "bg-green-200", textColor: "text-lime-600" },
    { icon: Shirt, name: "Laundry", bgColor: "bg-green-100", textColor: "text-green-700" },
    { icon: Tv, name: "TV Repair", bgColor: "bg-green-100", textColor: "text-emerald-600" },
    { icon: Car, name: "Vehicle Rental", bgColor: "bg-green-200", textColor: "text-green-600" },
    { icon: Truck, name: "Home & Goods Shifting", bgColor: "bg-green-300", textColor: "text-green-700" },
    { icon: Wrench, name: "Car Maintenance", bgColor: "bg-green-200", textColor: "text-emerald-600" },
    { icon: CreditCard, name: "Bluebook Renewal", bgColor: "bg-green-100", textColor: "text-teal-600" },
    { icon: UserCheck, name: "Home Medical", bgColor: "bg-green-100", textColor: "text-dark" },
    { icon: UserCheck, name: "Instructors", bgColor: "bg-green-200", textColor: "text-emerald-700" },
    { icon: HardHat, name: "Construction", bgColor: "bg-green-300", textColor: "text-lime-600" },
    { icon: Compass, name: "Interior Design", bgColor: "bg-green-200", textColor: "text-green-600" },
    { icon: Truck, name: "Towing", bgColor: "bg-green-100", textColor: "text-emerald-600" },
    { icon: Briefcase, name: "Company Registration", bgColor: "bg-green-100", textColor: "text-teal-600" },
    { icon: Sprout, name: "Garden Maintenance", bgColor: "bg-green-200", textColor: "text-lime-700" },
    { icon: Armchair, name: "Chair Repair", bgColor: "bg-green-300", textColor: "text-green-700" },
    { icon: Monitor, name: "Computer Maintenance", bgColor: "bg-green-200", textColor: "text-emerald-600" },
    { icon: Printer, name: "Printer Maintenance", bgColor: "bg-green-100", textColor: "text-green-600" },
    { icon: TestTube, name: "Soil/Water/Air Test", bgColor: "bg-green-100", textColor: "text-emerald-700" },
    { icon: Utensils, name: "Catering", bgColor: "bg-green-200", textColor: "text-lime-600" },
    { icon: UserCheck, name: "Drivers on Call", bgColor: "bg-green-300", textColor: "text-teal-600" },
    { icon: ClipboardCheck, name: "Vehicle Registration", bgColor: "bg-green-200", textColor: "text-green-700" },
    { icon: Navigation, name: "Vastu Consultation", bgColor: "bg-green-100", textColor: "text-emerald-600" }
  ];

  const steps = [
    {
      number: 1,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      description: "Browse and select the service you need from our verified professionals"
    },
    {
      number: 2,
      bgColor: "bg-green-200",
      textColor: "text-green-700",
      description: "Choose your preferred time slot and location for the service"
    },
    {
      number: 3,
      bgColor: "bg-green-300",
      textColor: "text-dark",
      description: "Get instant confirmation and track your expert's arrival in real-time"
    },
    {
      number: 4,
      bgColor: "bg-emerald-200",
      textColor: "text-emerald-700",
      description: "Rate and review your experience to help other users"
    }
  ];

  const benefits = [
    "Verified and background-checked professionals",
    "Transparent pricing with no hidden costs",
    "Real-time tracking and updates",
    "Secure payment options",
    "24/7 customer support"
  ];

  return (
    <section id="expert-services" className="py-20 bg-white overflow-hidden relative" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-teal-100 rounded-full opacity-20 animate-spin"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-lime-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-emerald-100 rounded-full opacity-25 animate-spin"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        <div 
          ref={headerRef}
          data-animation-target="header"
          className={`text-center mb-16 transform transition-all duration-1000 ${
            scrollAnimations.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-black text-gray-900 mb-4">Expert Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Connect with verified professionals for all your home and personal needs.</p>
        </div>
        
        <div 
          ref={cardsRef}
          data-animation-target="cards"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isCardVisible = visibleCards.has(index);
            
            return (
              <div 
                key={index}
                className={`expert-category bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-100 transform ${
                  scrollAnimations.cards && isCardVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transitionDuration: '500ms'
                }}
              >
                <div className={`${service.bgColor} ${service.textColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all duration-300 hover:scale-110 hover:rotate-6`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
              </div>
            );
          })}
        </div>
        
        <div 
          ref={howItWorksRef}
          data-animation-target="howItWorks"
          className={`bg-white rounded-2xl shadow-lg p-8 border border-green-100 transform transition-all duration-1000 ${
            scrollAnimations.howItWorks ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 transform transition-all duration-800 ${
                scrollAnimations.howItWorks ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>How Expert Services Work</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start transform transition-all duration-500 ${
                      scrollAnimations.howItWorks ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${200 + index * 200}ms`
                    }}
                  >
                    <div className={`${step.bgColor} ${step.textColor} rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                      <span className="font-bold text-sm">{step.number}</span>
                    </div>
                    <p className="text-gray-900">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <div 
                ref={benefitsRef}
                data-animation-target="benefits"
                className={`rounded-xl p-6 border border-green-100 transform transition-all duration-1000 ${
                  scrollAnimations.benefits ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Why Choose Our Experts?</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index}
                      className={`flex items-center transform transition-all duration-500 hover:translate-x-2 ${
                        scrollAnimations.benefits ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${600 + index * 150}ms`
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 transform transition-all duration-300 hover:scale-110" />
                      <span className="text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale через 105 transition-all duration-300 shadow-md hover:shadow-lg transform ${
                    scrollAnimations.benefits ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '1200ms' }}
                  onClick={() => setIsOpen(true)}
                >
                  <span className="relative z-10">Book an Expert Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            <div className="relative p-8">
              <button
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                onClick={handleCloseModal}
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Book an Expert Service
                    </h3>
                    <p className="text-gray-600">
                      Fill in your details to book a professional service
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Enter service address"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <input
                        type="datetime-local"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          'Submit Booking Request'
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    Our expert will contact you shortly to confirm the booking details
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Booking Request Submitted!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your booking request. Our expert will contact you shortly to confirm the details and schedule your service.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="text-sm text-green-800">
                      <p className="font-medium mb-2">Booking Details:</p>
                      <p><span className="font-medium">Service:</span> {formData.service}</p>
                      <p><span className="font-medium">Name:</span> {formData.name}</p>
                      <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    This window will close automatically in a moment...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExpertServices;