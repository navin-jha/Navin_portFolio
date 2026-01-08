import React from "react";
import PMS from "../assets/PMS.png";
import Musicademy from "../assets/Musicademy.png";
import HCM from "../assets/HCM.png";

const projects = [
    {
        title: "Project Management System",
        description:
            "Full-stack project management platform with real-time tracking, dashboards, and role-based access.",
        image: PMS,
        link: "https://pms-frontend-topaz-one.vercel.app",
    },
    {
        title: "Musicademy",
        description:
            "Modern, responsive React website for a music academy with smooth navigation and scalable UI.",
        image: Musicademy,
        link: "https://music-reactjs.vercel.app/",
    },
    {
        title: "Human Capital Management on Going..",
        description:
            "Full-stack HCM system for managing workforce and organizational data with complete CRUD operations.",
        image: HCM,
    },
];

export default function Projects() {
    return (
        <div className=" overflow-hidden">
            <div className="flex gap-5 sm:gap-6 md:gap-8 overflow-x-auto flex-nowrap scroll-smooth pb-4">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="
              min-w-[260px]
              sm:min-w-[300px]
              md:min-w-[360px]
              bg-white
              rounded-xl
              shadow-lg
              hover:scale-105
              transition
              duration-300
            "
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                rounded-t-xl
                w-full
                aspect-video
                object-contain
                bg-gray-100
                p-3
              "
                        />

                        <div className="p-4 sm:p-5">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                {project.description}
                            </p>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-indigo-600 text-sm font-semibold hover:underline"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
