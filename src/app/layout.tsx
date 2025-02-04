import Audio from "@app/components/Audio";

import type { Metadata } from "next";
import "./globals.css";
import "../styles/animations.css"

export const metadata: Metadata = {
    title: "Happy Valentines!",
    description: "Yipeee",
};

export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased flex justify-center items-center h-screen"
                style={{
                    background: "no-repeat center url(background.jpg)",
                    backgroundSize: "cover"
                }}
            >
                {children}

                <Audio />
            </body>
        </html>
    );
}
