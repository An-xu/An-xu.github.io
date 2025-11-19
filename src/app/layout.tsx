import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PillNav } from "@/components/ui/pill-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guoyue's Website",
  description: "Mechanical Engineering Ph.D., Electrical Engineering M.S.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "CV", href: "/cv" },
  { label: "Project", href: "/projects" },
  { label: "Publication", href: "/publications" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <PillNav items={navItems} />
      </body>
    </html>
  );
}
