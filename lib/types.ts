export type EntityType = "department" | "program" | "category" | "subcategory";

export type Entity = {
  id: string;
  name: string;
  slug: string;
  type: EntityType;
  description: string;
  status: "active" | "archived";
};

export type MetricRow = {
  entityId: string;
  fiscalYear: string;
  metricType: "spending_nominal" | "spending_real" | "spending_per_capita";
  value: number;
};

export type StoryCardType = {
  id: string;
  slug: string;
  title: string;
  claim: string;
  bullets: string[];
  caveat: string;
};
