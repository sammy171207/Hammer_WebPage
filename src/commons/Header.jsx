import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
     <header
      className={`sticky top-0 z-50 flex justify-between items-center p-4 sm:p-5 w-full smooth transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
     >
        <Link to="/" className='logo text-xl sm:text-2xl poppins-bold font-semibold tracking-wide hover:opacity-80 transition-opacity duration-200'>
            Hameer
        </Link>
        <nav className='hidden sm:flex flex-row'>
            <ul className='flex flex-row gap-4 sm:gap-7 text-base sm:text-lg items-center'>
                <li>
                  <Link 
                    to="/" 
                    className={`hover:underline cursor-pointer smooth transition-all duration-200 ${
                      isActive('/') ? 'underline font-semibold' : ''
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/detail/green" 
                    className={`hover:underline cursor-pointer smooth transition-all duration-200 ${
                      isActive('/detail') ? 'underline font-semibold' : ''
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <button className='rounded-full bg-[#52483E] text-white px-5 py-1.5 font-semibold smooth hover:bg-[#6a5c4a] focus:outline-none focus:ring-2 focus:ring-[#52483E] shadow-md'>
                    Compare
                  </button>
                </li>
            </ul>
        </nav>
        {/* Mobile menu icon */}
        <div className='sm:hidden relative'>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className='focus:outline-none p-2 rounded-full hover:bg-gray-200 smooth shadow-md'
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width='28' height='28' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg width='28' height='28' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
          {/* Simple dropdown menu */}
          {menuOpen && (
            <div ref={dropdownRef} className='absolute right-0 mt-2 w-48 rounded-xl shadow-lg primary-bg py-4 z-50 fade-in'>
              <ul className='flex flex-col gap-2 text-base font-semibold poppins-regular main-text'>
                <li>
                  <Link 
                    to="/" 
                    className={`w-full text-left px-5 py-2 hover:bg-[#e5e0d8] rounded-lg smooth block ${
                      isActive('/') ? 'bg-[#e5e0d8] font-bold' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/detail/green" 
                    className={`w-full text-left px-5 py-2 hover:bg-[#e5e0d8] rounded-lg smooth block ${
                      isActive('/detail') ? 'bg-[#e5e0d8] font-bold' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <button className='w-full rounded-full bg-[#52483E] text-white px-5 py-2 font-semibold smooth hover:bg-[#6a5c4a]' onClick={() => setMenuOpen(false)}>
                    Compare
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
     </header>
  )
}

export default Header