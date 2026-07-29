import Navbar from "../navbar";

export default function LangingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main  className="">
        {children}
        </main>
    </>
  );
}