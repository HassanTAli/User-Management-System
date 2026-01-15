import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-sm",
  secondary:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-300",
  accent:
    "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

// Padding for buttons with text
const paddingStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

// Size for icon-only buttons (square)
const iconOnlyStyles: Record<ButtonSize, string> = {
  sm: "h-9 w-9 p-2",
  md: "h-11 w-11 p-2.5",
  lg: "h-13 w-13 p-3",
};

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  iconOnly = false,
  className,
  children,
  disabled,
  ariaLabel,
  ...props
}) => {
  // Icon-only button (just an icon, no text)
  if (iconOnly) {
    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          iconOnlyStyles[size],
          className
        )}
        disabled={disabled}
        aria-label={ariaLabel || "Button"}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Regular button with optional icons
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        paddingStyles[size],
        "gap-2",
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
