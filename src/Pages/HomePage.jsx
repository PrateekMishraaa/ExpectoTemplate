import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Slider1 from "../assets/key.webp"
import Slider2 from "../assets/lap.webp"
import Slider3 from "../assets/town.png"
import Slider4 from "../assets/girl.webp"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const HomePage = () => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, []);
    const slides = [
        {
            title: 'Small Business',
            description: 'Xpecto® aids small businesses with custom software solutions to optimize workflows, cut costs, and enhance customer experiences, ensuring efficiency, growth, and a competitive edge.Xpecto® aids small businesses with custom software solutions to optimize workflows, cut costs, and enhance customer experiences, ensuring efficiency, growth, and a competitive edge.',
            image: Slider1,
        },
        {
            title: 'Large Enterprise',
            description: 'Our scalable solutions help large enterprises manage operations, automate processes, and deliver value at scale.Xpecto® aids small businesses with custom software solutions to optimize workflows, cut costs, and enhance customer experiences, ensuring efficiency, growth, and a competitive edge.',
            image: Slider2,
        },
        {
            title: 'Startups',
            description: 'We empower startups to launch fast and scale confidently with MVP development, branding, and support.Xpecto® aids small businesses with custom software solutions to optimize workflows, cut costs, and enhance customer experiences, ensuring efficiency, growth, and a competitive edge.',
            image: Slider3,
        },
        {
            title: 'Startups',
            description: 'We empower startups to launch fast and scale confidently with MVP development, branding, and support.We empower startups to launch fast and scale confidently with MVP development, branding, and support.We empower startups to launch fast and scale confidently with MVP development.',
            image: Slider4,
        },

    ];

    return (
        <>
            <Navbar />
            <div className="bg-[#f4f3fb] py-12 px-4 md:px-20 text-center">
                <p className="text-[#00aeef] uppercase font-semibold">Our Projects</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121053] mt-2">
                    We Provide Solutions To <br /> Big & Small Organizations For Work
                </h2>

                <div className="relative mt-10 flex justify-center items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-10 z-10 bg-white rounded-full p-3 shadow-md"
                    >
                        <FaArrowLeft className="text-blue-800" />
                    </button>

                    {/* Slide Content */}
                    <div className="relative w-full  max-w-5xl h-[450px] flex justify-center items-center">
                        <div className="absolute h-72 left-0 bg-[#121053] text-white p-6 md:p-10 rounded-lg w-[87%] md:w-[36%] text-left z-10 shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{slides[current].title}</h3>
                            <p className="text-sm">{slides[current].description}</p>
                        </div>

                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-10 z-10 bg-white rounded-full p-3 shadow-md"
                    >
                        <FaArrowRight className="text-blue-800" />
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
