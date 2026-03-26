export function buildSummaryPrompt(input: {
  startYear: string;
  endYear: string;
  nominalGrowth: number;
  cpiGrowth: number;
  populationGrowth: number;
  mainDriver: string;
  outcomeStatus: "improved" | "mixed" | "flat" | "unavailable";
}): string {
  return [
    "You are a fiscal data summarizer.",
    "Use only the structured values provided.",
    "Do not compute new metrics.",
    "Do not make causal claims.",
    `From ${input.startYear} to ${input.endYear}, nominal spending growth was ${(input.nominalGrowth * 100).toFixed(1)}%.`,
    `CPI growth was ${(input.cpiGrowth * 100).toFixed(1)}% and population growth was ${(input.populationGrowth * 100).toFixed(1)}%.`,
    `Main spending driver: ${input.mainDriver}.`,
    `Outcome proxy status: ${input.outcomeStatus}.`,
    "Mention if outcome proxies are mixed or unavailable.",
    "Reference that these are official source-linked data points."
  ].join(" ");
}
