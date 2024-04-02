import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

import './Swiber.css'

function Swiber() {
  return (
    <div className='card'>
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://img.freepik.com/premium-photo/burnout-concept-tired-sleepy-woman-happy-energetic-woman-working-computer-workplace-3d-modern-illustration_76964-83157.jpg?w=740" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/premium-photo/woman-with-headphones-working-laptop_1124848-4387.jpg?w=740" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/premium-photo/eager-vibrant-captivating-chibistyle-cartoon-beautiful-african-american-woman-shim_983420-180587.jpg?w=740" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/premium-photo/cartoon-woman-with-glasses-using-laptop-computer-generative-ai_900958-46521.jpg?w=740" />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Swiber