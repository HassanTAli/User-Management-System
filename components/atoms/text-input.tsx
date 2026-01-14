import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function TextInput({ label, ...props }: TextInputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span>{label}</span>}
      <input
        type="text"
        className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </label>
  );
}
