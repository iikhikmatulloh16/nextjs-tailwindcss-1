import React, { Fragment } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu, Transition } from "@headlessui/react";
import Line from "./Line";

export default function MobileNav() {
    const auth = {
        check: true,
        user: {
            name: "Iik Hikmatulloh",
        },
    };
    return (
        <Menu
            as={"div"}
            className="w-full md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700"
        >
            <a href="#" className="text-white font-semibold uppercase">
                Brand
            </a>
            <Menu.Button className="focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    as={"div"}
                    className="shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-3 py-1 rounded-lg w-56 overflow-hidden"
                >
                    <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
                    <Line />
                    {auth.check ? (
                        <>
                            <ResponsiveNavLink href="#">
                                Dashboard
                            </ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">
                                {auth.user.name}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Account settings
                            </ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">Help</ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">
                                Log out
                            </ResponsiveNavLink>
                        </>
                    ) : (
                        <>
                            <ResponsiveNavLink href="#">
                                Sign In
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Sign Up
                            </ResponsiveNavLink>
                        </>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
