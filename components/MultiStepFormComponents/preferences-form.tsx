import { Controller, useFormContext } from "react-hook-form";

import Select from "../atoms/custom-select";
import Icon from "../atoms/icon";

export const PreferencesForm = () => {
  const { control } = useFormContext();

  const categoryOption = [
    "Technology",
    "Design",
    "Business",
    "Marketing",
    "Other",
  ];

  const InterestsOptions = [
    "Technology",
    "Design",
    "Business",
    "Marketing",
    "Art",
    "Music",
    "Sports",
    "Travel",
    "Food",
    "Science",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Preferences</h3>
      <Controller
        name="category"
        control={control}
        rules={{
          required: "Category is required",
        }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              label="Category"
              required
              options={categoryOption}
              placeholder="Select category"
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
        name="Interests"
        control={control}
        rules={{
          required: "Interests is required",
        }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              label="Interests"
              multi
              required
              maxSelections={3}
              options={InterestsOptions}
              placeholder="Select Interests"
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
      <div>
        <label className="block text-sm font-medium mb-4">
          Avatar Upload (Optional)
        </label>
        <div className="w-full border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 cursor-pointer transition-colors">
          <Icon
            name="upload"
            size={48}
            className="text-slate-400 mx-auto mb-4"
          />

          <p className="text-slate-600">Drag &amp; drop your avatar here or</p>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Browse Files
          </button>
          <p className="text-sm text-slate-500 mt-2">PNG, JPG up to 5MB</p>
        </div>
      </div>
    </div>
  );
};
