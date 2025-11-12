

import React, { useState, useEffect } from 'react'

const Vendor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: "fas fa-list",
      title: "Product Management",
      description: "Easily add and update your products"
    },
    {
      icon: "fas fa-chart-line", 
      title: "Sales Analytics",
      description: "Track your performance and growth"
    },
    {
      icon: "fas fa-comments",
      title: "Customer Chat", 
      description: "Communicate with customers directly"
    }
  ]

  const benefits = [
    "Easy product listing and management",
    "Integrated order management system", 
    "Real-time analytics and insights",
    "Secure payment processing"
  ]

  return (
    <>
      <section className="py-20 bg-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className={`md:w-1/2 mb-10 md:mb-0 md:pr-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <h2 className="text-3xl font-bold text-green-900 mb-4 animate-pulse">
                Vendor Platform
              </h2>
              <p className={`text-lg text-green-700 mb-6 transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Vendors can list products, manage orders, and grow their business through our platform.
              </p>
              
              <div className={`bg-green-100 rounded-lg p-6 mb-6 border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } delay-300`}>
                <h3 className="font-semibold text-lg mb-3 text-green-900">Vendor Benefits</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className={`flex items-start transform transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                      <i className="fas fa-arrow-right text-green-600 mt-1 mr-2 animate-bounce"></i>
                      <span className="text-green-800 hover:text-green-900 transition-colors duration-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className={`md:w-1/2 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            } delay-500`}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`flex items-center hover:scale-110 transition-all duration-500 p-4 rounded-lg hover:bg-green-50 cursor-pointer transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      } ${hoveredFeature === index ? 'shadow-lg bg-green-50' : ''}`}
                      style={{ transitionDelay: `${700 + index * 150}ms` }}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className={`bg-green-100 rounded-full p-3 mr-4 transition-all duration-300 ${
                        hoveredFeature === index ? 'bg-green-200 scale-110 rotate-12' : ''
                      }`}>
                        <i className={`${feature.icon} text-green-600 transition-all duration-300 ${
                          hoveredFeature === index ? 'animate-pulse text-green-700' : ''
                        }`}></i>
                      </div>
                      <div>
                        <h4 className={`font-semibold text-green-900 transition-all duration-300 ${
                          hoveredFeature === index ? 'text-green-800' : ''
                        }`}>
                          {feature.title}
                        </h4>
                        <p className={`text-green-600 text-sm transition-all duration-300 ${
                          hoveredFeature === index ? 'text-green-700' : ''
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vendor