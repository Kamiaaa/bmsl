'use client';

import styles from "./FinancialProducts.module.css";

const steps = [
  {
    id: "1",
    title: "IPO",
    desc: "IPO investment for primary market presence is easier with us.",
  },
  {
    id: "2",
    title: "Trading\nAccount",
    desc: "Open a trading account easily and start investing today.",
  },
  {
    id: "3",
    title: "Margin\nFacilities",
    desc: "Get margin facilities to maximize your investment potential.",
  },
];

export default function FinancialProducts() {
  return (
    <div className="w-full bg-zinc-50 dark:bg-gray-900 py-10 my-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative h-72 overflow-hidden bg-[#3f3f3f] dark:bg-gray-800 text-white"
          >
            {/* 🔷 Animated SVG Background */}
            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 300 L150 0 L300 300"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                  className={`${styles.line} ${styles.line1}`}
                />

                <path
                  d="M0 150 L300 150"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                  className={`${styles.line} ${styles.line2}`}
                />

                <path
                  d="M50 300 L200 0"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                  className={`${styles.line} ${styles.line3}`}
                />

                <path
                  d="M100 300 L250 0"
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                  className={`${styles.line} ${styles.line4}`}
                />
              </svg>
            </div>

            {/* 🔥 Hover Overlay */}
            <div className="absolute inset-0 bg-[#315543] dark:bg-[#1e3a2f] opacity-80 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>

            {/* 🔹 Default Content */}
            <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:opacity-0">
              {/* Number */}
              <div className="absolute top-6 left-6">
                <span className="text-[72px] font-source font-semibold text-gray-300 dark:text-gray-500">
                  {step.id}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-source md:text-2xl whitespace-pre-line">
                  {step.title}
                </h3>
              </div>
            </div>

            {/* 🔥 Hover Content */}
            <div className="absolute inset-0 z-10 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {/* Description */}
              <div className="absolute top-6 left-6 right-6">
                <p className="text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Big Title */}
              <div className="absolute bottom-6 left-6">
                <h2 className="text-4xl md:text-5xl font-medium">
                  {step.title.replace("\n", " ")}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}