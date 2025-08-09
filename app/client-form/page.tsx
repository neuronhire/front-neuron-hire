import { FaqSection } from "@/components/client-form/faq-section";
import { FormSection } from "@/components/client-form/form-section";
import { HowWeCanHelpSection } from "@/components/client-form/how-we-can-help-section";

export default function ClientFormPage() {
  return (
    <div className="min-h-screen">
      <FormSection />
      <HowWeCanHelpSection />
      <FaqSection />
    </div>
  );
}
