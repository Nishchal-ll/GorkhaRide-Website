import React, { useState, useEffect } from 'react';
import { Star, Download, Smartphone, Car, UtensilsCrossed, ShoppingBag, Wrench, MapPin, Users, Clock } from 'lucide-react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentService, setCurrentService] = useState(0);
    
    const services = [
        { icon: Car, name: "Ride Booking", color: "text-green-400" },
        { icon: UtensilsCrossed, name: "Food Delivery", color: "text-green-400" },
        { icon: ShoppingBag, name: "Local Shopping", color: "text-green-400" },
        { icon: Wrench, name: "Expert Services", color: "text-green-400" }
    ];

    const stats = [
        { icon: Users, value: "10K+", label: "Active Users" },
        { icon: MapPin, value: "7", label: "Cities" },
        { icon: Star, value: "4.8", label: "App Rating" },
        { icon: Clock, value: "24/7", label: "Support" }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const CurrentServiceIcon = services[currentService].icon;

    return (
        <section className="relative min-h-screen text-dark overflow-hidden bg-white">
            {/* Moving Wave Backgrounds */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary Wave Layer */}
                <div className="absolute inset-0 opacity-30">
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        <path d="M0,400 C150,300 350,500 600,400 C850,300 1050,500 1200,400 L1200,800 L0,800 Z" 
                              fill="url(#wave1)" className="animate-wave-1">
                        </path>
                        <defs>
                            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
                                <stop offset="50%" stopColor="#059669" stopOpacity="0.6"/>
                                <stop offset="100%" stopColor="#047857" stopOpacity="0.4"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Secondary Wave Layer */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        <path d="M0,500 C200,400 400,600 700,500 C900,400 1100,600 1200,500 L1200,800 L0,800 Z" 
                              fill="url(#wave2)" className="animate-wave-2">
                        </path>
                        <defs>
                            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#34d399" stopOpacity="0.5"/>
                                <stop offset="50%" stopColor="#0e976aff" stopOpacity="0.7"/>
                                <stop offset="100%" stopColor="#047857" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Tertiary Wave Layer */}
                <div className="absolute inset-0 opacity-15">
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        <path d="M0,300 C300,200 600,400 900,300 C1050,250 1150,350 1200,300 L1200,800 L0,800 Z" 
                              fill="url(#wave3)" className="animate-wave-3">
                        </path>
                        <defs>
                            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.6"/>
                                <stop offset="50%" stopColor="#13a872ff" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Moving Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-500/5 to-teal-400/10 animate-gradient-shift"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-float-particle-1"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400/25 rounded-full animate-float-particle-2"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400/35 rounded-full animate-float-particle-3"></div>
                    <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-green-500/20 rounded-full animate-float-particle-4"></div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400/20 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-28 h-28 bg-purple-400/15 rounded-full blur-xl animate-bounce"></div>
                
                {/* Floating Icons */}
                <div className="absolute top-36 left-1/3 animate-float">
                    <Car className="w-8 h-8 text-white/30" />
                </div>
                <div className="absolute top-48 right-1/3 animate-float-delayed">
                    <UtensilsCrossed className="w-6 h-6 text-white/30" />
                </div>
                <div className="absolute bottom-32 left-1/3 animate-float">
                    <ShoppingBag className="w-7 h-7 text-white/30" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                <div className="flex flex-col lg:flex-row items-center min-h-screen">
                    {/* Left Content */}
                    <div className={`lg:w-1/2 mb-16 mt-10 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Made for Nepal 🇳🇵</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            All-in-One
                            <span className="text-8xl block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                                Super App
                            </span>
                            <span className="block text-4xl md:text-5xl text-emerald-100">in Nepal</span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed max-w-lg">
                            Book rides, order food, shop locally, and get expert services - all in one powerful app designed for Nepali lifestyle!
                        </p>

                        {/* Service Indicator */}
                        <div className="flex items-center mb-8 bg-white backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="mr-4 p-2 bg-white/20 rounded-xl">
                                <CurrentServiceIcon className={`w-6 h-6 ${services[currentService].color} transition-all duration-500`} />
                            </div>
                            <div>
                                <p className="text-sm text-emerald-100">Now Available:</p>
                                <p className="font-semibold text-lg">{services[currentService].name}</p>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                             <a href="https://apps.apple.com/by/app/gorkha-ride/id6511239046" target="_blank" rel="noopener noreferrer">
                            <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                                <div className="mr-3 p-2 bg-white/10 rounded-lg">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Download on</div>
                                    <div className="text-lg font-bold">App Store</div>
                                </div>
                            </button>
                            </a>


                           <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en_US" target="_blank" rel="noopener noreferrer">
  <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
    <div className="mr-3 p-2 bg-white/10 rounded-lg">
      <Download className="w-5 h-5" />
    </div>
    <div className="text-left">
      <div className="text-xs text-gray-300">Get it on</div>
      <div className="text-lg font-bold">Google Play</div>
    </div>
  </button>
</a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-white">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            {/* Main Phone */}
                            <div className="relative bg-gradient-to-b from-green-300 to-green-400 rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-[2.5rem] p-4 w-80 h-[600px] relative overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] w-full h-full relative">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center p-4 text-black text-sm">
                                            <span className="font-semibold">9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-black rounded-sm"></div>
                                                <div className="w-6 h-2 bg-black rounded-sm"></div>
                                                <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                                            </div>
                                        </div>
                                        
                                        {/* App Content */}
                                        <div className="px-6 py-4">
                                            <div className="text-center mb-8">
                                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                                                    <Smartphone className="w-8 h-8 text-white" />
                                                </div>
                                                <h3 className="font-bold text-gray-800 text-lg">Gorkha Ride</h3>
                                                <p className="text-gray-600 text-sm">Everything You Need In One App</p>
                                            </div>
                                            
                                            {/* Service Grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {services.map((service, index) => {
                                                    const ServiceIcon = service.icon;
                                                    return (
                                                        <div key={index} className={`p-4 rounded-2xl transition-all duration-300 ${currentService === index ? 'bg-emerald-100 scale-105' : 'bg-white'} shadow-sm`}>
                                                            <ServiceIcon className={`w-8 h-8 mb-2 ${service.color}`} />
                                                            <p className="text-xs font-medium text-gray-700">{service.name}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            
                                            {/* Bottom Navigation */}
                                            <div className="bg-white rounded-2xl p-4 shadow-lg">
                                                <div className="flex justify-around">
                                                    <div className="w-8 h-2 bg-emerald-500 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full p-4 shadow-lg animate-bounce">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            
                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-green-900 rounded-full p-3 shadow-lg animate-pulse">
                                <Download className="w-5 h-5 text-white" />
                            </div>

                            {/* Background Phone */}
                            <div className="absolute -right-12 top-12 bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 w-64 h-96 opacity-20 -rotate-12 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes wave-1 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-25px) translateY(-10px); }
                    100% { transform: translateX(-50px) translateY(0px); }
                }

                @keyframes wave-2 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(25px) translateY(-15px); }
                    100% { transform: translateX(50px) translateY(0px); }
                }

                @keyframes wave-3 {
                    0% { transform: translateX(0px) translateY(0px); }
                    50% { transform: translateX(-15px) translateY(-8px); }
                    100% { transform: translateX(-30px) translateY(0px); }
                }

                @keyframes gradient-shift {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                @keyframes float-particle-1 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.3; }
                    25% { transform: translate(10px, -15px) scale(1.2); opacity: 0.6; }
                    50% { transform: translate(-5px, -25px) scale(0.8); opacity: 0.4; }
                    75% { transform: translate(-10px, -10px) scale(1.1); opacity: 0.5; }
                }

                @keyframes float-particle-2 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.25; }
                    33% { transform: translate(-8px, -20px) scale(1.3); opacity: 0.7; }
                    66% { transform: translate(12px, -15px) scale(0.9); opacity: 0.4; }
                }

                @keyframes float-particle-3 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.35; }
                    40% { transform: translate(15px, -10px) scale(1.1); opacity: 0.8; }
                    80% { transform: translate(-8px, -18px) scale(0.7); opacity: 0.3; }
                }

                @keyframes float-particle-4 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
                    30% { transform: translate(-12px, -25px) scale(1.4); opacity: 0.6; }
                    60% { transform: translate(8px, -8px) scale(0.8); opacity: 0.4; }
                    90% { transform: translate(5px, -15px) scale(1.2); opacity: 0.5; }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 3s ease-in-out infinite 1.5s;
                }

                .animate-wave-1 {
                    animation: wave-1 8s ease-in-out infinite;
                }

                .animate-wave-2 {
                    animation: wave-2 12s ease-in-out infinite reverse;
                }

                .animate-wave-3 {
                    animation: wave-3 10s ease-in-out infinite;
                }

                .animate-gradient-shift {
                    animation: gradient-shift 15s linear infinite;
                }

                .animate-float-particle-1 {
                    animation: float-particle-1 8s ease-in-out infinite;
                }

                .animate-float-particle-2 {
                    animation: float-particle-2 12s ease-in-out infinite;
                }

                .animate-float-particle-3 {
                    animation: float-particle-3 10s ease-in-out infinite;
                }

                .animate-float-particle-4 {
                    animation: float-particle-4 14s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default Hero;
