import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Target,
  Award,
  Users,
  ChevronRight
} from "lucide-react";

interface TierData {
  name: string;
  minInvestment: string;
  expectedReturns: string;
  timeHorizon: string;
  riskLevel: string;
  capacity: string;
  features: string[];
  status: 'available' | 'limited' | 'full';
}

const tiers: TierData[] = [
  {
    name: "Standard",
    minInvestment: "₹5L",
    expectedReturns: "8-14%",
    timeHorizon: "24-36 months",
    riskLevel: "Moderate",
    capacity: "Open",
    features: [
      "Diversified portfolio allocation",
      "Monthly performance reports",
      "Basic risk management",
      "Standard exit options"
    ],
    status: 'available'
  },
  {
    name: "Premium",
    minInvestment: "₹25L",
    expectedReturns: "12-18%",
    timeHorizon: "18-30 months",
    riskLevel: "Moderate-High",
    capacity: "Limited",
    features: [
      "Enhanced alpha strategies",
      "Weekly performance updates",
      "Advanced risk analytics",
      "Priority exit windows",
      "Dedicated relationship manager"
    ],
    status: 'limited'
  },
  {
    name: "Elite",
    minInvestment: "₹1Cr",
    expectedReturns: "15-23%",
    timeHorizon: "12-24 months",
    riskLevel: "High",
    capacity: "Exclusive",
    features: [
      "Ultra-high-net-worth strategies",
      "Real-time portfolio tracking",
      "Custom risk profiling",
      "Flexible exit terms",
      "Direct fund manager access",
      "Institutional-grade analytics"
    ],
    status: 'available'
  }
];

const TierOverview = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'limited': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'full': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getRiskColor = (risk: string) => {
    if (risk.includes('Moderate')) return 'bg-blue-500/10 text-blue-600';
    if (risk.includes('High')) return 'bg-orange-500/10 text-orange-600';
    return 'bg-green-500/10 text-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Tiers Overview
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the investment tier that aligns with your financial goals and risk appetite. 
            Each tier is designed for different investment scales and sophistication levels.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                tier.name === 'Premium' ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
            >
              {tier.name === 'Premium' && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={tier.name === 'Premium' ? 'pt-8' : ''}>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <Badge className={getStatusColor(tier.status)}>
                    {tier.capacity}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Min Investment:</span>
                    <span className="font-semibold text-lg">{tier.minInvestment}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Expected Returns:</span>
                    <span className="font-semibold text-green-600">{tier.expectedReturns}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Time Horizon:</span>
                    <span className="font-medium">{tier.timeHorizon}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-600">Risk Level:</span>
                    <Badge className={getRiskColor(tier.riskLevel)}>
                      {tier.riskLevel}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant={tier.name === 'Premium' ? 'default' : 'outline'}
                    disabled={tier.status === 'full'}
                  >
                    {tier.status === 'full' ? 'Currently Full' : 'Learn More'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Detailed Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Standard</th>
                    <th className="text-center p-4">Premium</th>
                    <th className="text-center p-4">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-medium">Minimum Investment</td>
                    <td className="p-4 text-center">₹5L</td>
                    <td className="p-4 text-center">₹25L</td>
                    <td className="p-4 text-center">₹1Cr</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Expected Returns</td>
                    <td className="p-4 text-center">8-14%</td>
                    <td className="p-4 text-center">12-18%</td>
                    <td className="p-4 text-center">15-23%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Portfolio Reporting</td>
                    <td className="p-4 text-center">Monthly</td>
                    <td className="p-4 text-center">Weekly</td>
                    <td className="p-4 text-center">Real-time</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Relationship Manager</td>
                    <td className="p-4 text-center">Shared</td>
                    <td className="p-4 text-center">Dedicated</td>
                    <td className="p-4 text-center">Senior Manager</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Exit Flexibility</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Flexible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="py-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Take our investment assessment to find the perfect tier for your financial goals and risk profile.
              </p>
              <Button size="lg" className="px-8">
                Start Investment Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TierOverview;