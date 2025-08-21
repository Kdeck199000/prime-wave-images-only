import React, { useState, useEffect } from "react";
import { Service } from "@/entities/Service";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Brush, SprayCan, Palette, Calendar, ShoppingBag } from "lucide-react";

const iconMap = {
  ShoppingBag,
  Sparkles,
  Brush,
  SprayCan,
  Palette,
  Calendar
};

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const serviceList = await Service.list('-created_date');
      setServices(serviceList);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a complete care solution for your footwear. From sales and cleaning to customization and events, we've got you covered.
          </p>
        </motion.div>

        {loading ? (
          <div className="space-y-12">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-xl" />
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isReversed = index % 2 !== 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 bg-white p-8 rounded-2xl shadow-md`}
                >
                  <div className="w-full md:w-5/12">
                    <img 
                      src={service.image_url} 
                      alt={service.title} 
                      className="rounded-xl object-cover w-full h-80 shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-7/12">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.long_description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}