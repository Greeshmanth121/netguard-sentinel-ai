
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-secondary-500 animate-pulse-shield" />
              <span className="text-xl font-bold text-primary-500">NetGuard</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#features" className="text-foreground/80 hover:text-secondary-500 transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-secondary-500 transition-colors">How It Works</a>
              <a href="#pricing" className="text-foreground/80 hover:text-secondary-500 transition-colors">Pricing</a>
              <Button variant="outline" className="border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white transition-colors">Log In</Button>
              <Button className="bg-secondary-500 text-white hover:bg-secondary-600">Get Started</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-secondary-500 hover:bg-background/50 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-secondary-500 transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-secondary-500 transition-colors">How It Works</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-secondary-500 transition-colors">Pricing</a>
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              <Button variant="outline" className="border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white transition-colors">Log In</Button>
              <Button className="bg-secondary-500 text-white hover:bg-secondary-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
