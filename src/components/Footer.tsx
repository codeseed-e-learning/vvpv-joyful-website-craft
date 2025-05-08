
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Home, Info, Book, Image, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 wavy-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Home className="mr-2 text-school-yellow" />
              Vivek Vardhini Vidyalaya
            </h3>
            <p className="text-gray-600 mb-4">
              Nurturing young minds with joy and education since 1995. Our mission is to provide quality education in a joyful and creative environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-school-yellow flex items-center justify-center">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-school-yellow flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-school-yellow flex items-center justify-center">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Info className="mr-2 text-school-yellow" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-school-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-school-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-600 hover:text-school-yellow transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 hover:text-school-yellow transition-colors">Blogs</Link>
              </li>
              <li>
                <Link to="/highlights" className="text-gray-600 hover:text-school-yellow transition-colors">Highlights</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-school-yellow transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2 text-school-yellow" />
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-school-yellow mt-1" />
                <span className="text-gray-600">
                  123 School Road, Education City,<br />
                  Learning District, 500001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-school-yellow" />
                <a href="tel:+911234567890" className="text-gray-600 hover:text-school-yellow transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-school-yellow" />
                <a href="mailto:info@vvvpschool.edu" className="text-gray-600 hover:text-school-yellow transition-colors">
                  info@vvvpschool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Vivek Vardhini Vidyalaya Primary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
