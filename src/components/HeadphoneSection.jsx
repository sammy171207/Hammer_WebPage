import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import images
import headphone1 from '../assets/Greenphone.png'
import headphone2 from '../assets/RedHeadphone.png'
import headphone3 from '../assets/YellowHeadphone.png'

// Headphone image array
const images = [headphone1, headphone2, headphone3]

// Dot colors corresponding to headphone colors
const dotColors = ['bg-[#D8B74B]', 'bg-[#883D39]', 'bg-[#D8B74B]']

// Smooth animation variants
const imageVariants = {
  initial: { opacity: 0, x: 100, scale: 0.98 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.98 },
}

const HeadphoneSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userClicked, setUserClicked] = useState(false)

  // Auto-slide logic
  useEffect(() => {
    if (userClicked) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [userClicked])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setUserClicked(true)
  }

  return (
    <div className="container relative grid justify-center mt-10 p-4 sm:p-6 overflow-hidden fade-in">
      <h2 className="main-text text-3xl sm:text-4xl md:text-5xl poppins-bold text-center mb-2 sm:mb-3 smooth">
        Your Style. Your Hand
      </h2>
      <h3 className="text-lg sm:text-xl md:text-2xl poppins-regular text-center mb-4 sm:mb-8 smooth">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        ipsum.
      </h3>

      {/* Carousel section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
        {/* Left image (blurred) */}
        <img
          src={images[(currentIndex + 2) % 3]}
          alt="side headphone left"
          className="max-w-[80px] sm:max-w-xs blur-sm opacity-50 hidden md:block transition-all duration-500 smooth"
        />

        {/* Center image with animation */}
        <div className="relative w-[140px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-auto z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="main headphone"
              className="w-full h-auto rounded-xl smooth"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* Right image (blurred) */}
        <img
          src={images[(currentIndex + 1) % 3]}
          alt="side headphone right"
          className="max-w-[80px] sm:max-w-xs blur-sm opacity-50 hidden md:block transition-all duration-500 smooth"
        />
      </div>

      {/* Dots with color */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 smooth
              ${dotColors[index]}
              ${currentIndex === index ? 'scale-125 border-gray-800' : 'opacity-60'}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default HeadphoneSection