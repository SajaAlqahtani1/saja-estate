// Navbar receives isDark and toggleTheme from App.jsx
function Navbar({ isDark, toggleTheme }) {

 

  const bgColor   = isDark ? '#1a2e1a' : '#ffffff'
  const textColor = isDark ? '#C0DD97' : '#27500A'
  const logoColor = isDark ? '#97C459' : '#3B6D11'

  return (
    <nav style={{
      backgroundColor: bgColor,
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #3B6D11'
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          backgroundColor: logoColor,
          color: 'white',
          padding: '6px 12px',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          S
        </div>
        <span style={{ color: textColor, fontWeight: 'bold', fontSize: '20px', whiteSpace: 'nowrap' }}>
          Saja Estate
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#" style={{ color: textColor, textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: textColor, textDecoration: 'none' }}>Properties</a>
        <a href="#" style={{ color: textColor, textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: textColor, textDecoration: 'none' }}>Contact</a>
      </div>

      {/* Theme button — calls toggleTheme from App.jsx */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: logoColor,
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap'
        }}
      >
        {isDark ? ' Light' : ' Dark'}
      </button>

    </nav>
  )
}

export default Navbar