import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Swiper
        className={`${styles.mySwiper} mySwiper`}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true, //work
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      >
        {projects.map((project, id) => {
          return <SwiperSlide /*className={`${styles.mySwiperSlide} ${activeSlideIndex === id ? styles.activeSlide : ''}`}*/
            key={id}
          >
            <ProjectCard project={project} />
          </SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
};