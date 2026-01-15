import Button from "../atoms/button";
import Icon from "../atoms/icon";

export default function ButtonShowcase() {
  return (
    <div className="my-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Button Showcase</h1>
      <div className="container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4 flex justify-around items-center">
        <section className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
            <Button disabled>Disabled</Button>
            <Button leftIcon={<Icon name="check" size={16} />}>Add</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
