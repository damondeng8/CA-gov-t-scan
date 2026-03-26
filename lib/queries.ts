import { nominalGrowth, perCapitaSpending, realGrowth } from "@/lib/calculations";
import { sources } from "@/lib/sources";
import { Entity, MetricRow, StoryCardType } from "@/lib/types";

const entities: Entity[] = [
  {
    id: "1",
    name: "Federal Housing Spending",
    slug: "federal-housing-spending",
    type: "category",
    description: "Federal housing programs and transfers in nominal CAD.",
    status: "active"
  },
  {
    id: "2",
    name: "Housing Transfers",
    slug: "housing-transfers",
    type: "subcategory",
    description: "Housing grants and contribution programs.",
    status: "active"
  },
  {
    id: "3",
    name: "Housing Operations",
    slug: "housing-operations",
    type: "subcategory",
    description: "Operating and administration expenses for housing delivery.",
    status: "active"
  }
];

const metrics: MetricRow[] = [
  { entityId: "1", fiscalYear: "FY2023", metricType: "spending_nominal", value: 7_800_000_000 },
  { entityId: "1", fiscalYear: "FY2024", metricType: "spending_nominal", value: 8_500_000_000 },
  { entityId: "1", fiscalYear: "FY2025", metricType: "spending_nominal", value: 9_600_000_000 },
  { entityId: "2", fiscalYear: "FY2023", metricType: "spending_nominal", value: 4_900_000_000 },
  { entityId: "2", fiscalYear: "FY2024", metricType: "spending_nominal", value: 5_400_000_000 },
  { entityId: "2", fiscalYear: "FY2025", metricType: "spending_nominal", value: 6_500_000_000 },
  { entityId: "3", fiscalYear: "FY2023", metricType: "spending_nominal", value: 2_900_000_000 },
  { entityId: "3", fiscalYear: "FY2024", metricType: "spending_nominal", value: 3_100_000_000 },
  { entityId: "3", fiscalYear: "FY2025", metricType: "spending_nominal", value: 3_100_000_000 }
];

const storyCards: StoryCardType[] = [
  {
    id: "sc1",
    slug: "housing-real-growth",
    title: "Housing spend rose faster than inflation",
    claim: "Federal housing spending outpaced CPI and population growth over 3 years.",
    bullets: ["Nominal spending rose ~23% from FY2023 to FY2025.", "Real per-capita growth remained positive."],
    caveat: "Outcome proxies show mixed movement."
  },
  {
    id: "sc2",
    slug: "housing-outcome-gap",
    title: "Spending increased faster than completions",
    claim: "Spending momentum exceeded selected housing output indicators.",
    bullets: ["Transfers account for most incremental growth.", "Completions improved more slowly than spending."],
    caveat: "Proxy indicators are not causal proof."
  }
];

export function getFeaturedEntities(): Entity[] {
  return entities.slice(0, 3);
}

export function searchEntities(query: string, _filters: Record<string, string>): Entity[] {
  if (!query) return entities;
  const lowered = query.toLowerCase();
  return entities.filter((entity) => entity.name.toLowerCase().includes(lowered) || entity.slug.includes(lowered));
}

export function getEntityOverview(slug: string) {
  const entity = entities.find((row) => row.slug === slug);
  if (!entity) return null;

  const rows = metrics.filter((row) => row.entityId === entity.id && row.metricType === "spending_nominal");
  const sorted = rows.sort((a, b) => a.fiscalYear.localeCompare(b.fiscalYear));
  const current = sorted[sorted.length - 1]?.value ?? 0;
  const previous = sorted[sorted.length - 2]?.value ?? 0;
  const earliest = sorted[0]?.value ?? 0;

  const cpi = { FY2023: 147.2, FY2024: 151.1, FY2025: 154.4 };
  const pop = { FY2023: 39_500_000, FY2024: 40_100_000, FY2025: 40_800_000 };

  return {
    entity,
    currentSpending: current,
    oneYearNominalChange: nominalGrowth(current, previous),
    threeYearRealChange: realGrowth(current, earliest, cpi.FY2025, cpi.FY2023),
    threeYearPerCapitaChange: nominalGrowth(perCapitaSpending(current, pop.FY2025), perCapitaSpending(earliest, pop.FY2023)),
    breakdown: [
      { name: "Transfers", value: 6_500 },
      { name: "Operations", value: 3_100 }
    ],
    summary:
      "From FY2023 to FY2025, spending rose faster than CPI and population. Growth was concentrated in transfers. Selected outcome proxies were mixed.",
  };
}

export function getEntityTimeSeries(slug: string, metricType: MetricRow["metricType"]) {
  const entity = entities.find((row) => row.slug === slug);
  if (!entity) return [];

  return metrics
    .filter((row) => row.entityId === entity.id && row.metricType === metricType)
    .sort((a, b) => a.fiscalYear.localeCompare(b.fiscalYear))
    .map((row) => ({ fiscalYear: row.fiscalYear, value: row.value / 1_000_000_000 }));
}

export function getEntityBreakdown(_slug: string, _fiscalYear: string) {
  return [
    { name: "Transfers", value: 6500 },
    { name: "Operations", value: 3100 }
  ];
}

export function getEntityOutcomeProxies(_slug: string) {
  return [
    { name: "Housing starts", year: "2025", value: "242,000", caveat: "National indicator, not federal-only output." },
    { name: "Shelter CPI", year: "2025", value: "+4.9%", caveat: "Price pressure proxy only." }
  ];
}

export function getEntitySources(_slug: string) {
  return sources.map((source) => ({
    title: source.title,
    publisher: source.publisher,
    url: source.datasetUrl,
    updated: source.retrievedAt
  }));
}

export function compareEntities(slugA: string, slugB: string, metricType: MetricRow["metricType"]) {
  const left = getEntityTimeSeries(slugA, metricType);
  const right = getEntityTimeSeries(slugB, metricType);
  return left.map((row, index) => ({
    fiscalYear: row.fiscalYear,
    left: row.value,
    right: right[index]?.value ?? 0
  }));
}

export function getStoryCard(slug: string) {
  return storyCards.find((card) => card.slug === slug) ?? storyCards[0];
}
