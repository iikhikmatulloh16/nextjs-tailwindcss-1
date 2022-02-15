import React from "react";

export default function NavLink({ href, className, children }) {
    return (
        <a
            href={href}
            className={` ${
                className ? className : ""
            }md:text-sm font-medium lg:text-tiny px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg`}
        >
            {children}
        </a>
    );
}
