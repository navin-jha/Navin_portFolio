import React from 'react'

function SkillCard({ title, color, children }) {
    const colorMap = {
        blue: "bg-blue-900 hover:bg-blue-700",
        green: "bg-green-900 hover:bg-green-700",
        orange: "bg-orange-900 hover:bg-orange-700",
        purple: "bg-purple-900 hover:bg-purple-700",
    };

    return (
        <div className="p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {children.map((skill, i) => (
                    <span
                        key={i}
                        className={`${colorMap[color]} text-white px-3 py-1 rounded-md transition`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCard