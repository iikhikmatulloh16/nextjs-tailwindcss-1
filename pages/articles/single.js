import Head from "next/Head";
import React from "react";
import ArticleBody from "../../components/ArticleBody";
import Hero from "../../components/Hero";
import App from "../../layouts/App";

export default function Single() {
    return (
        <div>
            <Head>
                <title>The Best Article In The World</title>
            </Head>
            <Hero>
                <Hero.Body>
                    <Hero.Title>The Best Article In The World</Hero.Title>
                    <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
                        Recusandae quis dolorum veritatis nulla, nemo
                        consequuntur temporibus quisquam expedita libero est
                        facere ipsum laboriosam eveniet itaque. Rem, dicta
                        temporibus?
                    </p>
                </Hero.Body>
            </Hero>
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <ArticleBody />
                </div>
            </div>
        </div>
    );
}
Single.getLayout = (page) => <App children={page} />;
