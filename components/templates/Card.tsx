/**
 *
 *
 */

import Button from "../atoms/button";
import { TextInput } from "../atoms/text-input";

interface CardProps {
  title?: string;
}

const CardHeader = ({ title }: CardProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h4 className="text-lg font-semibold">{title ?? "Title"}</h4>
      <div className="w-6 h-6 rounded-full bg-primary-500"></div>
    </div>
  );
};

const CardContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="p-4 border border-slate-200 rounded-lg">{children}</div>
  );
};

const CardFooter = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mt-6 border-t-slate-200 border-t pt-4 flex flex-col gap-4">
      {children}
    </div>
  );
};

const Card = ({ title }: CardProps) => {
  return (
    <div className="border-2 border-slate-200 rounded-xl p-6 bg-white">
      <CardHeader title={title} />
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-slate-900">Sample Card</span>
          <span className="text-sm text-slate-600">Example</span>
        </div>
        <p className="text-sm text-slate-600">
          This shows how components look with a white background.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Primary Button</Button>
        <TextInput placeholder="Enter text..." />
      </CardFooter>
    </div>
  );
};

export default Card;
