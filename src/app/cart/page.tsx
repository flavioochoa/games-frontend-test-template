import dynamic from "next/dynamic";
import Link from "next/link";

const CartPage = dynamic(
  () => import("@/components/pages/cart-page/cart-page"),
  { ssr: false }
);

export default function ShoppingPage() {
  return (
    <main className="">
      <Link href="/">Back to catalog</Link>
      <div>Your Cart</div>
      <CartPage />
    </main>
  );
}
