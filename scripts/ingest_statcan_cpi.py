"""Fetch and stage Statistics Canada CPI series for normalization."""


def run() -> dict:
    return {
        "source": "Statistics Canada",
        "series": "CPI",
        "url": "https://www.statcan.gc.ca/en/subjects-start/prices_and_price_indexes/consumer_price_indexes",
        "status": "stubbed",
    }


if __name__ == "__main__":
    print(run())
