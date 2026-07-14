// Hero receives searchText and setSearchText from App.jsx
function Hero({ searchText, setSearchText }) {

  return (
    <section className="px-8 py-20 text-center bg-[#1a3a1a] dark:bg-[#0f1f0f]">

      {/* Main headline */}
      <h1 className="text-white text-[42px] mb-4">
        Find Your Dream Home
      </h1>

      {/* Subtitle */}
      <p className="text-[#97C459] text-lg mb-10">
        Browse hundreds of properties across Saudi Arabia
      </p>

      {/* Search bar row */}
      <div className="flex justify-center gap-0 mb-[60px]">

        {/* Text input — updates searchText in App.jsx */}
        <input
          type="text"
          placeholder="Search by city or property type..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-5 py-3.5 text-base border-none rounded-l-lg w-[400px] outline-none bg-white"
        />

        {/* Search button */}
        <button className="bg-[#3B6D11] text-white border-none px-7 py-3.5 text-base rounded-r-lg cursor-pointer">
          Search
        </button>

      </div>

      {/* Stats row */}
      <div className="flex justify-center gap-20 border-t border-[#3B6D11] pt-10">

        <div>
          <div className="text-[#97C459] text-[32px] font-bold">500+</div>
          <div className="text-white text-sm">Properties</div>
        </div>

        <div>
          <div className="text-[#97C459] text-[32px] font-bold">12</div>
          <div className="text-white text-sm">Cities</div>
        </div>

        <div>
          <div className="text-[#97C459] text-[32px] font-bold">98%</div>
          <div className="text-white text-sm">Happy Clients</div>
        </div>

      </div>

    </section>
  )
}

export default Hero