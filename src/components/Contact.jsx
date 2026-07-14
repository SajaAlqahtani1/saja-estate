import { useState } from 'react'

function Contact() {

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

  // Shared classes for all inputs — switches to red border when there is an error
  const inputBaseClass = "w-full px-4 py-3 rounded-lg text-[15px] outline-none box-border bg-[#f5f5f5] dark:bg-[#0f1f0f] text-[#27500A] dark:text-[#C0DD97]"
  const inputBorderClass = (hasError) =>
    hasError ? "border border-[#E24B4A]" : "border border-[#3B6D11]"

  return (
    <section id="contact" className="relative px-8 py-[60px] bg-[#1a3a1a] dark:bg-[#0f1f0f]">

      {/* Success popup — appears top right for 3 seconds */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-[#3B6D11] text-white px-6 py-4 rounded-xl text-sm z-[1000] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          Message sent! We will contact you soon.
        </div>
      )}

      {/* Section headline */}
      <h2 className="text-white text-center text-[32px] mb-2">
        Let Us Help You Find Your Home
      </h2>

      {/* Subtitle */}
      <p className="text-[#97C459] text-center text-[15px] mb-10">
        Fill in the form and our team will reach out to you
      </p>

      {/* Floating white card */}
      <div className="max-w-[580px] mx-auto rounded-2xl border border-[#3B6D11] p-8 bg-white dark:bg-[#1a2e1a]">

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name and Email side by side */}
          <div className="flex gap-4">

            {/* Name field */}
            <div className="flex-1">
              <label className="block mb-1.5 text-[13px] text-[#3B6D11] dark:text-[#97C459]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
                className={`${inputBaseClass} ${inputBorderClass(nameTouched && nameError)}`}
              />
              {/* Show error only after user touches the field */}
              {nameTouched && nameError && (
                <p className="text-[#E24B4A] text-xs mt-1">{nameError}</p>
              )}
            </div>

            {/* Email field */}
            <div className="flex-1">
              <label className="block mb-1.5 text-[13px] text-[#3B6D11] dark:text-[#97C459]">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                className={`${inputBaseClass} ${inputBorderClass(emailTouched && emailError)}`}
              />
              {/* Show error only after user touches the field */}
              {emailTouched && emailError && (
                <p className="text-[#E24B4A] text-xs mt-1">{emailError}</p>
              )}
            </div>

          </div>

          {/* Message field */}
          <div>
            <label className="block mb-1.5 text-[13px] text-[#3B6D11] dark:text-[#97C459]">
              Message
            </label>
            <textarea
              placeholder="Tell us about the property you are looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setMessageTouched(true)}
              rows={4}
              className={`${inputBaseClass} ${inputBorderClass(messageTouched && messageError)} resize-y`}
            />
            {/* Show error only after user touches the field */}
            {messageTouched && messageError && (
              <p className="text-[#E24B4A] text-xs mt-1">{messageError}</p>
            )}
            {/* Character counter */}
            <p className={`text-[11px] text-right mt-1 ${
              message.length > 500 ? 'text-[#E24B4A]' : 'text-[#3B6D11] dark:text-[#97C459]'
            }`}>
              {message.length} / 500
            </p>
          </div>

          {/* Submit button — grey when form is not valid */}
          <button
            type="submit"
            className={`text-white border-none p-3.5 rounded-lg text-[15px] font-bold ${
              isFormValid ? 'bg-[#3B6D11] cursor-pointer' : 'bg-[#888780] cursor-not-allowed'
            }`}
          >
            Send Message
          </button>

        </form>
      </div>

      {/* Bottom left — phone and WhatsApp in small font */}
      <div className="absolute bottom-5 left-8 flex flex-col gap-1">
        <span className="text-[#97C459] text-xs">
          Phone: +966 50 000 0000
        </span>
        <span className="text-[#97C459] text-xs">
          WhatsApp: +966 50 000 0000
        </span>
      </div>

    </section>
  )
}

export default Contact