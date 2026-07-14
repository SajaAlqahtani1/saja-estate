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

  const [searchText, setSearchText] = useState('')

  function toggleTheme() {
    setIsDark(!isDark)
  }

  // Remembers the choice — saves to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Applies it visually — toggles the "dark" class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0f1f0f]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero searchText={searchText} setSearchText={setSearchText} />
      <PropertiesSection searchText={searchText} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App