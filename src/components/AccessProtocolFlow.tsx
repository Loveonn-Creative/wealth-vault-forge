import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Shield, Lock, CheckCircle, TrendingUp, Target, Brain, Sparkles } from 'lucide-react';

interface AccessSubmission {
  full_name: string;
  email: string;
  phone: string;
  investment_amount: number;
  investment_intent: string;
  experience_level: string;
  objectives: string;
  risk_tolerance: string;
  gate_completed: number;
}

interface AIRecommendation {
  recommended_blocks: Array<{
    block_code: string;
    block_name: string;
    description: string;
    roi_range: string;
    minimum_investment: number;
    availability_status: string;
  }>;
  expected_roi_range: string;
  projected_timeline: string;
  diversification_strategy: {
    primary_allocation: number;
    secondary_allocation: number;
    cash_reserve: number;
  };
}

const AccessProtocolFlow = () => {
  const [formData, setFormData] = useState<AccessSubmission>({
    full_name: '',
    email: '',
    phone: '',
    investment_amount: 500000,
    investment_intent: '',
    experience_level: '',
    objectives: '',
    risk_tolerance: 'moderate',
    gate_completed: 1
  });

  const [currentGate, setCurrentGate] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<AIRecommendation | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  
  const { toast } = useToast();

  // Load user data on mount
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setFormData(prev => ({
          ...prev,
          email: user.email || ''
        }));

        // Check for existing submission
        const { data: existingSubmission } = await supabase
          .from('access_protocol_submissions')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (existingSubmission) {
          setFormData({
            full_name: existingSubmission.full_name,
            email: existingSubmission.email,
            phone: existingSubmission.phone || '',
            investment_amount: existingSubmission.investment_amount,
            investment_intent: existingSubmission.investment_intent,
            experience_level: existingSubmission.experience_level || '',
            objectives: existingSubmission.objectives || '',
            risk_tolerance: existingSubmission.risk_tolerance || 'moderate',
            gate_completed: existingSubmission.gate_completed
          });
          setCurrentGate(existingSubmission.gate_completed);
          setSubmissionId(existingSubmission.id);
          
          if (existingSubmission.ai_recommendation) {
            setAiRecommendation(existingSubmission.ai_recommendation);
          }
        }
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleInputChange = (field: keyof AccessSubmission, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateGate = (gate: number): boolean => {
    switch (gate) {
      case 1:
        return !!(formData.full_name && formData.email && formData.investment_amount >= 300000 && formData.investment_intent);
      case 2:
        return !!(formData.experience_level && formData.objectives);
      case 3:
        return !!(formData.risk_tolerance);
      case 4:
        return true; // Final review
      default:
        return false;
    }
  };

  const submitGate = async () => {
    if (!validateGate(currentGate)) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields for this gate.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const submissionData = {
        ...formData,
        gate_completed: currentGate
      };

      const { data, error } = await supabase.functions.invoke('access-protocol-handler', {
        body: submissionData
      });

      if (error) throw error;

      if (data.success) {
        setSubmissionId(data.submission.id);
        
        if (data.ai_recommendation) {
          setAiRecommendation(data.ai_recommendation);
        }

        if (currentGate < 4) {
          setCurrentGate(currentGate + 1);
          setFormData(prev => ({ ...prev, gate_completed: currentGate + 1 }));
          toast({
            title: `Gate ${currentGate} Completed`,
            description: "Proceeding to next verification layer.",
          });
        } else {
          setIsSubmitted(true);
          toast({
            title: "Access Protocol Complete",
            description: "Your application has been submitted for review.",
          });
        }
      }

    } catch (error: any) {
      console.error('Gate submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to process gate submission.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <Card className="exclusive-card">
          <CardContent className="p-12">
            <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald" />
            </div>
            <h3 className="text-2xl font-bold text-emerald mb-4">Protocol Complete</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your access request has been submitted and is under review.
            </p>
            <div className="bg-emerald/10 p-6 rounded-lg">
              <p className="text-emerald font-semibold">Next Steps:</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Verification team will review your submission</li>
                <li>• You'll receive payment instructions within 24-48 hours</li>
                <li>• Your personalized dashboard will be activated</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Access Protocol</h2>
        <p className="text-muted-foreground">Four-gate verification for institutional wealth access</p>
        
        <div className="max-w-md mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Gate {currentGate} of 4</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentGate / 4) * 100)}% Complete</span>
          </div>
          <Progress value={(currentGate / 4) * 100} className="h-2" />
        </div>
      </div>

      {/* Gate Progress Indicators */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {[
            { gate: 1, icon: Eye, label: "Intent" },
            { gate: 2, icon: Shield, label: "Verification" },
            { gate: 3, icon: Brain, label: "AI Mirror" },
            { gate: 4, icon: Lock, label: "Execution" }
          ].map(({ gate, icon: Icon, label }) => (
            <div key={gate} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                gate <= currentGate 
                  ? 'bg-emerald border-emerald text-emerald-foreground' 
                  : 'border-border text-muted-foreground'
              }`}>
                {gate < currentGate ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
              </div>
              <div className="ml-2 hidden sm:block">
                <p className="text-xs font-medium">{label}</p>
              </div>
              {gate < 4 && <div className="w-8 h-px bg-border mx-4"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Gate Content */}
      <Card className="exclusive-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            {currentGate === 1 && <Eye className="text-emerald" size={24} />}
            {currentGate === 2 && <Shield className="text-emerald" size={24} />}
            {currentGate === 3 && <Brain className="text-emerald" size={24} />}
            {currentGate === 4 && <Lock className="text-emerald" size={24} />}
            <div>
              <CardTitle className="text-emerald">
                Gate {currentGate}: {
                  currentGate === 1 ? "Expression of Intent" :
                  currentGate === 2 ? "Verification Layer" :
                  currentGate === 3 ? "AI Portfolio Mirror" :
                  "Execution Autonomy"
                }
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                {currentGate === 1 && "3-minute encrypted submission. Not an application—a statement of readiness."}
                {currentGate === 2 && "Human-conducted KYC + strategy alignment. We screen for sophistication, not just net worth."}
                {currentGate === 3 && "Live AI simulation using actual fund data—see your capital's real trajectory."}
                {currentGate === 4 && "Invest/decline with zero friction. Your capital stays under your control—just smarter."}
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Gate 1: Expression of Intent */}
          {currentGate === 1 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <Label htmlFor="investmentAmount">Investment Amount (₹) *</Label>
                  <Select 
                    value={formData.investment_amount.toString()} 
                    onValueChange={(value) => handleInputChange('investment_amount', parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="300000">₹3,00,000 - ₹4,99,999</SelectItem>
                      <SelectItem value="500000">₹5,00,000 - ₹9,99,999</SelectItem>
                      <SelectItem value="1000000">₹10,00,000 - ₹24,99,999</SelectItem>
                      <SelectItem value="2500000">₹25,00,000 - ₹49,99,999</SelectItem>
                      <SelectItem value="5000000">₹50,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">Minimum investment: ₹3,00,000</p>
                </div>
              </div>

              <div>
                <Label htmlFor="investmentIntent">Investment Intent *</Label>
                <Select 
                  value={formData.investment_intent} 
                  onValueChange={(value) => handleInputChange('investment_intent', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary investment goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wealth_preservation">Wealth Preservation</SelectItem>
                    <SelectItem value="growth_oriented">Growth Oriented</SelectItem>
                    <SelectItem value="retirement_planning">Retirement Planning</SelectItem>
                    <SelectItem value="legacy_building">Legacy Building</SelectItem>
                    <SelectItem value="income_generation">Income Generation</SelectItem>
                    <SelectItem value="diversification">Portfolio Diversification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Gate 2: Verification Layer */}
          {currentGate === 2 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="experienceLevel">Investment Experience *</Label>
                <Select 
                  value={formData.experience_level} 
                  onValueChange={(value) => handleInputChange('experience_level', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your investment experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (< 2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (5-10 years)</SelectItem>
                    <SelectItem value="expert">Expert (10+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="objectives">Investment Objectives *</Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleInputChange('objectives', e.target.value)}
                  placeholder="Describe your wealth-building objectives. Why are you considering private capital?"
                  rows={4}
                  required
                />
              </div>

              <div className="bg-emerald/10 p-6 rounded-lg">
                <h4 className="font-semibold text-emerald mb-3">Current Portfolio Preview:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Investment Amount:</span>
                    <p className="font-semibold">{formatCurrency(formData.investment_amount)}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Investment Intent:</span>
                    <p className="font-semibold capitalize">{formData.investment_intent.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gate 3: AI Portfolio Mirror */}
          {currentGate === 3 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="riskTolerance">Risk Tolerance *</Label>
                <Select 
                  value={formData.risk_tolerance} 
                  onValueChange={(value) => handleInputChange('risk_tolerance', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Conservative - Capital preservation focus</SelectItem>
                    <SelectItem value="moderate">Moderate - Balanced growth approach</SelectItem>
                    <SelectItem value="high">Aggressive - Maximum growth potential</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {aiRecommendation && (
                <div className="bg-gradient-to-br from-emerald/10 to-steel/10 p-6 rounded-lg border border-emerald/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-emerald" />
                    <h4 className="font-semibold text-emerald">AI Portfolio Recommendation</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Expected ROI Range</span>
                        <p className="font-semibold text-lg text-emerald">{aiRecommendation.expected_roi_range}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Timeline</span>
                        <p className="font-semibold">{aiRecommendation.projected_timeline}</p>
                      </div>
                    </div>

                    {aiRecommendation.recommended_blocks && aiRecommendation.recommended_blocks.length > 0 && (
                      <div>
                        <span className="text-sm text-muted-foreground">Recommended Wealth Block</span>
                        <div className="mt-2">
                          {aiRecommendation.recommended_blocks.map((block, index) => (
                            <div key={index} className="bg-white/50 p-4 rounded-lg border">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold">{block.block_name}</h5>
                                <Badge variant={block.availability_status === 'open' ? 'default' : 'secondary'}>
                                  {block.availability_status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{block.description}</p>
                              <div className="flex justify-between text-sm">
                                <span>ROI: {block.roi_range}</span>
                                <span>Min: {formatCurrency(block.minimum_investment)}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Primary</p>
                        <p className="font-semibold">{aiRecommendation.diversification_strategy.primary_allocation}%</p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Secondary</p>
                        <p className="font-semibold">{aiRecommendation.diversification_strategy.secondary_allocation}%</p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Reserve</p>
                        <p className="font-semibold">{aiRecommendation.diversification_strategy.cash_reserve}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Gate 4: Execution Autonomy */}
          {currentGate === 4 && (
            <div className="space-y-6">
              <div className="bg-emerald/10 p-6 rounded-lg">
                <h4 className="font-semibold text-emerald mb-4">Security Protocols Active:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AES-256 + TLS 1.3 encryption</li>
                  <li>• Zero-knowledge proof protocols for KYC verification</li>
                  <li>• On-premise document storage</li>
                  <li>• Memory-hashed form data (PBKDF2 - 100,000 iterations)</li>
                </ul>
              </div>

              <div className="bg-steel-light/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Final Review:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Name:</span>
                    <p className="font-semibold">{formData.full_name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Investment Amount:</span>
                    <p className="font-semibold">{formatCurrency(formData.investment_amount)}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Intent:</span>
                    <p className="font-semibold capitalize">{formData.investment_intent.replace('_', ' ')}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Risk Profile:</span>
                    <p className="font-semibold capitalize">{formData.risk_tolerance}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button onClick={submitGate} disabled={loading || !validateGate(currentGate)} size="lg">
              {loading ? "Processing..." : 
               currentGate === 4 ? "Submit Application →" : 
               `Proceed to Gate ${currentGate + 1} →`}
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            We take security as seriously as we take returns. This isn't compliance. It's capital preservation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessProtocolFlow;