import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const Access = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    experience: '',
    objectives: ''
  });

  const [currentGate, setCurrentGate] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const nextGate = () => {
    if (currentGate < 4) {
      setCurrentGate(currentGate + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
         <section className="space-premium bg-black">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center max-w-4xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
                 <Lock className="w-4 h-4" />
                 Exclusive Access Protocol
               </div>
               
               <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                 THE SELECTION
                 <br />
                 <span className="bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent">
                   PROCESS
                 </span>
               </h1>
               <p className="text-xl text-gray-300 leading-relaxed">
                 This isn't an investment. It's an upgrade path for your entire wealth strategy.
               </p>
              
              <div className="mt-12 p-6 bg-emerald/10 rounded-lg">
                <p className="text-lg font-semibold text-emerald">
                  A four-gate verification system designed to exclude the unprepared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Not For Everyone */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                Why Wealth Blocks Isn't for Everyone
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                (And Why That's the Point)
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* We Reject */}
              <div className="exclusive-card p-8 border-destructive/20">
                <h3 className="text-2xl font-bold text-destructive mb-6">We Reject:</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                    <span>Day traders chasing hype</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                    <span>Those who confuse registration with safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                    <span>Anyone who thinks wealth is built overnight</span>
                  </li>
                </ul>
              </div>

              {/* We Serve */}
              <div className="exclusive-card p-8 border-emerald/30">
                <h3 className="text-2xl font-bold text-emerald mb-6">We Serve:</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Professionals tired of watching savings erode in "safe" instruments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Founders who need liquidity without idle capital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Families building intergenerational wealth—quietly, seriously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Individuals seeking performance with peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                We reject more investors than we onboard. Not because of wealth thresholds—but because those chasing 50% returns won't appreciate <span className="text-emerald font-semibold">23% done right.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Communication Philosophy */}
        <section className="space-premium bg-steel-light/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-title font-bold text-primary mb-8">
                A Note on Communication
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>We despise spam as much as you do.</p>
                <p>We might email you — rarely — and only when it truly matters.</p>
                <p>It's possible you won't even hear from us again.</p>
                
                <div className="bg-emerald/10 p-6 rounded-lg mt-8">
                  <p className="text-emerald font-semibold text-xl">
                    This is your moment of decision - act now, bookmark this page, or walk away.
                  </p>
                  <p className="text-steel-dark mt-4">
                    Your capital deserves intentional action, not inbox clutter.
                  </p>
                </div>
                
                <p className="text-xl font-semibold text-foreground">
                  You know your priorities better than we do. If you proceed, expect limited emails yearly.
                </p>
                <p className="text-emerald font-semibold">
                  We just hope one of them includes becoming wealthier, wiser — and free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Protocol */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The Access Protocol
              </h2>
              <p className="text-xl text-muted-foreground">
                How Serious Capital Moves
              </p>
            </div>

            {!isSubmitted ? (
              <div className="max-w-4xl mx-auto">
                {/* Gate Progress */}
                <div className="flex justify-center mb-12">
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3, 4].map((gate) => (
                      <div key={gate} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          gate <= currentGate ? 'bg-emerald text-emerald-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {gate < currentGate ? <CheckCircle size={20} /> : gate}
                        </div>
                        {gate < 4 && <div className="w-8 h-px bg-border mx-2"></div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gate 1: Expression of Intent */}
                {currentGate === 1 && (
                  <div className="exclusive-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Eye className="text-emerald" size={24} />
                      <h3 className="text-2xl font-bold text-emerald">Gate 1: Expression of Intent</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">
                      3-minute encrypted submission. Not an application—a statement of readiness.
                    </p>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Investment Amount (₹)</label>
                          <Input
                            name="investmentAmount"
                            value={formData.investmentAmount}
                            onChange={handleInputChange}
                            placeholder="Enter intended investment amount"
                            required
                          />
                        </div>
                      </div>

                      <Button onClick={nextGate} className="w-full" size="lg">
                        Proceed to Verification →
                      </Button>
                    </form>
                  </div>
                )}

                {/* Gate 2: Verification Layer */}
                {currentGate === 2 && (
                  <div className="exclusive-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-emerald" size={24} />
                      <h3 className="text-2xl font-bold text-emerald">Gate 2: Verification Layer</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">
                      Human-conducted KYC + strategy alignment. We screen for sophistication, not just net worth.
                    </p>

                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Investment Experience</label>
                        <Textarea
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="Describe your investment experience (mutual funds, stocks, real estate, etc.)"
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Investment Objectives</label>
                        <Textarea
                          name="objectives"
                          value={formData.objectives}
                          onChange={handleInputChange}
                          placeholder="What are your wealth-building objectives? Why are you considering private capital?"
                          rows={4}
                          required
                        />
                      </div>

                      <Button onClick={nextGate} className="w-full" size="lg">
                        Continue to Portfolio Mirror →
                      </Button>
                    </form>
                  </div>
                )}

                {/* Gate 3: Portfolio Mirror */}
                {currentGate === 3 && (
                  <div className="exclusive-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Lock className="text-emerald" size={24} />
                      <h3 className="text-2xl font-bold text-emerald">Gate 3: Portfolio Mirror</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">
                      Live simulation using actual fund data—see your capital's real trajectory, no hypotheticals.
                    </p>

                    <div className="bg-steel-light/30 p-6 rounded-lg mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Based on your profile, we recommend:</h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-emerald/10 rounded-lg">
                          <h5 className="font-semibold text-emerald">Momentum Block</h5>
                          <p className="text-sm text-muted-foreground">11-18% projected returns for ₹{formData.investmentAmount}</p>
                          <p className="text-sm text-emerald mt-2">Estimated 24-month value: ₹{formData.investmentAmount ? (parseInt(formData.investmentAmount) * 1.3).toLocaleString() : '0'}</p>
                        </div>
                      </div>
                    </div>

                    <Button onClick={nextGate} className="w-full" size="lg">
                      Proceed to Final Review →
                    </Button>
                  </div>
                )}

                {/* Gate 4: Execution Autonomy */}
                {currentGate === 4 && (
                  <div className="exclusive-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="text-emerald" size={24} />
                      <h3 className="text-2xl font-bold text-emerald">Gate 4: Execution Autonomy</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">
                      Invest/decline with zero friction. Your capital stays under your control—just smarter.
                    </p>

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

                      <Button onClick={handleSubmit} className="w-full" size="lg">
                        Submit Application →
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        We take security as seriously as we take returns. This isn't compliance. It's capital preservation.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto text-center">
                <div className="exclusive-card p-12">
                  <CheckCircle className="text-emerald mx-auto mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-emerald mb-4">You're in the queue.</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    We'll reach out post verification with access credentials and capital deck preview.
                  </p>
                  <div className="live-indicator mb-6">
                    AI verification engine active
                  </div>
                  <p className="text-emerald font-semibold text-lg">
                    Stay sharp.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Access;