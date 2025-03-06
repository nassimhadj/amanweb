import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="w-3/4 h-96 mx-auto mt-4 md:w-2/3 md:h-80 sm:w-full sm:h-64">
      <Swiper
        pagination={{ type: 'bullets', clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {[
          { src: 'chauffe_eau.png', text: 'Chauffe-eau haute performance' },
          { src: 'chaudiere.png', text: 'Chaudière moderne et efficace' },
          { src: 'plomberie.png', text: 'Services de plomberie professionnels' },
          { src: 'sdb.png', text: 'Salle de bain élégante et moderne' }
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={item.src} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded font-bold text-white" style={{
                textShadow: '0 0 4px #3B82F6, 0 0 6px #60A5FA'
              }}>
                {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}