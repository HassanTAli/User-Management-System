import { InputHTMLAttributes } from "react";

/**
 * Props for the TextInput component.
 *
 * Extends all native input attributes to allow full control
 * over behavior, validation, and accessibility.
 */
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label displayed above the input.
   */
  label?: string;

  /**
   * Displays the input in an error state when true.
   */
  error?: boolean;

  /**
   * Marks the field as required and displays an asterisk in the label.
   */
  required?: boolean;

  /**
   * Input type (e.g. text, email, password).
   * Defaults to `text`.
   */
  type?: string;
}

/**
 * TextInput Component
 *
 * A reusable text input form control with label and error-state support.
 * Designed for consistent styling and accessibility across forms.
 *
 * Features:
 * - Optional label with required indicator
 * - Error styling with visible focus ring
 * - Full-width layout by default
 * - Supports all native input attributes
 *
 * @example
 * ```tsx
 * <TextInput label="Email" type="email" required />
 * <TextInput label="Username" error placeholder="Enter username" />
 * ```
 */
export function TextInput({
  label,
  type = "text",
  required = true,
  error = false,
  ...props
}: TextInputProps) {
  return (
    <label className="block">
      {/* Optional field label */}
      {label && (
        <span
          className={`block mb-2 text-sm font-medium ${
            error ? "text-red-600" : ""
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}

      {/* Text input */}
      <input
        type={type}
        className={`w-full px-4 py-3 bg-white border rounded-lg ${
          error
            ? "ring-2 ring-red-500 border-transparent outline-none focus-visible:outline-none"
            : "border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        }`}
        {...props}
      />
    </label>
  );
}
