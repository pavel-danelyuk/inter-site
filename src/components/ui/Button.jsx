import Link from "next/link";

const base = "inline-flex items-center justify-center rounded-full transition font-medium";
const variants = {
  primary: "bg-[var(--foreground)] text-white hover:opacity-90",
  secondary: "border border-[var(--line)] bg-[var(--card)] hover:bg-white",
  outline: "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white",
};
const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({ href, children, variant = "primary", size = "md", className = "", ...props }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
