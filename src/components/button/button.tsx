import { MouseEventHandler } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: "primary" | "secondary";
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button(props: ButtonProps) {
  const { label, variant, className = "", ...otherProps } = props;

  return (
    <button className={`button-${variant} ${className}`} {...otherProps}>
      <label className="label">{label}</label>
    </button>
  );
}
