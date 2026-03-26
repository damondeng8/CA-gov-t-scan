export function DateUpdatedBadge({ date }: { date: string }) {
  return <span className="rounded-full border px-3 py-1 text-xs text-muted">Last updated: {date}</span>;
}
