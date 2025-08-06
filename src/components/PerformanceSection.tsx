import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  BarChart3,
  PieChart,
  Calendar,
  Zap,
  Target,
  Shield,
  Clock
} from "lucide-react";

interface PerformanceData {
  period: string;
  returns: number;
  benchmark: number;
  volatility: number;
  sharpeRatio: number;
}

interface BlockPerformance {
  blockName: string;
  code: string;
  currentValue: number;
  initialValue: number;
  roi: number;
  period: string;
  riskLevel: string;
}

const PerformanceSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3M');
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [blockPerformances, setBlockPerformances] = useState<BlockPerformance[]>([]);

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockPerformanceData: PerformanceData[] = [
      { period: '1M', returns: 2.3, benchmark: 1.8, volatility: 8.2, sharpeRatio: 1.4 },
      { period: '3M', returns: 7.8, benchmark: 5.2, volatility: 12.1, sharpeRatio: 1.8 },
      { period: '6M', returns: 14.2, benchmark: 9.8, volatility: 15.3, sharpeRatio: 2.1 },
      { period: '1Y', returns: 18.9, benchmark: 12.4, volatility: 18.7, sharpeRatio: 1.9 },
    ];

    const mockBlockPerformances: BlockPerformance[] = [
      {
        blockName: 'Alpha Growth Block',
        code: 'AGB-001',
        currentValue: 1180000,
        initialValue: 1000000,
        roi: 18.0,
        period: '8 months',
        riskLevel: 'Moderate'
      },
      {
        blockName: 'Defensive Value Block',
        code: 'DVB-002',
        currentValue: 1095000,
        initialValue: 1000000,
        roi: 9.5,
        period: '6 months',
        riskLevel: 'Conservative'
      },
      {
        blockName: 'High Velocity Block',
        code: 'HVB-003',
        currentValue: 1245000,
        initialValue: 1000000,
        roi: 24.5,
        period: '10 months',
        riskLevel: 'Aggressive'
      }
    ];

    setPerformanceData(mockPerformanceData);
    setBlockPerformances(mockBlockPerformances);
  }, []);

  const currentData = performanceData.find(d => d.period === selectedPeriod) || performanceData[1];
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'conservative': return 'bg-green-500/10 text-green-600';
      case 'moderate': return 'bg-blue-500/10 text-blue-600';
      case 'aggressive': return 'bg-orange-500/10 text-orange-600';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Performance Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track real-time performance across all investment blocks with detailed analytics 
            and risk-adjusted metrics.
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Returns</p>
                  <p className="text-2xl font-bold text-green-600">+{currentData?.returns}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">vs Benchmark</p>
                  <p className="text-2xl font-bold text-blue-600">
                    +{((currentData?.returns || 0) - (currentData?.benchmark || 0)).toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Volatility</p>
                  <p className="text-2xl font-bold text-orange-600">{currentData?.volatility}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sharpe Ratio</p>
                  <p className="text-2xl font-bold text-purple-600">{currentData?.sharpeRatio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Period Selection and Performance Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Performance Analytics
              </CardTitle>
              <div className="flex gap-2">
                {['1M', '3M', '6M', '1Y'].map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Returns Comparison */}
              <div>
                <h4 className="font-semibold mb-4">Returns vs Benchmark ({selectedPeriod})</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Portfolio Returns</span>
                      <span className="font-semibold text-green-600">+{currentData?.returns}%</span>
                    </div>
                    <Progress value={Math.min(currentData?.returns || 0, 30) / 30 * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Benchmark</span>
                      <span className="font-semibold text-blue-600">+{currentData?.benchmark}%</span>
                    </div>
                    <Progress value={Math.min(currentData?.benchmark || 0, 30) / 30 * 100} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Risk Metrics */}
              <div>
                <h4 className="font-semibold mb-4">Risk-Adjusted Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Volatility</span>
                    <Badge variant="outline">{currentData?.volatility}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sharpe Ratio</span>
                    <Badge variant="outline">{currentData?.sharpeRatio}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Alpha Generation</span>
                    <Badge className="bg-green-500/10 text-green-600">
                      +{((currentData?.returns || 0) - (currentData?.benchmark || 0)).toFixed(1)}%
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Block Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Individual Block Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {blockPerformances.map((block, index) => {
                const isPositive = block.roi > 0;
                return (
                  <Card key={index} className="border-l-4 border-l-primary/20">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">{block.blockName}</h4>
                          <p className="text-sm text-gray-500 font-mono">{block.code}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Initial Value</p>
                            <p className="font-medium">{formatCurrency(block.initialValue)}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Current Value</p>
                            <p className="font-medium">{formatCurrency(block.currentValue)}</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            {isPositive ? (
                              <TrendingUp className="h-4 w-4 text-green-600" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-red-600" />
                            )}
                            <span className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {isPositive ? '+' : ''}{block.roi}%
                            </span>
                          </div>
                          <Badge className={getRiskColor(block.riskLevel)} variant="outline">
                            {block.riskLevel}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>Holding period: {block.period}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Key Highlights</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Portfolio outperforming benchmark by +{((currentData?.returns || 0) - (currentData?.benchmark || 0)).toFixed(1)}% over {selectedPeriod}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Strong risk-adjusted returns with Sharpe ratio of {currentData?.sharpeRatio}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                    <span>Diversified risk exposure across {blockPerformances.length} active blocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
                    <span>Volatility maintained within target range at {currentData?.volatility}%</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Investment Allocation</h4>
                <div className="space-y-3">
                  {blockPerformances.map((block, index) => {
                    const allocation = 100 / blockPerformances.length; // Equal allocation for demo
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">{block.blockName}</span>
                          <span className="text-sm font-medium">{allocation.toFixed(0)}%</span>
                        </div>
                        <Progress value={allocation} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceSection;