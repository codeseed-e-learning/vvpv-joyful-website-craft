
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdmissionProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Application Form",
      description: "Fill out the online application form with all the required details about your child and family."
    },
    {
      number: "02",
      title: "Document Submission",
      description: "Submit necessary documents including birth certificate, address proof, and previous academic records."
    },
    {
      number: "03",
      title: "Entrance Assessment",
      description: "A child-friendly interaction session to understand your child's readiness for the appropriate grade."
    },
    {
      number: "04",
      title: "Fee Payment",
      description: "Upon selection, complete the admission process by paying the required fees within the stipulated time."
    }
  ];

  return (
    <section id="admission-process" className="school-section bg-school-blue/20">
      <div className="container mx-auto px-4">
        <h2 className="school-heading">Admission Process</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Joining the VVVP family is a simple and straightforward process. Follow these steps to secure a bright future for your child.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-school-yellow h-2"></div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl font-bold text-gray-200">{step.number}</span>
                  <span className="bg-school-yellow/20 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="school-button text-lg px-8 py-6">
            <Link to="/admissions">Begin Application Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
