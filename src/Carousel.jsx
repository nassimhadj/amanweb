import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="w-3/4 h-96 mx-auto mt-4 md:w-2/3 md:h-80 sm:w-full sm:h-64">
      <Swiper
        pagination={{ type: 'bullets', clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[
          { src: 'src/assets/images/chauffe_eau.png', text: 'Chauffe-eau haute performance' },
          { src: 'src/assets/images/chaudiere.png', text: 'Chaudière moderne et efficace' },
          { src: 'src/assets/images/plomberie.png', text: 'Services de plomberie professionnels' },
          { src: 'src/assets/images/sdb.png', text: 'Salle de bain élégante et moderne' }
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={item.src} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 font-bold p-2 rounded text-primary">
                {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}