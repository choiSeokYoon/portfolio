import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useRecoilValue } from "recoil";
import { recoilProjects } from "./../../recoil/project";

export default function Slide() {
  const projects = useRecoilValue(recoilProjects);

  return (
    <div className="slide">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <img src={project.imgUrl} alt="프로젝트 이미지" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
