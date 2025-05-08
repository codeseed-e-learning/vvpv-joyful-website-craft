
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="school-section">
      <div className="container mx-auto px-4">
        <h2 className="school-heading">Contact Us</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Have questions about our school or the admission process? We're here to help! Reach out to us using the form below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input id="name" placeholder="Your name" required className="bg-gray-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Your email" required className="bg-gray-50" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input id="phone" placeholder="Your phone number" className="bg-gray-50" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input id="subject" placeholder="Subject of your message" required className="bg-gray-50" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    rows={5} 
                    required 
                    className="bg-gray-50"
                  />
                </div>
                
                <Button type="submit" className="school-button w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="bg-school-yellow/20 border-none shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin className="h-5 w-5 mr-3 text-school-yellow" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 School Road, Education City,<br />
                        Learning District, 500001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-5 w-5 mr-3 text-school-yellow" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+911234567890" className="text-gray-600 hover:text-school-yellow">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-5 w-5 mr-3 text-school-yellow" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@vvvpschool.edu" className="text-gray-600 hover:text-school-yellow">
                        info@vvvpschool.edu
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-school-blue/20 border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
