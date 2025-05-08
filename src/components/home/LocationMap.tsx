
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="location" className="school-section bg-school-peach/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <MapPin className="h-8 w-8 text-school-yellow mr-2" />
          <h2 className="school-heading">Find Us</h2>
        </div>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          We're conveniently located in the heart of the city, easily accessible by public transportation.
        </p>
        
        <Card className="border-none shadow-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Replace with actual Google Maps embed code */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3072367105006!2d78.45774450000001!3d17.4318129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8b1f290c1%3A0x38c2d7ca3c819ef5!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714353414781!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Getting Here</h3>
              <p className="text-gray-600">
                Our school is easily accessible by bus routes 34, 56, and 78. The nearest metro station is Education Center, just a 5-minute walk away.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Parking Facilities</h3>
              <p className="text-gray-600">
                Ample parking space is available for parents and visitors within the school premises. Security personnel are always present.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">School Bus Service</h3>
              <p className="text-gray-600">
                We offer door-to-door pickup and drop service covering all major areas of the city with GPS-enabled buses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
