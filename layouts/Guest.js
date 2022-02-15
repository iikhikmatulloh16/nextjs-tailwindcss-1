import React from "react";
import Head from "next/Head";
import ApplicationLogo from "../components/ApplicationLogo";

export default function Guest({ header, title, cardClassName, children }) {
    return (
        <div className="flex items-center justify-center antialiased tracking-tighter text-gray-800 md:min-h-screen md:bg-gray-100">
            <Head>
                <title>{title}</title>
            </Head>
            <div
                className={`${
                    cardClassName ? cardClassName : "lg:w-1/3"
                } w-full md:w-2/3`}
            >
                <div className="flex items-center justify-center mb-5">
                    <ApplicationLogo />
                </div>
                <div className="bg-white md:border md:shadow-sm md:rounded-2xl outline-hidden">
                    <div className="px-6 py-3 border-b bg-gray-50/50">
                        <h1 className="font-medium capitalize">{header}</h1>
                    </div>
                    <div className="px-6 pt-3 pb-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
