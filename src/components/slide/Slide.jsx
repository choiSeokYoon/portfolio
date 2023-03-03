import { Swiper, SwiperSlide} from 'swiper/react'
import React from 'react'
import './Slide.scss'
import {useeffect} from 'react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useRecoilValue } from 'recoil';
import { recoilProjects } from './../../store/project';

export default function Slide() {
    const projects = useRecoilValue(recoilProjects)
    /*  useeffect(()=>{
        
    },[]) */
    console.log(projects)
  return (
    <div className='slide'>
      <h1 className='slide_title'>PROJECT</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project)=>(
            <SwiperSlide>
                <img src={project.imgUrl} alt="프로젝트 이미지" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
