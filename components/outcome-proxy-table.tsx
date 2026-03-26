export function OutcomeProxyTable({ rows }: { rows: Array<{ name: string; year: string; value: string; caveat: string }> }) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">Outcome proxies</h2>
      <p className="mb-3 mt-1 text-xs text-muted">Proxy indicator, not causal proof.</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-muted"><th>Name</th><th>Year</th><th>Value</th><th>Caveat</th></tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t"><td>{row.name}</td><td>{row.year}</td><td>{row.value}</td><td>{row.caveat}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
