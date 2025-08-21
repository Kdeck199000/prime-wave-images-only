import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Service } from "@/entities/Service";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Brush, SprayCan, Palette } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Sparkles,
  Brush,
  SprayCan,
  Palette
};

export default function ServicesHighlight() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const serviceList = await Service.list('-created_date', 3);
      setServices(serviceList);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than just sales. We offer a full suite of services to keep your kicks fresh.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-80" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <img 
                      src={service.image_url}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-orange-500 mb-4" />
                      <h3 className="font-bold text-xl text-gray-900 mb-2 uppercase">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.short_description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link to={createPageUrl("Services")}>
            <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}