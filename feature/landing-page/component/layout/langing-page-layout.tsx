import Navbar from "@/feature/landing-page/component/navbar/index";

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