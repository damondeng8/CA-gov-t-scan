create table if not exists entities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  type text not null check (type in ('department', 'program', 'category', 'subcategory')),
  parent_entity_id uuid references entities(id),
  description text,
  status text not null default 'active'
);

create table if not exists sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  publisher text not null,
  dataset_name text not null,
  dataset_url text not null,
  publication_date date,
  retrieved_at timestamptz not null,
  source_type text not null,
  method_notes text
);

create table if not exists metrics (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references entities(id),
  fiscal_year text not null,
  metric_type text not null,
  metric_value numeric not null,
  metric_unit text not null,
  source_id uuid not null references sources(id),
  notes text
);

create table if not exists outcome_series (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references entities(id),
  year text not null,
  outcome_name text not null,
  outcome_value numeric not null,
  unit text,
  source_id uuid not null references sources(id),
  caveat text
);

create table if not exists ai_summaries (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references entities(id),
  fiscal_year text not null,
  summary_text text not null,
  generated_at timestamptz not null,
  input_snapshot_hash text not null,
  model_name text not null
);

create table if not exists story_cards (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  body text not null,
  chart_config_json jsonb not null,
  status text not null default 'draft',
  published_at timestamptz
);

create table if not exists raw_imports (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references sources(id),
  file_path text not null,
  ingested_at timestamptz not null,
  checksum text not null,
  status text not null
);

create table if not exists normalized_facts (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references entities(id),
  year text not null,
  fact_name text not null,
  fact_value numeric not null,
  unit text,
  source_id uuid not null references sources(id),
  confidence numeric not null default 1,
  transform_version text not null
);
