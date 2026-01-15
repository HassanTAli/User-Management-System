interface inputMessageProps {
  message?: string;
  error?: boolean;
}

export function InputMessage({ message, error = false }: inputMessageProps) {
  return (
    <p className={`text-sm ${error ? "text-red-600" : "text-slate-500"} mt-2`}>
      {message}
    </p>
  );
}
