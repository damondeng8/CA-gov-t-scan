import Link from "next/link";
import { StoryCardType } from "@/lib/types";

export function StoryCard({ card, expanded = false }: { card: StoryCardType; expanded?: boolean }) {
  return (
    <article className="rounded-lg border bg-white p-4">
      <h3 className="text-lg font-semibold">{card.title}</h3>
      <p className="mt-2 text-sm">{card.claim}</p>
      <ul className="mt-3 list-disc pl-5 text-sm text-muted">
        {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <p className="mt-3 text-xs text-muted">Caveat: {card.caveat}</p>
      {!expanded && <Link href={`/story/${card.slug}`} className="mt-3 inline-block text-sm">Open card</Link>}
    </article>
  );
}
