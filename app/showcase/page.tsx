import ButtonShowcase from "@/components/showcase/button-showcase";
import IconShowcase from "@/components/showcase/icon-showcase";
import InputsShowcase from "@/components/showcase/input-showcase";
import StepCircleShowcase from "@/components/showcase/step-circle-showcase";

export default function Home() {
  return (
    <div className="container mx-auto">
      <StepCircleShowcase />
      <IconShowcase />
      <ButtonShowcase />
      <InputsShowcase />
    </div>
  );
}
