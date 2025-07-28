import { useState } from 'react';
import { Shield, FileText, CreditCard, CheckCircle, ArrowRight, Upload, Lock } from 'lucide-react';

const AccessFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Shield,
      title: 'Submit Access Request',
      description: 'Initial application for platform access and investment eligibility',
      details: [
        'Net worth assessment',
        'Investment experience validation',
        'Risk tolerance evaluation',
        'Regulatory compliance check'
      ]
    },
    {
      icon: FileText,
      title: 'KYC Verification (PAN, GSTN, UBO)',
      description: 'Comprehensive identity and financial verification',
      details: [
        'PAN & GSTN verification',
        'Bank statement analysis',
        'Income source documentation',
        'Ultimate beneficial owner disclosure'
      ]
    },
    {
      icon: Lock,
      title: 'Get Personalised Wealth Block Plan',
      description: 'Custom investment strategy based on your risk profile and objectives',
      details: [
        'Risk tolerance assessment',
        'Investment objective alignment',
        'Personalized portfolio design',
        'Strategy presentation'
      ]
    },
    {
      icon: CreditCard,
      title: 'Review + Transfer Capital',
      description: 'Final review and secure capital transfer to selected opportunities',
      details: [
        'Strategy review meeting',
        'Legal documentation',
        'Secure capital transfer',
        'Investment confirmation'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Track Performance via Dashboard',
      description: 'Continuous monitoring through advanced performance dashboard',
      details: [
        'Real-time performance tracking',
        'Risk-adjusted return analysis',
        'Portfolio optimization',
        'Quarterly reviews'
      ]
    }
  ];

  return (
    <section id="access" className="space-exclusive bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="reveal-fade">
            <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
              Access Protocol
            </p>
          </div>
          <div className="reveal-up">
            <h2 className="text-title font-bold text-primary">
              Engineered Access. Not Everyone Gets In.
            </h2>
          </div>
          <div className="reveal-up reveal-stagger-1 max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Every investor is mapped to risk-grade funds. No public offers. Zero ad-based onboarding.
            </p>
          </div>
        </div>

        {/* Interactive Flow */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Step Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`tier-block cursor-pointer transition-all duration-500 ${
                  index === currentStep 
                    ? 'ring-2 ring-emerald/30 bg-emerald-muted/10' 
                    : index < currentStep 
                      ? 'opacity-60' 
                      : ''
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    index === currentStep 
                      ? 'bg-emerald text-emerald-foreground' 
                      : index < currentStep 
                        ? 'bg-steel-light text-emerald' 
                        : 'bg-steel-light/50 text-muted-foreground'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle size={24} />
                    ) : (
                      <step.icon size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    index === currentStep ? 'rotate-90' : ''
                  }`}>
                    <ArrowRight size={16} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="exclusive-card p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald text-emerald-foreground rounded-lg">
                  {(() => {
                    const IconComponent = steps[currentStep].icon;
                    return <IconComponent size={24} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-muted-foreground">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {steps[currentStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Required Documentation:</h4>
                <div className="space-y-2">
                  {steps[currentStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-specific forms */}
              {currentStep === 0 && (
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Net Worth (₹ Crores)
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-emerald/20 focus:border-emerald outline-none transition-colors"
                        placeholder="10+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Investment Experience
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-emerald/20 focus:border-emerald outline-none transition-colors">
                        <option>Select experience</option>
                        <option>&lt; 2 years</option>
                        <option>2-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        PAN Number
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-emerald/20 focus:border-emerald outline-none transition-colors"
                        placeholder="ABCDE1234F"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Document Upload
                      </label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-emerald/50 transition-colors cursor-pointer">
                        <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Upload bank statements (Last 6 months)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6">
                <button 
                  className="w-full py-3 bg-emerald text-emerald-foreground rounded-lg hover:bg-emerald/90 transition-all duration-300 wealth-hover"
                  onClick={() => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1)}
                >
                  {currentStep === steps.length - 1 ? 'Complete Onboarding' : 'Proceed to Next Step'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center reveal-up reveal-stagger-3">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-emerald" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-emerald" />
              <span>Regulatory compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald" />
              <span>SEBI registered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessFlow;