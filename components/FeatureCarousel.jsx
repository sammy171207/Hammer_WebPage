import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FeatureCarousel = React.memo(({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userClicked, setUserClicked] = useState(false)

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index)
    setUserClicked(true)
  }, [])

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (userClicked) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [userClicked, data.length])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      position: 'absolute',
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, position: 'relative', scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      position: 'absolute',
      scale: 0.98,
    }),
  }

  return (
    <section className="relative w-full overflow-hidden" aria-label="Feature Carousel">
      <div className="relative h-auto min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className={`flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 bg-white/80 dark:bg-black/20 gradient-1 rounded-lg shadow-lg smooth`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Feature ${currentIndex + 1}`}
          >
            {/* Text Section */}
            <div className="flex-1 min-w-[180px]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl poppins-semibold leading-snug text-gray-800 dark:text-gray-100">
                {data[currentIndex].text.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-[180px] sm:max-w-[300px] md:max-w-[400px]">
              <img
                src={data[currentIndex].image}
                alt="Feature"
                className="w-full h-auto object-contain rounded-xl  smooth"
                loading="lazy"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots at the bottom center of the carousel */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 smooth focus:outline-none focus:ring-2 focus:ring-gray-700 ${
                currentIndex === index
                  ? 'bg-gray-800 scale-110'
                  : 'bg-gray-400 opacity-50'
              }`}
              aria-label={`Go to feature ${index + 1}`}
              aria-current={currentIndex === index}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

export default FeatureCarousel
