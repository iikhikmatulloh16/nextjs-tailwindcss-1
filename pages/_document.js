import { Html, Main, NextScript } from "next/document";
import Head from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="min-h-screen antialiased tracking-tighter text-gray-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
