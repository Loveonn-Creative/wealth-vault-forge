import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      
      <main className="pt-20">
        <section className="space-premium">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="live-indicator mb-6">
                Legal Framework Active
              </div>
              <h1 className="text-title font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Clear terms for sophisticated capital allocation
              </p>
            </div>

            <div className="space-y-12">
              {/* Important Notice */}
              <div className="dashboard-tile p-8 border-orange-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-orange-400" size={24} />
                  <h2 className="text-xl font-bold text-white">Important Notice</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p className="font-semibold text-orange-400">
                    Wealth Blocks operates private capital strategies through unregistered fund structures.
                  </p>
                  
                  <p>
                    We do not fall under SEBI/RBI registration requirements. This platform is designed for sophisticated investors who understand private capital markets and associated risks.
                  </p>
                  
                  <div className="p-4 bg-orange-400/10 rounded-lg">
                    <p className="text-sm font-medium text-orange-400">
                      All investments are subject to market risk. Past performance does not guarantee future returns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={24} />
                  <h2 className="text-xl font-bold text-white">Eligibility & Access</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Access to Wealth Blocks is restricted to qualified investors who meet our verification criteria:
                  </p>
                  
                  <ul className="space-y-2 ml-4">
                    <li>• Indian resident with valid KYC documentation</li>
                    <li>• Minimum investable surplus of ₹15,000</li>
                    <li>• Understanding of private capital investment risks</li>
                    <li>• Completion of our four-gate verification process</li>
                    <li>• Agreement to 24-month minimum investment horizon</li>
                  </ul>
                  
                  <div className="p-4 bg-emerald/10 rounded-lg">
                    <p className="text-sm text-emerald">
                      We reserve the right to reject applications without providing specific reasons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Terms */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-emerald" size={24} />
                  <h2 className="text-xl font-bold text-white">Investment Framework</h2>
                </div>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="font-semibold text-emerald mb-3">Capital Allocation</h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Investments are allocated across pre-verified private funds</li>
                      <li>• AI engine optimizes allocation based on your risk profile</li>
                      <li>• No fund exceeds 15% of your total allocation</li>
                      <li>• Automatic rebalancing triggers at predefined thresholds</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-emerald mb-3">Liquidity Terms</h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Minimum lock-in period: 24 months from allocation date</li>
                      <li>• Early exit penalties may apply based on fund terms</li>
                      <li>• Liquidity windows are fund-dependent and not guaranteed</li>
                      <li>• All redemptions subject to fund manager approval</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-emerald mb-3">Fees & Charges</h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Platform fee: 0.5% annually on managed assets</li>
                      <li>• Fund management fees: As disclosed by individual funds</li>
                      <li>• Performance fees: Fund-specific, typically 10-20% above hurdle rate</li>
                      <li>• No hidden charges or surprise deductions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="dashboard-tile p-8 text-center">
                <h2 className="text-xl font-bold text-white mb-4">
                  Terms Updates & Contact
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    These terms may be updated to reflect platform evolution or regulatory changes.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <p>Legal queries: legal@wealthblocks.ai</p>
                    <p>Compliance team: compliance@wealthblocks.ai</p>
                    <p>Last updated: January 2025</p>
                  </div>
                  
                  <div className="p-4 bg-emerald/10 rounded-lg">
                    <p className="text-sm text-emerald">
                      By using Wealth Blocks, you acknowledge understanding and acceptance of these terms.
                    </p>
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

export default Terms;