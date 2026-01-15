import { useEffect } from "react";

import Icon from "../atoms/icon";
import Button from "../atoms/button";

interface UserAddedSuccessModalProps {
  open: boolean;
  onClose: () => void;
  onViewUsers?: () => void;
}

export default function UserAddedSuccessModal({
  open,
  onClose,
  onViewUsers,
}: UserAddedSuccessModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg rounded-xl border border-slate-200 bg-white p-12 shadow-xl">
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-slate-500 hover:bg-slate-100"
          aria-label="Close"
        >
          <Icon name="x" className="h-5 w-5" />
        </Button>

        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Icon
              name="check-circle"
              className="h-8 w-8 text-green-600"
              aria-hidden="true"
            />
          </div>

          <h3 className="mb-3 text-2xl font-bold">User Added Successfully!</h3>
          <p className="mb-8 text-slate-600">
            The user has been added to the system. You can now view their
            profile or continue adding more users.
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              variant="secondary"
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50"
            >
              Close
            </Button>

            <Button
              variant="primary"
              type="button"
              onClick={onViewUsers}
              className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white hover:bg-primary-700"
            >
              View Users
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
