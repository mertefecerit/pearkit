import {Inter} from "next/font/google";
import "./assets/scss/app.scss";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "BubbleUI",
    description: "A ReactJS Component Kit",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
