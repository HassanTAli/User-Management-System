import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "accent"
  | "icon";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm",
  secondary:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors",
  ghost:
    "text-slate-600 hover:bg-slate-100 px-6 py-3 rounded-lg font-medium transition-colors",
  accent:
    "bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors",
  icon: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 min-w-8 p-2",
  md: "h-10 min-w-10 p-2.5",
  lg: "h-12 min-w-12 p-3",
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
  className,
  children,
  disabled,
  ariaLabel,
  ...props
}) => {
  const isIconOnly = variant === "icon";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        !isIconOnly && "gap-2 px-4",
        fullWidth && !isIconOnly && "w-full",
        className
      )}
      disabled={disabled}
      aria-label={isIconOnly ? ariaLabel : undefined}
      {...props}
    >
      {isIconOnly ? (
        children
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
