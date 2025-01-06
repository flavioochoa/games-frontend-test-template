import dynamic from "next/dynamic";
import { BreadcrumbLayout, Breadcrumb } from "@/components/breadcrumb";

const CartPage = dynamic(
  () => import("@/components/pages/cart-page/cart-page"),
  { ssr: false }
);

export default function ShoppingPage() {
  return (
    <>
      <BreadcrumbLayout>
        <Breadcrumb
          href="/"
          label="Back to Catalog"
          icon="/assets/icons/arrow-left.svg"
        />
      </BreadcrumbLayout>
      <CartPage />
    </>
  );
}
