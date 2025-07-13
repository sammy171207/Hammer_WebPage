import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import greenphone from '../assets/Greenphone.png'
import redphone from '../assets/RedHeadphone.png'
import yellowphone from '../assets/YellowHeadphone.png'
import headphoneDetail from '../assets/HeadphoneDetail.png'
import headphoneBag from '../assets/HeadphoneBag.png'

const DetailPage = () => {
  const { color = 'green' } = useParams()
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState(color)
  const [quantity, setQuantity] = useState(1)

  // Update selectedColor when URL parameter changes
  useEffect(() => {
    setSelectedColor(color)
  }, [color])

  const colorData = {
    green: {
      name: 'Forest Green',
      image: greenphone,
      hex: '#4A7C59',
      price: 299.99,
      description: 'A sophisticated forest green that brings nature\'s tranquility to your audio experience.',
      specs: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32Ω',
        'Sensitivity': '110dB',
        'Weight': '250g',
        'Cable Length': '1.2m'
      }
    },
    red: {
      name: 'Crimson Red',
      image: redphone,
      hex: '#883D39',
      price: 299.99,
      description: 'Bold crimson red that makes a statement while delivering exceptional sound quality.',
      specs: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32Ω',
        'Sensitivity': '110dB',
        'Weight': '250g',
        'Cable Length': '1.2m'
      }
    },
    yellow: {
      name: 'Golden Yellow',
      image: yellowphone,
      hex: '#D8B74B',
      price: 299.99,
      description: 'Vibrant golden yellow that radiates energy and complements your dynamic lifestyle.',
      specs: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32Ω',
        'Sensitivity': '110dB',
        'Weight': '250g',
        'Cable Length': '1.2m'
      }
    }
  }

  // Validate color parameter and redirect if invalid
  useEffect(() => {
    if (!colorData[color]) {
      navigate('/detail/green', { replace: true })
    }
  }, [color, navigate])

  const currentProduct = colorData[selectedColor]

  // If currentProduct is undefined (invalid color), show loading or redirect
  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor)
    navigate(`/detail/${newColor}`)
  }

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change)
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    alert(`Added ${quantity} ${currentProduct.name} headphone(s) to cart!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
          >
            ← Back to Home
          </button>
        </motion.div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <img 
                src={currentProduct.image} 
                alt={`${currentProduct.name} Headphone`}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <div 
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: currentProduct.hex }}
                ></div>
              </div>
            </div>
            
            {/* Additional Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={headphoneDetail} 
                alt="Headphone Detail"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src={headphoneBag} 
                alt="Headphone Bag"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Title and Price */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl poppins-bold main-text mb-4">
                Aura II Resonance
              </h1>
              <h2 className="text-2xl md:text-3xl poppins-semibold text-gray-700 mb-2">
                {currentProduct.name}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {currentProduct.description}
              </p>
              <div className="text-4xl poppins-bold main-text">
                ${currentProduct.price}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-xl poppins-semibold mb-4">Choose Your Color</h3>
              <div className="flex gap-4">
                {Object.entries(colorData).map(([colorKey, colorInfo]) => (
                  <button
                    key={colorKey}
                    onClick={() => handleColorChange(colorKey)}
                    className={`relative p-1 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === colorKey 
                        ? 'border-gray-800 scale-110' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: colorInfo.hex }}
                    ></div>
                    {selectedColor === colorKey && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl poppins-semibold mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-2xl poppins-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl poppins-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Add to Cart - ${(currentProduct.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl poppins-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Premium Audio Quality with 40mm Drivers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Comfortable Memory Foam Ear Cushions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Foldable Design for Easy Storage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Detachable Cable with In-line Controls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Premium Carrying Case Included
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <h2 className="text-3xl poppins-bold main-text mb-8 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(currentProduct.specs).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg poppins-semibold text-gray-700 mb-1">{key}</h3>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl poppins-bold main-text mb-8 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Amazing sound quality and the comfort is incredible. Perfect for long listening sessions!"</p>
              <p className="text-sm text-gray-500">- Sarah M.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"The build quality is outstanding and the design is so stylish. Love the color options!"</p>
              <p className="text-sm text-gray-500">- Mike R.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Best headphones I've ever owned. The bass is perfect and the highs are crystal clear."</p>
              <p className="text-sm text-gray-500">- Jessica L.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default DetailPage