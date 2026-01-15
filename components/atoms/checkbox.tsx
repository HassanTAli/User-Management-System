interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  classNames?: string;
}

export function Checkbox({
  label,
  checked,
  disabled,
  onChange,
  classNames,
}: CheckboxProps) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className={`w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500 ${
          classNames ?? ""
        }`}
      />
      <span className={`ml-3 ${disabled ? "text-gray-400" : ""}`}>{label}</span>
    </label>
  );
}
