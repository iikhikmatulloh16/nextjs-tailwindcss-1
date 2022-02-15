import React from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Title = ({ className, children }) => (
    <h1
        className={`${
            className ? className : ""
        } text-xl font-bold md:text-3xl`}
    >
        {children}
    </h1>
);
const Body = ({ children }) => (
    <div className="py-4 text-white sm:py-8 md:py-16">{children}</div>
);

const Hero = ({ children }) => {
    return (
        <div className="mb-4 sm:mb-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            <MobileNav></MobileNav>
            <Navbar />
            <div className="container">
                <div className="w-full md:w-2/3">{children}</div>
            </div>
        </div>
    );
};

Hero.Title = Title;
Hero.Body = Body;

export default Hero;
