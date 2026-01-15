interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
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
            onChange={() => onChange?.(opt.value)}
            className="w-5 h-5 text-primary-600 border-slate-300 focus:ring-primary-500"
          />
          <span className={`ml-3 ${opt.disabled ? "text-gray-400" : ""}`}>
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  );
}
