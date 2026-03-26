import { notFound } from "next/navigation";
import { BreakdownChart } from "@/components/breakdown-chart";
import { MetricChip } from "@/components/metric-chip";
import { MethodologyAccordion } from "@/components/methodology-accordion";
import { OutcomeProxyTable } from "@/components/outcome-proxy-table";
import { SourceTable } from "@/components/source-table";
import { SummaryBox } from "@/components/summary-box";
import { TrendLineChart } from "@/components/trend-line-chart";
import { formatCurrency, formatPercent } from "@/lib/formatters";
import { getEntityOverview, getEntityOutcomeProxies, getEntitySources, getEntityTimeSeries } from "@/lib/queries";

export default async function EntityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const overview = getEntityOverview(slug);
  if (!overview) notFound();

  const series = getEntityTimeSeries(slug, "spending_nominal");
  const outcomes = getEntityOutcomeProxies(slug);
  const sources = getEntitySources(slug);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{overview.entity.name}</h1>
        <p className="text-muted">{overview.entity.description}</p>
      </header>

      <section className="grid gap-3 md:grid-cols-4">
        <MetricChip label="Current spending" value={formatCurrency(overview.currentSpending)} />
        <MetricChip label="1Y nominal change" value={formatPercent(overview.oneYearNominalChange)} />
        <MetricChip label="3Y real change" value={formatPercent(overview.threeYearRealChange)} />
        <MetricChip label="3Y per-capita change" value={formatPercent(overview.threeYearPerCapitaChange)} />
      </section>

      <TrendLineChart series={series} title="Spending trend" />
      <BreakdownChart data={overview.breakdown} />
      <SummaryBox text={overview.summary} />
      <OutcomeProxyTable rows={outcomes} />
      <MethodologyAccordion />
      <SourceTable rows={sources} />
    </div>
  );
}
