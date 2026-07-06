// Hero component receives isDark from App.jsx
import { useState } from 'react'

function Hero({ isDark }) {

  // Remember what the user types in the search box
  //console.log("hi test 1")
  const [searchText, setSearchText] = useState('')

 // console.log("here")

  // Colors based on theme
  const bgColor      = isDark ? '#0f1f0f' : '#1a3a1a'
  const subtitleColor = isDark ? '#97C459' : '#97C459'

  return (
    <section style={{
      backgroundColor: bgColor,
      padding: '80px 32px',
      textAlign: 'center'
    }}>

      {/* Main headline */}
      <h1 style={{ color: '#ffffff', fontSize: '42px', marginBottom: '16px' }}>
        Find Your Dream Home
      </h1>

      {/* Subtitle */}
      <p style={{ color: subtitleColor, fontSize: '18px', marginBottom: '40px' }}>
        Browse hundreds of properties across Saudi Arabia
      </p>

      {/* Search bar row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0px',
        marginBottom: '60px'
      }}>
        {/* Text input — updates searchText on every keystroke */}
        <input
          type="text"
          placeholder="Search by city or property type..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: '14px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px 0 0 8px',
            width: '400px',
            outline: 'none'
          }}
        />

        {/* Search button */}
        <button style={{
          backgroundColor: '#3B6D11',
          color: 'white',
          border: 'none',
          padding: '14px 28px',
          fontSize: '16px',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer'
        }}>
          Search
        </button>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        borderTop: '1px solid #3B6D11',
        paddingTop: '40px'
      }}>

        {/* Stat 1 */}
        <div>
          <div style={{ color: '#97C459', fontSize: '32px', fontWeight: 'bold' }}>500+</div>
          <div style={{ color: '#ffffff', fontSize: '14px' }}>Properties</div>
        </div>

        {/* Stat 2 */}
        <div>
          <div style={{ color: '#97C459', fontSize: '32px', fontWeight: 'bold' }}>12</div>
          <div style={{ color: '#ffffff', fontSize: '14px' }}>Cities</div>
        </div>

        {/* Stat 3 */}
        <div>
          <div style={{ color: '#97C459', fontSize: '32px', fontWeight: 'bold' }}>98%</div>
          <div style={{ color: '#ffffff', fontSize: '14px' }}>Happy Clients</div>
        </div>

      </div>

    </section>
  )
}

export default Hero