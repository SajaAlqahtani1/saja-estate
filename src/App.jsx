import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertiesSection from './components/PropertiesSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  // searchText lives here so both Hero and PropertiesSection can use it
  const [searchText, setSearchText] = useState('')

  function toggleTheme() {
    setIsDark(!isDark)
  }

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: isDark ? '#0f1f0f' : '#f5f5f5' }}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      {/* Pass searchText and setSearchText to Hero */}
      <Hero isDark={isDark} searchText={searchText} setSearchText={setSearchText} />
      {/* Pass searchText to PropertiesSection */}
      <PropertiesSection isDark={isDark} searchText={searchText} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App