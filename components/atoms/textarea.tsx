import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label>
      {label && <span className="block text-sm font-medium mb-2">{label}</span>}
      <textarea
        className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        {...props}
      />
    </label>
  );
}
