import { EntityCard } from "@/components/entity-card";
import { SearchBar } from "@/components/search-bar";
import { searchEntities } from "@/lib/queries";

export default function ExplorePage() {
  const entities = searchEntities("", { sort: "largest_spend" });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Explore</h1>
      <SearchBar />
      <div className="grid gap-4 md:grid-cols-2">
        {entities.map((entity) => <EntityCard key={entity.id} entity={entity} />)}
      </div>
    </div>
  );
}
