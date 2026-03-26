"""Normalize source dimensions to entity taxonomy used by Civic Ledger."""


ENTITY_MAP = {
    "Federal Housing Spending": "federal-housing-spending",
    "Housing Transfers": "housing-transfers",
    "Housing Operations": "housing-operations",
}


def normalize_name(name: str) -> str:
    return ENTITY_MAP.get(name, name.lower().replace(" ", "-"))


if __name__ == "__main__":
    for raw in ENTITY_MAP:
        print(raw, normalize_name(raw))
