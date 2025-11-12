import React, { useState, useEffect, useRef } from 'react'
import QR from '../../assets/qr.png'


const Download = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState([]);
  const [qrVisible, setQrVisible] = useState(false);
  const sectionRef = useRef(null);
  const buttonRefs = useRef([]);
  const qrRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          
          if (entry.target === qrRef.current && entry.isIntersecting) {
            setQrVisible(true);
          }
          
          // Check for download buttons
          const buttonIndex = buttonRefs.current.indexOf(entry.target);
          if (buttonIndex !== -1 && entry.isIntersecting) {
            setVisibleButtons(prev => {
              if (!prev.includes(buttonIndex)) {
                return [...prev, buttonIndex];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe QR section
    if (qrRef.current) {
      observer.observe(qrRef.current);
    }

    // Observe buttons
    buttonRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (qrRef.current) {
        observer.unobserve(qrRef.current);
      }
      buttonRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <section 
        id="download" 
        ref={sectionRef}
        className="pt-32 pb-32 bg-gradient-to-r from-green-300 to-green-500 text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pt-96">
          <div className={`absolute top-10 left-10 w-64 h-64 bg-white bg-opacity-10 rounded-full transition-all duration-2000 ${
            isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}></div>
          <div className={`absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 bg-opacity-20 rounded-full transition-all duration-2000 delay-500 ${
            isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}></div>
          <div className={`absolute top-1/2 left-1/4 w-32 h-32 bg-green-300 bg-opacity-15 rounded-full transition-all duration-2000 delay-1000 ${
            isVisible ? 'animate-bounce scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}></div>
          
          {/* Floating Icons */}
          <div className={`absolute top-20 right-1/4 transition-all duration-3000 ${
            isVisible ? 'animate-bounce opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '2s', animationDuration: '3s' }}>
            <i className="fas fa-mobile-alt text-4xl text-white opacity-20"></i>
          </div>
          <div className={`absolute bottom-32 left-1/4 transition-all duration-3000 ${
            isVisible ? 'animate-bounce opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
            <i className="fas fa-download text-4xl text-white opacity-20"></i>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16 pb-10">
          {/* Header Animation */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className={`text-3xl md:text-6xl font-bold mb-6 text-white transform transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              Download Gorkha Ride Today
            </h2>
            <p className={`text-xl mb-10 max-w-3xl mx-auto text-green-50 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              Join thousands of users in Nepal who are already enjoying the convenience of our super app.
            </p>
          </div>
          
          {/* Download Buttons */}
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* App Store Button */}
             <a href="https://apps.apple.com/by/app/gorkha-ride/id6511239046" target='_blank'>
            <button 
              ref={el => buttonRefs.current[0] = el}
              className={`download-btn bg-white text-green-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 hover:bg-green-50 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl gtag-event transform ${
                visibleButtons.includes(0) 
                  ? 'translate-x-0 opacity-100 scale-100' 
                  : '-translate-x-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '600ms' }}
              data-event="app_download" 
              data-category="cta" 
              data-label="app_store_hero"
            >
             
              <i className={`fab fa-apple text-2xl mr-3 text-green-600 transition-all duration-300 ${
                visibleButtons.includes(0) ? 'animate-pulse' : ''
              }`} style={{ animationDelay: '800ms', animationDuration: '1s', animationIterationCount: '1' }}></i>
              <div className="text-left">
                <div className="text-xs text-green-600">Download on the</div>
                <div className="text-xl text-green-800">App Store</div>
              </div>
            </button>
             </a>
            {/* Google Play Button */}
             <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en_US" target='_blank'>
            <button 
              ref={el => buttonRefs.current[1] = el}
              className={`download-btn bg-white text-green-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 hover:bg-green-50 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl gtag-event transform ${
                visibleButtons.includes(1) 
                  ? 'translate-x-0 opacity-100 scale-100' 
                  : 'translate-x-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '800ms' }}
              data-event="app_download" 
              data-category="cta" 
              data-label="google_play_hero"
            >
              <i className={`fab fa-google-play text-2xl mr-3 text-green-600 transition-all duration-300 ${
                visibleButtons.includes(1) ? 'animate-pulse' : ''
              }`} style={{ animationDelay: '1000ms', animationDuration: '1s', animationIterationCount: '1' }}></i>
              <div className="text-left">
                <div className="text-xs text-green-600">Get it on</div>
                <div className="text-xl text-green-800">Google Play</div>
              </div>
            </button>
            </a>
          </div>
          
          {/* QR Code Section */}
          <div className="mt-12 flex justify-center">
            <div 
              ref={qrRef}
              className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-700 transform ${
                qrVisible 
                  ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
                  : 'translate-y-16 opacity-0 scale-95 rotate-3'
              }`}
            >
              <div className={`flex items-center mb-4 transform transition-all duration-500 ${
                qrVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <i className="fas fa-qrcode text-3xl mr-4 text-black"></i>
                <div>
                  <h3 className="font-semibold text-black">Scan to Download</h3>
                  <p className="text-sm text-black">Point your camera at the QR code</p>
                </div>
              </div>
              
              {/* QR Code Image Container */}
              <div className={`bg-white rounded-lg p-4 inline-block hover:scale-105 transition-all duration-300 transform ${
                qrVisible 
                  ? 'scale-100 opacity-100' 
                  : 'scale-75 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="w-32 h-32 rounded flex items-center justify-center overflow-hidden">
                  {/* QR Code Image Upload Field */}
                  <img 
                    src={QR}
                    alt="QR Code to download Gorkha Ride app" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center" style={{ display: 'none' }}>
                    <div>
                      <i className="fas fa-qrcode text-2xl mb-2 block"></i>
                      Upload QR Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download