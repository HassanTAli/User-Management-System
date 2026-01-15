interface SelectInputProps {
  label?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function SelectInput({
  label,
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <label>
      {label && <span className="block text-sm font-medium mb-2">{label}</span>}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
