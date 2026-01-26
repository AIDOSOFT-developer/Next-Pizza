import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full bg-light-yellow `}
            >
                <main>
                    <div
                        className={`container rounded-xl p-7.5 bg-white h-[calc(${height}vh-${marginInline}px)] mx-auto m-7.5`}
                    >
                        <div className="flex justify-between pb-10 border-b-2 border-silver">
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
