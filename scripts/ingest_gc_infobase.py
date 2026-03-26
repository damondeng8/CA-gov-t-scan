"""Ingest GC InfoBase spending table for housing-focused v1.

This script is intentionally minimal for MVP scaffolding.
"""

from dataclasses import dataclass


@dataclass
class ImportRecord:
    source: str
    dataset_url: str
    status: str


def run() -> ImportRecord:
    return ImportRecord(
        source="GC InfoBase",
        dataset_url="https://open.canada.ca/data/en/dataset/a35cf382-690c-4221-a971-cf0fd189a46f",
        status="stubbed",
    )


if __name__ == "__main__":
    print(run())
