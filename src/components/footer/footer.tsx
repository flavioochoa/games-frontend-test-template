import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer flex items-center justify-center">
      <Link href="/">
        <Image
          src="/apply-digital-logo.svg"
          alt="Logo"
          width={170}
          height={45}
          className="object-contain"
        />
      </Link>
    </footer>
  );
}
