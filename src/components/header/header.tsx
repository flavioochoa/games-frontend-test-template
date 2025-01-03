import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <Link href="/">GamerShop</Link>
      <Link href="/cart">[CartIcon]</Link>
    </nav>
  );
}
