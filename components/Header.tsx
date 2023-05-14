import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-start space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            height={60}
            width={60}
            src="/logo.png"
            alt="logo"
          />
        </Link>
        <h1>The Exposure</h1>
      </div>
    </header>
  );
}
