"use client";

import { useState } from "react";

import { TextInput } from "../atoms/text-input";
import { Checkbox } from "../atoms/checkbox";
import { Button } from "../atoms/button";

const FormHeader = () => (
  <div className="flex items-center justify-between mb-6">
    <h4 className="text-lg font-semibold">Form Example</h4>
    <div className="w-6 h-6 rounded-full bg-green-500"></div>
  </div>
);

const FormContent = ({ children }: { children: React.ReactNode }) => {
  return <form className="space-y-4 flex flex-col gap-2">{children}</form>;
};

const Form = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="border-2 border-slate-200 rounded-xl p-6 bg-white">
      <FormHeader />
      <FormContent>
        <TextInput
          placeholder="Email address"
          type="email"
          label="Email Address"
        />
        <TextInput placeholder="Password" type="password" label="Password" />
        <Checkbox label="Remember me" checked={checked} onChange={setChecked} />
        <Button className="w-full" variant="secondary">
          Sign In
        </Button>
      </FormContent>
    </div>
  );
};

export default Form;
