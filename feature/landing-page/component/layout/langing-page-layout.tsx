import Navbar from "../Navbar";

export default function LangingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main  className="p-4">
        {children}
        </main>
    </>
  );
}