export function SourceTable({ rows }: { rows: Array<{ title: string; publisher: string; url: string; updated: string }> }) {
  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">Sources</h2>
      <table className="mt-3 w-full text-sm">
        <thead>
          <tr className="text-left text-muted"><th>Dataset</th><th>Publisher</th><th>Updated</th></tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t">
              <td><a href={row.url} target="_blank" rel="noreferrer">{row.title}</a></td>
              <td>{row.publisher}</td>
              <td>{row.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
