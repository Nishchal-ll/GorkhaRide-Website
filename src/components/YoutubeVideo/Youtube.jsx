import React, { useState, useEffect, useRef } from 'react';
import { Bike, Car, UtensilsCrossed, Package, Store, Wrench, Play, Clock, Youtube, ArrowRight, CheckCircle, Users, TrendingUp } from 'lucide-react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Parcel from '../../assets/Parcel.png'
import Food from '../../assets/Food.png'
import Ride from '../../assets/Ride.png'
import Rider from '../../assets/Rider.png'
import Vendor from '../../assets/Vendor.png'
import Provider from '../../assets/Provider.png'


export default function YouTubeVideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('booking');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const bookingVideos = [
    {
      icon: <Bike className="w-8 h-8" />,
      title: "How to Book a Ride",
      description: "Learn how to book motorbike or car rides quickly and easily with our app.",
      duration: "1:42",
      type: "Tutorial",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Ride
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "How to Order Food",
      description: "Step-by-step guide to ordering food from your favorite restaurants.",
      duration: "1:50",
      type: "Tutorial",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Food
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "How to Book Parcel Delivery",
      description: "Step-by-step guide to book parcel delivery services or goods delivery.",
      duration: "1:59",
      type: "Tutorial",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Parcel
    }
  ];

  const partnerVideos = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "How to Become a Vendor Partner",
      description: "Start selling your products through our marketplace platform and reach more customers.",
      duration: "2:10",
      type: "Partner Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Vendor
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "How to Become a Ride Partner",
      description: "Earn money by providing ride and delivery services in your area.",
      duration: "2:15",
      type: "Partner Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Rider
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "How to Become a Service Provider",
      description: "Offer your professional services to our growing customer base.",
      duration: "1:30",
      type: "Partner Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Provider
    }
  ];

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  const VideoCard = ({ video, index }) => (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-green-300"
      onMouseEnter={() => setHoveredVideo(index)}
      onMouseLeave={() => setHoveredVideo(null)}
      onClick={() => handleVideoClick(video.videoUrl)}
    >
      {/* Video Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-r from-green-400 to-green-500">
        {video.thumbnail ? (
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
              {video.icon}
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          hoveredVideo === index ? 'bg-black bg-opacity-40' : 'bg-transparent'
        }`}>
          <div className={`transition-all duration-500 transform ${
            hoveredVideo === index ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Play className="w-8 h-8 text-red-600 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-black bg-opacity-70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>{video.duration}</span>
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white bg-opacity-90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold">
            {video.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {video.description}
        </p>
        
        {/* Watch Button */}
        <button className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg transform group-hover:scale-105">
          <Youtube className="w-5 h-5" />
          <span>Watch Tutorial</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
        hoveredVideo === index ? 'shadow-[0_0_40px_rgba(34,197,94,0.3)]' : ''
      }`}></div>
    </div>
  );

  return (
    <>
    <div className="min-h-screen bg-white mt-8">
   <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
              <Youtube className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-bold">Watch & Learn</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Learn How to Use
            <span className="block bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mt-2">
              Gorkha Ride
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Watch our comprehensive video guides to master every feature of Gorkha Ride. 
            From booking services to becoming a partner, we've got you covered.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-1">10K+</div>
              <div className="text-gray-600 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-1">50+</div>
              <div className="text-gray-600 text-sm">Video Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-1">100K+</div>
              <div className="text-gray-600 text-sm">Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-white sticky top-[73px] z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'booking'
                  ? 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>How to Book Services</span>
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'partner'
                  ? 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>How to Become a Partner</span>
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section ref={sectionRef} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'booking' ? (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Book Services in Minutes
                </h3>
                <p className="text-gray-600 text-lg">
                  Follow these simple tutorials to start using Gorkha Ride services
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookingVideos.map((video, index) => (
                  <VideoCard key={index} video={video} index={index} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Grow Your Business with Us
                </h3>
                <p className="text-gray-600 text-lg">
                  Join our partner network and start earning today
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partnerVideos.map((video, index) => (
                  <VideoCard key={index} video={video} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Watch Our <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Video Guides?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Easy to Follow",
                desc: "Step-by-step instructions that anyone can understand"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Quick Learning",
                desc: "Master features in minutes, not hours"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Tips",
                desc: "Learn best practices from experienced users"
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-green-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-green-400 to-green-500 rounded-[3rem] p-12 text-center text-white shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <Youtube className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Visit Our YouTube Channel
              </h3>
              <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
                Subscribe to get the latest tutorials, tips, and updates about Gorkha Ride services
              </p>
              <button
                onClick={() => window.open('https://youtube.com/@gorkharide', '_blank')}
                className="group px-10 py-5 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <Youtube className="w-6 h-6" />
                <span>Subscribe Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="mt-6 text-green-100 text-lg font-semibold">
                Join 10K+ subscribers learning with us
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}