import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-title font-bold text-foreground mb-6">
                Platform Documentation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Complete technical and legal framework for private capital architecture
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="space-premium bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-foreground mb-6">
                Private Capital Architecture
              </h2>
              <p className="text-xl text-muted-foreground">
                Unregistered fund strategies operating outside traditional regulatory frameworks
              </p>
            </div>

            <div className="research-card p-12 mb-12">
              <div className="flex items-start gap-4 mb-8">
                <AlertCircle className="text-emerald mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Legal Framework</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      This platform operates under a private capital architecture. We do not fall under SEBI/RBI compliance as we manage unregistered fund strategies.
                    </p>
                    <p className="leading-relaxed">
                      Protocols are driven by smart contracts, offline risk audits, and real-time investor access protocols.
                    </p>
                    <div className="p-4 bg-emerald/10 rounded-lg border border-emerald/20 mt-6">
                      <p className="text-emerald font-semibold">
                        Important: All users must complete KYC, risk onboarding, and accept private capital terms before allocation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Operational Framework */}
              <div className="research-card p-8 reveal-stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Operational Framework</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <h4 className="font-semibold text-emerald mb-2">Fund Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        Private pooled investments outside public market regulations
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <h4 className="font-semibold text-emerald mb-2">Risk Management</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-driven 21-parameter framework with real-time monitoring
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <h4 className="font-semibold text-emerald mb-2">Liquidity Design</h4>
                      <p className="text-sm text-muted-foreground">
                        24-month strategic horizon with quarterly rebalancing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investor Protection */}
              <div className="research-card p-8 reveal-stagger-2">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Security Protocols</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Data Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        AES-256 encryption, zero-knowledge KYC verification
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Document Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        On-premise storage, memory-hashed form data (PBKDF2)
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Access Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Manual verification, selective onboarding protocols
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Access Protocol */}
              <div className="research-card p-8 reveal-stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Access Protocol</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Four-gate verification system designed for sophisticated capital allocation. Each stage filters for experience, sophistication, and strategic alignment.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald text-emerald-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm text-foreground">Expression of Intent (3-min encrypted submission)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald text-emerald-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm text-foreground">Verification Layer (Human KYC + strategy alignment)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald text-emerald-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm text-foreground">Portfolio Mirror (Live simulation with fund data)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald text-emerald-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm text-foreground">Execution Autonomy (Zero friction deployment)</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/access"
                    className="inline-flex items-center gap-2 text-emerald hover:text-emerald/80 transition-colors"
                  >
                    Begin Verification Process →
                  </Link>
                </div>
              </div>

              {/* Investment Tiers */}
              <div className="research-card p-8 reveal-stagger-2">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Investment Architecture</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Three-tier system engineered for different capital scales and risk profiles. Each tier operates with distinct fund access and return structures.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-emerald">Prime Block</span>
                        <span className="text-sm text-emerald">₹15K - ₹2L</span>
                      </div>
                      <p className="text-sm text-muted-foreground">8-12% returns, 24-month horizon</p>
                    </div>
                    
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-emerald">Momentum Block</span>
                        <span className="text-sm text-emerald">₹2L - ₹20L</span>
                      </div>
                      <p className="text-sm text-muted-foreground">11-18% returns, quarterly rebalancing</p>
                    </div>
                    
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-emerald">Legacy Block</span>
                        <span className="text-sm text-emerald">₹20L+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">15-23% returns, offshore-grade access</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/tiers"
                    className="inline-flex items-center gap-2 text-emerald hover:text-emerald/80 transition-colors"
                  >
                    View Tier Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Risk */}
        <section className="space-premium bg-gradient-to-br from-emerald/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="research-card p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Risk Disclosure & Terms
                </h2>
                <p className="text-lg text-muted-foreground">
                  Complete transparency on private capital investment risks
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Unregistered Fund Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        No SEBI guarantees. Investments carry inherent private market risks including illiquidity and capital loss.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Performance Disclaimers</h4>
                      <p className="text-sm text-muted-foreground">
                        Historical performance does not guarantee future results. Returns depend on market conditions and fund performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Liquidity Terms</h4>
                      <p className="text-sm text-muted-foreground">
                        24-month strategic horizon with potential early exit penalties. Liquidity subject to underlying fund terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">AI System Limitations</h4>
                      <p className="text-sm text-muted-foreground">
                        AI models optimize strategies but cannot eliminate market risks, economic volatility, or unforeseen events.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Investor Responsibility</h4>
                      <p className="text-sm text-muted-foreground">
                        All investment decisions made at investor's sole discretion post-verification. Independent advice recommended.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Data Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Institutional-grade security protocols. No data sharing with third parties without explicit consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;