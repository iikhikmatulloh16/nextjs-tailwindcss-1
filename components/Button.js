import React from "react";

export default function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`${
                className
                    ? className
                    : "bg-sky-500 focus:ring-sky-200 hover:bg-sky-600"
            } px-6 py-2.5 text-sm font-medium transition duration-300 focus:outline-none focus:ring rounded text-white`}
        >
            {children}
        </button>
    );
}
