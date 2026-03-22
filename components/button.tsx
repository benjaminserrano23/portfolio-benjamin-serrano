"use client";

import { cn } from "@/lib/utils";
import { useRipple } from "@/lib/use-ripple";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const ripple = useRipple();

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-sm hover:shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    outline:
      "border border-border bg-card/80 text-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    ghost:
      "text-muted-foreground hover:bg-muted hover:text-foreground hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    ripple(e);
    (onClick as ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined)?.(
      e as React.MouseEvent<HTMLButtonElement>
    );
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
