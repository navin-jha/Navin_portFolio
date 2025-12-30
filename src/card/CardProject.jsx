import React from "react";
import CurrencyConverter from "../Image/currencyConverter.png";
import MegaBlog from "../Image/megaBlog.png";
import reduxTodo from "../Image/reduxTodo.png";
import Todo from "../Image/Todos.png";

const projects = [
    {
        title: "Currency Converter",
        description: "A React-based application that converts one currency into another using real-time exchange rates through API integration.",
        image: CurrencyConverter,
    },
    {
        title: "megaBlog",
        description: "A full-stack blogging platform where users can create, edit, delete, and read blog posts with authentication and backend API integration.",
        image: MegaBlog,
    },
    {
        title: "Redux Toolkit Todo App",
        description: "A todo application built with React and Redux Toolkit for efficient global state management, allowing users to add, update, and delete tasks.",
        image: reduxTodo,
    },
    {
        title: "Todos",
        description: "A React-based todo application that handles all task operations such as add, edit, complete, and delete, along with real-time notifications similar to WhatsApp alerts to inform users about every action.",
        image: Todo,
    },
];

export default function CardProjects() {
    return (
        <div className="m-5 overflow-hidden">
            <div className="flex gap-8 py-6 animate-marquee">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="min-w-[380px] bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-t-xl w-full aspect-video object-contain bg-gray-100 p-3"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
