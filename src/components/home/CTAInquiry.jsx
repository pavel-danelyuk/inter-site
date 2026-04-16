import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";

export default function CTAInquiry() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(160deg,#fffaf6_0%,#efe0d2_100%)] p-10 sm:p-14">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Ready to begin</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Whether you need a focused consultation or a full design plan, the first step starts here.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Send an Inquiry</Button>
            <Button href="/services" variant="outline">
              Review Services
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
