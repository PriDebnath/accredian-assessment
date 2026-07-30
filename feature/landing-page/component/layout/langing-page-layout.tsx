import Navbar from "@/feature/landing-page/component/temp-navbar/index";

export default function LangingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="">
        {children}
      </main>
    </>
  );
}