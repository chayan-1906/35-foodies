import type {Metadata} from "next";
import "./globals.css";
import {Inter} from 'next/font/google';
import React from "react";

const inter = Inter({subsets: ['greek-ext']});

export const metadata: Metadata = {
    title: '35 Foodies',
    description: '',
};

function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}

export default RootLayout;
