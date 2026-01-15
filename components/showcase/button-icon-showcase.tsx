import { PlusIcon } from "lucide-react";
import Button from "../atoms/button";
import ShowcaseTemplate from "./showcase-template";

export default function ButtonWithIconShowcase() {
  return (
    <ShowcaseTemplate title="Button with Icon">
      <Button variant="primary" size="sm" iconOnly ariaLabel="Small">
        <PlusIcon />
      </Button>
      <Button variant="primary" size="md" leftIcon={<PlusIcon />}>
        Medium
      </Button>
      <Button variant="secondary" size="lg" rightIcon={<PlusIcon />}>
        Large
      </Button>
    </ShowcaseTemplate>
  );
}
