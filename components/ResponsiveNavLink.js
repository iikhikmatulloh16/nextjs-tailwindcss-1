import { Menu } from "@headlessui/react";
import React from "react";

export default function ResponsiveNavLink({ href, children }) {
    return (
        <Menu.Item>
            <a
                href={href}
                className=" block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black"
            >
                {children}
            </a>
        </Menu.Item>
    );
}
