
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle, CheckCircle, Mail, Scan } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Enhanced email analysis function using AI-like heuristics
const analyzeEmail = (email) => {
  // Convert to lowercase for better analysis
  const emailContent = email.toLowerCase();
  
  // Common indicators of fake/spam emails
  const suspiciousPatterns = [
    // Urgency and pressure tactics
    { pattern: /(urgent|immediate action|act now|limited time)/i, weight: 0.7, category: "urgency" },
    // Requests for personal information
    { pattern: /(verify your account|confirm your details|update your information|banking details)/i, weight: 0.8, category: "personal info" },
    // Generic greetings
    { pattern: /^(dear user|dear customer|valued customer|dear account holder)/i, weight: 0.5, category: "generic greeting" },
    // Suspicious offers
    { pattern: /(free money|you('ve| have) won|lottery|prize|million dollars|inheritance)/i, weight: 0.85, category: "suspicious offer" },
    // Poor grammar and spelling
    { pattern: /(kindly|do needful|revert back|please to|very urgent)/i, weight: 0.6, category: "grammar" },
    // Threatening language
    { pattern: /(account.*(suspend|terminat|block|cancel)|immediate action required|failure to respond)/i, weight: 0.75, category: "threatening" },
    // Attachments reference
    { pattern: /(see attached|check attachment|open the attached)/i, weight: 0.5, category: "attachment" },
    // Unusual sender domains
    { pattern: /@(mail\.ru|yandex\.ru|qq\.com|126\.com)/i, weight: 0.4, category: "unusual domain" },
    // Request to click links
    { pattern: /(click here|follow this link|login here|sign in here|verify here)/i, weight: 0.6, category: "suspicious link" },
    // Unprofessional tone
    { pattern: /(my dear|hello friend|dearest|sweetie|darling)/i, weight: 0.7, category: "unprofessional" },
  ];
  
  // Legitimate email indicators
  const legitimatePatterns = [
    // Personalized greeting
    { pattern: /((hi|hello|dear) [a-z]+,)/i, weight: 0.6, category: "personalized greeting" },
    // Professional signature
    { pattern: /(regards|sincerely|best wishes|thank you|thanks).{0,30}[a-z]+ [a-z]+\s*$/i, weight: 0.5, category: "signature" },
    // Clear contact information
    { pattern: /((tel|phone|contact|call)[\s\S]{0,20}\d{3}[-\.\s]?\d{3}[-\.\s]?\d{4})/i, weight: 0.4, category: "contact info" },
    // Professional email domains
    { pattern: /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|company\.com|organization\.org)/i, weight: 0.3, category: "common domain" },
    // Clear unsubscribe option
    { pattern: /(unsubscribe|opt[- ]out|stop receiving|manage preferences)/i, weight: 0.4, category: "unsubscribe option" },
  ];
  
  // Calculate suspicion score
  let suspicionScore = 0;
  let totalSuspicionWeight = 0;
  let suspiciousFeatures = [];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.pattern.test(emailContent)) {
      suspicionScore += pattern.weight;
      totalSuspicionWeight += pattern.weight;
      suspiciousFeatures.push(pattern.category);
    } else {
      totalSuspicionWeight += pattern.weight * 0.1; // Still count non-matches but with lower weight
    }
  }
  
  // Calculate legitimacy score
  let legitimacyScore = 0;
  let totalLegitimacyWeight = 0;
  let legitimateFeatures = [];
  
  for (const pattern of legitimatePatterns) {
    if (pattern.pattern.test(emailContent)) {
      legitimacyScore += pattern.weight;
      totalLegitimacyWeight += pattern.weight;
      legitimateFeatures.push(pattern.category);
    } else {
      totalLegitimacyWeight += pattern.weight * 0.1; // Still count non-matches but with lower weight
    }
  }
  
  // Normalize scores
  const normalizedSuspicionScore = suspicionScore / totalSuspicionWeight;
  const normalizedLegitimacyScore = legitimacyScore / totalLegitimacyWeight;
  
  // Make decision based on the scores
  const isLegitimate = normalizedLegitimacyScore > normalizedSuspicionScore;
  const confidence = Math.abs(normalizedLegitimacyScore - normalizedSuspicionScore) * 100;
  
  // Generate an explanation based on detected patterns
  let reason = "";
  if (!isLegitimate && suspiciousFeatures.length > 0) {
    // Get unique categories
    const uniqueCategories = [...new Set(suspiciousFeatures)];
    reason = `Contains suspicious elements: ${uniqueCategories.join(", ")}`;
  } else if (isLegitimate && legitimateFeatures.length > 0) {
    // Get unique categories
    const uniqueCategories = [...new Set(legitimateFeatures)];
    reason = `Contains legitimate elements: ${uniqueCategories.join(", ")}`;
  }
  
  return { 
    isLegitimate, 
    confidence: Math.min(Math.round(confidence), 99), // Cap at 99% to never claim 100% certainty
    reason
  };
};

const EmailDetection = () => {
  const [emailContent, setEmailContent] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const handleScan = () => {
    if (!emailContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter an email content to scan",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    // Simulate a scan delay for better UX
    setTimeout(() => {
      const result = analyzeEmail(emailContent);
      setScanResult(result);
      setIsScanning(false);
      
      toast({
        title: result.isLegitimate ? "Email Analysis Complete" : "Warning: Potential Fake Email",
        description: result.isLegitimate 
          ? `The email appears legitimate with ${result.confidence}% confidence` 
          : `The email may be fake or spam (${result.confidence}% confidence)`,
        variant: result.isLegitimate ? "default" : "destructive",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Email Content Detection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary-500" />
                Email Content Scanner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email-content" className="text-sm font-medium">
                    Paste email content below:
                  </label>
                  <textarea
                    id="email-content"
                    placeholder="Paste the full email content here..."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                
                <Button onClick={handleScan} disabled={isScanning} className="w-full">
                  {isScanning ? (
                    <span className="flex items-center">
                      <Scan className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Shield className="mr-2 h-4 w-4" /> Analyze Email
                    </span>
                  )}
                </Button>
                
                {scanResult && (
                  <Alert variant={scanResult.isLegitimate ? "default" : "destructive"}>
                    {scanResult.isLegitimate ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {scanResult.isLegitimate 
                        ? "Legitimate Email Detected" 
                        : "Potential Fake/Spam Email"}
                    </AlertTitle>
                    <AlertDescription>
                      {scanResult.isLegitimate 
                        ? `This email appears to be legitimate with ${scanResult.confidence}% confidence.` 
                        : `This email shows signs of being potentially fake or spam with ${scanResult.confidence}% confidence.`}
                      {scanResult.reason && <p className="mt-1">{scanResult.reason}</p>}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tips to Identify Fake Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-secondary-500 mt-0.5" />
                  <span>Check for spelling and grammar errors</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-secondary-500 mt-0.5" />
                  <span>Be wary of urgent requests for personal information</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-secondary-500 mt-0.5" />
                  <span>Verify sender email addresses carefully</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-secondary-500 mt-0.5" />
                  <span>Don't click on suspicious links or attachments</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-secondary-500 mt-0.5" />
                  <span>Be skeptical of offers that seem too good to be true</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailDetection;
