import Button from "../atoms/button";
import Icon from "../atoms/icon";
import ShowcaseTemplate from "./showcase-template";

export default function ButtonWithIconShowcase() {
  return (
    <ShowcaseTemplate title="Button with Icon">
      <Button variant="primary" size="sm" iconOnly ariaLabel="Small">
        <Icon name="check" size={16} />
      </Button>
      <Button
        variant="primary"
        size="md"
        leftIcon={<Icon name="check" size={16} />}
      >
        Medium
      </Button>
    </ShowcaseTemplate>
  );
}
