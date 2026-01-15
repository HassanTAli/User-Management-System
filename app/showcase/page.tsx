import MultiStepProgressBar from "@/components/organisms/multi-step-progress-br";
import DataTable from "@/components/organisms/table";
import ButtonWithIconShowcase from "@/components/showcase/button-icon-showcase";
import ButtonShowcase from "@/components/showcase/button-showcase";
import CheckboxGroupExample from "@/components/showcase/checkbox-group-showcase";
import SelectShowcase from "@/components/showcase/custom-select-showcase";
import IconShowcase from "@/components/showcase/icon-showcase";
import InputLabelErrorShowcase from "@/components/showcase/input-label-error-showcase";
import InputsShowcase from "@/components/showcase/input-showcase";
import ModalShowcase from "@/components/showcase/modal-showcase";
import StepCircleShowcase from "@/components/showcase/step-circle-showcase";
import Card from "@/components/templates/Card";
import Form from "@/components/templates/Form";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Atoms</h2>
      <StepCircleShowcase />
      <IconShowcase />
      <ButtonShowcase />
      <InputsShowcase />
      <h2 className="text-3xl font-bold mb-8">Molecules</h2>
      <InputLabelErrorShowcase />
      <CheckboxGroupExample />
      <ButtonWithIconShowcase />
      <h2 className="text-3xl font-bold mb-8">Organs</h2>
      <MultiStepProgressBar />
      <DataTable />
      <SelectShowcase />
      <ModalShowcase />
      <h2 className="text-3xl font-bold mb-8">Templates</h2>
      <div className="md:w-1/2 mb-12 mx-auto">
        <Card title="Example Card" />
      </div>
      <div className="md:w-1/2 mb-12 mx-auto">
        <Form />
      </div>
    </div>
  );
}
