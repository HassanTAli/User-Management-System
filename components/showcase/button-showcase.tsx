import { Plus } from "lucide-react";
import Button from "../atoms/button";

export default function ButtonShowcase() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold">Button Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="accent">Accent</Button>
          <Button disabled>Disabled</Button>
          <Button leftIcon={<Plus size={16} />}>Add</Button>
        </div>
      </section>
    </div>
  );
}
