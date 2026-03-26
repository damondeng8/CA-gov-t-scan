import { ComparisonChart } from "@/components/comparison-chart";
import { compareEntities } from "@/lib/queries";

export default function ComparePage() {
  const comparison = compareEntities("federal-housing-spending", "housing-transfers", "spending_nominal");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Compare</h1>
      <p className="text-muted">Nominal, real, and per-capita comparisons for selected entities.</p>
      <ComparisonChart comparison={comparison} />
      <section className="rounded-lg border bg-white p-4">
        <h2 className="font-semibold">What changed</h2>
        <p className="mt-2 text-sm text-muted">Housing transfers accelerated after FY2023 and now contribute the majority of growth.</p>
      </section>
    </div>
  );
}
