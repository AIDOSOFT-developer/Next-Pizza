import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore TS7016: Could not find a declaration file for module './globals.css'.
import "./globals.css";
import { CartButton } from "../components/UI/Button";
import Logo from "../components/UI/Logo";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next pizza, we have the most best programming pizzas in the world!",
    description:
        "On this website, you smell scent programming taste and our reality seal.",
};

const height = 100;
let marginInline = 2 * 30;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-light-yellow h-full w-full antialiased`}
            >
                <main>
                    <div
                        className={`container rounded-xl bg-white p-7.5 h-[calc(${height}vh-${marginInline}px)] m-7.5 mx-auto`}
                    >
                        <div className="border-silver mb-4 flex flex-col justify-between gap-2 border-b-2 pb-4 sm:flex-row md:mb-10 md:pb-10">
                            <Logo />
                            <CartButton />
                        </div>

                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
