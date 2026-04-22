import Link from "next/link";

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-all duration-300 ease-out transform-gpu hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]";

const variants = {
  light:
    "bg-white !text-[var(--primary)] border border-[var(--primary)] shadow-sm hover:bg-[var(--accent)] hover:shadow-md",

  dark:
    "bg-[var(--primary)] !text-white border border-white/30 shadow-sm hover:bg-[var(--primary-hover)] hover:shadow-md",

  outline:
    "border border-white/50 text-white hover:bg-white/10 hover:shadow-md",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  children,
  variant = "dark",
  size = "md",
  className = "",
  ...props
}) {
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