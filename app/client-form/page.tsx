import { FaqSection } from "@/components/client-form/faq-section";
import { FormSection } from "@/components/client-form/form-section";
import { HowWeCanHelpSection } from "@/components/client-form/how-we-can-help-section";

export default function ClientFormPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden nh-hero-right-bg min-h-[100svh]  mx-auto">
        <FormSection />
      </section>
      <HowWeCanHelpSection />
      <FaqSection />
    </div>
  );
}
