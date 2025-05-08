
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Login = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempt");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-school-yellow"></div>
              <CardHeader className="text-center pt-8">
                <div className="flex items-center justify-center mb-2">
                  <LogIn className="h-6 w-6 text-school-yellow mr-2" />
                  <CardTitle className="text-2xl font-bold">{t('login')}</CardTitle>
                </div>
                <p className="text-gray-600">
                  Access your VVVP account
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">{t('emailAddress')}</label>
                    <Input id="email" type="email" placeholder={t('yourEmail')} required className="bg-gray-50" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium">Password</label>
                      <a href="#" className="text-sm text-school-yellow hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input id="password" type="password" placeholder="Enter your password" required className="bg-gray-50" />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="remember" 
                      type="checkbox" 
                      className="h-4 w-4 border-gray-300 rounded text-school-yellow focus:ring-school-yellow"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  
                  <Button type="submit" className="school-button w-full">
                    {t('login')}
                  </Button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/registration" className="text-school-yellow hover:underline font-medium">
                      Register
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                By logging in, you agree to our <a href="#" className="text-school-yellow hover:underline">Terms of Service</a> and <a href="#" className="text-school-yellow hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
