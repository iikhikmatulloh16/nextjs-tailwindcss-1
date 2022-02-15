import React from "react";
import Hero from "../../components/Hero";
import App from "../../layouts/App";

export default function Index() {
    const posts = [
        {
            title: "Lorem ipsum dolor sit amet.",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Pignissiomos culpa molestiae excepturi dolorem.",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Ab vero magni nulla reppelendus!",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Nostrum dignissimos itaque amet quasi.",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Appetiam nam impedit minus. Placeat.",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Est sed sequi voluptatem corporis!",
            created_at: "12 Desember 2021",
            author: "Iik Hikmatulloh",
            picture:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
    ];

    return (
        <>
            <Hero>
                <Hero.Body>
                    <Hero.Title>Our Articles</Hero.Title>
                    <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
                        Recusandae quis dolorum veritatis nulla, nemo
                        consequuntur temporibus quisquam expedita libero est
                        facere ipsum laboriosam eveniet itaque. Rem, dicta
                        temporibus?
                    </p>
                </Hero.Body>
            </Hero>
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 sm:gap-x-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <a href="/articles/single">
                                <img
                                    className="object-center w-full h-56 mb-4 transition-shadow duration-300 shadow hover:shadow-lg rounded-xl object-hover"
                                    src={post.picture}
                                    alt={post.title}
                                />
                            </a>
                            <a href="/articles/single">
                                <h1 className="mb-2 font-semibold text-black sm:mb-4">
                                    {post.title}
                                </h1>
                            </a>
                            <div className="flex items-center justify-between font-mono text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span>{post.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

Index.getLayout = (page) => <App title="Our Articles" children={page} />;
