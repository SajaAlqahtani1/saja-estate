import { useState } from 'react'

function PropertyCard({ property, isDark }) {

  // Track if card is flipped
  const [isFlipped, setIsFlipped] = useState(false)

  // Colors based on theme
  const cardBg     = isDark ? '#1a2e1a' : '#ffffff'
  const textColor  = isDark ? '#C0DD97' : '#27500A'
  const subColor   = isDark ? '#888780' : '#5F5E5A'
  const priceColor = '#3B6D11'
  const backBg     = isDark ? '#0f1f0f' : '#EAF3DE'

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        width: '300px',
        height: '300px',
        perspective: '1000px',
        cursor: 'pointer'
      }}
    >

      {/* Inner container — rotates on hover */}
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s ease',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>

        {/* FRONT SIDE */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: cardBg,
          borderRadius: '12px',
          border: '1px solid #3B6D11',
          overflow: 'hidden'
        }}>

          {/* Image placeholder */}
          <div style={{
            backgroundColor: '#2d6a2d',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#97C459',
            fontSize: '14px'
          }}>
            Property Image
          </div>

          {/* Name and price */}
          <div style={{ padding: '16px' }}>
            <h3 style={{
              color: textColor,
              margin: '0 0 6px 0',
              fontSize: '16px'
            }}>
              {property.name}
            </h3>
            <p style={{
              color: priceColor,
              fontWeight: 'bold',
              margin: 0,
              fontSize: '15px'
            }}>
              SAR {property.price.toLocaleString()}
            </p>
          </div>

        </div>

        {/* BACK SIDE */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundColor: backBg,
          borderRadius: '12px',
          border: '2px solid #3B6D11',
          transform: 'rotateY(180deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          padding: '24px',
          boxSizing: 'border-box'
        }}>

          {/* Property name */}
          <h3 style={{
            color: textColor,
            margin: 0,
            fontSize: '18px',
            textAlign: 'center'
          }}>
            {property.name}
          </h3>

          {/* Price */}
          <p style={{
            color: priceColor,
            fontWeight: 'bold',
            fontSize: '22px',
            margin: 0
          }}>
            SAR {property.price.toLocaleString()}
          </p>

          {/* Property ID */}
          <p style={{
            color: subColor,
            fontSize: '12px',
            margin: 0
          }}>
            Property ID: {property.id}
          </p>

          {/* View details button */}
          <button style={{
            backgroundColor: '#3B6D11',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            marginTop: '8px'
          }}>
            View Details
          </button>

        </div>

      </div>
    </div>
  )
}

export default PropertyCard