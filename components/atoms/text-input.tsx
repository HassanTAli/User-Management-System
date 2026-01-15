import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  required?: boolean;
  type?: string;
}

export function TextInput({
  label,
  type = "text",
  required = true,
  error = false,
  ...props
}: TextInputProps) {
  return (
    <label>
      {label && (
        <span
          className={`block text-sm font-medium mb-2 ${
            error ? "text-red-600" : ""
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <input
        type={type}
        className={`${"w-full px-4 py-3 border  rounded-lg bg-white "} ${
          error
            ? "ring-red-500 ring-2 outline-none border-transparent focus-visible:outline-none"
            : "border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        }`}
        {...props}
      />
    </label>
  );
}
