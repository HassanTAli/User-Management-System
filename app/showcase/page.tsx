import Icon from "@/components/atoms/icon";
import { ComponentFeature } from "@/components/organisms/component-feature";
import MultiStepProgressBar from "@/components/organisms/multi-step-progress-br";
import DataTable from "@/components/organisms/table";
import ButtonWithIconShowcase from "@/components/showcase/button-icon-showcase";
import ButtonShowcase from "@/components/showcase/button-showcase";
import { CardShowcase } from "@/components/showcase/card-showcasr";
import CheckboxGroupExample from "@/components/showcase/checkbox-group-showcase";
import SelectShowcase from "@/components/showcase/custom-select-showcase";
import FormShowcase from "@/components/showcase/form-showcase";
import IconShowcase from "@/components/showcase/icon-showcase";
import InputsShowcase from "@/components/showcase/input-showcase";
import ModalShowcase from "@/components/showcase/modal-showcase";
import StepCircleShowcase from "@/components/showcase/step-circle-showcase";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Atoms</h2>
      <StepCircleShowcase />
      <IconShowcase />
      <ButtonShowcase />
      <InputsShowcase />
      <h2 className="text-3xl font-bold mb-8">Molecules</h2>
      <CheckboxGroupExample />
      <ButtonWithIconShowcase />
      <h2 className="text-3xl font-bold mb-8">Organs</h2>
      <MultiStepProgressBar
        steps={[
          { label: "Personal" },
          { label: "preferences" },
          { label: "Review" },
        ]}
      />
      <div className="my-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComponentFeature
          icon={
            <Icon
              name="users"
              className="text-primary-600 bg-primary-100 "
              size={20}
            />
          }
          title="Multiple Select Types"
          description="Single select, multi-select, and async select with pagination"
        />
        <ComponentFeature
          icon={
            <Icon
              name="filter"
              className="text-primary-600 bg-primary-100"
              size={20}
            />
          }
          title="Data Sources"
          description="Static arrays, frontend search, and backend API calls"
        />
        <ComponentFeature
          icon={
            <Icon
              name="alert-circle"
              className="text-blue-600 bg-blue-100 "
              size={20}
            />
          }
          title="Advanced Features"
          description="Debounced search, infinite scroll, max selection limits"
        />
      </div>
      <DataTable />
      <SelectShowcase />
      <ModalShowcase />
      <h2 className="text-3xl font-bold mb-8">Templates</h2>
      <div className="md:w-1/2 mb-12 mx-auto">
        <CardShowcase />
      </div>
      <div className="md:w-1/2 mb-12 mx-auto">
        <FormShowcase />
      </div>
    </div>
  );
}
