import { Suspense } from "react";
import ErrorBoundary from "@/app/component/ErrorBoundary";
import LangingPageLayout from "@/feature/landing-page/component/layout/langing-page-layout";
import Home from "@/feature/landing-page/component/home";
import Stats from "@/feature/landing-page/component/stats/index";
import Partnerships from "@/feature/landing-page/component/partnerships";

export default async function Page() {
  return (
<LangingPageLayout>
<Home/>
<Stats/>
<Partnerships/>
</LangingPageLayout>
  );
}