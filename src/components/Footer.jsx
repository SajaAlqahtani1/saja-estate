function Footer({ isDark }) {

  // Colors based on theme
  const bgColor      = isDark ? '#050f05' : '#1a3a1a'
  const headingColor = '#97C459'
  const textColor    = '#888780'
  const linkColor    = '#C0DD97'
  const logoColor    = isDark ? '#97C459' : '#97C459'

  return (
    <footer style={{
      backgroundColor: bgColor,
      padding: '48px 32px 0px 32px'
    }}>

      {/* Top row — 3 columns */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '40px'
      }}>

        {/* Column 1 — Logo and tagline */}
        <div style={{ maxWidth: '240px' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{
              backgroundColor: logoColor,
              color: '#173404',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              S
            </div>
            <span style={{ color: '#C0DD97', fontWeight: 'bold', fontSize: '18px' }}>
              Saja Estate
            </span>
          </div>

          {/* Tagline */}
          <p style={{ color: textColor, fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
            Your trusted real estate partner in Saudi Arabia. Finding your dream home is our mission.
          </p>

        </div>

        {/* Column 2 — Quick links */}
        <div>
          <h4 style={{ color: headingColor, marginBottom: '16px', fontSize: '14px' }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" style={{ color: linkColor, textDecoration: 'none', fontSize: '13px' }}>
              Home
            </a>
            <a href="#" style={{ color: linkColor, textDecoration: 'none', fontSize: '13px' }}>
              Properties
            </a>
            <a href="#" style={{ color: linkColor, textDecoration: 'none', fontSize: '13px' }}>
              About Us
            </a>
            <a href="#contact" style={{ color: linkColor, textDecoration: 'none', fontSize: '13px' }}>
              Contact
            </a>
          </div>
        </div>

        {/* Column 3 — Contact info */}
        <div>
          <h4 style={{ color: headingColor, marginBottom: '16px', fontSize: '14px' }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: textColor, fontSize: '13px' }}>
              +966 50 000 0000
            </span>
            <span style={{ color: textColor, fontSize: '13px' }}>
              info@sajaestate.com
            </span>
            <span style={{ color: textColor, fontSize: '13px' }}>
              Riyadh, Saudi Arabia
            </span>
          </div>
        </div>

        {/* Column 4 — Working hours */}
        <div>
          <h4 style={{ color: headingColor, marginBottom: '16px', fontSize: '14px' }}>
            Working Hours
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: textColor, fontSize: '13px' }}>
              Sunday - Thursday
            </span>
            <span style={{ color: '#C0DD97', fontSize: '13px', fontWeight: 'bold' }}>
              9:00 AM - 6:00 PM
            </span>
            <span style={{ color: textColor, fontSize: '13px' }}>
              Friday - Saturday
            </span>
            <span style={{ color: textColor, fontSize: '13px' }}>
              Closed
            </span>
          </div>
        </div>

      </div>

      {/* Divider line */}
      <div style={{
        borderTop: '1px solid #3B6D11',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>

        {/* Copyright */}
        <span style={{ color: textColor, fontSize: '12px' }}>
          2025 Saja Estate. All rights reserved.
        </span>

        {/* Right side note */}
        <span style={{ color: textColor, fontSize: '12px' }}>
          Built with React and FastAPI
        </span>

      </div>

    </footer>
  )
}

export default Footer