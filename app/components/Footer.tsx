import Image from 'next/image';
import Link from 'next/link';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, 
  FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaLinkedinIn, 
  FaChartLine, FaClock 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative text-gray-200 pt-12 pb-6 mt-auto">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
            alt="BMSL Investment Footer Background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e24] via-[#1a2e24]/95 to-[#315543]/90" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(49,85,67,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(49,85,67,0.15)_1px,transparent_1px)] bg-[length:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info - Full width on mobile, spans 2 columns on large screens */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-[#315543]/40 rounded-lg blur-sm" />
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
            
            <p className="text-gray-200 text-base leading-relaxed drop-shadow-md backdrop-blur-sm bg-black/20 rounded-xl p-4">
              BMSL Investment is a premier trading and investment firm specializing in equities, derivatives, commodities, and portfolio management services. 
              With a legacy of excellence and integrity, we provide institutional-grade trading solutions, cutting-edge market insights, and personalized 
              wealth management services to help our clients achieve their financial goals.
            </p>

            {/* Regulatory Badges */}
            <div>
              <h3 className="text-gray-100 text-lg font-semibold mb-4 flex items-center">
                Regulated & Compliant
                <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-[#315543]">
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1.5 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">SEBI Registered</span>
                  <span className="px-3 py-1.5 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">NSE Member</span>
                  <span className="px-3 py-1.5 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">BSE Member</span>
                  <span className="px-3 py-1.5 bg-[#315543]/40 rounded-lg text-xs font-semibold text-[#4ade80]">CDSL Depository</span>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-3 text-center">
                Member of NSE, BSE, MCX | SEBI Registration No: INZ000123456 | CDSL: IN-DP-123-2024
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-gray-100 text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#4ade80] to-transparent" />
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/trading-platforms", label: "Trading Platforms" },
                { href: "/research", label: "Market Research" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 hover:bg-black/20 rounded-lg px-2 -mx-2">
                      <FaArrowRight className="w-3 h-3 text-[#4ade80] mr-3 transform group-hover:translate-x-1 transition-transform shrink-0" />
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-5">
            <h3 className="text-gray-100 text-xl font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#4ade80] to-transparent" />
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services/equity", label: "Equity Trading" },
                { href: "/services/derivatives", label: "F&O Trading" },
                { href: "/services/commodity", label: "Commodity Trading" },
                { href: "/services/portfolio", label: "Portfolio Management" },
                { href: "/services/ipo", label: "IPO & Corporate Advisory" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="group text-gray-200 hover:text-white transition-all duration-300 flex items-center py-2 hover:bg-black/20 rounded-lg px-2 -mx-2">
                      <FaArrowRight className="w-3 h-3 text-[#4ade80] mr-3 transform group-hover:translate-x-1 transition-transform shrink-0" />
                      <span className="relative text-sm">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-gray-100 text-xl font-bold mb-4 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#4ade80] to-transparent" />
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 group hover:bg-black/20 rounded-xl p-2 -m-2 transition-all duration-300">
                <div className="p-2.5 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 shrink-0">
                  <FaMapMarkerAlt className="text-[#4ade80] text-base" />
                </div>
                <div>
                  <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link">
                    <p className="group-hover/link:text-[#4ade80] transition-colors">BMSL House, Financial District</p>
                  </a>
                  <a href='https://maps.app.goo.gl/' target='_blank' rel="noopener noreferrer" className="group/link block mt-1">
                    <p className="group-hover/link:text-[#4ade80] transition-colors text-sm">Banjara Hills, Hyderabad - 500034</p>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group hover:bg-black/20 rounded-xl p-2 -m-2 transition-all duration-300">
                <div className="p-2.5 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 shrink-0">
                  <FaPhoneAlt className="text-[#4ade80] text-base" />
                </div>
                <div>
                  <p className="group-hover:text-[#4ade80] transition-colors">+91 40 6789 1234</p>
                  <p className="text-[#4ade80] text-sm flex items-center gap-1 mt-0.5">
                    <FaClock className="text-xs" /> 9:00 AM - 9:00 PM (Mon-Sat)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group hover:bg-black/20 rounded-xl p-2 -m-2 transition-all duration-300">
                <div className="p-2.5 bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-[#315543]/40 transition-all duration-300 border border-[#315543] group-hover:border-[#4ade80]/40 shrink-0">
                  <FaEnvelope className="text-[#4ade80] text-base" />
                </div>
                <div>
                  <p className="group-hover:text-[#4ade80] transition-colors break-all">trading@bmslinvest.com</p>
                  <p className="text-[#4ade80] text-sm mt-0.5">care@bmslinvest.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-3">
              <h3 className="text-gray-100 text-base font-semibold mb-3">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <FaFacebookF size={16} />, href: "#", color: "hover:bg-blue-800/80" },
                  { icon: <FaTwitter size={16} />, href: "#", color: "hover:bg-blue-600/80" },
                  { icon: <FaInstagram size={16} />, href: "#", color: "hover:bg-pink-700/80" },
                  { icon: <FaLinkedinIn size={16} />, href: "#", color: "hover:bg-blue-800/80" },
                  { icon: <FaYoutube size={16} />, href: "#", color: "hover:bg-red-800/80" },
                ].map((social, idx) => (
                  <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className={`bg-black/30 backdrop-blur-sm ${social.color} w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#315543] hover:border-[#4ade80]/40`}>
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#315543] mt-10 pt-6">
          {/* Copyright and Links Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left backdrop-blur-sm bg-black/20 rounded-xl p-3 w-full lg:w-auto">
              <p className="text-gray-200 text-sm">
                &copy; {currentYear} BMSL Investment. All rights reserved.
                <span className="inline-flex items-center ml-2">
                  <FaChartLine className="text-[#4ade80] text-xs mr-1" /> 
                  Your Trusted Investment Partner
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 backdrop-blur-sm bg-black/20 rounded-xl p-3 w-full lg:w-auto">
              <Link href="/privacy" className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm relative group">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/terms" className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm relative group">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/risk-disclosure" className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm relative group">
                Risk Disclosure
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/complaints" className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm relative group">
                Investor Grievances
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/careers" className="text-[#4ade80] hover:text-[#6ee7b7] transition-colors text-sm relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Risk Disclaimer */}
          <div className="mt-6 text-center backdrop-blur-sm bg-black/20 rounded-xl p-4">
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="font-semibold text-[#4ade80]">Risk Warning:</span> Trading in securities and derivatives involves significant risk of loss. 
              Past performance is not indicative of future results. Please carefully consider your investment objectives, 
              risk appetite, and experience level before trading. Read our{' '}
              <Link href="/risk-disclosure" className="text-[#4ade80] hover:text-[#6ee7b7] underline">Risk Disclosure Document</Link>{' '}
              and <Link href="/investor-charter" className="text-[#4ade80] hover:text-[#6ee7b7] underline">Investor Charter</Link> carefully.
            </p>
            <p className="text-xs text-gray-400 mt-3">
              ⚡ BMSL Investment is a registered member of NSE, BSE, and MCX. | SEBI Reg. No.: INZ000123456 | 
              For complaints, email grievances@bmslinvest.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;