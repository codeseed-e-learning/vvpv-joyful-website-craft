
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Specialities = () => {
  const specialities = [
    {
      icon: "🎨",
      title: "Creative Arts",
      description: "Nurturing creativity through drawing, painting, crafts, music, and dance activities."
    },
    {
      icon: "🔍",
      title: "Inquiry-Based Learning",
      description: "Encouraging curiosity and critical thinking through hands-on exploration."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Campus",
      description: "Teaching environmental consciousness with our green campus initiatives."
    },
    {
      icon: "🏆",
      title: "Sports Excellence",
      description: "Developing physical fitness and teamwork through various sports activities."
    },
    {
      icon: "💻",
      title: "Digital Learning",
      description: "Interactive digital tools to make learning engaging and effective."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Strong Parent Partnership",
      description: "Regular involvement of parents in the learning journey of their children."
    }
  ];

  return (
    <section id="specialities" className="school-section bg-school-green/20">
      <div className="container mx-auto px-4">
        <h2 className="school-heading">Our Specialities</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          At VVVP, we pride ourselves on offering a comprehensive educational experience that helps children develop holistically.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialities.map((item, index) => (
            <Card key={index} className="cloud-card hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
