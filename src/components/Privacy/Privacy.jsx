import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Shield, Users, Lock, Eye, FileText, UserCheck, Settings, AlertCircle, Sparkles } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState('store');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  const keyPoints = [
    { icon: <Shield className="w-6 h-6" />, title: "Personal Information Processing", desc: "We process personal information based on your interactions with our services" },
    { icon: <Lock className="w-6 h-6" />, title: "No Sensitive Information", desc: "We do not process sensitive personal information" },
    { icon: <Users className="w-6 h-6" />, title: "No Third-Party Data", desc: "We do not receive information from third parties" },
    { icon: <Eye className="w-6 h-6" />, title: "Information Sharing", desc: "We share information only in specific situations with certain third parties" },
    { icon: <Settings className="w-6 h-6" />, title: "Your Rights", desc: "You can review, change, or terminate your account at any time" },
    { icon: <AlertCircle className="w-6 h-6" />, title: "Data Security", desc: "We implement organizational and technical security measures" }
  ];

  const sections = [
    { id: 1, title: "What Information Do We Collect?", icon: <FileText className="w-5 h-5" /> },
    { id: 2, title: "How Do We Process Your Information?", icon: <Settings className="w-5 h-5" /> },
    { id: 3, title: "When and With Whom Do We Share Personal Information?", icon: <Users className="w-5 h-5" /> },
    { id: 4, title: "Do We Use Cookies and Other Tracking Technologies?", icon: <Eye className="w-5 h-5" /> },
    { id: 5, title: "How Do We Handle Your Social Logins?", icon: <UserCheck className="w-5 h-5" /> },
    { id: 6, title: "How Long Do We Keep Your Information?", icon: <Shield className="w-5 h-5" /> },
    { id: 7, title: "How Do We Keep Your Information Safe?", icon: <Lock className="w-5 h-5" /> },
    { id: 8, title: "Do We Collect Information from Minors?", icon: <Users className="w-5 h-5" /> },
    { id: 9, title: "What Are Your Privacy Rights?", icon: <FileText className="w-5 h-5" /> }
  ];

  const dataTypes = [
    "Names and Email Addresses",
    "Profile Information",
    "Contact Details",
    "Geolocation Data",
    "Payment Details",
    "In-app Communications",
    "Device Information",
    "Ride Data",
    "User Images"
  ];

  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Animated Header with Gradient */}
      <div className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-600 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

 

      <div className="container mx-auto px-4 py-12">
        {/* Key Points with Card Hover Effects */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-green-500" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Summary of Key Points
              </h2>
              <Sparkles className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-600">Everything you need to know at a glance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card with Modern Design */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-3xl shadow-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-20 -translate-y-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">Questions or Concerns?</h3>
              <p className="text-white/90 text-lg">
                If you don't agree with our policies, please don't use our services.
              </p>
            </div>
            <a 
              href="mailto:app.gorkharide@gmail.com"
              className="flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>app.gorkharide@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Data Collection with Split Design */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-8">
            Information We Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Personal Information Types</h3>
              </div>
              <div className="space-y-3">
                {dataTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Image Information</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="font-semibold mb-1">Registration Images</p>
                  <p className="text-sm text-white/80">Stored for verification purposes</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="font-semibold mb-1">Ride Documentation</p>
                  <p className="text-sm text-white/80">Meter images and documents for calculation and verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections with Modern Style */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-8">
            Detailed Information
          </h2>
          <div className="space-y-3">
            {sections.map((section) => (
              <div 
                key={section.id} 
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedSection === section.id 
                    ? 'border-green-400 shadow-lg' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      expandedSection === section.id
                        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {section.icon}
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">{section.title}</span>
                  </div>
                  <div className={`transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-green-500" />
                  </div>
                </button>
                {expandedSection === section.id && (
                  <div className="px-5 pb-5">
                    <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border-l-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed">
                        {section.id === 1 && "We collect personal information that you voluntarily provide to us when you register, use our services, or contact us. This includes names, email addresses, profile information, contact details, geolocation data, payment information, and communication records."}
                        {section.id === 2 && "We process your information to provide, improve, and administer our services, communicate with you, prevent fraud, and comply with legal requirements. Processing is done with valid legal reasons and your consent where required."}
                        {section.id === 3 && "We may share your data with third-party vendors (Ad Networks, Testing Tools, Firebase analytics), during business transfers, and with Google Maps Platform APIs for location services."}
                        {section.id === 4 && "We may use cookies and similar tracking technologies to collect and store information. Specific details about cookie usage are outlined in our Cookie Notice."}
                        {section.id === 5 && "If you use social media logins (Facebook, Twitter), we receive profile information including your name, email, friends list, and profile picture from your social media provider."}
                        {section.id === 6 && "We keep your information only as long as necessary for the purposes outlined in this notice, unless required by law. Information is deleted or anonymized when no longer needed."}
                        {section.id === 7 && "We implement technical and organizational security measures to protect your information. However, no electronic transmission is 100% secure, so we cannot guarantee absolute security."}
                        {section.id === 8 && "We do not knowingly collect data from children under 18. If we learn that we have collected such information, we will promptly delete it from our records."}
                        {section.id === 9 && "You can review, change, or terminate your account at any time. You can withdraw consent, access your data, and request deletion subject to legal requirements."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* User Rights with Icon Cards */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl p-8 mb-16 border border-green-100">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-8">
            Your Rights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-800 mb-2 text-lg">Withdraw Consent</p>
              <p className="text-sm text-gray-600">You can withdraw consent for data processing at any time</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-800 mb-2 text-lg">Access Your Data</p>
              <p className="text-sm text-gray-600">Review and change information in your account</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-800 mb-2 text-lg">Delete Account</p>
              <p className="text-sm text-gray-600">Terminate your account and delete your information</p>
            </div>
          </div>
        </div>

        {/* Footer with Gradient Background */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We may update this privacy notice from time to time. The updated version will be effective as soon as it is accessible.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">app.gorkharide@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Last Updated: 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;