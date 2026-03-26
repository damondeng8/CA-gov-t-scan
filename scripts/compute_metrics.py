"""Compute nominal, real, and per-capita metrics from normalized facts."""


def nominal_growth(current: float, prior: float) -> float:
    return 0.0 if prior == 0 else current / prior - 1


def per_capita(spending: float, population: float) -> float:
    return 0.0 if population == 0 else spending / population


if __name__ == "__main__":
    print({"nominal_growth": nominal_growth(120, 100), "per_capita": per_capita(1000, 50)})
