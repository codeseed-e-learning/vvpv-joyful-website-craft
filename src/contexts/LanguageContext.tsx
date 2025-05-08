
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
    admissionsOpen: 'Admissions Open',
    forAcademicYear: 'For Academic Year 2025-26',
    admissionProcess: 'Admission Process',
    joiningVVVP: 'Joining the VVVP family is a simple and straightforward process. Follow these steps to secure a bright future for your child.',
    beginApplication: 'Begin Application Process',
    applicationForm: 'Application Form',
    applicationFormDesc: 'Fill out the online application form with all the required details about your child and family.',
    documentSubmission: 'Document Submission',
    documentSubmissionDesc: 'Submit necessary documents including birth certificate, address proof, and previous academic records.',
    entranceAssessment: 'Entrance Assessment',
    entranceAssessmentDesc: 'A child-friendly interaction session to understand your child\'s readiness for the appropriate grade.',
    feePayment: 'Fee Payment',
    feePaymentDesc: 'Upon selection, complete the admission process by paying the required fees within the stipulated time.',
    step: 'Step',
    ourSchoolGallery: 'Our School Gallery',
    galleryDesc: 'Take a glimpse into the vibrant and joyful world of VVVP, where learning comes alive through various activities and events.',
    viewFullGallery: 'View Full Gallery',
    classroom: 'Classroom',
    activities: 'Activities',
    sports: 'Sports',
    events: 'Events',
    library: 'Library',
    science: 'Science',
    interactiveLearning: 'Interactive Learning',
    artCraft: 'Art & Craft',
    physicalEducation: 'Physical Education',
    annualDayCelebration: 'Annual Day Celebration',
    readingSession: 'Reading Session',
    handsOnExperiments: 'Hands-on Experiments',
    ourSpecialities: 'Our Specialities',
    specialitiesDesc: 'At VVVP, we pride ourselves on offering a comprehensive educational experience that helps children develop holistically.',
    creativeArts: 'Creative Arts',
    creativeArtsDesc: 'Nurturing creativity through drawing, painting, crafts, music, and dance activities.',
    inquiryBasedLearning: 'Inquiry-Based Learning',
    inquiryBasedLearningDesc: 'Encouraging curiosity and critical thinking through hands-on exploration.',
    ecoFriendlyCampus: 'Eco-Friendly Campus',
    ecoFriendlyCampusDesc: 'Teaching environmental consciousness with our green campus initiatives.',
    sportsExcellence: 'Sports Excellence',
    sportsExcellenceDesc: 'Developing physical fitness and teamwork through various sports activities.',
    digitalLearning: 'Digital Learning',
    digitalLearningDesc: 'Interactive digital tools to make learning engaging and effective.',
    strongParentPartnership: 'Strong Parent Partnership',
    strongParentPartnershipDesc: 'Regular involvement of parents in the learning journey of their children.',
    contactUs: 'Contact Us',
    contactDesc: 'Have questions about our school or the admission process? We\'re here to help! Reach out to us using the form below.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourPhone: 'Your phone number',
    subjectPlaceholder: 'Subject of your message',
    messagePlaceholder: 'Type your message here...',
    sendMessage: 'Send Message',
    contactInformation: 'Contact Information',
    address: 'Address',
    addressDetails: '123 School Road, Education City, Learning District, 500001',
    phone: 'Phone',
    email: 'Email',
    officeHours: 'Office Hours',
    mondayFriday: 'Monday - Friday:',
    mondayFridayHours: '8:00 AM - 4:00 PM',
    saturday: 'Saturday:',
    saturdayHours: '9:00 AM - 12:00 PM',
    sunday: 'Sunday:',
    sundayHours: 'Closed',
    findUs: 'Find Us',
    findUsDesc: 'We\'re conveniently located in the heart of the city, easily accessible by public transportation.',
    gettingHere: 'Getting Here',
    gettingHereDesc: 'Our school is easily accessible by bus routes 34, 56, and 78. The nearest metro station is Education Center, just a 5-minute walk away.',
    parkingFacilities: 'Parking Facilities',
    parkingFacilitiesDesc: 'Ample parking space is available for parents and visitors within the school premises. Security personnel are always present.',
    schoolBusService: 'School Bus Service',
    schoolBusServiceDesc: 'We offer door-to-door pickup and drop service covering all major areas of the city with GPS-enabled buses.'
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
    admissionsOpen: 'प्रवेश सुरु आहेत',
    forAcademicYear: 'शैक्षणिक वर्ष २०२५-२६ साठी',
    admissionProcess: 'प्रवेश प्रक्रिया',
    joiningVVVP: 'व्हीव्हीव्हीपी कुटुंबात सामील होणे सोपे आणि सरळ आहे. आपल्या मुलासाठी उज्वल भविष्य सुरक्षित करण्यासाठी या पायऱ्यांचे अनुसरण करा.',
    beginApplication: 'अर्जाची प्रक्रिया सुरू करा',
    applicationForm: 'अर्ज फॉर्म',
    applicationFormDesc: 'आपल्या मुलाचा आणि कुटुंबाची आवश्यक माहिती असलेला ऑनलाइन अर्ज भरा.',
    documentSubmission: 'दस्तऐवज सबमिशन',
    documentSubmissionDesc: 'जन्म प्रमाणपत्र, पत्ता प्रमाण आणि मागील शैक्षणिक रेकॉर्ड्स सह आवश्यक दस्तऐवज सबमिट करा.',
    entranceAssessment: 'प्रवेश मूल्यांकन',
    entranceAssessmentDesc: 'योग्य वर्गासाठी आपल्या मुलाची तयारी समजून घेण्यासाठी मुलांसोबत मैत्रीपूर्ण आंतरक्रिया सत्र.',
    feePayment: 'शुल्क भरणा',
    feePaymentDesc: 'निवडीनंतर निर्धारित वेळेत आवश्यक शुल्क भरून प्रवेश प्रक्रिया पूर्ण करा.',
    step: 'पायरी',
    ourSchoolGallery: 'आमची शाळा गॅलरी',
    galleryDesc: 'जिथे शिक्षण विविध उपक्रम आणि कार्यक्रमांद्वारे जीवंत होते, अशा व्हीव्हीव्हीपीच्या जीवंत आणि आनंदी जगातील एक झलक घ्या.',
    viewFullGallery: 'पूर्ण गॅलरी पहा',
    classroom: 'वर्ग',
    activities: 'क्रियाकलाप',
    sports: 'खेळ',
    events: 'कार्यक्रम',
    library: 'ग्रंथालय',
    science: 'विज्ञान',
    interactiveLearning: 'आंतरक्रियात्मक शिक्षण',
    artCraft: 'कला आणि हस्तकला',
    physicalEducation: 'शारीरिक शिक्षण',
    annualDayCelebration: 'वार्षिक दिन समारंभ',
    readingSession: 'वाचन सत्र',
    handsOnExperiments: 'प्रयोगात्मक अनुभव',
    ourSpecialities: 'आमची वैशिष्ट्ये',
    specialitiesDesc: 'व्हीव्हीव्हीपी मध्ये आम्ही मुलांना संपूर्णपणे विकसित होण्यास मदत करणारा एक व्यापक शैक्षणिक अनुभव देण्याचा अभिमान बाळगतो.',
    creativeArts: 'रचनात्मक कला',
    creativeArtsDesc: 'चित्रकला, रंगकाम, हस्तकला, संगीत आणि नृत्य क्रियाकलापांद्वारे सृजनशीलता जोपासणे.',
    inquiryBasedLearning: 'चौकशी-आधारित शिक्षण',
    inquiryBasedLearningDesc: 'हाताळणी अन्वेषणाद्वारे कुतूहल आणि चिकित्सक विचार प्रोत्साहित करणे.',
    ecoFriendlyCampus: 'पर्यावरण-अनुकूल परिसर',
    ecoFriendlyCampusDesc: 'आमच्या हरित परिसर उपक्रमांसह पर्यावरण जागरूकता शिकवणे.',
    sportsExcellence: 'क्रीडा उत्कृष्टता',
    sportsExcellenceDesc: 'विविध क्रीडा क्रियाकलापांद्वारे शारीरिक तंदुरुस्ती आणि टीमवर्क विकसित करणे.',
    digitalLearning: 'डिजिटल शिक्षण',
    digitalLearningDesc: 'शिक्षण आकर्षक आणि प्रभावी बनवण्यासाठी इंटरॅक्टिव्ह डिजिटल साधने.',
    strongParentPartnership: 'मजबूत पालक भागीदारी',
    strongParentPartnershipDesc: 'त्यांच्या मुलांच्या शिक्षण प्रवासात पालकांचा नियमित सहभाग.',
    contactUs: 'आमच्याशी संपर्क साधा',
    contactDesc: 'आमच्या शाळेबद्दल किंवा प्रवेश प्रक्रियेबद्दल प्रश्न आहेत? आम्ही मदत करण्यासाठी येथे आहोत! खालील फॉर्म वापरून आमच्याशी संपर्क साधा.',
    fullName: 'पूर्ण नाव',
    emailAddress: 'ईमेल पत्ता',
    phoneNumber: 'फोन नंबर',
    subject: 'विषय',
    message: 'संदेश',
    yourName: 'आपले नाव',
    yourEmail: 'आपला ईमेल',
    yourPhone: 'आपला फोन नंबर',
    subjectPlaceholder: 'आपल्या संदेशाचा विषय',
    messagePlaceholder: 'आपला संदेश येथे टाइप करा...',
    sendMessage: 'संदेश पाठवा',
    contactInformation: 'संपर्क माहिती',
    address: 'पत्ता',
    addressDetails: '१२३ शाळा रस्ता, एज्युकेशन सिटी, लर्निंग डिस्ट्रिक्ट, ५०००००१',
    phone: 'फोन',
    email: 'ईमेल',
    officeHours: 'कार्यालयीन वेळ',
    mondayFriday: 'सोमवार - शुक्रवार:',
    mondayFridayHours: 'सकाळी ८:०० - संध्याकाळी ४:००',
    saturday: 'शनिवार:',
    saturdayHours: 'सकाळी ९:०० - दुपारी १२:००',
    sunday: 'रविवार:',
    sundayHours: 'बंद',
    findUs: 'आम्हाला शोधा',
    findUsDesc: 'आम्ही शहराच्या मध्यभागी सोयीस्कर स्थितीत आहोत, सार्वजनिक वाहतुकीद्वारे सहज पोहोचता येण्यासारखे.',
    gettingHere: 'येथे पोहोचणे',
    gettingHereDesc: 'आमची शाळा बस मार्ग ३४, ५६ आणि ७८ द्वारे सहज पोहोचता येण्यासारखी आहे. जवळचे मेट्रो स्टेशन एज्युकेशन सेंटर आहे, फक्त ५ मिनिटांच्या चालण्याच्या अंतरावर.',
    parkingFacilities: 'पार्किंग सुविधा',
    parkingFacilitiesDesc: 'शाळेच्या आवारात पालक आणि अभ्यागतांसाठी पुरेशी पार्किंग जागा उपलब्ध आहे. सुरक्षा कर्मचारी नेहमी उपस्थित असतात.',
    schoolBusService: 'शाळा बस सेवा',
    schoolBusServiceDesc: 'आम्ही शहरातील सर्व प्रमुख भागांना कव्हर करणारी जीपीएस-सक्षम बसेससह दारापासून दारापर्यंत पिकअप आणि ड्रॉप सेवा प्रदान करतो.'
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
