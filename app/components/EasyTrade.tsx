"use client";

import Image from "next/image";
import Link from "next/link";

const EasyTrade: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/img/easy_trade.png"
              alt="Easy Trade Logo"
              width={120}
              height={60}
              priority
              className="w-28 h-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-source text-gray-800 dark:text-gray-100 leading-snug">
            Seamless stock trade on the go with the{" "}
            <span className="text-[#315543] dark:text-[#6A957A] font-medium">BMSL EasyTrade</span>{" "}
            trading app
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Discover boundless possibilities through BMSL EasyTrade's advanced
            trading platform in Bangladesh - real-time data, customizable
            portfolios, and empowering informed decisions to maximize your
            returns.
          </p>

          {/* App Buttons */}
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            <Link href="#">
              <div className="relative w-[150px] h-[50px]">
                <Image
                  src="/img/google.svg"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="#">
              <div className="relative w-[150px] h-[50px]">
                <Image
                  src="/img/app.svg"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Learn More Button */}
          <div className="mt-10">
            <Link href="#">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#315543] dark:bg-[#6A957A] rounded-full text-gray-50 dark:text-white hover:bg-[#6A957A] dark:hover:bg-[#315543] transition">
                Learn More
                <span>→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-md lg:max-w-lg flex justify-center">
          <div className="relative w-full h-auto aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mobile App"
              fill
              className="object-contain dark:opacity-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyTrade;