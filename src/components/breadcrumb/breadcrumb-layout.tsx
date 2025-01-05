interface BreadcrumbLayoutProps {
  children: React.ReactNode;
}

export default function BreadcrumbLayout(props: BreadcrumbLayoutProps) {
  const { children } = props;

  return <div className="page-layout">{children}</div>;
}
