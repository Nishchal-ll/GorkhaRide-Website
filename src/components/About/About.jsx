import React, { useState, useEffect } from 'react';
import { Bike, Car, UtensilsCrossed, Package, ShoppingCart, Wrench, Users, Clock, Shield, DollarSign, Heart, ChevronDown, Menu, X, ArrowRight, CheckCircle, MapPin, Smartphone } from 'lucide-react';
import Footer from '../Footer/Footer';

export default function GorkhaRideAbout() {
  const [expandedService, setExpandedService] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Bike className="w-8 h-8" />,
      title: "Bike Rides",
      description: "Quick and affordable bike rides for solo travelers",
      color: "from-green-400 to-green-500"
    },
    {
      id: 2,
      icon: <Car className="w-8 h-8" />,
      title: "Car & Cab Rides",
      description: "Comfortable car rides for families and groups",
      color: "from-green-400 to-green-500"
    },
    {
      id: 3,
      icon: <Package className="w-8 h-8" />,
      title: "Parcel Delivery",
      description: "Fast and reliable parcel delivery services",
      color: "from-green-400 to-green-500"
    },
    {
      id: 4,
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Food & Grocery Delivery",
      description: "Get meals and groceries delivered to your doorstep",
      color: "from-green-400 to-green-500"
    },
    {
      id: 5,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Online Shopping",
      description: "Shop for products and get them delivered",
      color: "from-green-400 to-green-500"
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8" />,
      title: "Driver & Partner Opportunities",
      description: "Join as a driver or service partner",
      color: "from-green-400 to-green-500"
    }
  ];

  const benefits = [
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "All-in-One Platform", 
      desc: "Rides, deliveries, shopping, and services in a single app" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Safe and Verified Partners", 
      desc: "Every driver and service provider is verified" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "Affordable Pricing", 
      desc: "Clear and budget-friendly fares" 
    },
    { 
      icon: <Smartphone className="w-6 h-6" />, 
      title: "User-Friendly App", 
      desc: "Easy to navigate and use" 
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Real-Time Tracking", 
      desc: "Track your ride or delivery live" 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "24/7 Service", 
      desc: "Help is available anytime" 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Support Local Jobs", 
      desc: "Empowering Nepali drivers and service providers" 
    }
  ];

  const futureGoals = [
    "Launch eco-friendly and electric rides",
    "Promote digital payments and cashless services",
    "Create thousands of local jobs",
    "Become Nepal's most trusted mobility and lifestyle app"
  ];

  return (
    <>
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="relative bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <Bike className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Gorkha Ride</h1>
                <p className="text-sm text-green-600 font-medium">Nepal's Trusted Ride-Sharing App</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold animate-bounce">
              🚀 Nepal's Own Ride-Sharing App
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nepal's Trusted Ride-Sharing App for
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Safe, Affordable, and Comfortable Travel
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            In today's busy life, traveling from one place to another should be easy, safe, and affordable. Gorkha Ride makes it simple to get around Nepal without stress. Whether you're heading to work, meeting friends, or returning home after a long day, Gorkha Ride connects you with verified drivers quickly and easily.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-300 text-white rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Download App</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-bold hover:bg-green-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is Gorkha Ride Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What is <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">Gorkha Ride?</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gorkha Ride is a Nepali ride-sharing and delivery app. It lets you book bikes, cars, and cabs anytime, anywhere. The app is designed for Nepali users and focuses on:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl text-white mb-6 shadow-lg">
                <DollarSign className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Affordable fares</h4>
              <p className="text-gray-600">Transparent pricing with no hidden costs.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl text-white mb-6 shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Safety first</h4>
              <p className="text-gray-600">Verified drivers and partners.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl text-white mb-6 shadow-lg">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">User-friendly app</h4>
              <p className="text-gray-600">Easy to use on Android and iOS.</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-4">Besides rides, Gorkha Ride also offers:</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-green-300 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{ 
                  animationDelay: `${idx * 150}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-br ${service.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">Gorkha Ride?</span>
            </h3>
            <p className="text-xl text-gray-600">Here's why Gorkha Ride is the perfect choice for Nepali users:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-300 group transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-green-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Gorkha Ride vs. <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">International Apps</span>
              </h3>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Unlike Uber, Grab, or Foodpanda, which focus on a single service, Gorkha Ride combines multiple services into one app. It's built for Nepal's roads, people, and daily needs, making it more than a ride-sharing app – it's a lifestyle platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              The Future of <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">Gorkha Ride</span>
            </h3>
            <p className="text-xl text-gray-600 mb-12">Gorkha Ride is growing across Nepal with a mission to:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureGoals.map((goal, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-semibold text-lg leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 rounded-[3rem] p-12 text-center text-white shadow-2xl overflow-hidden">            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Conclusion
              </h3>
              <p className="text-xl mb-6 leading-relaxed">
                From rides to deliveries, Gorkha Ride is changing the way Nepal moves and lives. Whether you need a quick ride, a meal, groceries, or home services, everything is just a tap away.
              </p>
              <p className="text-2xl font-bold mb-8">
                📲 Download the Gorkha Ride App today and enjoy a safe, affordable, and user-friendly experience!
              </p>
              <button className="group bg-white text-green-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center space-x-3 mx-auto mb-8">
                <span>Download Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-green-100 text-lg">
                Follow Gorkha Ride on Facebook, Instagram, and TikTok for updates, offers, and new features.
              </p>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}