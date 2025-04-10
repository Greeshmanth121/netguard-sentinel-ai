
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white" id="pricing">
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Organization?</h2>
          <p className="text-white/80 mb-8">
            Choose the plan that fits your needs and start protecting your business from advanced phishing threats today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-600/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-secondary-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-1">$299<span className="text-lg font-normal text-white/70">/mo</span></div>
              <p className="text-white/70 text-sm mb-4">For small teams getting started</p>
              
              <ul className="space-y-3 text-sm text-white/80 mb-6">
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Up to 50 users
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Email protection
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Basic URL scanning
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  8/5 Support
                </li>
              </ul>
              
              <Button className="w-full bg-white text-primary-600 hover:bg-white/90">
                Start Trial
              </Button>
            </div>
            
            <div className="bg-secondary-500 rounded-xl p-6 border border-secondary-400 relative transform scale-105 shadow-xl">
              <div className="absolute -top-3 inset-x-0 text-center">
                <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-3xl font-bold mb-1">$599<span className="text-lg font-normal text-white/70">/mo</span></div>
              <p className="text-white/70 text-sm mb-4">For growing businesses</p>
              
              <ul className="space-y-3 text-sm text-white/90 mb-6">
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  Up to 250 users
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  Advanced email protection
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  Deep URL & content analysis
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  User training modules
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  24/7 Support
                </li>
              </ul>
              
              <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 border border-white/30">
                Get Started
              </Button>
            </div>
            
            <div className="bg-primary-600/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-secondary-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-1">Custom<span className="text-lg font-normal text-white/70"></span></div>
              <p className="text-white/70 text-sm mb-4">For large organizations</p>
              
              <ul className="space-y-3 text-sm text-white/80 mb-6">
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Unlimited users
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Enterprise-grade security
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  API integrations
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondary-500/20 flex items-center justify-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                  </div>
                  Dedicated account manager
                </li>
              </ul>
              
              <Button className="w-full bg-white text-primary-600 hover:bg-white/90">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-16 bg-primary-600/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Stay Updated on Cyber Threats</h3>
              <p className="text-white/80">
                Subscribe to our newsletter to receive the latest insights on phishing trends and security best practices.
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pl-10 pr-24"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-secondary-500 hover:bg-secondary-600 h-8 text-xs px-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-secondary-500" />
              <span className="text-xl font-bold">NetGuard</span>
            </div>
            <p className="text-white/60 text-sm">
              Protecting organizations from advanced phishing threats with AI-powered detection and response.
            </p>
          </div>
          
          {[
            { 
              title: 'Product', 
              links: ['Features', 'How It Works', 'Pricing', 'FAQ', 'API'] 
            },
            { 
              title: 'Company', 
              links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'] 
            },
            { 
              title: 'Resources', 
              links: ['Documentation', 'Help Center', 'Threat Reports', 'Webinars', 'Partners'] 
            },
          ].map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/70 hover:text-secondary-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 NetGuard Sentinel AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-secondary-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-secondary-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-secondary-500 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
