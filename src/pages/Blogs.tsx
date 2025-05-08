
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Fostering Creativity in Young Minds",
      excerpt: "Discover how creative activities help children develop critical thinking and problem-solving skills.",
      author: "Mrs. Sunita Sharma",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80",
      category: "Early Education"
    },
    {
      id: 2,
      title: "The Importance of Physical Activity",
      excerpt: "How our balanced approach to physical education contributes to overall child development.",
      author: "Mr. Rajesh Kumar",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
      category: "Health & Wellness"
    },
    {
      id: 3,
      title: "Digital Learning: Finding the Right Balance",
      excerpt: "Integrating technology in primary education while maintaining human connection and hands-on learning.",
      author: "Ms. Priya Desai",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&q=80",
      category: "Technology"
    },
    {
      id: 4,
      title: "Celebrating Cultural Diversity in the Classroom",
      excerpt: "How exposure to different cultures enriches the educational experience of young children.",
      author: "Mrs. Sunita Sharma",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      category: "Culture & Society"
    },
    {
      id: 5,
      title: "Building Strong Parent-Teacher Relationships",
      excerpt: "The vital role of collaboration between parents and teachers in a child's educational journey.",
      author: "Ms. Priya Desai",
      date: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80",
      category: "Community"
    },
    {
      id: 6,
      title: "Environmental Education: Starting Young",
      excerpt: "Teaching sustainability and environmental responsibility to primary school students.",
      author: "Mr. Rajesh Kumar",
      date: "March 12, 2025",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80",
      category: "Environment"
    }
  ];

  const categories = ["All", "Early Education", "Health & Wellness", "Technology", "Culture & Society", "Community", "Environment"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-school-blue/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Book className="h-8 w-8 text-school-yellow mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insights, updates, and educational resources from our teachers and staff.
            </p>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-school-yellow hover:bg-yellow-400 text-black" : "border-school-yellow text-gray-700"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="school-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-none shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-school-yellow/20 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <a href={`/blogs/${post.id}`} className="text-school-yellow hover:underline font-medium">
                        Read More
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="school-button">Load More Articles</Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="school-section bg-school-green/20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="school-heading">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">
              Stay updated with the latest articles, educational resources, and school news delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full border-2 border-gray-300 focus:border-school-yellow focus:ring-0 outline-none"
              />
              <Button className="school-button whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
