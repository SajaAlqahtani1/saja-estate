import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertiesSection from './components/PropertiesSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: isDark ? '#0f1f0f' : '#f5f5f5' }}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <PropertiesSection isDark={isDark} />
      <Contact isDark={isDark} />
      {/* Footer at the very bottom */}
      <Footer isDark={isDark} />
    </div>
  )
}

export default App