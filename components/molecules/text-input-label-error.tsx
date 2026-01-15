"use client";

import { Controller, useFormContext } from "react-hook-form";
import { InputMessage } from "../atoms/input-info";
import { TextInput } from "../atoms/text-input";

interface TextInputLabelErrorProps {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

export const TextInputLabelError = ({
  name,
  label,
  required,
  placeholder,
  type = "text",
}: TextInputLabelErrorProps) => {
  const methods = useFormContext();

  if (!methods) {
    throw new Error(
      "TextInputLabelError must be used inside a <FormProvider />"
    );
  }

  const { control } = methods;

  // Build validation rules
  const rules: any = {};

  if (required) {
    rules.required = `${label || "This field"} is required`;
  }

  if (type === "email") {
    rules.pattern = {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    };
  }

  if (type === "number") {
    rules.validate = {
      positive: (value: any) => {
        const num = Number(value);
        return (!isNaN(num) && num > 0) || "Must be a positive number";
      },
    };
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <TextInput
            {...field}
            label={label}
            required={required}
            placeholder={placeholder}
            type={type}
            error={!!fieldState.error}
          />
          <InputMessage
            message={fieldState.error?.message}
            error={!!fieldState.error}
          />
        </div>
      )}
    />
  );
};
