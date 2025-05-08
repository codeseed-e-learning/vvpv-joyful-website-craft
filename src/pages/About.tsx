
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Info, User } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Excellence", description: "Striving for the highest standards in education and character development." },
    { title: "Creativity", description: "Encouraging innovative thinking and creative expression in all endeavors." },
    { title: "Respect", description: "Fostering mutual respect, empathy, and understanding among our community." },
    { title: "Integrity", description: "Upholding honesty, transparency, and ethical behavior at all times." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-school-blue/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the story, values, and people that make Vivek Vardhini Vidyalaya Primary School a special place for learning and growth.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="school-section">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-2">
              <Info className="h-8 w-8 text-school-yellow mr-2" />
              <h2 className="school-heading">Our Story</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Founded in 1995, Vivek Vardhini Vidyalaya Primary School began with a vision to create a learning environment where children could thrive academically while developing essential life skills in a joyful atmosphere.
                </p>
                <p className="text-lg mb-6">
                  Over the years, we have grown from a small establishment with just 50 students to a renowned institution nurturing over 500 young minds annually. Our journey has been marked by continuous innovation in teaching methodologies and unwavering commitment to holistic education.
                </p>
                <p className="text-lg">
                  Today, VVVP stands as a beacon of educational excellence, known for producing well-rounded individuals who go on to excel in various fields while remaining grounded in strong values.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580974852861-c381510bc98e?auto=format&fit=crop&q=80" 
                  alt="School History" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Established 1995</p>
                  <p className="text-sm">28 Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="school-section bg-school-pink/20">
          <div className="container mx-auto px-4">
            <h2 className="school-heading">Our Core Values</h2>
            <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
              These principles guide everything we do at VVVP, shaping our approach to education and community building.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-white border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-school-yellow/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="school-section">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-2">
              <User className="h-8 w-8 text-school-yellow mr-2" />
              <h2 className="school-heading">Our Leadership</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Mrs. Sunita Sharma</h3>
                  <p className="text-school-yellow font-medium mb-2">Principal</p>
                  <p className="text-gray-600">
                    With over 20 years in education, Mrs. Sharma brings visionary leadership and passion for child-centered learning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                    alt="Vice Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Mr. Rajesh Kumar</h3>
                  <p className="text-school-yellow font-medium mb-2">Vice Principal</p>
                  <p className="text-gray-600">
                    A mathematics expert with a special talent for making learning fun and accessible for all students.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80" 
                    alt="Dean of Students" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">Ms. Priya Desai</h3>
                  <p className="text-school-yellow font-medium mb-2">Dean of Students</p>
                  <p className="text-gray-600">
                    Dedicated to student welfare, Ms. Desai creates supportive environments where children can thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
