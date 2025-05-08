
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    // In a real implementation, this would trigger the translation of the website
    console.log(`Language changed to: ${lang}`);
    
    // Simple demonstration of how translation would work
    // In a real app, you would use a proper translation library like i18next
    const event = new CustomEvent('languageChange', { detail: { language: lang } });
    window.dispatchEvent(event);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-school-yellow">VVVP</span>
              <span className="hidden md:block ml-2 text-lg font-semibold">{t('primarySchool')}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-school-yellow transition-colors">{t('home')}</Link>
            <Link to="/about" className="font-medium hover:text-school-yellow transition-colors">{t('about')}</Link>
            <Link to="/contact" className="font-medium hover:text-school-yellow transition-colors">{t('contact')}</Link>
            <Link to="/blogs" className="font-medium hover:text-school-yellow transition-colors">{t('blogs')}</Link>
            <Link to="/highlights" className="font-medium hover:text-school-yellow transition-colors">{t('highlights')}</Link>
            <Link to="/login" className="font-medium hover:text-school-yellow transition-colors">{t('login')}</Link>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-school-yellow">
                  <Globe className="h-5 w-5 text-school-yellow" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => toggleLanguage('en')}
                  className={`${language === 'en' ? 'bg-school-yellow/20' : ''}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => toggleLanguage('mr')}
                  className={`${language === 'mr' ? 'bg-school-yellow/20' : ''}`}
                >
                  मराठी (Marathi)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:block">
            <Button asChild className="school-button animate-bounce-slight">
              <Link to="/admissions">{t('admissions')}</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Selector for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-school-yellow">
                  <Globe className="h-5 w-5 text-school-yellow" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => toggleLanguage('en')}
                  className={`${language === 'en' ? 'bg-school-yellow/20' : ''}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => toggleLanguage('mr')}
                  className={`${language === 'mr' ? 'bg-school-yellow/20' : ''}`}
                >
                  मराठी (Marathi)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-black">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('home')}</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('about')}</Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('contact')}</Link>
              <Link to="/blogs" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('blogs')}</Link>
              <Link to="/highlights" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('highlights')}</Link>
              <Link to="/login" className="px-4 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>{t('login')}</Link>
              
              <div className="px-4 pt-2">
                <Button asChild className="school-button w-full">
                  <Link to="/admissions" onClick={toggleMenu}>{t('admissions')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
