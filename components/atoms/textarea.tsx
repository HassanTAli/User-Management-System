import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span>{label}</span>}
      <textarea
        className="rounded-md border px-3 py-2 resize-none"
        {...props}
      />
    </label>
  );
}
