
import React from "react";
import { Check, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  recommended = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  buttonText: string; 
  recommended?: boolean;
}) => (
  <Card className={`border-border/30 shadow-lg transition-all hover:shadow-xl ${recommended ? 'ring-2 ring-secondary-500 scale-105' : ''}`}>
    <CardHeader>
      {recommended && (
        <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-secondary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          RECOMMENDED
        </div>
      )}
      <CardTitle className="text-2xl">{title}</CardTitle>
      <div>
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-foreground/70">/month</span>}
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-secondary-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        className={`w-full ${recommended ? 'bg-secondary-500 hover:bg-secondary-600' : ''}`}
        variant={recommended ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-500 to-primary-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern opacity-10"></div>
          <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-16 w-16 text-secondary-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl opacity-90 mb-4">
                Choose the plan that's right for your organization
              </p>
              <p className="text-white/70">
                All plans include a 14-day free trial. No credit card required to start.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="relative z-10 -mt-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingTier
                title="Starter"
                price="$49"
                description="Perfect for small teams and startups"
                features={[
                  "Up to 10 team members",
                  "Basic AI phishing detection",
                  "500 URL scans per month",
                  "Email alerts",
                  "7-day history retention",
                  "Standard support"
                ]}
                buttonText="Start Free Trial"
              />
              
              <PricingTier
                title="Professional"
                price="$99"
                description="Advanced protection for growing organizations"
                features={[
                  "Up to 50 team members",
                  "Advanced AI detection engine",
                  "2,000 URL scans per month",
                  "Real-time alerts",
                  "30-day history retention",
                  "Priority support",
                  "Team management dashboard",
                  "API access"
                ]}
                buttonText="Start Free Trial"
                recommended={true}
              />
              
              <PricingTier
                title="Enterprise"
                price="Custom"
                description="Maximum security for large organizations"
                features={[
                  "Unlimited team members",
                  "Enterprise-grade AI detection",
                  "Unlimited URL scans",
                  "Custom alert workflows",
                  "365-day history retention",
                  "24/7 priority support",
                  "Advanced analytics",
                  "SIEM integration",
                  "Custom security policies",
                  "Dedicated customer success manager"
                ]}
                buttonText="Contact Sales"
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary-500">Can I change plans later?</h3>
                <p className="text-foreground/70">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary-500">What happens when I reach my scan limit?</h3>
                <p className="text-foreground/70">
                  You'll receive a notification when you reach 80% of your monthly scan limit. Additional scans are 
                  available for purchase or you can upgrade to a higher plan.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary-500">Is there a contract or commitment?</h3>
                <p className="text-foreground/70">
                  No long-term contracts. Our plans are month-to-month, and you can cancel at any time.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary-500">Do you offer discounts for nonprofits?</h3>
                <p className="text-foreground/70">
                  Yes, we offer special pricing for nonprofits and educational institutions. Please contact our sales team.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-400 to-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to protect your organization?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Start your 14-day free trial today and see how our AI-powered phishing detection can help keep your team safe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
