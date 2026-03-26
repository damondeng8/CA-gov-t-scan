"""Fetch and stage quarterly population estimates for per-capita calculations."""


def run() -> dict:
    return {
        "source": "Statistics Canada",
        "series": "Population",
        "url": "https://www.statcan.gc.ca/en/subjects-start/population_and_demography",
        "status": "stubbed",
    }


if __name__ == "__main__":
    print(run())
