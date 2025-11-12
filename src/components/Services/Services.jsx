import React, { useState, useEffect, useRef } from 'react';
import { 
    Bike, 
    Users, 
    Car, 
    UtensilsCrossed, 
    ShoppingBasket, 
    Package, 
    Wrench, 
    Recycle,
    ArrowRight,
    Sparkles
} from 'lucide-react';

function Services() {
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);

    const services = [
        {
            icon: Bike,
            title: "Ride-Sharing",
            description: "Book motorbike or car rides for short or long distances with just a few taps.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
            gradient: "from-green-400 to-emerald-500",
            borderColor: "border-green-200",
            delay: 0
        },
        {
            icon: Users,
            title: "Carpooling",
            description: "Share rides with other passengers to save cost and reduce emissions.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
            gradient: "from-green-400 to-emerald-500",
            borderColor: "border-emerald-200",
            delay: 100
        },
        {
            icon: Car,
            title: "Vehicle Rental",
            description: "Rent bikes, scooters, or cars for city travel or outstation trips.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
            gradient: "from-green-400 to-emerald-500",
            borderColor: "border-teal-200",
            delay: 200
        },
        {
            icon: UtensilsCrossed,
            title: "Food Delivery",
            description: "Order from nearby restaurants and have meals delivered quickly.",
           bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
           gradient: "from-green-400 to-emerald-500",
            borderColor: "border-lime-200",
            delay: 300
        },
        {
            icon: ShoppingBasket,
            title: "QuickShop",
            description: "Get groceries and household essentials delivered to your doorstep.",
           bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
           gradient: "from-green-400 to-emerald-500",
            borderColor: "border-green-200",
            delay: 400
        },
        {
            icon: Package,
            title: "Parcel Delivery",
            description: "Send documents, packages, and parcels across town securely.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
            gradient: "from-green-400 to-emerald-500",
            borderColor: "border-emerald-200",
            delay: 500
        },
        {
            icon: Wrench,
            title: "Expert Services",
            description: "Book electricians, plumbers, cleaners, repair technicians, etc.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
           gradient: "from-green-400 to-emerald-500",
            borderColor: "border-teal-200",
            delay: 600
        },
        {
            icon: Recycle,
            title: "Waste to Money",
            description: "Sell your recyclable waste like plastics, papers, and electronics.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-green-500",
            iconColor: "text-white",
          gradient: "from-green-400 to-emerald-500",
            borderColor: "border-lime-200",
            delay: 700
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setTimeout(() => {
                            setVisibleCards(prev => new Set([...prev, index]));
                        }, services[index].delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-lime-200/20 rounded-full blur-3xl"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-32 right-1/4 w-16 h-16 bg-green-300/20 rounded-2xl rotate-45 animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-emerald-300/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-16 w-20 h-20 bg-teal-300/15 rounded-3xl rotate-12 animate-bounce"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:pt-10">
                {/* Header */}
                <div className="text-center mb-20">
                    
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Everything You Need,
                        <span className="block bg-green-500 bg-clip-text text-transparent drop-shadow-sm">
                           In One Super App
                        </span>
                    </h2>
                
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        const isVisible = visibleCards.has(index);
                        const isHovered = hoveredCard === index;
                        
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`service-card group relative transition-all duration-700 transform ${
                                    isVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Background */}
                                <div className={`relative ${service.bgColor} rounded-3xl p-8 text-center transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl border-2 ${service.borderColor} backdrop-blur-sm overflow-hidden shadow-lg`}>
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}></div>
                                    
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-current rounded-full"></div>
                                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-current rounded-full"></div>
                                        <div className="absolute top-1/2 left-8 w-4 h-4 bg-current rounded-full"></div>
                                    </div>
                                    
                                    
                                    {/* Icon */}
                                    <div className={`relative mx-auto w-24 h-24 ${service.iconBg} rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-xl group-hover:shadow-2xl border-4 border-white/50`}>
                                        <IconComponent className={`w-12 h-12 ${service.iconColor} transition-all duration-300`} />
                                        
                                        {/* Pulse Ring */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500`}></div>
                                        
                                        {/* Sparkle effect */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
                                    
                                    {/* Corner decorations */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-300/50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-300/50 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Enhanced Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 -z-10 scale-110`}></div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Enhanced Bottom CTA */}
            
<div className="text-center">
    <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 max-w-4xl mx-auto">
        <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
                <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 border-3 border-white flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-dark text-xs sm:text-sm font-bold">{i}</span>
                </div>
            ))}
        </div>
        <div className="text-center sm:text-left flex-1">
            <p className="font-black text-gray-900 text-base sm:text-lg">Ready to Transform Your Life?</p>
            <p className="text-gray-600 font-medium text-sm sm:text-base">Download our super app and explore all premium services</p>
        </div>
        <a href="https://gorkharide.github.io/Gorkha-Ride/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 shadow-lg">
                <span className="flex items-center justify-center">
                    Get App Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </span>
            </button>
        </a>
    </div>
</div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(-2deg); }
                }
                
                .service-card:nth-child(odd) {
                    animation: float 4s ease-in-out infinite;
                }
                
                .service-card:nth-child(even) {
                    animation: float-reverse 4s ease-in-out infinite 1s;
                }
            `}</style>
        </section>
    );
}

export default Services;