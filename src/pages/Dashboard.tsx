import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Session } from '@supabase/supabase-js';
import { LogOut, TrendingUp, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [accessSubmission, setAccessSubmission] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      // Set up auth state listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          
          if (!session) {
            navigate('/auth');
          }
        }
      );

      // Check existing session
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);

      if (!session) {
        navigate('/auth');
        return;
      }

      // Load user data
      await loadUserData(session.user.id);
      setLoading(false);

      return () => subscription.unsubscribe();
    };

    initializeAuth();
  }, [navigate]);

  const loadUserData = async (userId: string) => {
    try {
      // Load profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Profile error:', profileError);
      } else {
        setProfile(profileData);
      }

      // Load access submission
      const { data: submissionData, error: submissionError } = await supabase
        .from('access_submissions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (submissionError && submissionError.code !== 'PGRST116') {
        console.error('Submission error:', submissionError);
      } else {
        setAccessSubmission(submissionData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      // Clear auth state
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      
      await supabase.auth.signOut({ scope: 'global' });
      window.location.href = '/auth';
    } catch (error) {
      console.error('Error signing out:', error);
      window.location.href = '/auth';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const hasAccessSubmission = !!accessSubmission;
  const clientId = profile?.client_id || 'Not assigned';
  const verificationStatus = profile?.verification_status || 'pending';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {profile?.full_name || user?.email}
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                Client ID: {clientId}
              </Badge>
              <Badge 
                variant={verificationStatus === 'verified' ? 'default' : 'secondary'}
              >
                {verificationStatus.charAt(0).toUpperCase() + verificationStatus.slice(1)}
              </Badge>
            </div>
          </div>
          
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Portfolio Value</p>
                  <p className="text-2xl font-bold">₹0</p>
                </div>
                <DollarSign className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Expected Returns</p>
                  <p className="text-2xl font-bold">18-23%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Time Horizon</p>
                  <p className="text-2xl font-bold">24M</p>
                </div>
                <Clock className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Security Score</p>
                  <p className="text-2xl font-bold">A+</p>
                </div>
                <Shield className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="planning">Financial Planning</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {!hasAccessSubmission ? (
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Access Protocol</CardTitle>
                  <CardDescription>
                    Start your journey to institutional-grade wealth management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      You haven't completed the Access Protocol yet. This is required to access 
                      Wealth Blocks and begin your personalized investment journey.
                    </p>
                    <Button onClick={() => navigate('/access')}>
                      <Zap className="w-4 h-4 mr-2" />
                      Start Access Protocol
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Access Protocol Status</CardTitle>
                    <CardDescription>Your verification progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Gate {accessSubmission.gate_status}/4</span>
                        <Badge variant={accessSubmission.gate_status === 4 ? 'default' : 'secondary'}>
                          {accessSubmission.gate_status === 4 ? 'Complete' : 'In Progress'}
                        </Badge>
                      </div>
                      <Progress value={(accessSubmission.gate_status / 4) * 100} />
                      <div className="text-sm text-muted-foreground">
                        Investment Amount: ₹{accessSubmission.investment_amount?.toLocaleString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                    <CardDescription>Continue your wealth journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {!accessSubmission.verification_completed && (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Complete KYC verification</span>
                        </div>
                      )}
                      {!accessSubmission.payment_completed && (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Complete payment setup</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Portfolio construction begins</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
                <CardDescription>Your Wealth Blocks allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Portfolio Under Construction</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete your Access Protocol to begin portfolio allocation
                  </p>
                  {!hasAccessSubmission && (
                    <Button onClick={() => navigate('/access')}>
                      Start Access Protocol
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="planning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Planning</CardTitle>
                <CardDescription>Personalized wealth strategy session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Complete your detailed financial planning assessment to unlock 
                    personalized investment strategies and AI-powered recommendations.
                  </p>
                  <Button asChild>
                    <a 
                      href="https://forms.gle/fcNa7mPqnAN3mokW6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Start Financial Planning
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <p className="text-sm text-muted-foreground">{profile?.full_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <p className="text-sm text-muted-foreground">{profile?.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Client ID</label>
                    <p className="text-sm text-muted-foreground">{clientId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Verification Status</label>
                    <p className="text-sm text-muted-foreground capitalize">{verificationStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;