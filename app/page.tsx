"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import MultiStepProgressBar from "@/components/organisms/multi-step-progress-br";
import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { Form } from "@/components/templates/Form";
import { PersonalForm } from "@/components/MultiStepFormComponents/personal-form";
import { PreferencesForm } from "@/components/MultiStepFormComponents/preferences-form";
import Review from "@/components/MultiStepFormComponents/review";

import {
  FormData,
  resetForm,
  updatePersonal,
  updatePreferences,
} from "@/redux/features/formSlice";
import UserAddedSuccessModal from "@/components/page/user-add-success-modal";

const steps = [
  { label: "Personal" },
  { label: "preferences" },
  { label: "Review" },
];

export default function MultiStepFrom() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  <UserAddedSuccessModal
    open={open}
    onClose={() => setOpen(false)}
    onViewUsers={() => console.log("Go to users")}
  />;

  const personalDefaults = useSelector((s: FormData) => s.form.personal);

  const methods = useForm({
    defaultValues: personalDefaults,
    mode: "onChange",
  });

  const onNext = async () => {
    // Validate current step
    const isValid = await methods.trigger();
    if (!isValid) {
      console.log("Validation errors:", methods.formState.errors);
      return;
    }

    const data = methods.getValues();

    // Step 1: Update Personal Information
    if (step === 1) {
      const { fullName, email, gender, age, country } = data;
      dispatch(updatePersonal({ fullName, email, gender, age, country }));
    }

    // Step 2: Update Preferences
    if (step === 2) {
      const { category, Interests } = data;
      dispatch(updatePreferences({ category, interests: Interests }));
    }

    if (step === steps.length) {
      setOpen(true);
      dispatch(resetForm());
      methods.reset();
      setStep(1);
      return;
    }

    // Move to next step
    setStep((s) => Math.min(steps.length, s + 1));
  };

  const Content = (
    <div>
      {steps[step - 1].label === "Personal" && <PersonalForm />}
      {steps[step - 1].label === "preferences" && <PreferencesForm />}
      {steps[step - 1].label === "Review" && <Review />}
    </div>
  );

  const Footer = (
    <div className="flex justify-between items-center gap-4 w-full">
      <Button
        onClick={() => setStep((s) => Math.max(1, s - 1))}
        disabled={step === 1}
        variant="secondary"
        leftIcon={<Icon name="chevron-left" />}
      >
        Back
      </Button>

      <Button
        onClick={onNext}
        variant="primary"
        rightIcon={<Icon name="chevron-right" />}
      >
        {step === steps.length ? "Submit" : "Next Step"}
      </Button>
    </div>
  );

  return (
    <div className="p-8">
      <UserAddedSuccessModal
        open={open}
        onClose={() => setOpen(false)}
        onViewUsers={() => console.log("Go to users")}
      />
      <div className="md:w-3/4 mx-auto">
        <MultiStepProgressBar step={step} steps={steps} />
        <FormProvider {...methods}>
          <Form footer={Footer} content={Content} title="" />
        </FormProvider>
      </div>
    </div>
  );
}
