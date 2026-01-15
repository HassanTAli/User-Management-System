import { TextInputLabelError } from "../molecules/text-input-label-error";

const InputLabelErrorShowcase = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Input Field with Label & Error</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
        <TextInputLabelError error={false} />
        <TextInputLabelError error={true} />
      </div>
    </>
  );
};

export default InputLabelErrorShowcase;
