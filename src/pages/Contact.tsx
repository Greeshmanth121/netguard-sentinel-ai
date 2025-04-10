
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, User, Building, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Your message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-6">Get in Touch</h1>
              <p className="text-foreground/80 mb-8">
                Have questions about our AI phishing detection platform? Ready to secure your organization? 
                Our team is here to help you protect against evolving cyber threats.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-foreground/70">info@netguard.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-100 p-2 rounded-full mr-4">
                    <Building className="h-6 w-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Headquarters</h3>
                    <p className="text-foreground/70">
                      123 Cyber Security Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-foreground/60 hover:text-secondary-500 transition-colors">Twitter</a>
                    <a href="#" className="text-foreground/60 hover:text-secondary-500 transition-colors">LinkedIn</a>
                    <a href="#" className="text-foreground/60 hover:text-secondary-500 transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="border-border/30 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input className="pl-10" placeholder="Your name" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input className="pl-10" placeholder="you@example.com" type="email" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Building className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input className="pl-10" placeholder="Your company" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <textarea 
                                  className="flex w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none min-h-[120px]"
                                  placeholder="How can we help you?"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full mt-2 bg-secondary-500 hover:bg-secondary-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
