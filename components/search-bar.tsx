export function SearchBar() {
  return (
    <div className="flex gap-2">
      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder="Search housing, IRCC, DND, consulting..."
        aria-label="Search entities"
      />
      <button className="rounded-md bg-brand px-4 py-2 text-white">Search</button>
    </div>
  );
}
