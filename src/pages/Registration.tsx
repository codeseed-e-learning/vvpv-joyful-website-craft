
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Registration = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log("Registration attempt");
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
                  <User className="h-6 w-6 text-school-yellow mr-2" />
                  <CardTitle className="text-2xl font-bold">Register</CardTitle>
                </div>
                <p className="text-gray-600">
                  Create your VVVP parent account
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                      <Input id="firstName" placeholder="Enter first name" required className="bg-gray-50" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                      <Input id="lastName" placeholder="Enter last name" required className="bg-gray-50" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" required className="bg-gray-50" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input id="phone" placeholder="Enter phone number" required className="bg-gray-50" />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <Input id="password" type="password" placeholder="Create a password" required className="bg-gray-50" />
                    <p className="text-xs text-gray-500 mt-1">
                      Must be at least 8 characters with numbers and special characters
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm your password" required className="bg-gray-50" />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="terms" 
                      type="checkbox" 
                      required
                      className="h-4 w-4 border-gray-300 rounded text-school-yellow focus:ring-school-yellow"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                      I agree to the <a href="#" className="text-school-yellow hover:underline">Terms of Service</a> and <a href="#" className="text-school-yellow hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" className="school-button w-full">
                    Create Account
                  </Button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-school-yellow hover:underline font-medium">
                      Login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Need help with registration? Contact our support team at{' '}
                <a href="mailto:support@vvvpschool.edu" className="text-school-yellow hover:underline">
                  support@vvvpschool.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registration;
