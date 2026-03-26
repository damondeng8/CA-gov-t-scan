export function SummaryBox({ text }: { text: string }) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">AI summary</h2>
      <p className="mt-2 text-sm">{text}</p>
      <p className="mt-2 text-xs text-muted">Generated from official data points shown below.</p>
    </section>
  );
}
