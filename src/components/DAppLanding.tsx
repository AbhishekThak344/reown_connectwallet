'use client'

import React from 'react';
import { Box, ArrowRight, BarChart3, Shield, Lock } from 'lucide-react';
import Connect from './Connect';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}


interface StatItem {
  value: string;
  label: string;
}

const DAppLanding: React.FC = () => {
  const features: Feature[] = [
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: "Real-time Analytics", 
      description: "Track your crypto assets with advanced analytics" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Secure Transactions", 
      description: "Enterprise-grade security for all operations" 
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      title: "Privacy First", 
      description: "Your data stays private and encrypted" 
    }
  ];

  const stats: StatItem[] = [
    { value: "$10M+", label: "Total Value Locked" },
    { value: "50K+", label: "Active Users" },
    { value: "1M+", label: "Transactions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Box className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">DApp Name</span>
          </div>
          <Connect />
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome to the Future of DeFi
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the next generation of decentralized applications with our secure and intuitive platform.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg px-8 py-3">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 border border-blue-600 hover:bg-blue-600/20 transition-all duration-300 rounded-lg px-8 py-3">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-blue-600/20 rounded-lg p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-900/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAppLanding;