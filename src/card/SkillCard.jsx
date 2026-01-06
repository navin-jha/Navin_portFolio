import React from "react";
function SkillCard({ title, color, children }) {
    const colorMap = {
        blue: "bg-blue-900 hover:bg-blue-700",
        green: "bg-green-900 hover:bg-green-700",
        orange: "bg-orange-900 hover:bg-orange-700",
        purple: "bg-purple-900 hover:bg-purple-700",
    };

    return (
        <div className="p-4 sm:p-5 md:p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {children.map((skill, i) => (
                    <span
                        key={i}
                        className={`${colorMap[color]} 
              text-white text-xs sm:text-sm 
              px-2 sm:px-3 py-1 
              rounded-md transition`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
