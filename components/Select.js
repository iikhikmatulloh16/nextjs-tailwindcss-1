import React from "react";

export default function Select({ children, ...props }) {
    return (
        <select
            {...props}
            className="w-full transition duration-200 border-gray-300 shadow-sm rounded-xl focus:ring focus:ring-sky-100 focus:border-sky-400"
        >
            {children}
        </select>
    );
}
