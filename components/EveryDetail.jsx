import React from 'react'

const EveryDetail = React.memo(({ text, paragraph, modal1, modal2, modal3 }) => {
  return (
    <section className="flex flex-col items-center p-4 sm:p-8 md:p-10 w-full fade-in" aria-label="Product Details">
      {/* Heading Section */}
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl poppins-bold main-text mb-2 sm:mb-4 smooth">
          {text}
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg poppins-normal text-gray-700 max-w-2xl mx-auto smooth">
          {paragraph}
        </h3>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-2 sm:mt-4 w-full max-w-5xl">
        <div className="w-full aspect-[4/4] flex items-center justify-center overflow-hidden rounded-xl shadow-lg smooth">
          <img src={modal1} alt="Product detail 1" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="w-full aspect-[4/4] flex items-center justify-center overflow-hidden rounded-xl shadow-lg smooth">
          <img src={modal2} alt="Product detail 2" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="w-full aspect-[4/4] flex items-center justify-center overflow-hidden rounded-xl shadow-lg smooth">
          <img src={modal3} alt="Product detail 3" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
})

export default EveryDetail
