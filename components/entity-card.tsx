import Link from "next/link";
import { Entity } from "@/lib/types";

export function EntityCard({ entity }: { entity: Entity }) {
  return (
    <Link href={`/entity/${entity.slug}`} className="rounded-lg border bg-white p-4 hover:border-brand">
      <h3 className="font-semibold">{entity.name}</h3>
      <p className="text-sm text-muted">{entity.type}</p>
      <p className="mt-2 text-sm text-muted">{entity.description}</p>
    </Link>
  );
}
