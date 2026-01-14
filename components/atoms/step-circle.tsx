import { FC, ReactNode } from "react";

import Icon from "./icon";
/**
 * Step Circle Atom Component
 * Atomic Design: Atom level component
 *
 * A foundational UI element representing a single step indicator
 * with multiple states, sizes, and configurations.
 */

export type StepStatus = "default" | "active" | "completed";
export type StepSize = "small" | "default" | "large";

export interface StepCircleProps {
  /** Current status of the step */
  status?: StepStatus;

  /** Size variant of the circle */
  size?: StepSize;

  /** Step number or identifier displayed in the circle */
  step?: number | string;

  /** Optional icon to display instead of step number */
  icon?: ReactNode;

  /** Text label displayed below the circle */
  text?: string;

  /** Additional CSS classes */
  className?: string;
}

export const StepCircle: FC<StepCircleProps> = ({
  status = "default",
  size = "default",
  step = 1,
  icon,
  text,
  className = "",
}) => {
  // Text and Size configurations
  const getTextSizeStyles = () => {
    // Completed state always uses green
    if (size === "large") {
      return "w-10 h-10 text-base";
    }

    // Active state
    if (size === "small") {
      return "w-6 h-6 text-xs";
    }

    // Default state
    return "w-8 h-8 text-sm";
  };

  // Status and color configurations
  const getCircleStyles = () => {
    // Completed state always uses green
    if (status === "active" || status === "completed") {
      return "bg-primary-600 text-white";
    }

    // Default state
    return "bg-slate-200 text-slate-600";
  };

  const getLabelColors = () => {
    if (status === "active") {
      return "text-primary-600";
    }
    return "text-slate-600";
  };

  const circleStyles = getCircleStyles();
  const labelStyles = getLabelColors();
  const textStyles = getTextSizeStyles();

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Circle */}
      <div
        className={`${circleStyles} ${textStyles} rounded-full flex items-center justify-center font-medium transition-all duration-200 mb-2`}
        role="status"
        aria-label={text ? `Step ${step}: ${text}` : `Step ${step}`}
      >
        {status === "completed" ? (
          <Icon name="check" size={18} />
        ) : (
          <span>{step}</span>
        )}
      </div>

      {/* Label Text */}
      {text && (
        <span
          className={`
            font-medium
            text-center
            max-w-20
            transition-colors
            duration-200
            ${labelStyles}
            text-sm
          `}
        >
          {text}
        </span>
      )}
    </div>
  );
};

// Example check icon for completed state
export const CheckIcon: FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3332 4L5.99984 11.3333L2.6665 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StepCircle;
