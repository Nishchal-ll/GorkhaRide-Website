import React, { useEffect, useState } from 'react';
import { Smartphone, Download, MapPin, Navigation, CreditCard, Wallet, Shield, AlertCircle, Star, CheckCircle, ArrowRight, Apple } from 'lucide-react';
import Footer from '../Footer/Footer';

export default function HowTo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: 'Download', icon: Download },
    { id: 2, title: 'Book Ride', icon: MapPin },
    { id: 3, title: 'Payment', icon: Wallet },
    { id: 4, title: 'Safety', icon: Shield }
  ];

  return (
    <>
    <div className="bg-white min-h-screen mt-16">
      {/* Hero Section with Curved Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 text-sm font-medium">
            Step-by-Step Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            How to Use the<br />Gorkha Ride App
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Discover how to use the Gorkha Ride app with our step-by-step guide. Learn how to download, book rides, make payments, and enjoy hassle-free travel in Nepal.
          </p>
        </div>
        
        <div className="relative">
          <svg viewBox="0 0 1440 120" className="w-full h-auto -mb-1">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="max-w-6xl mx-auto px-6 -mt-6 mb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep >= idx ? 'bg-green-600 scale-110' : 'bg-gray-200'
                  }`}>
                    <step.icon className={`w-8 h-8 ${activeStep >= idx ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <span className={`mt-3 font-semibold text-sm ${activeStep >= idx ? 'text-green-600' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-4 transition-all duration-500 ${
                    activeStep > idx ? 'bg-green-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Introduction Card */}
        <div id="intro" data-animate className={`mb-24 transition-all duration-1000 ${isVisible.intro ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-green-500  p-4 rounded-2xl">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction to the Gorkha Ride App</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The Gorkha Ride App is Nepal's homegrown ride-hailing service designed to provide safe, reliable, and affordable transportation. Much like international apps such as Uber or Ola, Gorkha Ride connects passengers with trusted drivers at the tap of a button. Whether you're commuting in Kathmandu, Pokhara, or other major cities, the app makes your travel smooth and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Download */}
        <div id="step1" data-animate className={`mb-24 transition-all duration-1000 delay-100 ${isVisible.step1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} onMouseEnter={() => setActiveStep(0)}>
          <div className="flex items-center mb-8 space-x-4">
            <div className="bg-gradient-to-br from-green-500 to-green-300 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
              01
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Downloading the App</h2>
              <p className="text-gray-500">Get started in minutes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-gray-800 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">For Android Users</h3>
                <div className="space-y-4">
                  {[
                    'Open the Google Play Store.',
                    'Search for "Gorkha Ride".',
                    'Tap Install and wait for it to download.',
                    'Once installed, open the app and sign up or log in.'
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Apple className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">For iOS Users</h3>
                <div className="space-y-4">
                  {[
                    'Open the Apple App Store.',
                    'Search for "Gorkha Ride".',
                    'Tap Get to install the app.',
                    'Launch the app after installation.'
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <span className="text-xs font-bold text-white">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Booking */}
        <div id="step2" data-animate className={`mb-24 transition-all duration-1000 delay-200 ${isVisible.step2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} onMouseEnter={() => setActiveStep(1)}>
          <div className="flex items-center mb-8 space-x-4">
            <div className="bg-gradient-to-br from-green-300 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
              02
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Book Your Ride</h2>
              <p className="text-gray-500">Simple and intuitive process</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Selecting Pickup Location',
                desc: 'Open the app and allow GPS access, or enter your pickup points manually.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Navigation,
                title: 'Choosing Your Destination',
                desc: 'Type in your destination in the search bar.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Smartphone,
                title: 'Ride Types and Options',
                desc: 'The app offers bike rides, car rides, and premium options depending on your preference and budget.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: CheckCircle,
                title: 'Confirming Your Ride',
                desc: 'Check fare details and estimated arrival time → Tap Confirm Ride.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`}></div>
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Payment */}
        <div id="step3" data-animate className={`mb-24 transition-all duration-1000 delay-300 ${isVisible.step3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} onMouseEnter={() => setActiveStep(2)}>
          <div className="flex items-center mb-8 space-x-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
              03
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Payment Methods</h2>
              <p className="text-gray-500">Flexible and secure options</p>
            </div>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cash Payments</h3>
                  <p className="text-gray-600 text-lg">You can pay your driver directly in cash at the end of your trip.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emarald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wallet className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital Wallets & Online Payments</h3>
                  <p className="text-gray-600 text-lg">The app supports eSewa, Khalti, and other wallets, making transactions cashless and convenient.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Safety */}
        <div id="step4" data-animate className={`mb-24 transition-all duration-1000 delay-400 ${isVisible.step4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} onMouseEnter={() => setActiveStep(3)}>
          <div className="flex items-center mb-8 space-x-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
              04
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Safety Features</h2>
              <p className="text-gray-500">Your security is our priority</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-emarald-600 to-green-600 p-12 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold">Share Your Ride</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Passengers can share their live ride location with friends or family for added safety.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold">Emergency Button</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  In case of emergencies, the app includes a panic button that connects you to helpline numbers instantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div id="tips" data-animate className={`mb-24 transition-all duration-1000 delay-500 ${isVisible.tips ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pro Tips for Better Experience</h2>
            <p className="text-xl text-gray-600">Make the most out of your rides</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tip: 'Always check driver ratings before confirming.', color: 'from-green-500 to-emerald-500' },
              { tip: 'Use digital payments to avoid change issues.', color: 'from-green-500 to-emerald-500' },
              { tip: 'Share your ride details during late-night travel.', color: 'from-green-500 to-emerald-500' },
              { tip: 'Double-check pickup and drop-off points for accuracy.', color: 'from-green-500 to-emerald-500' }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-lg">
                  <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium pt-1">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion CTA */}
        <div id="conclusion" data-animate className={`transition-all duration-1000 delay-600 ${isVisible.conclusion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 "></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Travel?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                The Gorkha Ride App is transforming transportation in Nepal by providing affordable, safe, and convenient rides at your fingertips. From downloading the app to booking your first ride, the process is quick and easy. Whether commuting daily or traveling across the city, this step-by-step guide ensures a smooth experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                  Download Now
                </button>
              
              </div>
              <p className="text-sm ">
                Learn more about Nepal's digital ride-hailing industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}