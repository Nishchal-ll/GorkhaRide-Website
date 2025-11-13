import React, { useState, useEffect } from 'react';
import { Bike, Car, UtensilsCrossed, Package, ShoppingCart, Wrench, Users, MapPin, Clock, Shield, Star, TrendingUp, ArrowRight, Check, Zap, Heart, DollarSign, Phone } from 'lucide-react';
import Footer from '../Footer/Footer';

export default function Service() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Intersection Observer for fade-in animations
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Bike className="w-12 h-12" />,
      title: "Ride-Hailing Services",
      subtitle: "Motorbike & Car Rides",
      description: "Connecting passengers and drivers quickly and safely through our app",
      longDesc: "Whether you're commuting to work or heading out for a weekend trip, Gorkha Ride ensures every journey is smooth, safe, and affordable.",
      features: [
        { icon: <Bike className="w-5 h-5" />, title: "Motorbike Rides", desc: "Perfect for solo travelers or quick commutes through busy city traffic" },
        { icon: <Car className="w-5 h-5" />, title: "Car Rides", desc: "Ideal for families, business trips, or anyone preferring comfort" },
        { icon: <MapPin className="w-5 h-5" />, title: "Live Tracking", desc: "Track your ride in real-time from pickup to drop-off" },
        { icon: <DollarSign className="w-5 h-5" />, title: "Flexible Payments", desc: "Cash, QR code, or digital wallet options available" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 2,
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Food Delivery",
      subtitle: "Meals at Your Doorstep",
      description: "Order from local restaurants and cafes right within the app",
      longDesc: "When hunger strikes, Gorkha Ride has you covered. From momos to biryanis — your favorite meal is just a few taps away.",
      features: [
        { icon: <ShoppingCart className="w-5 h-5" />, title: "Browse Restaurants", desc: "View nearby restaurants and menus in the app" },
        { icon: <Zap className="w-5 h-5" />, title: "Express Delivery", desc: "Choose between standard or express delivery options" },
        { icon: <MapPin className="w-5 h-5" />, title: "Live Tracking", desc: "Track your order live until it reaches your door" },
        { icon: <Star className="w-5 h-5" />, title: "Quality Food", desc: "From local favorites to international cuisines" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      icon: <Package className="w-12 h-12" />,
      title: "Parcel & Courier Delivery",
      subtitle: "Fast and Reliable",
      description: "Send parcels and documents urgently with same-day delivery",
      longDesc: "Perfect for small businesses, professionals, or anyone needing reliable same-day delivery across cities in Nepal.",
      features: [
        { icon: <MapPin className="w-5 h-5" />, title: "Easy Booking", desc: "Book pickup and drop location instantly" },
        { icon: <Bike className="w-5 h-5" />, title: "Quick Pickup", desc: "A nearby rider collects your parcel immediately" },
        { icon: <Clock className="w-5 h-5" />, title: "Real-Time Tracking", desc: "Track delivery progress live on the map" },
        { icon: <Shield className="w-5 h-5" />, title: "Safe Delivery", desc: "Items reach destination safely and quickly" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Gorkha Mart",
      subtitle: "Grocery & E-Commerce",
      description: "Integrated online grocery and e-commerce for daily essentials",
      longDesc: "By merging transportation with e-commerce, Gorkha Ride simplifies everyday living — making shopping faster, easier, and more connected.",
      features: [
        { icon: <ShoppingCart className="w-5 h-5" />, title: "Daily Groceries", desc: "Order groceries, household items, or essentials" },
        { icon: <Star className="w-5 h-5" />, title: "Verified Vendors", desc: "Shop local products from trusted sellers" },
        { icon: <Clock className="w-5 h-5" />, title: "Scheduled Delivery", desc: "Schedule delivery at your convenient time" },
        { icon: <TrendingUp className="w-5 h-5" />, title: "Best Prices", desc: "Competitive pricing on all products" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 5,
      icon: <Wrench className="w-12 h-12" />,
      title: "Handyman Services",
      subtitle: "Expert Help On-Demand",
      description: "Connect with verified professionals for repairs and maintenance",
      longDesc: "Just open the app, select 'Service,' describe your task, and let Gorkha Ride match you with a trusted local expert.",
      features: [
        { icon: <Wrench className="w-5 h-5" />, title: "Home Repairs", desc: "Plumbing, electrical, carpentry services" },
        { icon: <Star className="w-5 h-5" />, title: "Cleaning Services", desc: "Professional cleaning and maintenance" },
        { icon: <Package className="w-5 h-5" />, title: "Installation Support", desc: "Expert installation assistance" },
        { icon: <Shield className="w-5 h-5" />, title: "Verified Experts", desc: "All professionals are pre-verified" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: 6,
      icon: <Users className="w-12 h-12" />,
      title: "Partner Program",
      subtitle: "Join Our Ecosystem",
      description: "Business opportunities for drivers, vendors, and service providers",
      longDesc: "This inclusive ecosystem creates jobs, boosts local commerce, and helps small businesses scale digitally.",
      features: [
        { icon: <Bike className="w-5 h-5" />, title: "Become a Driver", desc: "Register as a driver or rider for rides and deliveries" },
        { icon: <ShoppingCart className="w-5 h-5" />, title: "Partner Business", desc: "Partner as a restaurant or grocery store" },
        { icon: <Wrench className="w-5 h-5" />, title: "Service Provider", desc: "Sign up as a handyman or helper" },
        { icon: <TrendingUp className="w-5 h-5" />, title: "Grow Together", desc: "Scale your business digitally with us" }
      ],
      color: "from-green-300 to-green-600",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Convenience", desc: "All-in-one platform — no need for multiple apps", color: "from-green-400 to-green-500" },
    { icon: <Heart className="w-8 h-8" />, title: "Local Impact", desc: "Supports Nepali businesses, workers, and riders", color: "from-green-400 to-green-500" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Affordable", desc: "Competitive rates with transparent pricing", color: "from-green-400 to-green-500" },
    { icon: <Shield className="w-8 h-8" />, title: "Trusted & Safe", desc: "All providers verified before onboarding", color: "from-green-400 to-green-500" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Availability", desc: "Access services anytime, anywhere across major cities", color: "from-green-400 to-green-500" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-400 to-green-500 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.2}px, ${-scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)` }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Bike className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Gorkha Ride
                </h1>
                <p className="text-xs text-green-600 font-medium">Our Services</p>
              </div>
            </div>
            <button onClick={() => window.location.href = "https://gorkharide.github.io/Gorkha-Ride/"} className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Download App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 animate-bounce">
            <span className="px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-bold border-2 border-green-300">
              🚀 Nepal's Super App for Every Need
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            All the <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 bg-clip-text text-transparent">Services</span>
            <br />You Need, One App
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From rides to meals, parcels to groceries, handyman help to business opportunities — 
            experience the complete digital lifestyle solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.location.href = "https://gorkharide.github.io/Gorkha-Ride/"} className="px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Service Navigation Pills */}
          <div className="flex overflow-x-auto pb-4 mb-16 gap-3 scrollbar-hide">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveService(idx)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeService === idx
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="relative">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  activeService === idx
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className={`bg-gradient-to-br ${service.bgGradient} rounded-[3rem] p-8 md:p-12 shadow-2xl border-2 border-gray-100`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Info */}
                    <div className="space-y-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl text-white shadow-xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                          {service.subtitle}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {service.longDesc}
                        </p>
                      </div>
                      <button onClick={() => window.location.href = "https://gorkharide.github.io/Gorkha-Ride/"} className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}>
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Right Side - Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, fidx) => (
                        <div
                          key={fidx}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                          style={{ 
                            animationDelay: `${fidx * 100}ms`,
                            animation: activeService === idx ? 'slideInRight 0.5s ease-out forwards' : 'none'
                          }}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-md`}>
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Gorkha Ride?</span>
            </h3>
            <p className="text-xl text-gray-600">Experience the difference with Nepal's most trusted super app</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`fade-in-section bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-green-300 group transform hover:-translate-y-2 ${
                  isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Extra Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4">Join Our Growing Community</h4>
                <p className="text-green-50 text-lg mb-6 leading-relaxed">
                  Thousands of riders, drivers, vendors, and customers trust Gorkha Ride every day. 
                  Be part of Nepal's digital revolution.
                </p>
                <div className="flex items-center space-x-8">
                  <div>
                    <div className="text-4xl font-bold">10K+</div>
                    <div className="text-green-100">Active Users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">500+</div>
                    <div className="text-green-100">Partners</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">24/7</div>
                    <div className="text-green-100">Support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Supporting Local Economy</h4>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Every ride, delivery, and service helps create jobs and opportunities for Nepalis. 
                Together, we're building a stronger, more connected Nepal.
              </p>
              <div className="space-y-3">
                {['Creates Local Jobs', 'Supports Small Businesses', 'Boosts Digital Economy', 'Empowers Communities'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-300 via-green-600 to-emerald-900 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 border-4 border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl md:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
                Download the Gorkha Ride App today and experience the smarter, faster, 
                and simpler way to move, shop, and live in Nepal.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button onClick={() => window.location.href = "https://gorkharide.github.io/Gorkha-Ride/"} className="group px-10 py-5 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl transform hover:scale-105 flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <span>Download for iOS</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button onClick={() => window.location.href = "https://gorkharide.github.io/Gorkha-Ride/"} className="group px-10 py-5 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-2xl transform hover:scale-105 flex items-center space-x-3 border-2 border-white">
                  <Phone className="w-6 h-6" />
                  <span>Download for Android</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <p className="text-green-200 text-lg">
                ✨ Available on iOS and Android • Free to Download • Trusted by Thousands
              </p>
            </div>
          </div>
        </div>
      </section>

 <Footer/>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}