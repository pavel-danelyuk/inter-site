import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/layout/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import InquiryFAQ from "@/components/contact/InquiryFAQ";

export const metadata = {
  title: "Contact | Meliora Maison",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Inquiry"
          title="Tell us about your space."
          description="Share your project goals, timeline, and the service you are interested in. This starter form is ready to connect to email or a database later."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <InquiryFAQ />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
