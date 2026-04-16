export default function Select({ label, error, options = [], className = "", ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <select
        className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${error ? "border-red-400" : "border-[var(--line)]"} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
