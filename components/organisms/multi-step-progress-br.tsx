import React from "react";
import StepCircle, { StepLine, StepProgressLine } from "../atoms/step-circle";

export default function MultiStepProgressBar() {
  return (
    <div className="my-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Multi Step Progress Bar</h1>
      <div className="flex items-center justify-between mb-8 w-3/4 mx-auto">
        <StepCircle status="completed" step={1} text="Step 1" />
        <StepLine status="completed" />
        <StepCircle status="active" step={2} text="Step 2" />
        <StepLine status="default" />
        <StepCircle status="default" step={3} text="Step 3" />
      </div>
      <StepProgressLine step={2} totalSteps={3} />
    </div>
  );
}
