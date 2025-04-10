
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Shield, Mail, Lock, User, Building } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const signupSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  organization: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }).optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      organization: "",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Store user in localStorage (just for demo purposes)
      localStorage.setItem("user", JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        organization: data.organization,
      }));
      
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-secondary-500" />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-primary-500">Join NetGuard</h1>
            <p className="mt-2 text-foreground/80">
              Create your account to start protecting against phishing attacks
            </p>
          </div>
          
          <Card className="border-border/30 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-10" placeholder="John Doe" {...field} />
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-10" placeholder="••••••••" type="password" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Use at least 8 characters with letters and numbers
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization (Optional)</FormLabel>
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
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary-500 hover:bg-secondary-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary-500 hover:text-secondary-600">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <Alert className="mt-8">
            <AlertTitle>Enterprise Plan Available</AlertTitle>
            <AlertDescription>
              Looking for advanced security features for your entire team?{" "}
              <a href="/contact" className="text-secondary-500 hover:text-secondary-600 underline">
                Contact us
              </a>{" "}
              to learn about our enterprise plans.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Signup;
