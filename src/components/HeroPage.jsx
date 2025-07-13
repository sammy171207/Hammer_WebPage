import React from 'react'
import { motion } from 'framer-motion'
import Header from '../commons/Header'
import headphone from '../assets/Headphone.png'
import EveryDetail from './EveryDetail'
import HeadphoneSection from './HeadphoneSection'
import FeatureCarousel from './FeatureCarousel'
import modal from '../assets/HeadphoneModel.png'
import modal1 from '../assets/HeadphoneDetail.png'
import modal2 from '../assets/HeadphoneBag.png'
import Footer from '../commons/Footer'
import detail1 from '../assets/Details1.png'
import detail2 from '../assets/Details2.png'
import detail3 from '../assets/Details3.png'

const featureData = [
  {
    text: 'Lorem ipsum dolor sit amet\nconsectetur adipisicing elit. Excepturi, fugit!',
    image: modal,
    className: 'feature-1',
  },
  {
    text: 'Doloribus amet doloremque\nvoluptate omnis alias numquam labore.',
    image: modal1,
    className: 'feature-2',
  },
  {
    text: 'Fugiat eligendi maxime\naccusantium molestiae eveniet natus.',
    image: modal2,
    className: 'feature-3',
  },
]

const HeroPage = () => {
  return (
    <div className="container flex flex-col justify-center relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <Header />

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 fade-in">
        {/* Back Layer: Aura II */}
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
className="
  absolute 
  right-1/2 sm:right-2 md:right-8 
  bottom-1/4 md:bottom-2/12 
  transform sm:-translate-x-1/2 
  z-0 
  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
  tracking-wide 
  poppins-bold 
  second-text 
  select-none 
  pointer-events-none"        >
          Aura II
        </motion.h1>

        {/* Middle Layer: Image */}
        <img
          className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 max-w-2xl relative z-10 drop-shadow-xl smooth"
          src={headphone}
          alt="headphone"
        />

        {/* Front Layer: Resonance */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute left-1/2 md:left-1/3 top-1/4 transform -translate-x-1/2 z-20 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide poppins-bold main-text select-none pointer-events-none"
        >
          Resonance
        </motion.h1>
      </div>

      {/* Carousel Section */}
      <div className="fade-in">
        <HeadphoneSection />
      </div>

      {/* Feature Carousel */}
      <div className="space-y-10 mt-10 fade-in">
        <FeatureCarousel data={featureData} />
      </div>

      <div className='space-y-10 mt-10 fade-in'>
        <EveryDetail
          text="Everything You Need to Know"
          paragraph="Explore the design, comfort, and quality behind our product. Each detail is crafted to perfection."
          modal1={detail1}
          modal2={detail3}
          modal3={detail2}
        />
      </div>
      <div className="fade-in">
        <Footer />
      </div>
    </div>

  )
}

export default HeroPage
