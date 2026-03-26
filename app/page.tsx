import Link from "next/link";
import { DateUpdatedBadge } from "@/components/date-updated-badge";
import { SearchBar } from "@/components/search-bar";
import { StoryCard } from "@/components/story-card";
import { getFeaturedEntities, getStoryCard } from "@/lib/queries";

export default function HomePage() {
  const featured = getFeaturedEntities();
  const cards = [getStoryCard("housing-real-growth"), getStoryCard("housing-outcome-gap")];

  return (
    <div className="space-y-10">
      <section className="rounded-xl border bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Civic Ledger</p>
        <h1 className="mt-2 text-4xl font-bold">See where Canadian public money goes.</h1>
        <p className="mt-4 max-w-3xl text-muted">
          An evidence-first, source-linked spending explorer focused on federal housing spending.
        </p>
        <div className="mt-6"><SearchBar /></div>
        <div className="mt-4"><DateUpdatedBadge date="2026-03-25" /></div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Featured entities</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((entity) => (
            <Link key={entity.id} href={`/entity/${entity.slug}`} className="rounded-lg border bg-white p-4 hover:border-brand">
              <p className="font-semibold">{entity.name}</p>
              <p className="text-sm text-muted">{entity.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Story cards</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cards.map((card) => <StoryCard key={card.id} card={card} />)}
        </div>
      </section>
    </div>
  );
}
