import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20 px-4 sm:px-8 md:px-10 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">

                {/* Left */}
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h2 className="font-semibold text-lg">Navin Jha</h2>
                    <p className="text-sm text-gray-300">
                        Let’s build something great together 🚀
                    </p>
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>

                {/* Middle */}
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h3 className="font-semibold text-lg">Connect</h3>

                    <a
                        href="mailto:njha55360@gmail.com"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition"
                    >
                        <FaEnvelope />
                        <span className="break-all">njha55360@gmail.com</span>
                    </a>

                    <a
                        href="tel:+919801540575"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition"
                    >
                        <FaPhoneAlt />
                        +91&nbsp;9801540575
                    </a>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h3 className="font-semibold text-lg">Get in Touch</h3>

                    <a
                        href="https://www.linkedin.com/in/navinjha04/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/navin-jha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-gray-100 transition"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>

            </div>
        </footer>
    );
}
