import React from "react";
import ApplicationLogo from "../components/ApplicationLogo";

export default function Footer() {
    return (
        <footer className="mt-16 border-t">
            <div className="container">
                <div className="pt-8 -mb-4 text-center">
                    <ApplicationLogo />
                </div>
                <div className="flex justify-center py-8">
                    <div className="w-full max-w-lg text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et illum eos dolores. Mollitia libero ullam labore non
                        sequi minima voluptatum ratione sit nam. Quis facilis
                        est voluptates nobis non amet!
                    </div>
                </div>
            </div>
            <div className="py-4 text-center bg-gray-100 border-t border-gray-200">
                <div className="container">&copy; Copyright 2022</div>
            </div>
        </footer>
    );
}
