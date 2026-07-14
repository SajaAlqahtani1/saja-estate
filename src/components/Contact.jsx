import { useState } from 'react'

function Contact({ isDark }) {

  // One state for each input field
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
 // Track if user has touched each field
  // so we don't show errors before they start typing
  const [nameTouched, setNameTouched]       = useState(false)
  const [emailTouched, setEmailTouched]     = useState(false)
  const [messageTouched, setMessageTouched] = useState(false)

  // Show success popup after submit
  const [showSuccess, setShowSuccess] = useState(false)

  // Only English letters and spaces allowed in name
  const nameRegex = /^[a-zA-Z\s]+$/

  // Standard email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validation rules — calculated from current values
  // no useState needed — derived from existing state
  const nameError =
    name.length === 0
      ? 'Name is required'
      : name.length < 2
      ? 'Name must be at least 2 characters'
      : name.length > 50
      ? 'Name must be less than 50 characters'
      : !nameRegex.test(name)
      ? 'Name can only contain English letters and spaces'
      : ''

  const emailError =
    email.length === 0
      ? 'Email is required'
      : !emailRegex.test(email)
      ? 'Please enter a valid email like name@domain.com'
      : ''

  const messageError =
    message.length === 0
      ? 'Message is required'
      : message.length < 10
      ? 'Message must be at least 10 characters'
      : message.length > 500
      ? 'Message must be less than 500 characters'
      : ''

  // Form is valid only when all errors are empty strings
  const isFormValid = nameError === '' && emailError === '' && messageError === ''

  // Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault() // stop page refresh
// Mark all fields as touched so errors show
    setNameTouched(true)
    setEmailTouched(true)
    setMessageTouched(true)
     // Stop here if form is not valid
    if (!isFormValid) return
    // For now just log — later we send to FastAPI
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)

    // Clear fields after submit
    setName('')
    setEmail('')
    setMessage('')
    setNameTouched(false)
    setEmailTouched(false)
    setMessageTouched(false)
    // Show success popup for 3 seconds then hide it
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
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
// Input style with red border when there is an error
  const inputErrorStyle = {
    ...inputStyle,
    border: '1px solid #E24B4A'
  }
  // Small red error message style
  const errorTextStyle = {
    color: '#E24B4A',
    fontSize: '12px',
    marginTop: '4px'
  }
  return (
    <section id="contact" style={{
  backgroundColor: bgColor,
  padding: '60px 32px',
  position: 'relative'
}}>
{/* Success popup — appears top right for 3 seconds */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          backgroundColor: '#3B6D11',
          color: 'white',
          padding: '16px 24px',
          borderRadius: '12px',
          fontSize: '14px',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          Message sent! We will contact you soon.
        </div>
      )}

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
                onBlur={() => setNameTouched(true)}
                style={nameTouched && nameError ? inputErrorStyle : inputStyle}
              />
              {/* Show error only after user touches the field */}
              {nameTouched && nameError && (
                <p style={errorTextStyle}>{nameError}</p>
              )}
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
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                style={emailTouched && emailError ? inputErrorStyle : inputStyle}
              />
              {/* Show error only after user touches the field */}
              {emailTouched && emailError && (
                <p style={errorTextStyle}>{emailError}</p>
              )}
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
              onBlur={() => setMessageTouched(true)}
              rows={4}
              style={{
                ...(messageTouched && messageError ? inputErrorStyle : inputStyle),
                resize: 'vertical'
              }}
            />
            {/* Show error only after user touches the field */}
            {messageTouched && messageError && (
              <p style={errorTextStyle}>{messageError}</p>
            )}
            {/* Character counter */}
            <p style={{
              color: message.length > 500 ? '#E24B4A' : labelColor,
              fontSize: '11px',
              textAlign: 'right',
              marginTop: '4px'
            }}>
              {message.length} / 500
            </p>
          </div>

          {/* Submit button — grey when form is not valid */}
          <button
            type="submit"
            style={{
              backgroundColor: isFormValid ? '#3B6D11' : '#888780',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '15px',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
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
