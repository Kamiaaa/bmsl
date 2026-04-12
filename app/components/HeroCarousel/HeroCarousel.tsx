"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroCarousel.module.css";

interface Slide {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Seamless capital market investment",
        description:
            "One of the top tech-savvy brokerage houses in Bangladesh. Experience cutting-edge trading solutions with expert guidance.",
        buttonText: "Start Investing",
        buttonLink: "/open-account",
        imageUrl:
            "https://images.unsplash.com/photo-1711097383282-28097ae16b1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Stock trade at the palm of your hand",
        description:
            "Free online trading with top-notch facilities. Trade independently from anywhere with our powerful mobile platform.",
        buttonText: "Download App",
        buttonLink: "/easytrade",
        imageUrl:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Take the informed decision to minimize risk",
        description:
            "Diversify your portfolio, seize growth opportunities, and ensure long-term wealth growth with our expert researchers.",
        buttonText: "Learn More",
        buttonLink: "/services",
        imageUrl:
            "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "All Brokerage Service in a Single Platform",
        description:
            "Plan your retirement with confidence. Our experts help you build a sustainable portfolio for your golden years.",
        buttonText: "Plan Now",
        buttonLink: "/retirement",
        imageUrl:
            "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const progressBarLabels = slides.map((slide) => ({ text: slide.title, url: slide.buttonLink }));

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const slideDuration = 6000;

    const goToNext = useCallback(() => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setProgress(0);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    }, []);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setProgress(0);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToSlide = (index: number) => {
        if (index === currentIndex) return;
        setIsAutoPlaying(false);
        setCurrentIndex(index);
        setProgress(0);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    useEffect(() => {
        if (!isAutoPlaying || isPaused) {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            return;
        }

        setProgress(0);
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / slideDuration) * 100, 100);

            if (newProgress >= 100) {
                setProgress(100);
                if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
                setTimeout(() => {
                    if (isAutoPlaying && !isPaused) goToNext();
                }, 50);
            } else {
                setProgress(newProgress);
            }
        };

        progressIntervalRef.current = setInterval(updateProgress, 16);
        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [currentIndex, isAutoPlaying, isPaused, goToNext]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            className={`relative w-full h-48 md:h-[90vh] overflow-hidden ${styles.bgLinearToR}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slides */}
            <div
                className="relative w-full h-full transition-transform duration-1000 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                <div className="flex w-full h-full">
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative w-full h-full shrink-0">
                            {/* Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
                                style={{ backgroundImage: `url(${slide.imageUrl})`, transform: `scale(${isPaused ? 1 : 1.05})` }}
                            >
                                <div className={`absolute inset-0 ${styles.bgLinearToT}`} />
                            </div>

                            {/* Content */}
                            <div className={`relative h-full flex items-center ${styles.animateFadeInUp}`}>
                                <div className="container mx-auto px-4 md:px-8">
                                    <div className="max-w-3xl text-white">
                                        <h1 className={`${styles.animateSlideInLeft} ${styles.animationDelay100} text-4xl md:text-6xl lg:text-7xl font-source mt-4 mb-6 leading-tight`}>
                                            {slide.title}
                                        </h1>
                                        <p className={`${styles.animateSlideInLeft} ${styles.animationDelay200} text-lg md:text-xl text-gray-200 mb-8 leading-relaxed`}>
                                            {slide.description}
                                        </p>
                                        <a
                                            href={slide.buttonLink}
                                            className={`${styles.animateSlideInLeft} ${styles.animationDelay300} inline-flex items-center gap-2 bg-[#315543] hover:bg-[#6A957A] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group`}
                                        >
                                            {slide.buttonText}
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Progress Bars */}
            <div className="absolute bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-8 pb-4 pt-6">
                    <div className="flex gap-1">
                        {progressBarLabels.map((label, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className="flex-1 group cursor-pointer transition-all duration-300">
                                <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden group-hover:h-1.5">
                                    <div className="absolute inset-0 bg-white/10" />
                                    {index === currentIndex && (
                                        <div
                                            className="absolute left-0 top-0 h-full bg-[#315543] rounded-full transition-all duration-300 ease-linear shadow-lg"
                                            style={{ width: `${progress}%`, boxShadow: "0 0 10px rgba(59,130,246,0.5)" }}
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                                        </div>
                                    )}
                                </div>
                                <div className="mt-3 text-left transition-all duration-300 hidden md:block">
                                    <span
                                        className={`text-sm font-medium transition-all duration-300 ${index === currentIndex ? "text-white drop-shadow-lg" : "text-white/40 group-hover:text-white/70"
                                            }`}
                                    >
                                        {label.text}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile Slide Dots */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 bg-white/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}