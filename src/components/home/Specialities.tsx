
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Specialities = () => {
  const { t } = useLanguage();
  
  const specialities = [
    {
      icon: "🎨",
      title: t('creativeArts'),
      description: t('creativeArtsDesc')
    },
    {
      icon: "🔍",
      title: t('inquiryBasedLearning'),
      description: t('inquiryBasedLearningDesc')
    },
    {
      icon: "🌿",
      title: t('ecoFriendlyCampus'),
      description: t('ecoFriendlyCampusDesc')
    },
    {
      icon: "🏆",
      title: t('sportsExcellence'),
      description: t('sportsExcellenceDesc')
    },
    {
      icon: "💻",
      title: t('digitalLearning'),
      description: t('digitalLearningDesc')
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: t('strongParentPartnership'),
      description: t('strongParentPartnershipDesc')
    }
  ];

  return (
    <section id="specialities" className="school-section bg-school-green/20">
      <div className="container mx-auto px-4">
        <h2 className="school-heading">{t('ourSpecialities')}</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          {t('specialitiesDesc')}
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
