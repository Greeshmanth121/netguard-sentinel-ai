
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section id="how-it-works" className="section-padding bg-cyber-pattern">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Platform <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Explore how our AI-powered detection system identifies and neutralizes phishing threats in real-time.
          </p>
        </div>
        
        <div className="bg-background rounded-2xl shadow-xl border border-border/50 overflow-hidden max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between bg-muted p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-secondary-500" />
              <h3 className="font-semibold text-lg">NetGuard Sentinel AI</h3>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
          </div>
          
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="border-b border-border">
              <TabsList className="bg-transparent h-14 px-4">
                <TabsTrigger value="dashboard" className="data-[state=active]:border-b-2 data-[state=active]:border-secondary-500 rounded-none">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="scanner" className="data-[state=active]:border-b-2 data-[state=active]:border-secondary-500 rounded-none">
                  Threat Scanner
                </TabsTrigger>
                <TabsTrigger value="reports" className="data-[state=active]:border-b-2 data-[state=active]:border-secondary-500 rounded-none">
                  Reports
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="dashboard" className="p-0">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { title: 'Protected Users', value: '254', icon: <Shield className="h-5 w-5 text-secondary-500" />, change: '+12% this month' },
                    { title: 'Threats Detected', value: '42', icon: <AlertCircle className="h-5 w-5 text-destructive" />, change: '-8% from last week' },
                    { title: 'Successful Blocks', value: '39', icon: <CheckCircle className="h-5 w-5 text-success" />, change: '92.8% success rate' },
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/30 border border-border/50 rounded-lg p-5">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-foreground/70 font-medium">{item.title}</span>
                        {item.icon}
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold">{item.value}</span>
                        <span className="text-xs text-foreground/60">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3 bg-muted/30 border border-border/50 rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Threat Activity</h3>
                      <div className="flex space-x-2">
                        <LineChart className="h-5 w-5 text-secondary-500" />
                        <span className="text-sm text-foreground/70">Last 30 days</span>
                      </div>
                    </div>
                    
                    <div className="h-60 flex items-end space-x-2">
                      {[35, 28, 45, 65, 35, 25, 15, 35, 55, 32, 40, 45, 50, 42, 55, 70, 45, 40, 30, 35, 28, 32].map((height, index) => (
                        <div key={index} className="flex-1 flex items-end">
                          <div 
                            className="w-full bg-secondary-500/70 rounded-sm hover:bg-secondary-500 transition-all"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-muted/30 border border-border/50 rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Threat Types</h3>
                      <PieChart className="h-5 w-5 text-secondary-500" />
                    </div>
                    
                    <div className="flex justify-center my-6">
                      <div className="relative w-36 h-36">
                        <div className="absolute inset-0 rounded-full border-8 border-secondary-500/20"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-destructive" style={{ transform: 'rotate(45deg)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-r-warning" style={{ transform: 'rotate(-45deg)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center">
                            <span className="font-bold text-lg">42</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-sm bg-destructive mr-2"></div>
                          <span>Credential Phishing</span>
                        </div>
                        <span className="font-medium">58%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-sm bg-warning mr-2"></div>
                          <span>Malware Distribution</span>
                        </div>
                        <span className="font-medium">29%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-sm bg-secondary-500 mr-2"></div>
                          <span>Other</span>
                        </div>
                        <span className="font-medium">13%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-muted/30 border border-border/50 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Recent Threats</h3>
                    <Button variant="ghost" size="sm" className="text-xs text-foreground/70">
                      View All <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left pb-3 font-medium text-foreground/70">Type</th>
                          <th className="text-left pb-3 font-medium text-foreground/70">Source</th>
                          <th className="text-left pb-3 font-medium text-foreground/70">Target</th>
                          <th className="text-left pb-3 font-medium text-foreground/70">Time</th>
                          <th className="text-left pb-3 font-medium text-foreground/70">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Credential Theft', source: 'email-secure@amaz0n-verify.net', target: 'finance@company.com', time: '12 min ago', status: 'Blocked' },
                          { type: 'Malicious Link', source: 'newsletter@acme-update.info', target: 'sales@company.com', time: '1 hr ago', status: 'Blocked' },
                          { type: 'Data Exfiltration', source: '104.23.192.45', target: 'api.company.com', time: '3 hrs ago', status: 'Blocked' },
                          { type: 'Spear Phishing', source: 'ceo-urgent@company-verify.com', target: 'hr@company.com', time: '5 hrs ago', status: 'Flagged' },
                        ].map((item, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                            <td className="py-3">{item.type}</td>
                            <td className="py-3 text-foreground/70">{item.source}</td>
                            <td className="py-3 text-foreground/70">{item.target}</td>
                            <td className="py-3 text-foreground/70">{item.time}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                item.status === 'Blocked' 
                                  ? 'bg-destructive/10 text-destructive' 
                                  : 'bg-warning/10 text-warning'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scanner" className="p-6">
              <div className="bg-muted/30 border border-border/50 rounded-lg p-6 text-center">
                <div className="mb-6">
                  <AlertCircle className="h-12 w-12 text-secondary-500 mx-auto" />
                  <h3 className="text-xl font-semibold mt-4">Email & URL Threat Scanner</h3>
                  <p className="text-foreground/70 mt-2 max-w-lg mx-auto">
                    Analyze suspicious emails or URLs for potential phishing threats, malware, and other security risks.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                  <div className="flex-1">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Paste suspicious URL or email content here" 
                        className="w-full p-4 pr-12 rounded-lg border border-border bg-background/50 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
                      />
                      <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary-500 hover:bg-secondary-600">
                        Scan Now
                      </Button>
                    </div>
                    
                    <div className="mt-8 bg-background/80 rounded-lg p-6 border border-border/50 text-left">
                      <div className="flex items-center mb-4">
                        <XCircle className="h-5 w-5 text-destructive mr-2" />
                        <h4 className="font-semibold">High Risk Detected</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-1">URL Analysis Result</h5>
                          <p className="text-sm text-foreground/70">https://secure-banking-portal.com-account-verification.info</p>
                          
                          <div className="mt-2 space-y-2 text-sm">
                            <div className="flex items-center">
                              <XCircle className="h-4 w-4 text-destructive mr-2" />
                              <span>Domain created 2 days ago</span>
                            </div>
                            <div className="flex items-center">
                              <XCircle className="h-4 w-4 text-destructive mr-2" />
                              <span>Matching known phishing patterns</span>
                            </div>
                            <div className="flex items-center">
                              <XCircle className="h-4 w-4 text-destructive mr-2" />
                              <span>Suspicious redirect chain detected</span>
                            </div>
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 text-warning mr-2" />
                              <span>Impersonating legitimate financial institution</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-border/50">
                          <h5 className="font-medium mb-1">Recommendation</h5>
                          <p className="text-sm text-destructive font-medium">Do not visit this website. Block access across your organization.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3 bg-muted/30 border border-border/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Report Overview</h3>
                    <BarChart3 className="h-5 w-5 text-secondary-500" />
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Security Report', description: 'Complete security posture analysis', date: 'Generated today' },
                      { title: 'Vulnerability Scan', description: 'System vulnerabilities assessment', date: 'Generated 3 days ago' },
                      { title: 'User Activity', description: 'User behavior and risk analysis', date: 'Generated 1 week ago' },
                      { title: 'Compliance Status', description: 'Regulatory compliance overview', date: 'Generated 2 weeks ago' },
                    ].map((report, index) => (
                      <div key={index} className="flex items-start p-3 rounded-md hover:bg-background/50 cursor-pointer">
                        <div className="w-10 h-10 rounded-md bg-secondary-500/20 flex items-center justify-center mr-4">
                          <FileIcon index={index} />
                        </div>
                        <div>
                          <h4 className="font-medium">{report.title}</h4>
                          <p className="text-xs text-foreground/60">{report.description}</p>
                          <p className="text-xs text-secondary-500 mt-1">{report.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white">
                    View All Reports
                  </Button>
                </div>
                
                <div className="lg:w-2/3 bg-muted/30 border border-border/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Security Report</h3>
                    <div className="bg-secondary-500/20 text-secondary-500 text-xs px-2 py-1 rounded-full">
                      Generated Today
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Total Scans', value: '1,254', change: '+12%' },
                      { label: 'Security Score', value: '84/100', change: '+3 points' },
                      { label: 'Alerts Generated', value: '42', change: '-8%' },
                      { label: 'Resolution Time', value: '45 min', change: '-23%' },
                    ].map((item, index) => (
                      <div key={index} className="bg-background/50 p-4 rounded-md">
                        <p className="text-xs text-foreground/70">{item.label}</p>
                        <div className="flex items-end justify-between mt-1">
                          <p className="text-xl font-semibold">{item.value}</p>
                          <p className="text-xs text-secondary-500">{item.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-medium mb-3">Protection Status</h4>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      { name: 'Email Protection', percentage: 95 },
                      { name: 'Web Protection', percentage: 88 },
                      { name: 'Endpoint Security', percentage: 76 },
                      { name: 'Network Defense', percentage: 92 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{item.name}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-secondary-500 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-foreground/70">
                      Export PDF
                    </Button>
                    <Button size="sm" className="bg-secondary-500 hover:bg-secondary-600">
                      Schedule Reports
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const FileIcon = ({ index }: { index: number }) => {
  const icons = [
    <BarChart3 key={0} className="h-4 w-4 text-secondary-500" />,
    <Shield key={1} className="h-4 w-4 text-secondary-500" />,
    <AlertCircle key={2} className="h-4 w-4 text-secondary-500" />,
    <CheckCircle key={3} className="h-4 w-4 text-secondary-500" />
  ];
  
  return icons[index % icons.length];
};

export default DashboardPreview;
