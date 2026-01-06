import React from 'react'
import Projects from '../card/Projects'
import CardProjects from '../card/CardProject'

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className=" sm:mx-5 mt-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-5 sm:p-8 md:p-10 shadow-xl">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Hi, I’m Navin 👋
                </h1>

                <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
                    I build modern, fast & scalable web applications using React, Node.js & MySQL.
                    Let’s turn your ideas into reality 🚀
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <a
                        href="/Navin_Resume.pdf"
                        download
                        className="text-center bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-lg
                       hover:scale-105 transition active:scale-95"
                    >
                        📄 Download Resume
                    </a>

                    <button
                        className="text-center border border-white text-white px-6 py-2.5 rounded-lg
                       hover:bg-white hover:text-indigo-700 transition active:scale-95"
                    >
                        🚀 View 2+ Deployed Projects
                    </button>

                </div>
            </section>

            {/* PROJECT SECTIONS */}
            <section className="mt-8">
                <Projects />
            </section>

            <section className="mt-10">
                <CardProjects />
            </section>
        </>
    )
}
