import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
 import Logo from '../../assets/logo.png';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/Service' },
        { label: 'Tutorials', path: '/youtube' },
        { label: 'How To', path: '/howto' },
        { label: 'Contact', path: '/contact' },
    ];

    const specialItems = [
        { 
            label: 'Postonic', 
            url: 'https://innovate.gorkharide.com/',
            description: 'Social Media Automation',
            details: 'Automate your social media presence across all platforms. Schedule posts, manage multiple accounts, and boost engagement effortlessly.',
            icon: <Sparkles size={18} />,
            gradient: 'from-red-500 via-orange-500 to-yellow-500'
        },
        { 
            label: 'Zaapguru', 
            url: 'https://innovate.gorkharide.com/',
            description: 'WhatsApp & Telegram Automation',
            details: 'Streamline your messaging with powerful WhatsApp and Telegram automation. Send bulk messages, auto-replies, and manage conversations seamlessly.',
            icon: <Zap size={18} />,
            gradient: 'from-blue-600 via-purple-600 to-purple-700'
        },
    ];

    return (
        <nav className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'shadow-md' : 'shadow-none'
        }`}>
            <div className="w-full px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center pl-10">
                       <a href="/" className="flex items-center pl-10">
                        <img
                            src={Logo}
                            alt="GorkhaRide Logo"
                            className="rounded-lg mr-3 object-cover"
                       />
                   </a>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="xl:hidden text-gray-700 hover:text-green-600 transition-colors duration-200"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center justify-end">
                        <ul className="flex items-center space-x-6 mr-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-700 hover:text-green-600 font-medium text-md cursor-pointer transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            
                            {/* Special Attention-Grabbing Items */}
                            {specialItems.map((item) => (
                                <li key={item.label} className="relative group">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${item.gradient} text-white font-extrabold text-base cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </a>
                                    
                                    {/* Dropdown Information Box on hover */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50">
                                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                                            {/* Colored Header Bar */}
                                            <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                                            
                                            <div className="p-5">
                                                {/* Title Section */}
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${item.gradient} text-white shadow-md`}>
                                                        {item.icon}
                                                    </div>
                                                    <h3 className="text-gray-800 font-extrabold text-lg">{item.label}</h3>
                                                </div>
                                                
                                                {/* Subtitle */}
                                                <p className={`text-sm font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                                    {item.description}
                                                </p>
                                                
                                                {/* Description */}
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {item.details}
                                                </p>
                                                
                                                {/* Call to Action */}
                                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                    <span className="text-xs text-gray-500 font-medium">Click to learn more</span>
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            {/* Arrow pointer */}
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
                                                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white filter drop-shadow-md"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Download Button */}
                        <ul className="flex items-center mr-10">
                            <li className="text-center">
                                <a
                                    href="https://gorkharide.github.io/Gorkha-Ride/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Download size={18} />
                                    <span>Download Now</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    id="navbarNav"
                >
                    <div className="bg-white border-t border-gray-100 shadow-lg">
                        <ul className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Special Items - Mobile */}
                            {specialItems.map((item) => (
                                <li key={item.label} className="pt-2">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMobileMenu}
                                        className={`flex flex-col items-center justify-center space-y-1.5 px-4 py-4 rounded-lg bg-gradient-to-r ${item.gradient} text-white font-extrabold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                                    >
                                        <div className="flex items-center space-x-2">
                                            {item.icon}
                                            <span className="text-base">{item.label}</span>
                                        </div>
                                        <span className="text-xs font-semibold opacity-95">{item.description}</span>
                                    </a>
                                </li>
                            ))}

                            {/* Mobile Download Button */}
                            <li className="pt-4 pb-2">
                                <a
                                    href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en"
                                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                                >
                                    <Download size={18} />
                                    <span>Download Now</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;