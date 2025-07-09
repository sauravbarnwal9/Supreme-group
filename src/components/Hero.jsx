// components/Hero.tsx
import { motion } from "framer-motion";
// import ConstructorVideo from ""; // Adjust the path as necessary

export function Hero() {
  return (
    <section className="relative h-screen bg-gray-900  overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Background video/image */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover "
      >
        <source
          src="/assets/automotive224e7418884105595114.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <p className="text-[22px] text-white font-normal mb-8 max-w-2xl">
          Performance in motion
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Soft Trims and NVH Solutions
        </h1>
        <h1 className="text-4xl md:text-5xl font-normal text-white mb-4">
          for seamless rides
        </h1>
      </motion.div>
    </section>
  );
}
