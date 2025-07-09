"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import clsx from "clsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function VehicleSolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      type: "passenger",
      title: "Passenger vehicles",
      description: "Revving up Nonwoven innovation from interior to exterior.",
      videoSrc: "/assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
    },
    {
      type: "commercial",
      title: "Commercial vehicles",
      description: "Advancing Nonwoven engineering for heavy-duty vehicles.",
      videoSrc: "/assets/Commercial Alpha.92c92d40f9116c837d1d.mp4",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white py-20 px-4 md:px-16 overflow-hidden min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-light leading-tight mb-12 md:mb-20"
      >
        Evolving the drive with{" "}
        <span className="font-semibold">360-degree</span> <br /> comprehensive
        solutions
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto h-[60vh]">
        {/* Left Tab Text - 1/3 width */}
        <div className="md:col-span-1 flex flex-col justify-center h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.type}
              className={clsx(
                "cursor-pointer transition-all duration-300 py-8 px-4",
                {
                  "text-white border-l-1 border-white": activeIndex === index,
                  "text-gray-400 border-l-1 border-white/20":
                    activeIndex !== index,
                }
              )}
              onClick={() => swiper?.slideTo(index)}
            >
              <h3 className="text-2xl md:text-3xl font-medium">
                {slide.title}
              </h3>
              <p className="text-sm md:text-base mt-2">{slide.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side Swiper - 2/3 width */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 relative h-full w-full rounded-xl overflow-hidden"
        >
          <Swiper
            direction="vertical"
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            modules={[Pagination]}
            className="h-full w-full"
            style={{
              // @ts-ignore - custom CSS variables
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-inactive-color": "#999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.type} className="h-full w-full">
                <div className="relative h-full w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !right-4 !left-auto !top-1/2 !transform !-translate-y-1/2 !flex !flex-col !w-auto" />
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
