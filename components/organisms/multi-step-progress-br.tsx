import StepCircle, { StepLine, StepProgressLine } from "../atoms/step-circle";

interface StepItem {
  label: string;
}

interface MultiStepProgressBarProps {
  step?: number;
  steps: StepItem[];
}

export default function MultiStepProgressBar({
  step = 1,
  steps = [],
}: MultiStepProgressBarProps) {
  const totalSteps = steps.length;

  return (
    <div className="my-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mx-auto mb-6">
        {steps.map((item, index) => {
          const stepNumber = index + 1;

          const status =
            stepNumber < step
              ? "completed"
              : stepNumber === step
              ? "active"
              : "default";

          return (
            <div
              key={stepNumber}
              className={`flex items-center  ${
                stepNumber !== totalSteps ? "flex-1" : ""
              }`}
            >
              <StepCircle step={stepNumber} text={item.label} status={status} />

              {stepNumber !== totalSteps && (
                <StepLine
                  status={stepNumber < step ? "completed" : "default"}
                />
              )}
            </div>
          );
        })}
      </div>

      <StepProgressLine step={step} totalSteps={totalSteps} />
    </div>
  );
}
