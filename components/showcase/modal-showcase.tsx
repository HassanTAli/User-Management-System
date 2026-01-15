"use client";

import { useState } from "react";
import UserAddedSuccessModal from "../page/user-add-success-modal";
import Button from "../atoms/button";

export default function ModalShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Modal</h1>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>

      <UserAddedSuccessModal
        open={open}
        onClose={() => setOpen(false)}
        onViewUsers={() => console.log("Go to users")}
      />
    </div>
  );
}
