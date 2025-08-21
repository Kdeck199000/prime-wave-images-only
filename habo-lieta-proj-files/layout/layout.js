
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Package, ShoppingBag, MessageCircle, Menu, X, Sparkles, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Home },
    { name: "Products", path: createPageUrl("Products"), icon: Package },
    { name: "Services", path: createPageUrl("Services"), icon: Sparkles }, // Added Services
    { name: "Custom Order", path: createPageUrl("CustomOrder"), icon: ShoppingBag },
    { name: "Contact", path: createPageUrl("Contact"), icon: MessageCircle },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69c99b8b9_habolieta23.png" 
                alt="HUB'O LIETA" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="hidden md:block">
              <Button 
                onClick={() => window.open('https://wa.me/266623091095', '_blank')}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${
                    isActive(item.path)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button 
                onClick={() => {
                  window.open('https://wa.me/266623091095', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8"> {/* Changed to md:grid-cols-4 */}
            <div className="md:col-span-2"> {/* Made this span 2 columns */}
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eec8ff072_habolietawhite.png" 
                alt="HUB'O LIETA" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300">
                Passion for durable footwear. Bringing you the latest in sneaker culture across Lesotho and South Africa.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3> {/* Added Follow Us section */}
              <div className="space-y-2 text-gray-300">
                <a href="https://www.instagram.com/hubo_lieta" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-300">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
               <h3 className="text-lg font-semibold mt-6 mb-4 uppercase">Contact Us</h3> {/* Moved and adjusted Contact Us */}
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  🇱🇸 <a href="tel:+266623091095" className="text-orange-400 hover:text-orange-300 ml-2">+266 6230 9195</a>
                </p>
                <p className="flex items-center">
                  🇿🇦 <a href="tel:+27695013319" className="text-orange-400 hover:text-orange-300 ml-2">+27 695013319</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HUB'O LIETA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
