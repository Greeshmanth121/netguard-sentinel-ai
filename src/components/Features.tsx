
import { 
  AlertCircle, 
  ShieldAlert, 
  Activity,
  Link,
  Mail,
  BarChart3,
  Shield,
  RefreshCcw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-secondary-500" />,
      title: 'Real-time Threat Detection',
      description: 'Identify phishing attempts as they happen with our advanced AI-powered detection engine.',
      delay: 0
    },
    {
      icon: <Mail className="h-10 w-10 text-secondary-500" />,
      title: 'Email Protection',
      description: 'Scan incoming emails for malicious content, suspicious links, and social engineering tactics.',
      delay: 0.1
    },
    {
      icon: <Link className="h-10 w-10 text-secondary-500" />,
      title: 'URL Analysis',
      description: 'Deep inspection of URLs to identify fake websites, malicious redirects, and credential harvesters.',
      delay: 0.2
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-secondary-500" />,
      title: 'Automated Alerts',
      description: 'Receive instant notifications about potential threats with clear remediation instructions.',
      delay: 0.3
    },
    {
      icon: <Shield className="h-10 w-10 text-secondary-500" />,
      title: 'User Education',
      description: 'Train employees to recognize phishing attempts through simulated attacks and educational resources.',
      delay: 0.4
    },
    {
      icon: <Activity className="h-10 w-10 text-secondary-500" />,
      title: 'Threat Intelligence',
      description: 'Stay protected against the latest threats with continuously updated intelligence feeds.',
      delay: 0.5
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-secondary-500" />,
      title: 'Comprehensive Analytics',
      description: 'Track and analyze security performance with detailed reports and actionable insights.',
      delay: 0.6
    },
    {
      icon: <RefreshCcw className="h-10 w-10 text-secondary-500" />,
      title: 'Automated Response',
      description: 'Configure automated response actions to contain threats before they cause damage.',
      delay: 0.7
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-primary-50 to-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="gradient-text">Phishing Protection</span> Features
          </h2>
          <p className="text-foreground/70 text-lg">
            Our comprehensive solution protects your organization at every level with cutting-edge AI technology and security expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="interactive-card bg-card border border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-radial from-secondary-500/20 to-transparent opacity-70"></div>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
