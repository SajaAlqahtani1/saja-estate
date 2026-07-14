function Footer() {

  return (
    <footer className="pt-12 px-8 pb-0 bg-[#1a3a1a] dark:bg-[#050f05]">

      {/* Top row — 3 columns */}
      <div className="flex justify-between flex-wrap gap-10 mb-10">

        {/* Column 1 — Logo and tagline */}
        <div className="max-w-[240px]">

          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="bg-[#97C459] text-[#173404] px-3 py-1.5 rounded-md font-bold text-base">
              S
            </div>
            <span className="text-[#C0DD97] font-bold text-lg">
              Saja Estate
            </span>
          </div>

          {/* Tagline */}
          <p className="text-[#888780] text-[13px] leading-relaxed m-0">
            Your trusted real estate partner in Saudi Arabia. Finding your dream home is our mission.
          </p>

        </div>

        {/* Column 2 — Quick links */}
        <div>
          <h4 className="text-[#97C459] mb-4 text-sm">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2.5">
            <a href="#" className="text-[#C0DD97] no-underline text-[13px]">
              Home
            </a>
            <a href="#" className="text-[#C0DD97] no-underline text-[13px]">
              Properties
            </a>
            <a href="#" className="text-[#C0DD97] no-underline text-[13px]">
              About Us
            </a>
            <a href="#contact" className="text-[#C0DD97] no-underline text-[13px]">
              Contact
            </a>
          </div>
        </div>

        {/* Column 3 — Contact info */}
        <div>
          <h4 className="text-[#97C459] mb-4 text-sm">
            Contact Us
          </h4>
          <div className="flex flex-col gap-2.5">
            <span className="text-[#888780] text-[13px]">
              +966 50 000 0000
            </span>
            <span className="text-[#888780] text-[13px]">
              info@sajaestate.com
            </span>
            <span className="text-[#888780] text-[13px]">
              Riyadh, Saudi Arabia
            </span>
          </div>
        </div>

        {/* Column 4 — Working hours */}
        <div>
          <h4 className="text-[#97C459] mb-4 text-sm">
            Working Hours
          </h4>
          <div className="flex flex-col gap-2.5">
            <span className="text-[#888780] text-[13px]">
              Sunday - Thursday
            </span>
            <span className="text-[#C0DD97] text-[13px] font-bold">
              9:00 AM - 6:00 PM
            </span>
            <span className="text-[#888780] text-[13px]">
              Friday - Saturday
            </span>
            <span className="text-[#888780] text-[13px]">
              Closed
            </span>
          </div>
        </div>

      </div>

      {/* Divider line */}
      <div className="border-t border-[#3B6D11] pt-5 pb-5 flex justify-between items-center flex-wrap gap-3">

        {/* Copyright */}
        <span className="text-[#888780] text-xs">
          2025 Saja Estate. All rights reserved.
        </span>

        {/* Right side note */}
        <span className="text-[#888780] text-xs">
          Built with React and FastAPI
        </span>

      </div>

    </footer>
  )
}

export default Footer