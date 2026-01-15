import Button from "../atoms/button";
import { TextInput } from "../atoms/text-input";
import { Card } from "../templates/Card";

export const CardShowcase = () => {
  return (
    <div className="max-w-md">
      <Card
        title="Sample Card"
        content={
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-slate-900">Card Content</span>
              <span className="text-sm text-slate-600">Example</span>
            </div>
            <p className="text-sm text-slate-600">
              This shows how the Card component looks with content and actions.
            </p>
          </>
        }
        footer={
          <>
            <Button variant="primary">Primary Action</Button>
            <TextInput placeholder="Enter text..." />
          </>
        }
      />
    </div>
  );
};
