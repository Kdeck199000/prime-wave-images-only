
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Clock, Globe, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "🇱🇸 Lesotho Office",
      details: [
        "Phone: +266 6230 9195",
        "Serving: Maseru & surrounding areas"
      ],
      action: () => window.open('https://wa.me/266623091095', '_blank'),
      actionText: "WhatsApp Lesotho"
    },
    {
      icon: MapPin,
      title: "🇿🇦 South Africa Office", 
      details: [
        "Phone: +27 695013319",
        "Serving: Major cities & provinces"
      ],
      action: () => window.open('https://wa.me/27695013319', '_blank'),
      actionText: "WhatsApp South Africa"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ]
    },
    {
      icon: Globe,
      title: "Coverage Area",
      details: [
        "🇱🇸 All major cities in Lesotho",
        "🇿🇦 All provinces in South Africa",
        "Fast delivery & reliable service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to find your perfect pair? Contact us via WhatsApp for instant support and personalized service.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase">{info.title}</h3>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      {info.action && (
                        <Button 
                          onClick={info.action}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {info.actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase">Follow Our Journey</h2>
          <p className="text-lg text-gray-600 mb-6">Stay up-to-date on new releases, promotions, and sneaker care tips.</p>
          <a href="https://www.instagram.com/hubo_lieta" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90">
              <Instagram className="w-5 h-5 mr-2" />
              @hubo_lieta on Instagram
            </Button>
          </a>
        </motion.div>
        
        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Need Immediate Help?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Our team is available on WhatsApp for instant support, order tracking, and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/266623091095?text=Hi! I need help with sneakers', '_blank')}
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Now - Lesotho
            </Button>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/27695013319?text=Hi! I need help with sneakers', '_blank')}
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Now - South Africa
            </Button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 uppercase">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">Do you guarantee authenticity?</h3>
                <p className="text-gray-600">Yes, 100%. All our sneakers are sourced from authorized retailers and come with authenticity guarantees.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">How long does delivery take?</h3>
                <p className="text-gray-600">Typically 2-5 business days within major cities, 3-7 days for remote areas. Custom orders may take longer.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">Can you find specific models?</h3>
                <p className="text-gray-600">Absolutely! If we don't have it in stock, we'll source it for you. Just send us the details via WhatsApp.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept bank transfers, mobile money, and cash on delivery for local orders.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">Do you offer exchanges?</h3>
                <p className="text-gray-600">Yes, we offer size exchanges within 7 days of purchase, provided the shoes are unworn.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase">How do I track my order?</h3>
                <p className="text-gray-600">We provide real-time updates via WhatsApp, including tracking numbers for all deliveries.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
