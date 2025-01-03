import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
