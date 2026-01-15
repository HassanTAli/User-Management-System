import { InputMessage } from "../atoms/input-info";
import { TextInput } from "../atoms/text-input";

interface TextInputLabelErrorProps {
  error: boolean;
}

export const TextInputLabelError = ({ error }: TextInputLabelErrorProps) => {
  return (
    <div>
      <TextInput
        label="Username"
        error={error}
        placeholder="Enter your username"
      />
      <InputMessage message="This field is required." error={error} />
    </div>
  );
};
