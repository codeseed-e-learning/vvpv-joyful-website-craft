
import React from 'react';
import { Image, GalleryHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ImageGallery = () => {
  const { t } = useLanguage();
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1534097050761-91113cf0304e?auto=format&fit=crop&q=80",
      category: t('classroom'),
      title: t('interactiveLearning')
    },
    {
      image: "https://images.unsplash.com/photo-1627145733136-d92b65117e49?auto=format&fit=crop&q=80",
      category: t('activities'),
      title: t('artCraft')
    },
    {
      image: "https://images.unsplash.com/photo-1544210163-257effe9399e?auto=format&fit=crop&q=80",
      category: t('sports'),
      title: t('physicalEducation')
    },
    {
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80",
      category: t('events'),
      title: t('annualDayCelebration')
    },
    {
      image: "https://images.unsplash.com/photo-1489945052260-4f21c52268b9?auto=format&fit=crop&q=80",
      category: t('library'),
      title: t('readingSession')
    },
    {
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80",
      category: t('science'),
      title: t('handsOnExperiments')
    }
  ];

  return (
    <section id="gallery" className="school-section bg-school-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <Image className="h-8 w-8 text-school-yellow mr-2" />
          <h2 className="school-heading">{t('ourSchoolGallery')}</h2>
        </div>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          {t('galleryDesc')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-sm text-school-yellow font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-school-yellow hover:underline font-semibold">
            <span>{t('viewFullGallery')}</span>
            <GalleryHorizontal className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
