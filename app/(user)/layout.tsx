import Header from "@/components/Header";
import "../globals.css";
import Banner from "@/components/Banner";
import React from "react";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Pretam Dey",
  description: "Pretam Dey Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl mx-auto">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
