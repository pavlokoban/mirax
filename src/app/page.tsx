// app/page.tsx
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import ServicesSection from "@/components/sections/ServicesSection";
import WhatIsAIOptimized from "@/components/sections/WhatIsAIOptimized";
import WhoNeedsAIOptimized from "@/components/sections/WhoNeedsAIOptimized";
import HowWeWorkAndWhyUs from "@/components/sections/HowWeWorkAndWhyUs";
// import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import Divider from "@/components/sections/Divider";
import CTASection from "@/components/sections/CTASection";
import ContactFormRus from "@/components/contact-form/ContactFormRus";

export default function HomePage() {
  return (
    // <div className="space-y-24 pb-16">
          <div className="pb-16">
      <Hero />
      <Stack />
      <ServicesSection />
      <WhatIsAIOptimized />
      {/* <WhoNeedsAIOptimized /> */}
      {/* <Portfolio /> */}
      <FAQ />
      <HowWeWorkAndWhyUs />
      <Divider />
      {/* <CTASection /> */}
      <ContactFormRus />
    </div>
  );
}
