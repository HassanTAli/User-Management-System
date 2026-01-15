import { ChangeEvent } from "react";

/**
 * Represents a single radio option.
 */
interface RadioOption {
  /** Display label shown next to the radio button */
  label: string;

  /** Value submitted when this option is selected */
  value: string;

  /** Disables this option when true */
  disabled?: boolean;
}

/**
 * Props for the RadioGroup component.
 */
interface RadioGroupProps {
  /**
   * Name attribute shared by all radio inputs in the group.
   * Required for proper grouping behavior.
   */
  name: string;

  /**
   * List of radio options to render.
   */
  options: RadioOption[];

  /**
   * Currently selected value (controlled usage).
   */
  value?: string;

  /**
   * Callback fired when the selected value changes.
   */
  onChange?: (value: string) => void;
}

/**
 * RadioGroup Component
 *
 * A controlled group of radio buttons rendered from a list of options.
 * Ensures only one option can be selected at a time.
 *
 * Features:
 * - Controlled value support
 * - Disabled options
 * - Accessible native radio inputs
 * - Consistent spacing and styling
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   name="role"
 *   value={role}
 *   onChange={setRole}
 *   options={[
 *     { label: "Admin", value: "admin" },
 *     { label: "User", value: "user" },
 *   ]}
 * />
 * ```
 */
export function RadioGroup({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  /**
   * Handles radio change events and forwards
   * the selected value to the consumer.
   */
  const handleChange = (selectedValue: string) => {
    onChange?.(selectedValue);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={opt.value}
            disabled={opt.disabled}
            checked={value === opt.value}
            onChange={() => handleChange(opt.value)}
            className="w-5 h-5 text-primary-600 border-slate-300 focus:ring-primary-500"
          />

          {/* Radio label */}
          <span className={`ml-3 ${opt.disabled ? "text-gray-400" : ""}`}>
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  );
}
