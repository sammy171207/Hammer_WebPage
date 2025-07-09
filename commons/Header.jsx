import React from 'react'

const Header = () => {
  return (
     <header className='bg-transparent  sticky top-0 z-50 flex justify-between items-center p-4 sm:p-5 w-full smooth'>
        <div className='logo text-xl sm:text-2xl poppins-bold font-semibold tracking-wide'>
            Hameer
        </div>
        <nav className='hidden sm:flex flex-row'>
            <ul className='flex flex-row gap-4 sm:gap-7 text-base sm:text-lg items-center'>
                <li className='hover:underline cursor-pointer smooth'>Home</li>
                <li className='hover:underline cursor-pointer smooth'>Species</li>
                <li>
                  <button className='rounded-full bg-[#52483E] text-white px-5 py-1.5 font-semibold smooth hover:bg-[#6a5c4a] focus:outline-none focus:ring-2 focus:ring-[#52483E] shadow-md'>
                    Compare
                  </button>
                </li>
            </ul>
        </nav>
        {/* Mobile menu icon */}
        <div className='sm:hidden'>
          <button aria-label='Open menu' className='focus:outline-none p-2 rounded-full hover:bg-gray-200 smooth shadow-md'>
            <svg width='28' height='28' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
     </header>
  )
}

export default Header