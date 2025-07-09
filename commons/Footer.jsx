import React from 'react'
import { FaGamepad } from 'react-icons/fa'
import { PiScissorsThin } from 'react-icons/pi'
import { LiaInfinitySolid } from 'react-icons/lia'

const Footer = React.memo(() => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F5F3F0] to-[#DAD0C5] text-[#3C2E23] fade-in" aria-label="Site Footer">
      {/* Center Section */}
      <div className="flex flex-col items-center text-center py-10 sm:py-16 px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 smooth main-text">
          Sound. Presence. Purpose.
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mb-1 sm:mb-2 smooth">
          Focused on crafting immersive audio experiences.
        </p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mb-4 sm:mb-6 smooth">
          We believe sound should not just be heard 1it should move you.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="border border-gray-500 px-4 sm:px-6 py-2 rounded-full hover:bg-gray-200 transition-all text-xs sm:text-sm font-medium smooth shadow-lg">
            Aura Pro II
          </button>
          <button className="border border-gray-500 px-4 sm:px-6 py-2 rounded-full hover:bg-gray-200 transition-all text-xs sm:text-sm font-medium smooth shadow-lg">
            Flow II
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-gray-400 flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <div className="w-5 h-5 bg-[#3C2E23] rounded-sm" />
          <span className="font-semibold text-[#3C2E23]">Resonance</span>
        </div>

        {/* Right: Copyright + Icons */}
        <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
          <span>&copy; 2025 Resonance. All rights reserved.</span>
          <FaGamepad className="text-lg sm:text-xl hover:text-[#3C2E23] transition smooth" />
          <PiScissorsThin className="text-lg sm:text-xl hover:text-[#3C2E23] transition smooth" />
          <LiaInfinitySolid className="text-lg sm:text-xl hover:text-[#3C2E23] transition smooth" />
        </div>
      </div>
    </footer>
  )
})

export default Footer
