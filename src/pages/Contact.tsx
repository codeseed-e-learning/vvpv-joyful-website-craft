
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/home/ContactForm';
import LocationMap from '@/components/home/LocationMap';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: "What are the school hours?",
      answer: "Our school operates from 8:30 AM to 3:30 PM, Monday through Friday. The office is open from 8:00 AM to 4:30 PM on weekdays and 9:00 AM to 12:00 PM on Saturdays."
    },
    {
      question: "How can I schedule a school tour?",
      answer: "You can schedule a tour by filling out the contact form on this page, calling our admissions office at +91 123 456 7890, or emailing us at admissions@vvvpschool.edu."
    },
    {
      question: "When does the admission process start?",
      answer: "The admission process for the upcoming academic year typically begins in September of the previous year. Early applications are encouraged as seats fill up quickly."
    },
    {
      question: "Do you offer transportation services?",
      answer: "Yes, we provide transportation services covering all major areas of the city. Our buses are equipped with GPS tracking and are accompanied by attendants for safety."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-school-yellow/30 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out with questions about admissions, curriculum, or to schedule a visit.
            </p>
          </div>
        </section>
        
        {/* Quick Contact Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-school-pink/20 border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Phone className="h-6 w-6 text-school-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">We're available during school hours</p>
                  <a href="tel:+911234567890" className="text-lg font-medium text-school-yellow hover:underline">
                    +91 123 456 7890
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-school-blue/20 border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Mail className="h-6 w-6 text-school-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:info@vvvpschool.edu" className="text-lg font-medium text-school-yellow hover:underline">
                    info@vvvpschool.edu
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-school-green/20 border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Clock className="h-6 w-6 text-school-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-gray-600 mb-2">When you can reach us</p>
                  <p className="text-lg">Mon-Fri: 8:00 AM - 4:30 PM</p>
                  <p className="text-lg">Sat: 9:00 AM - 12:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <ContactForm />
        <LocationMap />
        
        {/* FAQs */}
        <section className="school-section bg-school-yellow/10">
          <div className="container mx-auto px-4">
            <h2 className="school-heading">Frequently Asked Questions</h2>
            <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
              Find quick answers to common questions about our school and processes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
