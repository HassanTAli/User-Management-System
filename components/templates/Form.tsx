export const FormHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between mb-6">
    <h4 className="text-lg font-semibold">{title}</h4>
    <div className="w-6 h-6 rounded-full bg-green-500" />
  </div>
);

export const FormContent = ({ children }: { children: React.ReactNode }) => (
  <form className="space-y-4 flex flex-col gap-2">{children}</form>
);

export const FormFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
    {children}
  </div>
);

export const Form = ({
  title,
  footer,
  content,
}: {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  content?: React.ReactNode;
}) => {
  return (
    <div className="border-2 border-slate-200 rounded-xl p-6 bg-white">
      {title && <FormHeader title={title} />}

      {content && <FormContent>{content}</FormContent>}

      {footer && <FormFooter>{footer}</FormFooter>}
    </div>
  );
};
