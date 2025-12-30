import React from "react";
import SkillCard from "../card/SkillCard.jsx";

import rgpv from "../Image/rgpv.png";
import bseb from "../Image/bseb.jpg";



export default function About() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 px-5 md:px-20">
        {/* Intro */}
        <div className="text-center mb-16">
          <button className="relative mb-10 px-6 py-2 text-2xl font-bold group">
            About Me
            <span className="absolute left-1/2 -bottom-1 h-[3px] w-10 -translate-x-1/2 bg-blue-400 transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
          </button>

          <p className="md:text-lg font-semibold max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Hi, I’m Navin 👋, a Full-Stack MERN Developer specializing in building
            modern and scalable web applications using React, Node.js, and
            databases like MySQL & MongoDB.
            I focus on clean UI, efficient APIs, and real-world problem solving.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <SkillCard title="Frontend" color="blue">
            {["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Axios"]}
          </SkillCard>

          {/* Backend */}
          <SkillCard title="Backend" color="green">
            {[
              "Node.js",
              "Express.js",
              "Java",
              "C/C++",
              "REST API",
              "JWT Authentication",
            ]}
          </SkillCard>
          {/* Database */}
          <SkillCard title="Database" color="orange">
            {["MySQL", "MongoDB", "SQL Queries", "Data Modeling"]}
          </SkillCard>

          {/* Tools */}
          <SkillCard title="Tools & Others" color="purple">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Postman",
              "EmailJS",
              "Thunder Client",
              "Vercel",
              "Aiven",
            ]}
          </SkillCard>
        </div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section className="mt-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <button className="relative mb-10 px-6 py-2 text-2xl font-bold group">
            My Education
            <span className="absolute left-1/2 -bottom-1 h-[3px] w-10 -translate-x-1/2 bg-blue-400 transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:translate-x-0"></span>
          </button>

          {/* Cards */}
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            {/* College */}
            <div className="bg-slate-800 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={rgpv}
                  alt="RGPV Logo"
                  className="h-12 w-12 object-contain rounded-md bg-white p-1"
                />
                <h3 className="text-lg font-bold tracking-wide">
                  RGPV
                </h3>
              </div>

              <p className="text-sm text-gray-300 font-medium">
                B.Tech – Computer Science & Engineering
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya
              </p>

              <p className="text-sm text-gray-400 mt-2">
                2021 – 2025
              </p>

              <p className="mt-3 text-blue-400 font-semibold">
                CGPA: 7.46
              </p>
            </div>

            {/* 12th */}
            <div className="bg-slate-800 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={bseb}
                  alt="BSEB Logo"
                  className="h-12 w-12 object-contain rounded-md bg-white p-1"
                />
                <h3 className="text-lg font-bold tracking-wide">
                  BSEB
                </h3>
              </div>

              <p className="text-sm text-gray-300 font-medium">
                XII – Science
              </p>

              <p className="text-sm text-gray-400 mt-1">
                MRG College, Madhubani, Andhrathadhi (Bihar)
              </p>

              <p className="text-sm text-gray-400 mt-2">
                2019 – 2021
              </p>
            </div>

            {/* 10th */}
            <div className="bg-slate-800 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={bseb}
                  alt="BSEB Logo"
                  className="h-12 w-12 object-contain rounded-md bg-white p-1"
                />
                <h3 className="text-lg font-bold tracking-wide">
                  BSEB
                </h3>
              </div>

              <p className="text-sm text-gray-300 font-medium">
                X – Science
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Navuttkramit M S Rudrapur, Madhubani (Bihar)
              </p>

              <p className="text-sm text-gray-400 mt-2">
                2018 – 2019
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}


