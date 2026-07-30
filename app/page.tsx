import { Suspense } from "react";
import ErrorBoundary from "@/app/component/ErrorBoundary";
import LangingPageLayout from "@/feature/landing-page/component/layout/langing-page-layout";
import Home from "@/feature/landing-page/component/home";
import Stats from "@/feature/landing-page/component/temp-stats/index";
import Partnerships from "@/feature/landing-page/component/partnerships";
 import AccredianEdge from "@/feature/landing-page/component/accredian-edge";
import CatFramework from "@/feature/landing-page/component/temp-cat";
import HowWeDeliverResults from "@/feature/landing-page/component/how-it-works";
import Faqs from "@/feature/landing-page/component/faqs";
import Testimonials from "@/feature/landing-page/component/testimonials";
import EnquireCta from "@/feature/landing-page/component/cta";
import Footer from "@/feature/landing-page/component/footer";

export default async function Page() {
  return (
<LangingPageLayout>
<Home/>
<Stats/>
<Partnerships/>
<AccredianEdge/>
<CatFramework/>
<HowWeDeliverResults/>
<Faqs/>
<Testimonials/>
<EnquireCta/>
<Footer/>
</LangingPageLayout>
  );
}