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
    <label className="flex flex-col gap-1 text-sm">
      {label && <span>{label}</span>}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-md border px-3 py-2"
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
