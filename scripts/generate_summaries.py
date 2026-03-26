"""Generate constrained plain-language summaries from computed metrics."""


def build_summary(start_year: str, end_year: str, nominal_pct: float, cpi_pct: float, pop_pct: float) -> str:
    return (
        f"From {start_year} to {end_year}, nominal spending changed {nominal_pct:.1f}%. "
        f"CPI changed {cpi_pct:.1f}% and population changed {pop_pct:.1f}%. "
        "Generated from official data points shown below."
    )


if __name__ == "__main__":
    print(build_summary("FY2023", "FY2025", 23.1, 4.8, 3.3))
