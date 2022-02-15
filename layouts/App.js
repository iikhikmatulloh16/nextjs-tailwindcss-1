import React from "react";
import Head from "next/Head";
import Footer from "../components/Footer";

export default function App({ title = "Next Tailwind Series", children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div>{children}</div>
            <Footer />
        </div>
    );
}
