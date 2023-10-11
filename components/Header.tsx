"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  function homeIconColor() {
    if (path == "/") {
      return "text-red-600";
    }
    return "hover:text-red-600";
  }

  function galleryIconColor() {
    if (path.slice(0, 8) == "/gallery") {
      return "text-red-600";
    }
    return "hover:text-red-600";
  }

  function aboutIconColor() {
    if (path == "/about") {
      return "text-red-600";
    }
    return "hover:text-red-600";
  }

  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link className="flex items-center space-x-2" href={"/"}>
        <Image
          className="rounded-full"
          height={60}
          width={60}
          src="/owner.jpg"
          alt="logo"
        />
        <h1>Pretam Dey</h1>
      </Link>
      <div className="flex space-x-4 px-10">
        <Link href={"/"} className={homeIconColor()}>
          Home
        </Link>
        <Link href={"/gallery"} className={galleryIconColor()}>
          Gallery
        </Link>
      </div>
    </header>
  );
}
