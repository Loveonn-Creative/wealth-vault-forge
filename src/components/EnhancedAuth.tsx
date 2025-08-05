import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Shield, Lock, Mail, User, Phone } from 'lucide-react';

const EnhancedAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Cleanup auth state function
  const cleanupAuthState = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        sessionStorage.removeItem(key);
      }
    });
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    checkSession();
  }, [navigate]);

  // Resend timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Clean up any existing auth state
      cleanupAuthState();
      await supabase.auth.signOut({ scope: 'global' });

      const redirectUrl = `${window.location.origin}/dashboard`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
            phone: phone
          }
        }
      });

      if (error) throw error;

      if (data.user && !data.user.email_confirmed_at) {
        setOtpSent(true);
        setResendTimer(60);
        toast({
          title: "Verification Email Sent",
          description: "Please check your email for the verification code.",
        });
      } else if (data.user) {
        toast({
          title: "Account Created Successfully",
          description: "Redirecting to your dashboard...",
        });
        navigate('/dashboard');
      }

    } catch (error: any) {
      console.error('Sign up error:', error);
      toast({
        title: "Sign Up Failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Clean up any existing auth state
      cleanupAuthState();
      await supabase.auth.signOut({ scope: 'global' });

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        toast({
          title: "Welcome Back",
          description: "Successfully signed in. Redirecting...",
        });
        // Force page refresh for clean state
        window.location.href = '/dashboard';
      }

    } catch (error: any) {
      console.error('Sign in error:', error);
      toast({
        title: "Sign In Failed",
        description: error.message || "Failed to sign in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'signup'
      });

      if (error) throw error;

      if (data.user) {
        toast({
          title: "Email Verified",
          description: "Account verified successfully. Redirecting...",
        });
        window.location.href = '/dashboard';
      }

    } catch (error: any) {
      console.error('OTP verification error:', error);
      toast({
        title: "Verification Failed",
        description: error.message || "Invalid verification code.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;
    
    setLoading(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;

      setResendTimer(60);
      toast({
        title: "Verification Email Resent",
        description: "Please check your email for the new verification code.",
      });

    } catch (error: any) {
      toast({
        title: "Resend Failed",
        description: error.message || "Failed to resend verification email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address first.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?mode=reset`
      });

      if (error) throw error;

      toast({
        title: "Reset Email Sent",
        description: "Check your email for password reset instructions.",
      });

    } catch (error: any) {
      toast({
        title: "Reset Failed",
        description: error.message || "Failed to send reset email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (otpSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-emerald/5 to-steel-light/10 flex items-center justify-center p-6">
        <Card className="w-full max-w-md exclusive-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-emerald" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Verify Your Email</CardTitle>
            <CardDescription>
              We've sent a verification code to {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleOtpVerification} className="space-y-4">
              <div>
                <Label htmlFor="otp">Verification Code</Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                  className="text-center text-lg tracking-widest"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={loading || otp.length !== 6}>
                {loading ? "Verifying..." : "Verify Email"}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0 || loading}
                  className="text-sm text-emerald hover:underline disabled:text-muted-foreground"
                >
                  {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend verification code"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald/5 to-steel-light/10 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Wealth Blocks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Institutional-grade wealth building for sophisticated investors.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Bank-Grade Security</h3>
                <p className="text-sm text-muted-foreground">AES-256 encryption with multi-factor authentication</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald/20 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-emerald" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Private Capital Access</h3>
                <p className="text-sm text-muted-foreground">Exclusive opportunities with 8-23% historical returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <Card className="exclusive-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Access Your Account</CardTitle>
            <CardDescription className="text-center">
              Secure authentication for sophisticated investors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="space-y-4">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label htmlFor="signin-email">Email Address</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signin-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signin-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing In..." : "Sign In Securely"}
                  </Button>
                  
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-emerald hover:underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="signup-phone">Phone</Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum 8 characters with uppercase, lowercase, and numbers
                    </p>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Secure Account"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By signing up, you agree to our terms of service and privacy policy
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedAuth;