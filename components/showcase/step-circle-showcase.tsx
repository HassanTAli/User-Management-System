import React from "react";
import { StepCircle } from "@/components/atoms/step-circle";

/**
 * StepCircle Atom Showcase
 * Demonstrates all variants and states of the StepCircle atom component
 */

export const StepCircleShowcase: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="heading-1 mb-8 text-slate-900">Step Circle Atom</h1>

      {/* Large Size Variants */}
      <section className="mb-16">
        <div className="mb-12 rounded-md border border-primary-300 bg-primary-50 p-4 flex justify-around items-center">
          <StepCircle text="Default" size="default" status="default" />
          <StepCircle text="Active" size="default" status="active" />
          <StepCircle text="Completed" size="default" status="completed" />
          <StepCircle text="Small" size="small" status="default" />
          <StepCircle text="Large" size="large" status="default" />
        </div>
      </section>
    </div>
  );
};

export default StepCircleShowcase;
