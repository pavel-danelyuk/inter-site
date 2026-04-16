import { faqs } from "@/data/faqs";

export default function InquiryFAQ() {
  return (
    <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">FAQ</p>
      <div className="mt-5 space-y-5">
        {faqs.map((item) => (
          <div key={item.question}>
            <h3 className="text-sm font-semibold">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
