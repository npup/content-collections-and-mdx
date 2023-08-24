# Reproduction of collections/mdx puzzlement

* Installation of "latest" (`v2.10.13`), using all the defaults.
* Applied `experimental.assets: true` in config
* A simple "pages" collection is created, which uses markdown files
* Pages files (`src/pages/*.astro`) import entries from the "pages" collection, renders to `<Content />` and displays it.
