import { useState } from 'react'

function Contact({ isDark }) {

  // One state for each input field
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')

  // Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault() // stop page refresh

    // For now just log — later we send to FastAPI
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)

    // Clear fields after submit
    setName('')
    setEmail('')
    setMessage('')

    alert('Message sent! We will contact you soon.')
  }

  // Colors based on theme
  const bgColor    = isDark ? '#0f1f0f' : '#1a3a1a'
  const cardBg     = isDark ? '#1a2e1a' : '#ffffff'
  const labelColor = isDark ? '#97C459' : '#3B6D11'
  const inputBg    = isDark ? '#0f1f0f' : '#f5f5f5'
  const inputColor = isDark ? '#C0DD97' : '#27500A'

  // Shared style for all inputs
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: inputBg,
    color: inputColor,
    border: '1px solid #3B6D11',
    borderRadius: '8px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
  }

  return (
    <section id="contact" style={{
  backgroundColor: bgColor,
  padding: '60px 32px',
  position: 'relative'
}}>

      {/* Section headline */}
      <h2 style={{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '32px',
        marginBottom: '8px'
      }}>
        Let Us Help You Find Your Home
      </h2>

      {/* Subtitle */}
      <p style={{
        color: '#97C459',
        textAlign: 'center',
        fontSize: '15px',
        marginBottom: '40px'
      }}>
        Fill in the form and our team will reach out to you
      </p>

      {/* Floating white card */}
      <div style={{
        maxWidth: '580px',
        margin: '0 auto',
        backgroundColor: cardBg,
        borderRadius: '16px',
        border: '1px solid #3B6D11',
        padding: '32px'
      }}>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >

          {/* Name and Email side by side */}
          <div style={{ display: 'flex', gap: '16px' }}>

            {/* Name field */}
            <div style={{ flex: 1 }}>
              <label style={{
                color: labelColor,
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px'
              }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            {/* Email field */}
            <div style={{ flex: 1 }}>
              <label style={{
                color: labelColor,
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px'
              }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

          </div>

          {/* Message field */}
          <div>
            <label style={{
              color: labelColor,
              display: 'block',
              marginBottom: '6px',
              fontSize: '13px'
            }}>
              Message
            </label>
            <textarea
              placeholder="Tell us about the property you are looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              style={{
                ...inputStyle,
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#3B6D11',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '15px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Send Message
          </button>

        </form>
      </div>

      {/* Bottom left — phone and WhatsApp in small font */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <span style={{ color: '#97C459', fontSize: '12px' }}>
          Phone: +966 50 000 0000
        </span>
        <span style={{ color: '#97C459', fontSize: '12px' }}>
          WhatsApp: +966 50 000 0000
        </span>
      </div>

    </section>
  )
}

export default Contact