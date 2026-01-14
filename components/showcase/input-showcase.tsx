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
    <div className="max-w-md space-y-6 p-6">
      <h1 className="text-xl font-bold">Inputs Showcase</h1>

      <TextInput label="Text Input" placeholder="Enter text..." />

      <EmailInput label="Email Input" placeholder="email@example.com" />

      <SelectInput
        label="Select"
        value={selectValue}
        onChange={setSelectValue}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ]}
      />

      <Textarea label="Textarea" placeholder="Type something..." rows={3} />

      <div className="space-y-2">
        <h2 className="font-semibold">Checkbox</h2>
        <Checkbox label="Unchecked" checked={false} />
        <Checkbox label="Checked" checked={checked} onChange={setChecked} />
        <Checkbox label="Disabled" disabled />
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Radio Buttons</h2>
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
  );
}

export default InputsShowcase;
