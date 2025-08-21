import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69c99b8b9_habolieta23.png" 
              alt="HUB'O LIETA" 
              className="h-32 w-auto mx-auto"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <span className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Passion for Durable Footwear
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight uppercase"
          >
            Step Into
            <span className="text-orange-500 block">Street Culture</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From classic Air Forces to the latest drops, we bring you authentic sneakers across Lesotho and South Africa. If we don't have it, we'll find it for you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={createPageUrl("Products")}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("CustomOrder")}>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 text-lg">
                Custom Order
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
          >
            <div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">WhatsApp Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Shoe Graphics */}
      <motion.div 
        animate={{ 
          y: [-10, 10, -10],
          rotate: [-5, 5, -5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-10 opacity-10 hidden lg:block"
      >
        <div className="w-32 h-32 bg-orange-500 rounded-full" />
      </motion.div>
      
      <motion.div 
        animate={{ 
          y: [10, -10, 10],
          rotate: [5, -5, 5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-10 opacity-10 hidden lg:block"
      >
        <div className="w-24 h-24 bg-black rounded-full" />
      </motion.div>
    </section>
  );
}