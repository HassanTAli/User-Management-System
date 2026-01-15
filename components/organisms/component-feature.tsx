import { ReactNode } from "react";

interface ComponentFeatureProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  classNames?: string;
}

export const ComponentFeature = ({
  title,
  description,
  icon,
  classNames,
}: ComponentFeatureProps) => {
  return (
    <div className={`p-4 border border-slate-200 rounded-lg ${classNames}`}>
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
        {icon}
      </div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};
