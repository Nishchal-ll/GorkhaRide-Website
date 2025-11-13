import React from 'react';
import Log from '../../assets/log.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Logo and description */}
            <div>
              <div className="flex items-center mb-4">
                <img src={Log} alt="Gorkha Ride Logo" className="h-10 w-196 mr-2 rounded-lg object-cover" />
              </div>
              <p className="text-gray-400 mb-4">
                All-in-One Super App in Nepal. Your trusted partner for transportation, shopping, and services.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/gorkharide" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.tiktok.com/@gorkharide" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/gorkharide" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#expert-services" className="hover:text-white">Expert Services</a></li>
                <li><a href="#become-partner" className="hover:text-white">Become A Partner</a></li>
                <li><a href="#download" className="hover:text-white">Download</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
              <p className="text-gray-400 mb-4">Get the app for a better experience</p>
              <div className="space-y-4">
                <a href="https://apps.apple.com/by/app/gorkha-ride/id6511239046" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
                    <i className="fab fa-apple mr-2"></i> App Store
                  </button>
                </a>
                <br/>
                <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en_US" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
                    <i className="fab fa-google-play mr-2"></i> Google Play
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Gorkha Ride. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


