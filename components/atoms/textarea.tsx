import { TextareaHTMLAttributes } from "react";

/**
 * Props for the Textarea component.
 *
 * Extends all native textarea HTML attributes,
 * allowing full control over behavior and accessibility.
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Optional label displayed above the textarea.
   */
  label?: string;
}

/**
 * Textarea Component
 *
 * A reusable textarea form control with optional label support.
 * Designed to be used as a controlled or uncontrolled component.
 *
 * Features:
 * - Full-width layout by default
 * - Consistent styling via Tailwind CSS
 * - Focus ring for accessibility
 * - Supports all native textarea props
 *
 * @example
 * ```tsx
 * <Textarea label="Description" placeholder="Enter details..." />
 * ```
 */
export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label className="block">
      {/* Optional field label */}
      {label && <span className="block mb-2 text-sm font-medium">{label}</span>}

      {/* Textarea input */}
      <textarea
        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        {...props}
      />
    </label>
  );
}
