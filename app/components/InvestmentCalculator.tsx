import Image from "next/image";

const InvestmentCalculator: React.FC = () => {
    return (
        <div id="calculator" className="relative bg-white dark:bg-gray-900 overflow-hidden my-16">
            <div className="max-w-6xl mx-auto">
                <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    {/* SVG Shape */}
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-900 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                    </svg>

                    <div className="pt-1" />

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">

                            <h2 className="my-6 text-2xl tracking-tight font-source text-gray-900 dark:text-white sm:text-3xl md:text-6xl">
                                Uncover missed opportunities with{" "}
                                <span className="text-[#315543] dark:text-[#6A957A]">Investment Calculator</span>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xl">
                                Start optimizing your financial future today with our investment calculator and discover potential earnings from earlier capital market investments.
                            </p>

                            {/* Button */}
                            <div className="mt-6">
                                <button className="px-6 py-3 bg-[#315543] dark:bg-[#6A957A] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#6A957A] dark:hover:bg-[#315543] transition duration-300">
                                    Investment Calculator
                                </button>
                            </div>

                        </div>
                    </main>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Image"
                    fill
                    style={{ objectFit: "cover" }}
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                />
            </div>
        </div>
    );
};

export default InvestmentCalculator;