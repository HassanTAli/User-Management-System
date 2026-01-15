import { Checkbox } from "../atoms/checkbox";

interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  label?: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
}

export function CheckboxGroup({
  label,
  options,
  value = [],
  onChange,
  disabled,
}: CheckboxGroupProps) {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (disabled) return;

    const newValue = checked
      ? [...value, optionValue]
      : value.filter((v) => v !== optionValue);

    onChange?.(newValue);
  };

  return (
    <div className="space-y-3">
      {label && <span className="block text-sm font-medium mb-3">{label}</span>}
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={value.includes(option.value)}
          disabled={disabled || option.disabled}
          onChange={(checked) => handleCheckboxChange(option.value, checked)}
        />
      ))}
    </div>
  );
}
