import Link from "next/link";

export function LayoutHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold">Civic Ledger</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/explore">Explore</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/methodology">Methodology</Link>
        </nav>
      </div>
    </header>
  );
}
