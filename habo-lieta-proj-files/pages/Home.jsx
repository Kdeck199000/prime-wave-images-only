import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Product } from "@/entities/Product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Truck, Shield, MessageCircle, Zap, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesHighlight from "../components/home/ServicesHighlight";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProducts />
      <ServicesHighlight />
      <WhyChooseUs />
      
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Tell us exactly what you want and we'll source it for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("CustomOrder")}>
                <Button size="lg" variant="outline" className="bg-white text-orange-500 hover:bg-gray-100 border-white">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Custom Order
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/266623091095', '_blank')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}