import { InputHTMLAttributes } from "react";

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function EmailInput({ label, ...props }: EmailInputProps) {
  return (
    <label>
      {label && <span className="block text-sm font-medium mb-2">{label}</span>}
      <input
        type="email"
        className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        {...props}
      />
    </label>
  );
}
