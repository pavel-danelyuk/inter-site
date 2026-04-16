import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export const metadata = {
  title: "Thank You | Meliora Maison",
};

export default function ThankYouPage() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-10 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Inquiry sent</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Thank you for reaching out.</h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Your message has been received. In a real production version, this page would follow a successful email or database submission.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
