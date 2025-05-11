import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export const Projects = () => {

  // const swiper = new Swiper(...);
  // return (
  //   <section className={styles.container} id="projects">
  //     <h2 className={styles.title}>Projects</h2>
  //     <div className={styles.projects}>
  //       {projects.map((project, id) => {
  //         return <ProjectCard key={id} project={project} />;
  //       })}
  //     </div>
  //   </section>
  // );

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <>
        <Swiper
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
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project, id) => {
            return <SwiperSlide key={id}> <ProjectCard project={project} /> </SwiperSlide>;
          })}
        </Swiper>
      </>
    </section>
  );
};