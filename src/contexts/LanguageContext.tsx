
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Simple translations object
// In a real app, you would use a more comprehensive translation system
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    blogs: 'Blogs',
    highlights: 'Highlights',
    login: 'Login',
    admissions: 'Admissions',
    primarySchool: 'Primary School',
    welcomeTo: 'Welcome to',
    whereEducation: 'Where education meets joy and creativity! Nurturing young minds for a brighter tomorrow.',
    applyForAdmission: 'Apply for Admission',
    discoverMore: 'Discover More',
    // Add more translations as needed
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    contact: 'संपर्क',
    blogs: 'ब्लॉग',
    highlights: 'ठळक',
    login: 'लॉगिन',
    admissions: 'प्रवेश',
    primarySchool: 'प्राथमिक शाळा',
    welcomeTo: 'आपले स्वागत आहे',
    whereEducation: 'जिथे शिक्षण आनंद आणि सृजनशीलतेला भेटते! उज्वल उद्यासाठी तरुण मनांचे संगोपन.',
    applyForAdmission: 'प्रवेश अर्ज करा',
    discoverMore: 'अधिक जाणून घ्या',
    // Add more translations as needed
  }
};

type LanguageContextType = {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Translate function
  const t = (key: string): string => {
    // @ts-ignore - Simple implementation for demo purposes
    return translations[language][key] || key;
  };

  // Listen for language change events
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
