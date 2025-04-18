
import React from "react";
import { Shield, Check, Award, Users, Code, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary-500 to-primary-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cyber-pattern opacity-10"></div>
          <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission to Make the Web Safer</h1>
              <p className="text-xl opacity-90 mb-8">
                We're building sophisticated AI tools to detect and prevent phishing attacks before they harm your organization
              </p>
              <div className="flex items-center justify-center">
                <Shield className="h-24 w-24 text-secondary-400 animate-pulse-shield" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Our Story</h2>
              
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  NetGuard was founded in 2023 by a team of cybersecurity experts and AI researchers who recognized a growing problem: 
                  traditional phishing detection tools weren't keeping up with increasingly sophisticated attacks.
                </p>
                
                <p className="mt-6">
                  Our mission extends beyond just detection. We're committed to creating a safer digital environment through education, 
                  awareness, and powerful tools that empower people to navigate the web confidently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-primary-500">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 mb-4 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Eshwar</h3>
                <p className="text-foreground/70 mb-2">Backend Developer</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Arvapalli Greeshmanth</h3>
                <p className="text-foreground/70 mb-2">Frontend Developer</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 mb-4 flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Lalitha Sri Vidhya R</h3>
                <p className="text-foreground/70 mb-2">UI/UX Designer</p>
              </div>

              {/* Team Member 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 mb-4 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Sai AbhiRam</h3>
                <p className="text-foreground/70 mb-2">Team Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-primary-500">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-secondary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-foreground/70">We prioritize protection and privacy in everything we build, maintaining the highest security standards.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-secondary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-foreground/70">We pursue excellence in our technology, ensuring our solutions are reliable and effective.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Check className="h-12 w-12 text-secondary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-foreground/70">We build long-term relationships based on transparency and consistently delivering on our promises.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
