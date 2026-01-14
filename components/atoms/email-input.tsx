import { InputHTMLAttributes } from "react";

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function EmailInput({ label, ...props }: EmailInputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span>{label}</span>}
      <input
        type="email"
        className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </label>
  );
}
