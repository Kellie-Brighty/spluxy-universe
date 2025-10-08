import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
  ClockCircleOutlined, 
  SafetyOutlined, 
  StarOutlined,
  UploadOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  LockOutlined,
  ThunderboltOutlined,
  MessageOutlined,
  RocketOutlined,
  DollarCircleOutlined,

  SendOutlined,
  PlusOutlined,
  CameraOutlined,
  GlobalOutlined,
  AudioOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import SpluxyButton from '../components/Button/SpluxyButton';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {


  return (
    <div className="min-h-screen">
      {/* Hero Section with AI Assistant */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'), linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-24">
          <Row gutter={[100, 80]} align="middle" justify="center">
            <Col xs={24} lg={24} className="flex justify-center">
              <div className="text-white flex flex-col items-center w-full max-w-5xl">
                {/* Desktop: Lovable-style AI Interface */}
                <div className="hidden lg:block w-full max-w-4xl mb-16">
                  <div className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    {/* Hero Content */}
                    <div className="relative z-10 p-8 pt-12">
                      {/* Call to Action Button */}
                      <div className="flex justify-center mb-8">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-4">
                          <span className="text-white font-semibold text-lg">Introducing Spluxy AI</span>
                        </div>
                      </div>
                      
                      {/* Main Title */}
                      <div className="text-center mb-8">
                        <h2 className="text-white text-5xl font-bold mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Book Your Laundry</h2>
                        <p className="text-white/90 text-xl" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Create laundry orders by chatting with AI</p>
                      </div>
                    </div>

                    {/* AI Chat Input Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-black/20 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                        {/* Chat Input */}
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex-1 relative">
                            <input 
                              type="text" 
                              placeholder="Ask me about laundry services..."
                              className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-6 py-4 text-base focus:outline-none rounded-full border border-white/20"
                            />
                          </div>
                          <button className="w-12 h-12 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                            <SendOutlined className="text-white text-lg" />
                          </button>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <PlusOutlined className="text-white text-base" />
                            </button>
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <CameraOutlined className="text-white text-base" />
                            </button>
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <GlobalOutlined className="text-white text-base" />
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <AudioOutlined className="text-white text-base" />
                            </button>
                            <button className="w-12 h-12 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                              <ArrowUpOutlined className="text-white text-lg" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile: Lovable-style AI Interface */}
                <div className="lg:hidden w-full max-w-md">
                  {/* Mobile AI Chat Interface - Transparent Style */}
                  <div className="relative min-h-[400px] rounded-2xl overflow-hidden">
                    {/* Hero Content */}
                    <div className="relative z-10 p-6 pt-8">
                      {/* Call to Action Button */}
                      <div className="flex justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3">
                          <span className="text-white font-semibold text-sm">Introducing Spluxy AI</span>
                        </div>
                      </div>
                      
                      {/* Main Title */}
                      <div className="text-center mb-6">
                        <h2 className="text-white text-3xl font-bold mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Book Your Laundry</h2>
                        <p className="text-white/90 text-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Create laundry orders by chatting with AI</p>
                      </div>
                    </div>

                    {/* AI Chat Input Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        {/* Chat Input */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-1 relative">
                            <input 
                              type="text" 
                              placeholder="Ask me about laundry services..."
                              className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-4 py-3 text-sm focus:outline-none rounded-full border border-white/20"
                            />
                          </div>
                          <button className="w-10 h-10 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                            <SendOutlined className="text-white text-sm" />
                          </button>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <PlusOutlined className="text-white text-sm" />
                            </button>
                            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <CameraOutlined className="text-white text-sm" />
                            </button>
                            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <GlobalOutlined className="text-white text-sm" />
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                              <AudioOutlined className="text-white text-sm" />
                            </button>
                            <button className="w-10 h-10 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                              <ArrowUpOutlined className="text-white text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile & Desktop: Spluxy Features */}
                <div className="flex flex-col items-center space-y-6 w-full mt-16">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 w-full max-w-md">
                    <div className="w-12 h-12 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                      <MessageOutlined className="text-white text-xl" />
                    </div>
                    <div>
                      <span className="text-white text-lg font-semibold block">Smart Booking</span>
                      <span className="text-white/70 text-sm">Intelligent scheduling system</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 w-full max-w-md">
                    <div className="w-12 h-12 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                      <RocketOutlined className="text-white text-xl" />
                    </div>
                    <div>
                      <span className="text-white text-lg font-semibold block">Fast Service</span>
                      <span className="text-white/70 text-sm">Quick turnaround times</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 w-full max-w-md">
                    <div className="w-12 h-12 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                      <DollarCircleOutlined className="text-white text-xl" />
                    </div>
                    <div>
                      <span className="text-white text-lg font-semibold block">Fair Pricing</span>
                      <span className="text-white/70 text-sm">Transparent cost structure</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center drop-shadow-2xl">
            <div className="w-2 h-4 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Title level={2} className="text-5xl font-bold mb-6">
              Why Choose Spluxy?
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of laundry services with our innovative platform
            </Paragraph>
          </div>

          {/* Feature 1 - Fast Service */}
          <div className="mb-32">
            <Row gutter={[60, 40]} align="middle">
              <Col xs={24} lg={12}>
                <div className="pr-0 lg:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-spluxy-primary rounded-2xl mb-6">
                    <ClockCircleOutlined className="text-white text-2xl" />
                  </div>
                  <Title level={2} className="text-4xl font-bold mb-6 text-gray-900">
                    Fast Service
                  </Title>
                  <Paragraph className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Quick pickup and delivery with real-time tracking. Get your laundry done in record time with our efficient service network.
                  </Paragraph>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircleOutlined className="text-green-600 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">Same-day pickup available</span>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Fast laundry service"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                    <ClockCircleOutlined className="text-white text-3xl" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Feature 2 - Secure & Safe */}
          <div className="mb-32">
            <Row gutter={[60, 40]} align="middle">
              <Col xs={24} lg={12} order={2}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Secure laundry handling"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                    <SafetyOutlined className="text-white text-3xl" />
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12} order={1}>
                <div className="pl-0 lg:pl-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-spluxy-primary rounded-2xl mb-6">
                    <SafetyOutlined className="text-white text-2xl" />
                  </div>
                  <Title level={2} className="text-4xl font-bold mb-6 text-gray-900">
                    Secure & Safe
                  </Title>
                  <Paragraph className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Your clothes are handled with care and professionalism. We use advanced tracking and secure storage systems.
                  </Paragraph>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <LockOutlined className="text-blue-600 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">100% secure handling</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Feature 3 - Quality Guaranteed */}
          <div className="mb-20">
            <Row gutter={[60, 40]} align="middle">
              <Col xs={24} lg={12}>
                <div className="pr-0 lg:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-spluxy-primary rounded-2xl mb-6">
                    <StarOutlined className="text-white text-2xl" />
                  </div>
                  <Title level={2} className="text-4xl font-bold mb-6 text-gray-900">
                    Quality Guaranteed
                  </Title>
                  <Paragraph className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Professional cleaning with satisfaction guarantee. We use premium detergents and state-of-the-art equipment.
                  </Paragraph>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <ThunderboltOutlined className="text-yellow-600 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">Premium quality guarantee</span>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Quality laundry service"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-spluxy-primary rounded-full flex items-center justify-center shadow-lg">
                    <StarOutlined className="text-white text-3xl" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spluxy-primary/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spluxy-primary to-orange-500 rounded-2xl mb-8 shadow-2xl">
              <RocketOutlined className="text-white text-3xl" />
            </div>
            <Title level={2} className="text-6xl font-bold mb-8 text-gray-900 leading-tight">
              How It Works
            </Title>
            <Paragraph className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the future of laundry service with our revolutionary AI-powered platform designed for ultimate convenience
            </Paragraph>
          </div>

          {/* Premium Process Flow */}
          <div className="relative">
            {/* Sophisticated Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-spluxy-primary/40 to-transparent transform -translate-y-1/2 z-0 rounded-full"></div>
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-spluxy-primary/20 to-transparent transform -translate-y-1/2 z-0"></div>
            
            <Row gutter={[80, 100]} className="relative z-10">
              {/* Step 1 - Premium */}
              <Col xs={24} lg={8}>
                <div className="text-center relative group">
                  <div className="relative mb-12 transform group-hover:scale-110 transition-all duration-500">
                    <div className="w-44 h-44 bg-gradient-to-br from-spluxy-primary via-orange-500 to-orange-600 rounded-4xl flex items-center justify-center mx-auto shadow-3xl hover:shadow-4xl transition-all duration-500 relative overflow-hidden">
                      <UploadOutlined className="text-white text-6xl relative z-10" />
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-spluxy-primary transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-spluxy-primary font-black text-2xl">1</span>
                    </div>
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-spluxy-primary/30 to-orange-500/30 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  </div>
                  <Title level={3} className="text-4xl font-black mb-8 text-gray-900 leading-tight">
                    Upload & Book
                  </Title>
                  <Paragraph className="text-gray-600 mb-10 leading-relaxed text-xl font-light">
                    Upload photos of your clothes and book a pickup time. Get instant pricing and scheduling with our revolutionary AI-powered system that learns your preferences.
                  </Paragraph>
                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 hover:border-spluxy-primary/30 group-hover:scale-105">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                        <CheckCircleOutlined className="text-green-600 text-2xl" />
                      </div>
                      <span className="text-lg font-bold text-gray-800">Instant AI pricing</span>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Step 2 - Premium */}
              <Col xs={24} lg={8}>
                <div className="text-center relative group">
                  <div className="relative mb-12 transform group-hover:scale-110 transition-all duration-500">
                    <div className="w-44 h-44 bg-gradient-to-br from-spluxy-primary via-orange-500 to-orange-600 rounded-4xl flex items-center justify-center mx-auto shadow-3xl hover:shadow-4xl transition-all duration-500 relative overflow-hidden">
                      <ClockCircleOutlined className="text-white text-6xl relative z-10" />
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-spluxy-primary transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-spluxy-primary font-black text-2xl">2</span>
                    </div>
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-spluxy-primary/30 to-orange-500/30 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  </div>
                  <Title level={3} className="text-4xl font-black mb-8 text-gray-900 leading-tight">
                    We Pick Up
                  </Title>
                  <Paragraph className="text-gray-600 mb-10 leading-relaxed text-xl font-light">
                    Our professional team picks up your laundry at the scheduled time with secure handling, real-time tracking, and complete transparency throughout the process.
                  </Paragraph>
                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 hover:border-spluxy-primary/30 group-hover:scale-105">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
                        <ClockCircleOutlined className="text-blue-600 text-2xl" />
                      </div>
                      <span className="text-lg font-bold text-gray-800">Guaranteed on-time pickup</span>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Step 3 - Premium */}
              <Col xs={24} lg={8}>
                <div className="text-center relative group">
                  <div className="relative mb-12 transform group-hover:scale-110 transition-all duration-500">
                    <div className="w-44 h-44 bg-gradient-to-br from-spluxy-primary via-orange-500 to-orange-600 rounded-4xl flex items-center justify-center mx-auto shadow-3xl hover:shadow-4xl transition-all duration-500 relative overflow-hidden">
                      <PhoneOutlined className="text-white text-6xl relative z-10" />
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-spluxy-primary transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-spluxy-primary font-black text-2xl">3</span>
                    </div>
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-spluxy-primary/30 to-orange-500/30 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  </div>
                  <Title level={3} className="text-4xl font-black mb-8 text-gray-900 leading-tight">
                    Track & Deliver
                  </Title>
                  <Paragraph className="text-gray-600 mb-10 leading-relaxed text-xl font-light">
                    Track your order in real-time and receive clean clothes delivered to your door with complete transparency, quality assurance, and satisfaction guarantee.
                  </Paragraph>
                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 hover:border-spluxy-primary/30 group-hover:scale-105">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
                        <PhoneOutlined className="text-purple-600 text-2xl" />
                      </div>
                      <span className="text-lg font-bold text-gray-800">Real-time tracking</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Premium Features Grid */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spluxy-primary to-orange-500 rounded-2xl mb-6 shadow-xl">
                <StarOutlined className="text-white text-2xl" />
              </div>
              <Title level={3} className="text-4xl font-black text-gray-900 mb-6">
                Why Choose Spluxy?
              </Title>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Experience the difference with our premium laundry service powered by cutting-edge technology
              </Paragraph>
            </div>
            
            <Row gutter={[40, 40]}>
              <Col xs={24} md={8}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-4xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center group border border-gray-200 hover:border-spluxy-primary/30 hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <CheckCircleOutlined className="text-green-600 text-4xl" />
                  </div>
                  <Title level={4} className="text-2xl font-black mb-6 text-gray-900">Easy Booking</Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-lg font-light">
                    Book in under 2 minutes with our streamlined process and AI-powered scheduling system that adapts to your preferences
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-4xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center group border border-gray-200 hover:border-spluxy-primary/30 hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <ClockCircleOutlined className="text-blue-600 text-4xl" />
                  </div>
                  <Title level={4} className="text-2xl font-black mb-6 text-gray-900">Flexible Timing</Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-lg font-light">
                    Choose pickup and delivery times that work perfectly with your schedule, with 24/7 availability and instant booking
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-4xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center group border border-gray-200 hover:border-spluxy-primary/30 hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <PhoneOutlined className="text-purple-600 text-4xl" />
                  </div>
                  <Title level={4} className="text-2xl font-black mb-6 text-gray-900">Live Updates</Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-lg font-light">
                    Get real-time notifications and tracking updates about your order status with complete transparency and peace of mind
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-spluxy-primary via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-2xl">
            <RocketOutlined className="text-white text-3xl" />
          </div>
          
          <Title level={2} className="text-white text-5xl font-black mb-8 leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Ready to Experience Modern Laundry?
          </Title>
          
          <Paragraph className="text-white/95 text-2xl mb-12 leading-relaxed font-light max-w-3xl mx-auto" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
            Join thousands of satisfied customers who trust Spluxy for their laundry needs
          </Paragraph>
          
          {/* Enhanced Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <SpluxyButton 
              variant="filled"
              size="large"
              className="bg-white text-spluxy-primary hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-bold text-lg px-12 py-6 rounded-2xl"
            >
              Get Started Today
            </SpluxyButton>
            
            {/* Secondary CTA */}
            <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30 hover:border-white/50 text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircleOutlined className="text-green-300 text-xl" />
              <span className="text-sm font-medium">Free pickup & delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <SafetyOutlined className="text-blue-300 text-xl" />
              <span className="text-sm font-medium">100% secure handling</span>
            </div>
            <div className="flex items-center gap-2">
              <StarOutlined className="text-yellow-300 text-xl" />
              <span className="text-sm font-medium">Quality guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
