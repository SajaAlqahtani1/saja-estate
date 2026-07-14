// Navbar receives isDark and toggleTheme from App.jsx
function Navbar({ isDark, toggleTheme }) {

  return (
    <nav className="px-8 py-4 flex justify-between items-center border-b-2 border-[#3B6D11] bg-white dark:bg-[#1a2e1a]">

      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="text-white px-3 py-1.5 rounded-md font-bold text-lg bg-[#3B6D11] dark:bg-[#97C459]">
          S
        </div>
        <span className="font-bold text-xl whitespace-nowrap text-[#27500A] dark:text-[#C0DD97]">
          Saja Estate
        </span>
      </div>

      {/* Nav links */}
      <div className="flex gap-8">
        <a href="#" className="no-underline text-[#27500A] dark:text-[#C0DD97]">Home</a>
        <a href="#" className="no-underline text-[#27500A] dark:text-[#C0DD97]">Properties</a>
        <a href="#" className="no-underline text-[#27500A] dark:text-[#C0DD97]">About</a>
        <a href="#contact" className="no-underline text-[#27500A] dark:text-[#C0DD97]">Contact</a>
      </div>

      {/* Theme button — calls toggleTheme from App.jsx */}
      <button
        onClick={toggleTheme}
        className="text-white border-none px-4 py-2 rounded-md cursor-pointer text-sm whitespace-nowrap bg-[#3B6D11] dark:bg-[#97C459]"
      >
        {isDark ? ' Light' : ' Dark'}
      </button>

    </nav>
  )
}

export default Navbar