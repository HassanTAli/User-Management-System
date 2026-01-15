"use client";

import { useState } from "react";

import { TextInput } from "../atoms/text-input";
import { EmailInput } from "../atoms/email-input";
import { SelectInput } from "../atoms/select-input";
import { Textarea } from "../atoms/textarea";
import { Checkbox } from "../atoms/checkbox";
import { RadioGroup } from "../atoms/radio-group";

function InputsShowcase() {
  const [selectValue, setSelectValue] = useState("option1");
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("opt2");

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="text-3xl font-bold">Inputs Showcase</h1>
      <div className="container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4 grid grid-cols-2 gap-4">
        <TextInput label="Text Input" placeholder="Enter text..." />

        <EmailInput label="Email Input" placeholder="email@example.com" />

        <SelectInput
          label="Select"
          value={selectValue}
          onChange={setSelectValue}
          options={[
            { label: "Select an Option", value: "select" },
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ]}
        />

        <Textarea label="Textarea" placeholder="Type something..." rows={3} />
      </div>

      <h1 className="text-3xl font-bold">Checkbox & Radio</h1>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
          <div className="space-y-2">
            <h2 className="font-semibold mb-2">Checkbox</h2>
            <Checkbox label="Unchecked" checked={false} />
            <Checkbox label="Checked" checked={checked} onChange={setChecked} />
            <Checkbox label="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold mb-2">Radio Buttons</h2>
            <RadioGroup
              name="demo"
              value={radio}
              onChange={setRadio}
              options={[
                { label: "Option 1", value: "opt1" },
                { label: "Option 2 (Selected)", value: "opt2" },
                { label: "Disabled", value: "opt3", disabled: true },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputsShowcase;
