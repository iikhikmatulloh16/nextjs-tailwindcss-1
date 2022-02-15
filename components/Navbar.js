import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import DropdownLink from "./DropdownLink";
import Line from "./Line";
import NavLink from "./Navlink";

export default function Navbar() {
    const auth = {
        check: false,
        user: {
            name: "Iik Hikmatulloh",
        },
    };
    return (
        <div className="hidden py-4 border-b md:block border-white/10">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <a
                            href="/"
                            className="mr-6 font-semibold text-white uppercase"
                        >
                            Brand
                        </a>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/articles">Articles</NavLink>
                        <NavLink href="#">Gallery</NavLink>
                        <NavLink href="#">About</NavLink>
                        <NavLink href="#">Contact</NavLink>
                    </div>
                    {auth.check ? (
                        <div className="flex items-center gap-x-2">
                            <Menu as={"div"} className="relative">
                                <Menu.Button className="flex items-center text-white hover:bg-transparent gap-x-2">
                                    {auth.user.name}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
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
                                        className="absolute top-0 right-0 w-56 py-1 mt-8 overflow-hidden bg-white border rounded-lg shadow-sm"
                                    >
                                        <DropdownLink href="#">
                                            Dashboard
                                        </DropdownLink>
                                        <DropdownLink href="#">
                                            Horizon
                                        </DropdownLink>
                                        <Line />
                                        <DropdownLink href="#">
                                            Account settings
                                        </DropdownLink>
                                        <DropdownLink href="#">
                                            Change password
                                        </DropdownLink>
                                        <DropdownLink href="#">
                                            Favorites articles
                                        </DropdownLink>
                                        <DropdownLink href="#">
                                            Help
                                        </DropdownLink>
                                        <Line />
                                        <DropdownLink href="#">
                                            Log out
                                        </DropdownLink>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    ) : (
                        <div className="flex items-center gap-x-2">
                            <NavLink href="/login">Sign in</NavLink>
                            <NavLink href="/register">Sign up</NavLink>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}
