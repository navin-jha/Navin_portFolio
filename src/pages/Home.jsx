import React from 'react'
import Projects from '../card/Projects'
import CardProjects from '../card/CardProject'
export default function Home() {
    return (
        <>
            <div className="m-5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 shadow-xl">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                    Hi, I’m Navin 👋
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                    I build modern, fast & scalable web applications using React, Node.js & MySql.
                    Let’s turn your ideas into reality 🚀
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-lg hover:scale-105 transition ">
                        All the project in bellow
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-indigo-700 transition">
                        View Projects
                    </button>

                </div>
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <CardProjects />
            </div>

        </>

    )
}
