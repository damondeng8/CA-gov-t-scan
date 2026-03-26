export function nominalGrowth(current: number, prior: number): number {
  if (prior === 0) return 0;
  return current / prior - 1;
}

export function realGrowth(current: number, prior: number, cpiCurrent: number, cpiPrior: number): number {
  if (prior === 0 || cpiPrior === 0) return 0;
  const adjustedPrior = prior * (cpiCurrent / cpiPrior);
  return current / adjustedPrior - 1;
}

export function perCapitaSpending(spending: number, population: number): number {
  if (population === 0) return 0;
  return spending / population;
}

export function cagr(start: number, end: number, years: number): number {
  if (start <= 0 || years <= 0) return 0;
  return Math.pow(end / start, 1 / years) - 1;
}
