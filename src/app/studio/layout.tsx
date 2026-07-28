export const metadata = {
  title: "RISE360 CMS Studio",
  description: "Sanity Content Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-hidden">
      {children}
    </div>
  );
}
