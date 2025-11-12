import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Shield, Users, Lock, Eye, FileText, UserCheck, Settings, AlertCircle, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState('store');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const tabs = [
    { id: 'store', label: 'Store', icon: <FileText className="w-4 h-4" /> },
    { id: 'user', label: 'User', icon: <Users className="w-4 h-4" /> },
    { id: 'driver', label: 'Driver', icon: <UserCheck className="w-4 h-4" /> }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 mt-36">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gorkha Ride Privacy Policy
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Key Points Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Summary of Key Points
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-3">{point.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg p-8 mb-8 text-dark">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Questions or Concerns?</h3>
              <p className="text-green-100">
                If you don't agree with our policies, please don't use our services.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 ">
              <Mail className="w-5 h-5" />
              <a href="mailto:app.gorkharide@gmail.com" className="underline hover:no-underline ">
                app.gorkharide@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Data Collection Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">Personal Information Types</h3>
              <div className="space-y-2">
                {dataTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-600 mb-4">Image Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">Registration Images</p>
                  <p className="text-sm text-gray-600">Stored for verification purposes</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Ride Documentation</p>
                  <p className="text-sm text-gray-600">Meter images and documents for calculation and verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Information</h2>
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-green-50 transition-colors rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-green-600">{section.icon}</div>
                    <span className="font-medium text-gray-800">{section.title}</span>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSection === section.id && (
                  <div className="px-4 pb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">
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

        {/* User Rights and Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Rights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Withdraw Consent</p>
                  <p className="text-sm text-gray-600">You can withdraw consent for data processing at any time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Access Your Data</p>
                  <p className="text-sm text-gray-600">Review and change information in your account</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">Delete Account</p>
                  <p className="text-sm text-gray-600">Terminate your account and delete your information</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
            <p className="text-gray-300 mb-4">
              We may update this privacy notice from time to time. The updated version will be effective as soon as it is accessible.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-sm">app.gorkharide@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Last Updated: 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;