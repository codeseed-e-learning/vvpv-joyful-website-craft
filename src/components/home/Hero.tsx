
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-b from-school-yellow/30 to-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">{t('welcomeTo')}</span>
              <span className="text-school-yellow animate-float block">Vivek Vardhini</span>
              <span className="block">Vidyalaya</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('whereEducation')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="school-button text-lg px-8 py-6">
                <Link to="/admissions">{t('applyForAdmission')}</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-school-yellow bg-white text-black hover:bg-school-yellow/10 text-lg px-8 py-6">
                <Link to="/about">{t('discoverMore')}</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                alt="Happy children learning" 
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-school-yellow p-2 rounded">
                <p className="font-bold">Admissions Open</p>
                <p className="text-sm">For Academic Year 2025-26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10C10 15 20 20 30 15C40 10 50 5 60 10C70 15 80 20 90 15C100 10 110 5 120 10V20H0V10Z' fill='white'/%3E%3C/svg%3E\")",
             backgroundSize: "100px 20px" 
           }}>
      </div>
    </div>
  );
};

export default Hero;
