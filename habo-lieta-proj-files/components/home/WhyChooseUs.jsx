
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, MessageCircle, Zap, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Authentic Guarantee",
    description: "100% authentic sneakers sourced directly from authorized retailers",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Lesotho and South Africa",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: MessageCircle,
    title: "24/7 WhatsApp Support",
    description: "Instant support and order updates via WhatsApp",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment options for peace of mind",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Globe,
    title: "Wide Network",
    description: "Serving customers across two countries with local expertise",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Clock,
    title: "Custom Sourcing",
    description: "Can't find it? We'll source any sneaker you're looking for",
    color: "text-red-500",
    bgColor: "bg-red-50"
  }
];

export default function WhyChooseUs() {
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
            Why Choose HUB'O LIETA?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another sneaker store. We're your trusted partner in footwear.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
