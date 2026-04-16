export default function Textarea({ label, error, className = "", ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <textarea
        className={`min-h-36 w-full rounded-2xl border px-4 py-3 outline-none transition ${error ? "border-red-400" : "border-[var(--line)]"} ${className}`}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
