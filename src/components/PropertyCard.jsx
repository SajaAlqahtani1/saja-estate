import { useState } from 'react'

function PropertyCard({ property, isDark }) {

  // Track if card is flipped
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="w-[300px] h-[300px] perspective-[1000px] cursor-pointer"
    >

      {/* Inner container — rotates on hover */}
      <div
        className={`w-full h-full relative transform-3d transition-transform duration-500 ease-in-out ${
          isFlipped ? 'rotate-y-180' : 'rotate-y-0'
        }`}
      >

        {/* FRONT SIDE */}
        <div className="absolute w-full h-full backface-hidden rounded-xl border overflow-hidden border-[#3B6D11] bg-white dark:bg-[#1a2e1a]">

          {/* Image placeholder */}
          <div className="bg-[#2d6a2d] h-[180px] flex items-center justify-center text-[#97C459] text-sm">
            Property Image
          </div>

          {/* Name and price */}
          <div className="p-4">
            <h3 className="mb-1.5 text-base text-[#27500A] dark:text-[#C0DD97]">
              {property.name}
            </h3>
            <p className="text-[#3B6D11] font-bold text-[15px] m-0">
              SAR {property.price.toLocaleString()}
            </p>
          </div>

        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full backface-hidden rounded-xl border-2 border-[#3B6D11] rotate-y-180 flex flex-col justify-center items-center gap-4 p-6 box-border bg-[#EAF3DE] dark:bg-[#0f1f0f]">

          {/* Property name */}
          <h3 className="m-0 text-lg text-center text-[#27500A] dark:text-[#C0DD97]">
            {property.name}
          </h3>

          {/* Price */}
          <p className="text-[#3B6D11] font-bold text-[22px] m-0">
            SAR {property.price.toLocaleString()}
          </p>

          {/* Property ID */}
          <p className="text-xs m-0 text-[#5F5E5A] dark:text-[#888780]">
            Property ID: {property.id}
          </p>

          {/* View details button */}
          <button className="bg-[#3B6D11] text-white border-none px-6 py-2.5 rounded-lg cursor-pointer text-sm mt-2">
            View Details
          </button>

        </div>

      </div>
    </div>
  )
}

export default PropertyCard