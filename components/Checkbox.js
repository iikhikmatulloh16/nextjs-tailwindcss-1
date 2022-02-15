import React from "react";

export default function Checkbox({ label, forInput, ...props }) {
    return (
        <div className="flex items-center gap-x-2">
            <input
                className="border-gray-300 rounded text-sky-500 focus:ring-0"
                type="checkbox"
                {...props}
            ></input>
            <label htmlFor={forInput} className="select-none">
                {label}
            </label>
        </div>
    );
}
