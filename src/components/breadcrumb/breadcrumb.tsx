import Image from "next/image";
import Link from "next/link";

interface BreadcrumbPros {
  href: string;
  label: string;
  icon?: string;
}

export default function Breadcrumb(props: BreadcrumbPros) {
  const { href, label, icon } = props;

  return (
    <Link href={href} className="flex flex-row gap-4 items-center">
      {icon && <Image src={icon} width={12} height={12} alt={label} />}
      <span>{label}</span>
    </Link>
  );
}
