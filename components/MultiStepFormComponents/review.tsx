import { useSelector } from "react-redux";

// Reusable review item component
interface ReviewItemProps {
  label: string;
  value: string | string[] | null | undefined;
  isLast?: boolean;
}

const ReviewItem = ({ label, value, isLast = false }: ReviewItemProps) => {
  // Handle array values (for interests)
  if (Array.isArray(value)) {
    return (
      <div
        className={`flex justify-between ${
          !isLast ? "border-b border-slate-200 pb-3" : ""
        }`}
      >
        <span className="text-slate-600">{label}:</span>
        <div className="text-right max-w-xs">
          <div className="flex flex-wrap gap-1 justify-end">
            {value.length > 0 ? (
              value.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="font-medium text-slate-400">Not provided</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Handle string values
  return (
    <div
      className={`flex justify-between ${
        !isLast ? "border-b border-slate-200 pb-3" : ""
      }`}
    >
      <span className="text-slate-600">{label}:</span>
      <span className="font-medium">
        {value || <span className="text-slate-400">Not provided</span>}
      </span>
    </div>
  );
};

export default function Review() {
  const formData = useSelector((s: any) => s.form);
  const { personal, preferences } = formData;

  const reviewItems = [
    { label: "Name", value: personal?.fullName },
    { label: "Email", value: personal?.email },
    { label: "Gender", value: personal?.gender },
    { label: "Country", value: personal?.country },
    { label: "Age", value: personal?.age },
    { label: "Category", value: preferences?.category },
    { label: "Interests", value: preferences?.interests },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Review &amp; Submit</h3>
      <div className="bg-slate-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">User Summary</h4>
        <div className="space-y-4">
          {reviewItems.map((item, index) => (
            <ReviewItem
              key={item.label}
              label={item.label}
              value={item.value}
              isLast={index === reviewItems.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
