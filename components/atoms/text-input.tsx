import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function TextInput({ label, ...props }: TextInputProps) {
  return (
    <label>
      {label && <span className="block text-sm font-medium mb-2">{label}</span>}
      <input
        type="text"
        className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        {...props}
      />
    </label>
  );
}
