"use client";
import { useState } from "react";

import { CheckboxGroup } from "../molecules/checkbox-group";

const CheckboxGroupExample = () => {
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    { value: "technology", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "business", label: "Business" },
    { value: "marketing", label: "Marketing" },
    { value: "other", label: "Other" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold">Checkbox Group</h1>
      <div className="container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4 flex">
        <CheckboxGroup
          label="Select your interests"
          options={interestOptions}
          value={interests}
          onChange={setInterests}
        />
      </div>
    </>
  );
};

export default CheckboxGroupExample;
