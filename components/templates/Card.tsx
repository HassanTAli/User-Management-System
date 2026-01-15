import React from "react";

/* ---------- Card Parts ---------- */

export const CardHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between mb-6">
    <h4 className="text-lg font-semibold">{title}</h4>
    <div className="w-6 h-6 rounded-full bg-primary-500" />
  </div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border border-slate-200 rounded-lg">{children}</div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-4">
    {children}
  </div>
);

/* ---------- Card Wrapper ---------- */

export const Card = ({
  title,
  content,
  footer,
}: {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <div className="border-2 border-slate-200 rounded-xl p-6 bg-white">
      {title && <CardHeader title={title} />}

      {content && <CardContent>{content}</CardContent>}

      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  );
};
