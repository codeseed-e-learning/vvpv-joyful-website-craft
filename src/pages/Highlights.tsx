
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

const Highlights = () => {
  const events = [
    {
      title: "Annual Day Celebration",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      description: "Our students showcased their talents through cultural performances, plays, and musical presentations."
    },
    {
      title: "Science Exhibition",
      date: "February 20, 2025",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
      description: "Young scientists displayed their innovative projects and experiments exploring various scientific concepts."
    },
    {
      title: "Sports Day",
      date: "January 25, 2025",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80",
      description: "A day of athletics, team sports, and friendly competition promoting physical fitness and sportsmanship."
    },
    {
      title: "Reading Week",
      date: "December 10-15, 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      description: "A week dedicated to celebrating the joy of reading with storytelling sessions, book exchanges, and author visits."
    },
    {
      title: "Environmental Awareness Drive",
      date: "November 5, 2024",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80",
      description: "Students participated in tree planting, campus cleaning, and awareness campaigns for a greener planet."
    },
    {
      title: "Math Olympiad",
      date: "October 18, 2024",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80",
      description: "Our students participated in challenging mathematical problem-solving competitions at various levels."
    }
  ];

  const achievements = [
    {
      title: "National Art Competition",
      award: "First Prize",
      student: "Riya Patel, Class 5",
      description: "Riya's painting on 'Unity in Diversity' won first prize at the National Children's Art Festival."
    },
    {
      title: "Inter-School Quiz Competition",
      award: "Winners",
      student: "Arjun Singh & Meera Sharma, Class 4",
      description: "Our quiz team emerged victorious against 24 schools from across the region."
    },
    {
      title: "Young Scientists Award",
      award: "Special Recognition",
      student: "Vihaan Kumar, Class 3",
      description: "Vihaan's innovative water conservation model received special recognition from the State Science Board."
    },
    {
      title: "Children's Literature Festival",
      award: "Best Story",
      student: "Zara Hussain, Class 5",
      description: "Zara's original story 'The Talking Tree' won the Best Children's Story award."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-school-pink/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Highlights</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Celebrating the achievements, events, and special moments that make our school community proud.
            </p>
          </div>
        </section>
        
        {/* Recent Events */}
        <section className="school-section">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-2">
              <Image className="h-8 w-8 text-school-yellow mr-2" />
              <h2 className="school-heading">Recent Events</h2>
            </div>
            <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
              Take a look at the exciting events and activities that have taken place at our school recently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="border-none shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-school-yellow/20 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Student Achievements */}
        <section className="school-section bg-school-blue/20">
          <div className="container mx-auto px-4">
            <h2 className="school-heading">Student Achievements</h2>
            <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
              We are proud of our students who have excelled in various competitions and events.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-school-yellow rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                        <p className="text-school-yellow font-medium mb-2">{achievement.award}</p>
                        <p className="text-gray-700 font-medium mb-2">{achievement.student}</p>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* School Recognition */}
        <section className="school-section">
          <div className="container mx-auto px-4">
            <h2 className="school-heading">School Recognition</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="bg-school-yellow/10 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Best Primary School Award 2024</h3>
                    <p className="text-lg mb-4">
                      Vivek Vardhini Vidyalaya Primary School was honored with the "Best Primary School Award" by the State Education Board for excellence in teaching methodology and student development.
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-school-yellow"></div>
                      <p className="font-medium">Recognized for innovative teaching practices</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-school-yellow"></div>
                      <p className="font-medium">Student-centered learning approach</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-school-yellow"></div>
                      <p className="font-medium">Holistic development programs</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <Card className="border-none shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&q=80" 
                    alt="Award Ceremony" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">Green School Initiative</h3>
                    <p className="text-gray-600">
                      Our school was also recognized for its eco-friendly campus and sustainability initiatives, receiving the "Green School Certification" for the third consecutive year.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="bg-school-green/20 p-2 rounded">
                    <p className="font-bold">3rd Year</p>
                    <p className="text-sm">Green Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Highlights;
