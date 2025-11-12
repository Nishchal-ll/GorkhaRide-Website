import React, { useState, useEffect, useRef } from 'react'
import Parcel from '../../assets/Parcel.png'
import Food from '../../assets/Food.png'
import Ride from '../../assets/Ride.png'
import Rider from '../../assets/Rider.png'
import Vendor from '../../assets/Vendor.png'
import Provider from '../../assets/Provider.png'
import Footer from '../Footer/Footer'

const YouTubeVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const bookingVideos = [
    {
      icon: "fas fa-motorcycle",
      title: "How to Book a Ride",
      description: "Learn how to book motorbike or car rides quickly and easily with our app.",
      duration: "1:42",
      type: "Tutorial",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Ride
    },
    {
      icon: "fas fa-utensils",
      title: "How to Order Food",
      description: "Step-by-step guide to ordering food from your favorite restaurants.",
      duration: "1:50",
      type: "Tutorial",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Food
    },
    {
      icon: "fas fa-box",
      title: "How to Book Parcel Delivery",
      description: "Step-by-step guide to book parcel delivery services or goods delivery.",
      duration: "1:59",
      type: "Tutorial",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Parcel
    }
  ]

  const partnerVideos = [
    {
      icon: "fas fa-store",
      title: "How to Become a Vendor Partner",
      description: "Start selling your products through our marketplace platform and reach more customers.",
      duration: "2:10",
      type: "Partner Guide",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Vendor
    },
    {
      icon: "fas fa-car",
      title: "How to Become a Ride Partner",
      description: "Earn money by providing ride and delivery services in your area.",
      duration: "2:15",
      type: "Partner Guide",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Rider
    },
    {
      icon: "fas fa-tools",
      title: "How to Become a Service Provider",
      description: "Offer your professional services to our growing customer base.",
      duration: "1:30",
      type: "Partner Guide",
      category: "Video Guide",
      videoUrl: "https://www.youtube.com/@gorkharide",
      thumbnail: Provider
    }
  ]

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank')
  }

  const VideoCard = ({ video, index, isPartner = false }) => (
    <div 
      className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-green-100/50 hover:border-green-300/70 cursor-pointer transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-3 hover:scale-105 group`}
      style={{ transitionDelay: `${40 + index * 10}ms` }}
      onMouseEnter={() => setHoveredVideo(`${isPartner ? 'partner' : 'booking'}-${index}`)}
      onMouseLeave={() => setHoveredVideo(null)}
      onClick={() => handleVideoClick(video.videoUrl)}
    >
      {/* Video Thumbnail Area */}
      <div className="relative rounded-lg overflow-hidden mb-4 bg-white group-hover:shadow-lg transition-all duration-500">
        {video.thumbnail ? (
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <i className={`${video.icon} text-white text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}></i>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
          <div className={`bg-white bg-opacity-90 rounded-full p-3 transition-all duration-500 transform ${
            hoveredVideo === `${isPartner ? 'partner' : 'booking'}-${index}` ? 'scale-125 opacity-100 rotate-3' : 'scale-100 opacity-0'
          }`}>
            <i className="fas fa-play text-green-600 text-lg"></i>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-medium transform group-hover:scale-110 transition-transform duration-300">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold transform group-hover:bg-green-200 group-hover:scale-105 transition-all duration-300">
            {video.category}
          </span>
          <span className="text-green-600 text-xs font-medium group-hover:text-green-700 transition-colors duration-300">
            {video.type}
          </span>
        </div>
        
        <h4 className="font-semibold text-lg text-gray-900 transition-all duration-300 group-hover:text-green-800 group-hover:translate-x-1">
          {video.title}
        </h4>
        
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {video.description}
        </p>
        
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
          <i className="fas fa-play mr-2 group-hover:animate-pulse"></i>
          Watch Now
        </button>
      </div>
    </div>
  )

  return (
    <>
      <style jsx>{`
        .yt-video-bg-container {
          position: relative;
          overflow: hidden;
        }
        
        .yt-video-animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          overflow: hidden;
        }
        
        .yt-video-animated-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg at 50% 50%, 
            transparent 0deg, 
            rgba(34, 197, 94, 0.1) 60deg, 
            rgba(16, 185, 129, 0.15) 120deg, 
            transparent 180deg,
            rgba(34, 197, 94, 0.08) 240deg,
            rgba(16, 185, 129, 0.12) 300deg,
            transparent 360deg);
          animation: ytVideoFlowRotate 20s linear infinite;
        }
        
        .yt-video-animated-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, 
            rgba(34, 197, 94, 0.05) 0%, 
            rgba(16, 185, 129, 0.08) 30%, 
            transparent 60%),
            radial-gradient(ellipse at 80% 20%, 
            rgba(34, 197, 94, 0.08) 0%, 
            transparent 50%),
            radial-gradient(ellipse at 20% 80%, 
            rgba(16, 185, 129, 0.06) 0%, 
            transparent 50%);
          animation: ytVideoPulseFlow 15s ease-in-out infinite alternate;
        }
        
        .yt-video-flowing-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          opacity: 0.6;
        }
        
        .yt-video-flow-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(34, 197, 94, 0.4) 20%, 
            rgba(16, 185, 129, 0.6) 50%, 
            rgba(34, 197, 94, 0.4) 80%, 
            transparent 100%);
          border-radius: 1px;
          animation: ytVideoLineFlow 8s linear infinite;
        }
        
        .yt-video-flow-line:nth-child(1) {
          top: 15%;
          left: -100%;
          width: 300px;
          animation-delay: 0s;
          transform: rotate(15deg);
        }
        
        .yt-video-flow-line:nth-child(2) {
          top: 35%;
          left: -100%;
          width: 400px;
          animation-delay: -2s;
          transform: rotate(-10deg);
        }
        
        .yt-video-flow-line:nth-child(3) {
          top: 55%;
          left: -100%;
          width: 250px;
          animation-delay: -4s;
          transform: rotate(20deg);
        }
        
        .yt-video-flow-line:nth-child(4) {
          top: 75%;
          left: -100%;
          width: 350px;
          animation-delay: -6s;
          transform: rotate(-5deg);
        }
        
        .yt-video-flow-line:nth-child(5) {
          top: 25%;
          left: -100%;
          width: 200px;
          animation-delay: -3s;
          transform: rotate(25deg);
        }
        
        .yt-video-wave-pattern {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E") repeat-x;
          animation: ytVideoWaveMove 10s linear infinite;
          opacity: 0.3;
        }
        
        @keyframes ytVideoFlowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ytVideoPulseFlow {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          100% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        @keyframes ytVideoLineFlow {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes ytVideoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-15px) scale(1.1);
          }
          66% {
            transform: translateY(10px) scale(0.95);
          }
        }
        
        @keyframes ytVideoWaveMove {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1200px;
          }
        }
        
        .yt-video-content {
          position: relative;
          z-index: 10;
        }
      `}</style>
      
      <section id="youtube-videos" ref={sectionRef} className="yt-video-bg-container pt-36 pb-10">
        {/* Animated Background */}
        <div className="yt-video-animated-bg"></div>
        
        {/* Flowing Lines */}
        <div className="yt-video-flowing-lines">
          <div className="yt-video-flow-line"></div>
          <div className="yt-video-flow-line"></div>
          <div className="yt-video-flow-line"></div>
          <div className="yt-video-flow-line"></div>
          <div className="yt-video-flow-line"></div>
        </div>
        
        {/* Wave Pattern */}
        <div className="yt-video-wave-pattern"></div>
        
        {/* Content */}
        <div className="yt-video-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className={`text-6xl font-bold text-gray-800 mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '100ms' }}>
              How-To Videos
            </h2>
            <p className={`text-xl text-green-700 max-w-3xl mx-auto transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              Learn how to use Gorkha Ride services and become a partner with our comprehensive video guides.
            </p>
          </div>

          {/* How to Book Services Section */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold text-dark mb-8 text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              How to Book Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookingVideos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>
          </div>

          {/* How to Become a Partner Section */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold text-dark mb-8 text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              How to Become a Partner
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerVideos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} isPartner={true} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center bg-white rounded-xl p-8 shadow-sm border border-green-100/50 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <h3 className={`text-2xl font-bold text-green-900 mb-4 transform transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`} style={{ transitionDelay: '900ms' }}>
              Ready to Get Started?
            </h3>
            <p className={`text-gray-700 mb-6 text-lg transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              Visit our YouTube channel for complete tutorials, tips, and the latest updates about Gorkha Ride services.
            </p>
            <button 
              className={`bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '1100ms' }}
              onClick={() => window.open('https://youtube.com/@gorkharide', '_blank')}
            >
              <i className="fab fa-youtube mr-2 text-xl"></i>
              Visit Our YouTube Channel
            </button>
            <p className={`text-green-600 font-medium mt-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '1200ms' }}>
              Join 10K+ subscribers
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default YouTubeVideoSection
