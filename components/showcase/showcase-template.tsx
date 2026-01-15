interface showcaseTemplateProps extends React.PropsWithChildren {
  title?: string;
}

export default function ShowcaseTemplate({
  title,
  children,
}: showcaseTemplateProps) {
  return (
    <>
      <h1 className="text-3xl font-bold">{title || ""}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto py-12 px-4 mb-12 rounded-md border border-primary-300 bg-primary-50 p-4">
        {children}
      </div>
    </>
  );
}
