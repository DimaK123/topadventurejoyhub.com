import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cn from 'classnames';
import './Gallery.scss';
import { useEffect, useState } from 'react';

export const Gallery = () => {
  const imageCount = 7;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="gallery" id='gallery'>
      <div className="wrapper">
        <div className="grid__inner">
          <h2 className={cn(
            'section-title',
            'section-title--orange',
            'gallery__section-title',
          )}>
            Galeria
          </h2>
          {isMobile ? (
            <Swiper
              spaceBetween={8}
              slidesPerView={'auto'}
              >
              {Array.from({ length: imageCount }, (_, index) => (
                <SwiperSlide
                  className={cn(
                    'gallery__swiper-slide',
                    `gallery__swiper-slide--${index + 1}`,
                  )}
                  key={index}
                />
              ))}
            </Swiper>
          ) : (
            <div className="gallery__grid">
              {Array.from({ length: imageCount }, (_, index) => (
                <div
                  key={index}
                  className={`gallery__grid-item gallery__grid-item--${index + 1}`}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};