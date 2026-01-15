import { useFormContext, Controller } from "react-hook-form";

import Select from "../atoms/custom-select";
import { TextInputLabelError } from "../molecules/text-input-label-error";

export const PersonalForm = () => {
  const { control } = useFormContext();

  const genderOptions: string[] = ["Male", "Female"];

  const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "Mexico",
    "India",
    "China",
    "Italy",
    "Spain",
    "South Korea",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Personal Information</h3>

      <TextInputLabelError
        name="fullName"
        label="Full Name"
        required
        placeholder="Hassan T Ali"
      />

      <TextInputLabelError
        name="email"
        label="Email Address"
        required
        placeholder="hassantarekha@gmail.com"
        type="email"
      />

      <Controller
        name="gender"
        control={control}
        rules={{
          required: "Gender is required",
        }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              label="Gender"
              required
              options={genderOptions}
              placeholder="Select gender"
              value={field.value}
              onChange={field.onChange}
            />
            {fieldState.error && (
              <div className="mt-2 text-xs text-red-500">
                {fieldState.error.message}
              </div>
            )}
          </div>
        )}
      />

      <Controller
        name="country"
        control={control}
        rules={{
          required: "Country is required",
        }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              label="Country"
              required
              searchable
              options={countries}
              placeholder="Select country"
              value={field.value}
              onChange={field.onChange}
            />
            {fieldState.error && (
              <div className="mt-2 text-xs text-red-500">
                {fieldState.error.message}
              </div>
            )}
          </div>
        )}
      />

      <TextInputLabelError
        name="age"
        label="Age"
        required
        placeholder="29"
        type="number"
      />
    </div>
  );
};
