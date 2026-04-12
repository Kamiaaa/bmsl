// app/page.tsx
import { FaPhoneAlt, FaBars } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left side - Hamburger + Logo */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Hamburger Menu Icon */}
              <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
                <FaBars className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Logo */}
              <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
                SHANTA SECURITIES
              </span>
            </div>

            {/* Center - Phone Number (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 text-gray-600">
              <FaPhoneAlt className="w-4 h-4 text-gray-500" />
              <span className="text-base">+8809643333000</span>
            </div>

            {/* Right side - Open an Account Button */}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 md:py-2.5 md:px-6 rounded-md transition-colors text-sm md:text-base whitespace-nowrap">
              Open an Account
            </button>
          </div>
        </div>
      </header>

      {/* Rest of the page */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center text-gray-500">
          <p>Page content goes here...</p>
        </div>
      </main>
    </div>
  );
}