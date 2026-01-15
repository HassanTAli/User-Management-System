import { ButtonHTMLAttributes, FC, ReactNode } from "react";

/**
 * Visual variants supported by the Button component.
 *
 * - `primary`: Main call-to-action button
 * - `secondary`: Outlined or less prominent action
 * - `ghost`: Minimal button with no background
 * - `accent`: Emphasized action using accent color
 */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

/**
 * Size options for the Button component.
 * These control text size, padding, and icon-only dimensions.
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Props for the Button component.
 * Extends native button attributes.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;

  /** Button size */
  size?: ButtonSize;

  /** Optional icon displayed before the button text */
  leftIcon?: ReactNode;

  /** Optional icon displayed after the button text */
  rightIcon?: ReactNode;

  /** If true, button expands to full container width */
  fullWidth?: boolean;

  /** If true, renders a square icon-only button */
  iconOnly?: boolean;

  /** Accessible label for icon-only buttons or additional clarity */
  ariaLabel?: string;
}

/**
 * Base Tailwind styles applied to all buttons.
 * Includes layout, typography, focus, and disabled states.
 */
const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Tailwind styles per button variant.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-sm",
  secondary:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-300",
  accent:
    "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-sm",
};

/**
 * Text size styles per button size.
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

/**
 * Padding styles for buttons that include text.
 */
const paddingStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

/**
 * Square sizing styles for icon-only buttons.
 */
const iconOnlyStyles: Record<ButtonSize, string> = {
  sm: "h-9 w-9 p-2",
  md: "h-11 w-11 p-2.5",
  lg: "h-13 w-13 p-3",
};

/**
 * Utility function to conditionally join class names.
 */
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Reusable Button component.
 *
 * Supports multiple variants, sizes, icons, full-width layout,
 * and accessible icon-only rendering.
 */
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
  /**
   * Icon-only button rendering.
   * Requires an accessible aria-label.
   */
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

  /**
   * Standard button rendering with optional left and right icons.
   */
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
