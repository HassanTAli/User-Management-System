import ButtonWithIconShowcase from "@/components/showcase/button-icon-showcase";
import ButtonShowcase from "@/components/showcase/button-showcase";
import CheckboxGroupExample from "@/components/showcase/checkbox-group-showcase";
import IconShowcase from "@/components/showcase/icon-showcase";
import InputLabelErrorShowcase from "@/components/showcase/input-label-error-showcase";
import InputsShowcase from "@/components/showcase/input-showcase";
import StepCircleShowcase from "@/components/showcase/step-circle-showcase";

export default function Home() {
  return (
    <div className="container mx-auto">
      <StepCircleShowcase />
      <IconShowcase />
      <ButtonShowcase />
      <InputsShowcase />
      <h2 className="text-3xl font-bold mb-8">Molecules</h2>
      <InputLabelErrorShowcase />
      <CheckboxGroupExample />
      <ButtonWithIconShowcase />
    </div>
  );
}
