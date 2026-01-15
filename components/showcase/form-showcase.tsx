"use client";

import { useState } from "react";

import Button from "../atoms/button";
import { Checkbox } from "../atoms/checkbox";
import { TextInput } from "../atoms/text-input";

import { Form } from "../templates/Form";

export default function FormShowcase() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-10 flex justify-center items-start">
      <Form
        title="Create Account"
        content={
          <>
            <TextInput
              placeholder="Email address"
              type="email"
              label="Email Address"
            />
            <TextInput
              placeholder="Password"
              type="password"
              label="Password"
            />
            <Checkbox
              label="Remember me"
              checked={checked}
              onChange={setChecked}
            />
          </>
        }
        footer={
          <>
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Create</Button>
          </>
        }
      >
        <TextInput label="Email" placeholder="you@example.com" />
        <TextInput label="Password" type="password" placeholder="••••••••" />
      </Form>
    </div>
  );
}
