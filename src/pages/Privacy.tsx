import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      
      <main className="pt-20">
        <section className="space-premium">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="live-indicator mb-6">
                Security Protocols Active
              </div>
              <h1 className="text-title font-bold text-white mb-6">
                Privacy & Security Policy
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your data security is as important as your capital security
              </p>
            </div>

            <div className="space-y-12">
              {/* Data Protection */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={24} />
                  <h2 className="text-xl font-bold text-white">Data Protection</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Wealth Blocks employs military-grade encryption and zero-knowledge protocols to protect your personal and financial information.
                  </p>
                  
                  <ul className="space-y-2 ml-4">
                    <li>• AES-256 encryption for all data at rest</li>
                    <li>• TLS 1.3 for all data in transit</li>
                    <li>• Zero-knowledge proof protocols for verification</li>
                    <li>• On-premise document storage (no cloud exposure)</li>
                    <li>• Memory-hashed form data (PBKDF2 - 100,000 iterations)</li>
                  </ul>
                </div>
              </div>

              {/* Information Collection */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="text-emerald" size={24} />
                  <h2 className="text-xl font-bold text-white">Information We Collect</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    We collect only essential information required for KYC verification and capital allocation optimization:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-emerald mb-2">Personal Information</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Full name and contact details</li>
                        <li>• Investment experience and objectives</li>
                        <li>• Financial capacity verification</li>
                        <li>• Risk profile assessment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-emerald mb-2">Technical Data</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Session analytics (anonymized)</li>
                        <li>• Security logs and access patterns</li>
                        <li>• Platform usage optimization data</li>
                        <li>• Performance tracking metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-emerald" size={24} />
                  <h2 className="text-xl font-bold text-white">How We Use Your Data</h2>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Your information is used exclusively for private capital allocation and platform optimization:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-emerald/10 rounded-lg">
                      <h3 className="font-semibold text-emerald mb-2">Investment Optimization</h3>
                      <p className="text-sm">Risk assessment, portfolio allocation, and AI-powered investment recommendations</p>
                    </div>
                    
                    <div className="p-4 bg-emerald/10 rounded-lg">
                      <h3 className="font-semibold text-emerald mb-2">Security & Compliance</h3>
                      <p className="text-sm">KYC verification, fraud prevention, and regulatory compliance monitoring</p>
                    </div>
                    
                    <div className="p-4 bg-emerald/10 rounded-lg">
                      <h3 className="font-semibold text-emerald mb-2">Platform Enhancement</h3>
                      <p className="text-sm">User experience optimization and AI engine training (anonymized data only)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="dashboard-tile p-8 text-center">
                <h2 className="text-xl font-bold text-white mb-4">
                  Questions About Privacy?
                </h2>
                <p className="text-gray-300 mb-6">
                  Our security team is available to address any privacy concerns
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Privacy Officer: privacy@wealthblocks.ai</p>
                  <p>Security Team: security@wealthblocks.ai</p>
                  <p>Last updated: January 2025</p>
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

export default Privacy;