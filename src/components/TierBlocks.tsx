import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  Lock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface WealthBlock {
  id: string;
  block_code: string;
  block_name: string;
  description: string;
  roi_range: string;
  risk_level: string;
  minimum_investment: number;
  current_capacity: number;
  max_capacity: number;
  block_status: string;
  launch_date: string;
  closure_date?: string;
  performance_data: any;
}

const TierBlocks = () => {
  const [blocks, setBlocks] = useState<WealthBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchWealthBlocks();
  }, []);

  const fetchWealthBlocks = async () => {
    try {
      const { data, error } = await supabase
        .from('wealth_blocks')
        .select('*')
        .order('minimum_investment', { ascending: true });

      if (error) throw error;
      setBlocks(data || []);
    } catch (error) {
      console.error('Error fetching wealth blocks:', error);
      toast({
        title: "Error",
        description: "Failed to load wealth blocks",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string, currentCapacity: number, maxCapacity: number) => {
    const utilizationRate = (currentCapacity / maxCapacity) * 100;
    
    if (status === 'closed' || utilizationRate >= 100) {
      return 'bg-red-500/10 text-red-600 border-red-500/20';
    } else if (utilizationRate >= 90) {
      return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
    } else {
      return 'bg-green-500/10 text-green-600 border-green-500/20';
    }
  };

  const getStatusText = (status: string, currentCapacity: number, maxCapacity: number) => {
    const utilizationRate = (currentCapacity / maxCapacity) * 100;
    
    if (status === 'closed' || utilizationRate >= 100) {
      return 'Closed';
    } else if (utilizationRate >= 90) {
      return 'Limited';
    } else {
      return 'Open';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'conservative': return 'bg-green-500/10 text-green-600';
      case 'moderate': return 'bg-blue-500/10 text-blue-600';
      case 'aggressive': return 'bg-orange-500/10 text-orange-600';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const capacityPercentage = (current: number, max: number) => {
    return Math.min((current / max) * 100, 100);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Active Wealth Blocks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of investment opportunities. Each block represents 
            a unique strategy designed to maximize returns while managing risk effectively.
          </p>
        </div>

        {/* Blocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blocks.map((block) => {
            const utilizationRate = capacityPercentage(block.current_capacity, block.max_capacity);
            const statusColor = getStatusColor(block.block_status, block.current_capacity, block.max_capacity);
            const statusText = getStatusText(block.block_status, block.current_capacity, block.max_capacity);
            const isAvailable = block.block_status === 'open' && utilizationRate < 100;

            return (
              <Card 
                key={block.id} 
                className="relative overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {block.block_name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-mono">
                        {block.block_code}
                      </p>
                    </div>
                    <Badge className={statusColor}>
                      {statusText}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {block.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-gray-500">ROI Range</span>
                      </div>
                      <p className="font-semibold text-green-600">{block.roi_range}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-gray-500">Risk Level</span>
                      </div>
                      <Badge className={getRiskColor(block.risk_level)} variant="outline">
                        {block.risk_level}
                      </Badge>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-500">Minimum Investment</span>
                      </div>
                      <p className="font-semibold">{formatCurrency(block.minimum_investment)}</p>
                    </div>

                    {/* Capacity Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">Capacity</span>
                        <span className="text-xs font-medium">
                          {block.current_capacity}/{block.max_capacity}
                        </span>
                      </div>
                      <Progress 
                        value={utilizationRate} 
                        className="h-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {utilizationRate.toFixed(0)}% filled
                      </p>
                    </div>

                    {/* Timeline */}
                    {block.launch_date && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-500">
                          Launched: {new Date(block.launch_date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Performance Indicator */}
                  {block.performance_data && Object.keys(block.performance_data).length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Live Performance</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Current performance tracking available
                      </p>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    className="w-full mt-4" 
                    variant={isAvailable ? "default" : "outline"}
                    disabled={!isAvailable}
                  >
                    {!isAvailable ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Not Available
                      </>
                    ) : (
                      <>
                        View Details
                      </>
                    )}
                  </Button>
                </CardContent>

                {/* Urgency Indicator */}
                {isAvailable && utilizationRate >= 80 && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 animate-pulse">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Filling Fast
                    </Badge>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <Card className="mb-8">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {blocks.filter(b => b.block_status === 'open').length}
                </h3>
                <p className="text-sm text-gray-600">Active Blocks</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600">
                  {blocks.reduce((sum, block) => sum + block.current_capacity, 0)}
                </h3>
                <p className="text-sm text-gray-600">Total Investors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  {formatCurrency(blocks.reduce((min, block) => 
                    Math.min(min, block.minimum_investment), Infinity
                  ))}
                </h3>
                <p className="text-sm text-gray-600">Lowest Entry</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-600">
                  {blocks.filter(b => {
                    const utilization = (b.current_capacity / b.max_capacity) * 100;
                    return utilization >= 80 && b.block_status === 'open';
                  }).length}
                </h3>
                <p className="text-sm text-gray-600">Filling Fast</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* No Blocks Message */}
        {blocks.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Active Blocks
              </h3>
              <p className="text-gray-600">
                New investment opportunities will appear here when available.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TierBlocks;