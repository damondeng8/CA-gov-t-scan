export function MethodologyAccordion() {
  return (
    <details className="rounded-lg border bg-white p-4">
      <summary className="cursor-pointer font-semibold">Methodology and caveats</summary>
      <p className="mt-3 text-sm text-muted">
        Real growth is calculated with CPI normalization and per-capita metrics use official Statistics Canada
        population estimates. Outcome proxies are related indicators, not proof of causal impact.
      </p>
    </details>
  );
}
