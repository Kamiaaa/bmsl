import React from "react";
import styles from "./Commissions.module.css";

const Commissions: React.FC = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row">
        {/* Left Vertical Heading - Desktop */}
        <div className="hidden md:flex flex-col items-center justify-center mr-12 gap-2">
          <h2
            className={`text-5xl font-source font-semibold text-gray-700 dark:text-gray-300 tracking-wide ${styles.verticalText}`}
          >
            Unbelievable{"\n"}Commissions
          </h2>
        </div>

        {/* Mobile Heading */}
        <div className="flex md:hidden flex-row items-center justify-center gap-2 mb-6">
          <h2 className="text-3xl font-source font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
            Unbelievable
          </h2>
          <h2 className="text-3xl font-source font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
            Commissions
          </h2>
        </div>

        {/* Right Content */}
        <div className="max-w-5xl">
          <h3 className="text-xl md:text-4xl font-source text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            Investing in the capital market can offer several benefits and
            opportunities for individuals and institutions like portfolio
            diversification and income generation.
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
            Start investing with BMSL today and unlock the
            potential for long-term wealth growth. Diversify your portfolio,
            capitalize on growth opportunities, and secure your financial future
            with the assistance of the best researchers in the town. Take action
            now and consult with experts to make informed investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commissions;