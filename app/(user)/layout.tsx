import Header from "@/components/Header";
import "../globals.css";
import Banner from "@/components/Banner";
import React from "react";
import Footer from "@/components/Footer";


export const metadata = {
  title: "The Exposure",
  description: "The Exposure by pretam dey\nPhotograph",
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
