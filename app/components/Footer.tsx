import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaLinkedinIn, FaChartLine, FaShieldAlt, FaHandshake, FaGlobe, FaClock, FaBriefcase, FaRegBuilding, FaPiggyBank } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-200 py-16 px-5 md:px-20 mt-auto">
      {/* Background with dark overlay - BMSL Investment themed */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" // Financial/Trading background
          alt="BMSL Investment Footer Background"
          height={500}
          width={500}
          loading="eager"
          className="h-full w-full opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a2e24] to-[#315543] opacity-95"></div>
      </div>

        {/* Subtle pattern overlay - financial grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(49,85,67,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(49,85,67,0.15)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#315543]/40 rounded-lg blur-sm backdrop-blur-sm"></div>
              <div className="flex items-center space-x-3 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#315543]/30 rounded-full blur-sm"></div>
                  <img 
                    src="/img/logo_bmsl.jpg" 
                    alt="BMSL Investment Logo"
                    className="h-14 w-auto rounded-lg relative z-10"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4ade80] drop-shadow-lg">BMSL Investment</h2>
                  <p className="text-xs text-gray-300">Trust | Transparency | Growth</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl drop-shadow-md backdrop-blur-sm bg-black/20 rounded-xl p-4 font-poppins">
            BMSL Investment is a premier trading and investment firm specializing in equities, derivatives, commodities, and portfolio management services. 
            With a legacy of excellence and integrity, we provide institutional-grade trading solutions, cutting-edge market insights, and personalized 
            wealth management services to help our clients achieve their financial goals.
          </p>

          {/* Regulatory Compliance Badges */}
          <div className="pt-2">
            <h3 className="text-gray-100 text-lg font-semibold mb-4 flex items-center drop-shadow font-poppins">
              Regulated & Compliant
              <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </h3>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-[#315543] shadow-xl flex flex-wrap items-center justify-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">SEBI Registered</span>
                <span className="px-3 py-1 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">NSE Member</span>
                <span className="px-3 py-1 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">BSE Member</span>
                <span className="px-3 py-1 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">CDSL Depository</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 mt-2 font-poppins text-center">
              Member of NSE, BSE, MCX | SEBI Registration No: INZ000123456 | CDSL: IN-DP-123-2024
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#4ade80] to-transparent"></span>
          </h3>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home", key: "home" },
              { href: "/about", label: "About Us", key: "about" },
              { href: "/trading-platforms", label: "Trading Platforms", key: "platforms" },
              { href: "/research", label: "Market Research", key: "research" },
              { href: "/contact", label: "Contact", key: "contact" },
            ].map((item) => (
              <li key={item.key}>
                <Link href={item.href}>
                  <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 backdrop-blur-sm hover:bg-black/20 rounded-lg px-3 -mx-3">
                    <FaArrowRight className="w-3 h-3 text-[#4ade80] mr-3 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative font-poppins">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trading Products */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Our Services
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#4ade80] to-transparent"></span>
          </h3>
          <ul className="space-y-3">
            {[
              { href: "/services/equity", label: "Equity Trading", key: "equity", icon: <FaChartLine className="mr-2" /> },
              { href: "/services/derivatives", label: "F&O Trading", key: "derivatives", icon: <FaChartLine className="mr-2" /> },
              { href: "/services/commodity", label: "Commodity Trading", key: "commodity", icon: <FaGlobe className="mr-2" /> },
              { href: "/services/portfolio", label: "Portfolio Management", key: "portfolio", icon: <FaPiggyBank className="mr-2" /> },
              { href: "/services/ipo", label: "IPO & Corporate Advisory", key: "ipo", icon: <FaRegBuilding className="mr-2" /> },
            ].map((item) => (
              <li key={item.key}>
                <Link href={item.href}>
                  <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 backdrop-blur-sm hover:bg-black/20 rounded-lg px-3 -mx-3">
                    <FaArrowRight className="w-3 h-3 text-[#4ade80] mr-3 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative text-sm font-poppins flex items-center">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-gray-100 text-xl font-lexend font-bold mb-2 relative inline-block drop-shadow">
            Get In Touch
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#4ade80] to-transparent"></span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 min-w-12">
                <FaMapMarkerAlt className="text-[#4ade80] text-lg" />
              </div>
              <div className="text-gray-200 leading-relaxed">
                <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link">
                  <p className="group-hover/link:text-[#4ade80] transition-colors drop-shadow font-lexend">BMSL House, Financial District</p>
                </a>
                <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link mt-2 block">
                  <p className="group-hover/link:text-[#4ade80] transition-colors drop-shadow text-sm font-lexend">Banjara Hills, Hyderabad - 500034</p>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 min-w-12">
                <FaPhoneAlt className="text-[#4ade80] text-lg" />
              </div>
              <div>
                <p className="text-gray-200 group-hover:text-[#4ade80] transition-colors drop-shadow font-lexend">+91 40 6789 1234</p>
                <p className="text-[#4ade80] text-sm drop-shadow font-poppins flex items-center gap-1">
                  <FaClock className="text-xs" /> 9:00 AM - 9:00 PM (Mon-Sat)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer backdrop-blur-sm hover:bg-black/20 rounded-xl p-3 -m-3 transition-all duration-300">
              <div className="p-3 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 min-w-12">
                <FaEnvelope className="text-[#4ade80] text-lg" />
              </div>
              <div>
                <p className="text-gray-200 group-hover:text-[#4ade80] transition-colors drop-shadow font-lexend">trading@bmslinvest.com</p>
                <p className="text-[#4ade80] text-sm drop-shadow font-lexend">care@bmslinvest.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-4">
            <h3 className="text-gray-100 text-lg font-semibold mb-4 drop-shadow font-lexend">Connect With Us</h3>
            <div className="flex space-x-3">
              {[
                { 
                  icon: <FaFacebookF size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-800/80",
                  key: "facebook"
                },
                { 
                  icon: <FaTwitter size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-600/80",
                  key: "twitter"
                },
                { 
                  icon: <FaInstagram size={16} />, 
                  href: "#",
                  color: "hover:bg-pink-700/80",
                  key: "instagram"
                },
                { 
                  icon: <FaLinkedinIn size={16} />, 
                  href: "#",
                  color: "hover:bg-blue-800/80",
                  key: "linkedin"
                },
                { 
                  icon: <FaYoutube size={16} />, 
                  href: "#",
                  color: "hover:bg-red-800/80",
                  key: "youtube"
                },
              ].map((social) => (
                <Link key={social.key} href={social.href} target="_blank" rel="noopener noreferrer">
                  <span className={`bg-black/30 backdrop-blur-sm ${social.color} w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-[#315543] hover:border-[#4ade80]/40 shadow-lg hover:shadow-xl`}>
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-[#315543] mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-2">
            <p className="text-gray-200 text-sm drop-shadow font-lexend">
              &copy; {new Date().getFullYear()} BMSL Investment. All rights reserved. 
              <span className="inline-flex items-center ml-2">
                <FaChartLine className="text-[#4ade80] text-xs mr-1" /> 
                Your Trusted Investment Partner
              </span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-2">
            {[
              { href: "/privacy", label: "Privacy Policy", key: "privacy" },
              { href: "/terms", label: "Terms of Service", key: "terms" },
              { href: "/risk-disclosure", label: "Risk Disclosure", key: "risk" },
              { href: "/complaints", label: "Investor Grievances", key: "complaints" },
              { href: "/careers", label: "Careers", key: "careers" },
            ].map((item) => (
              <Link key={item.key} href={item.href} className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm font-medium relative group drop-shadow font-lexend">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Risk Disclaimer */}
        <div className="mt-6 text-center backdrop-blur-sm bg-black/20 rounded-xl p-4">
          <p className="text-xs text-gray-300 font-poppins leading-relaxed">
            <span className="font-semibold text-[#4ade80]">Risk Warning:</span> Trading in securities and derivatives involves significant risk of loss. 
            Past performance is not indicative of future results. Please carefully consider your investment objectives, 
            risk appetite, and experience level before trading. Read our{' '}
            <Link href="/risk-disclosure" className="text-[#4ade80] hover:text-[#6ee7b7] underline">Risk Disclosure Document</Link>{' '}
            and <Link href="/investor-charter" className="text-[#4ade80] hover:text-[#6ee7b7] underline">Investor Charter</Link> carefully.
          </p>
          <p className="text-xs text-gray-400 mt-2 font-poppins">
            ⚡ BMSL Investment is a registered member of NSE, BSE, and MCX. | SEBI Reg. No.: INZ000123456 | 
            For complaints, email grievances@bmslinvest.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;