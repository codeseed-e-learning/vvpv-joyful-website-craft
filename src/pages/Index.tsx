
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import AdmissionProcess from '@/components/home/AdmissionProcess';
import ImageGallery from '@/components/home/Gallery';
import Specialities from '@/components/home/Specialities';
import ContactForm from '@/components/home/ContactForm';
import LocationMap from '@/components/home/LocationMap';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AdmissionProcess />
        <ImageGallery />
        <Specialities />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
