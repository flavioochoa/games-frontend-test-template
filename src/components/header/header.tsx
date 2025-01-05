import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 header">
      <nav className="flex justify-between">
        <Link className="company-name" href="/" prefetch={false}>
          GamerShop
        </Link>
        <Link href="/cart" className="min-w-[25px]">
          <Image
            src="/assets/icons/cart.svg"
            width={20}
            height={20}
            alt="cart"
          />
        </Link>
      </nav>
    </header>
  );
}
