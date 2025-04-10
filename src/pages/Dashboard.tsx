
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Enhanced URL scanning function with more accurate detection
const analyzeUrl = (url: string): { isSafe: boolean; confidence: number; reason?: string } => {
  // Convert to lowercase for easier pattern matching
  const lowerCaseUrl = url.toLowerCase();
  
  // Common phishing indicators
  const phishingPatterns = [
    { pattern: /^https?:\/\/[^.]+\.[^.]+\.[^/]+\//, weight: 0.5 }, // Suspicious subdomain structure
    { pattern: /(password|login|signin|account|verify|secure|banking)/i, weight: 0.3 }, // Sensitive keywords
    { pattern: /\.(tk|ml|ga|cf|gq|pw)\//, weight: 0.7 }, // Common free domains used in phishing
    { pattern: /(paypal|apple|microsoft|google|facebook|amazon|netflix)\w+\./i, weight: 0.8 }, // Brand name with additions
    { pattern: /[^\w.-]/, weight: 0.4 }, // Special characters in domain (excluding dots and hyphens)
    { pattern: /[0-9]{4,}/, weight: 0.3 }, // Long numeric sequences
    { pattern: /^https?:\/\/\d+\.\d+\.\d+\.\d+/, weight: 0.6 }, // IP address instead of domain
    { pattern: /^https?:\/\/.*@/, weight: 0.9 }, // URL with @ symbol
  ];
  
  // Legitimate URL indicators
  const safePatterns = [
    { pattern: /^https:\/\/(www\.)?(google|microsoft|apple|amazon|facebook|twitter|github|linkedin)\.(com|org|net)\/?$/i, weight: 0.9 },
    { pattern: /^https:\/\//, weight: 0.3 }, // HTTPS is safer than HTTP
    { pattern: /^https:\/\/.*\.gov\//i, weight: 0.7 }, // Government sites
    { pattern: /^https:\/\/.*\.edu\//i, weight: 0.6 }, // Educational sites
  ];
  
  // Calculate phishing score
  let phishingScore = 0;
  let totalPhishingWeight = 0;
  let matchedPhishingPatterns = [];
  
  for (const pattern of phishingPatterns) {
    if (pattern.pattern.test(lowerCaseUrl)) {
      phishingScore += pattern.weight;
      totalPhishingWeight += pattern.weight;
      matchedPhishingPatterns.push(pattern);
    } else {
      totalPhishingWeight += pattern.weight * 0.1; // Still count non-matches but with lower weight
    }
  }
  
  // Calculate safety score
  let safetyScore = 0;
  let totalSafetyWeight = 0;
  
  for (const pattern of safePatterns) {
    if (pattern.pattern.test(lowerCaseUrl)) {
      safetyScore += pattern.weight;
      totalSafetyWeight += pattern.weight;
    } else {
      totalSafetyWeight += pattern.weight * 0.1; // Still count non-matches but with lower weight
    }
  }
  
  // Normalize scores
  const normalizedPhishingScore = phishingScore / totalPhishingWeight;
  const normalizedSafetyScore = safetyScore / totalSafetyWeight;
  
  // Compare and make decision
  const isSafe = normalizedSafetyScore > normalizedPhishingScore;
  const confidence = Math.abs(normalizedSafetyScore - normalizedPhishingScore) * 100;
  
  let reason;
  if (!isSafe && matchedPhishingPatterns.length > 0) {
    const suspiciousFeatures = [
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('subdomain')) ? "suspicious domain structure" : null,
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('password|login')) ? "contains sensitive keywords" : null,
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('tk|ml|ga')) ? "uses suspicious TLD" : null,
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('paypal|apple')) ? "potential brand impersonation" : null,
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('[^\\w.-]')) ? "contains suspicious characters" : null,
      matchedPhishingPatterns.some(p => p.pattern.toString().includes('\\d+\\.\\d+')) ? "uses IP address instead of domain name" : null,
    ].filter(Boolean);
    
    reason = suspiciousFeatures.length > 0 ? 
      `Detected ${suspiciousFeatures.join(", ")}` : 
      "Multiple suspicious patterns detected";
  }
  
  return { 
    isSafe, 
    confidence: Math.min(Math.round(confidence), 99), // Cap at 99% to never claim 100% certainty
    reason
  };
};

const Dashboard = () => {
  const [url, setUrl] = useState("");
  const [scanResult, setScanResult] = useState<{ isSafe: boolean; confidence: number; reason?: string } | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const handleScan = () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL to scan",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    // Simulate a scan delay for better UX
    setTimeout(() => {
      const result = analyzeUrl(url);
      setScanResult(result);
      setIsScanning(false);
      
      toast({
        title: result.isSafe ? "URL Analysis Complete" : "Warning: Potential Threat",
        description: result.isSafe 
          ? `The URL appears safe with ${result.confidence}% confidence` 
          : `The URL may be unsafe (${result.confidence}% confidence)`,
        variant: result.isSafe ? "default" : "destructive",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Phishing Detection Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary-500" />
                URL Scanner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter URL to scan (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleScan} disabled={isScanning}>
                    {isScanning ? "Scanning..." : "Scan"}
                  </Button>
                </div>
                
                {scanResult && (
                  <Alert variant={scanResult.isSafe ? "default" : "destructive"}>
                    {scanResult.isSafe ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {scanResult.isSafe 
                        ? "Safe URL Detected" 
                        : "Potential Phishing Threat"}
                    </AlertTitle>
                    <AlertDescription>
                      {scanResult.isSafe 
                        ? `This URL appears to be safe with ${scanResult.confidence}% confidence.` 
                        : `This URL shows signs of being potentially malicious with ${scanResult.confidence}% confidence. ${scanResult.reason || ''}`}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No recent scans yet.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
