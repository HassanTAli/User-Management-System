import { ChangeEvent } from "react";

/**
 * Props for the Checkbox component.
 */
interface CheckboxProps {
  /**
   * Text label displayed next to the checkbox.
   */
  label: string;

  /**
   * Controlled checked state of the checkbox.
   */
  checked?: boolean;

  /**
   * Disables the checkbox when true.
   */
  disabled?: boolean;

  /**
   * Callback fired when the checked state changes.
   * Receives the new checked value.
   */
  onChange?: (checked: boolean) => void;

  /**
   * Optional additional Tailwind classes applied to the input element.
   */
  classNames?: string;
}

/**
 * Checkbox component.
 *
 * A controlled checkbox with label support and disabled state styling.
 * Designed to be accessible and easily customizable via Tailwind classes.
 */
export function Checkbox({
  label,
  checked,
  disabled,
  onChange,
  classNames,
}: CheckboxProps) {
  /**
   * Handles native checkbox change events and
   * forwards the checked value to the consumer.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={`w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500 ${
          classNames ?? ""
        }`}
      />

      {/* Checkbox label */}
      <span className={`ml-3 ${disabled ? "text-gray-400" : ""}`}>{label}</span>
    </label>
  );
}
