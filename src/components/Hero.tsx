
import { Button } from '@/components/ui/button';
import { ShieldAlert, ShieldCheck, Mail, AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary-50 pt-16 pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary-500/10 text-secondary-500 rounded-full font-medium">
              AI-Powered Phishing Protection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Safeguard Your Organization from <span className="gradient-text">Advanced Phishing Threats</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">
              Our AI-driven platform detects and neutralizes sophisticated phishing attempts in real-time, protecting your business from data breaches and financial loss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary-500 hover:bg-secondary-600 text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-primary-500 text-primary-500">
                Request Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className={`w-8 h-8 rounded-full bg-primary-${200 + index * 100} flex items-center justify-center text-white text-xs font-bold`}>
                    {index === 3 ? '+' : ''}
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                Trusted by <span className="font-bold text-foreground">2,000+</span> organizations worldwide
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main dashboard preview */}
              <div className="glass-card p-4 shadow-2xl relative z-20 animate-float border-2 border-secondary-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-6 w-6 text-secondary-500" />
                    <span className="font-bold text-lg">NetGuard Dashboard</span>
                  </div>
                  <span className="text-sm bg-success/20 text-success px-2 py-1 rounded-full">Protected</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-background/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-400" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Account Security Alert</p>
                          <span className="text-destructive/80 text-sm">High Risk</span>
                        </div>
                        <p className="text-sm text-foreground/70 truncate">Your account security needs immediate attention...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <ShieldAlert className="h-5 w-5 text-warning" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Suspicious Login Attempt</p>
                          <span className="text-warning text-sm">Medium Risk</span>
                        </div>
                        <p className="text-sm text-foreground/70 truncate">Unusual login attempt detected from location...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary-500/20 p-3 rounded-lg border border-secondary-500/30">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Phishing Link Detected</p>
                          <span className="text-destructive text-sm">Blocked</span>
                        </div>
                        <p className="text-sm text-foreground/70 truncate">Malicious URL identified and neutralized...</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-foreground/60">Threat level</span>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 w-5 rounded-full ${i < 2 ? 'bg-secondary-500' : 'bg-foreground/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" variant="secondary" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-500 rounded-full opacity-20 filter blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-300 rounded-full opacity-20 filter blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-40 bg-secondary-500/30 rounded-full opacity-30 filter blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '98%', text: 'Detection Rate' },
            { number: '<5min', text: 'Response Time' },
            { number: '24/7', text: 'Monitoring' },
            { number: '10k+', text: 'Threats Blocked Monthly' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl border border-white/5 interactive-card animate-fade-in text-center"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <h3 className="text-3xl font-bold gradient-text">{stat.number}</h3>
              <p className="text-foreground/70 mt-2">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
