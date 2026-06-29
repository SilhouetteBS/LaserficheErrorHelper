# Data Quality Roadmap

## Scenario Modeling Priorities

The current quality report lists 100 repeated-code clusters that still need scenario review. Start with:

1. `9013`
2. `0x80040310`
3. `10061`
4. `0x80004005`
5. `0x80131040`
6. `6000`
7. `LFF2106-InvalidDataSent`

Each scenario should include symptoms, likely causes, fixes or next steps, version context, and source URLs.

## Thin Product Coverage

AI Service and Webtools Agent should receive the next discovery passes when new source material is available.

## Needs-Review Baseline

Most `needs-review` entries are official-documentation baseline codes without attached public Answers fixes. They should stay visible for discovery, but fixes should not be inferred without source evidence.

## Product-Level Catalog Split

The app now lazy-loads catalog chunks after the shell mounts. The next performance improvement is true product-level data splitting described in `docs/product-catalog-splitting.md`.
