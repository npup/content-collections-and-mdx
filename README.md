# Reproduction of collections/mdx puzzlement

> Note: When switching between branches to test things,
> don't forget to `rm -rf node_modules` and reinstall
> (`npm i`) as needed to avoid version confusion.

## `master` branch, simple content management

It has the basic setup:

* Installation of "latest" (`v2.10.13`), using all the defaults.
* Applied `experimental.assets: true` in config
* A simple "pages" collection is created, which uses markdown files
* Pages files (`src/pages/*.astro`) import entries from the "pages" collection, renders to `<Content />` and displays it.


## `mdx` use mdx for content entries

The branch is still on `v.2.10.13`, but adds the following:

* An Astro component for testing purposes.
* `mdx` integration (`$ npx astro add mdx`)
* renaming of `src/content/pages/...` files from `*.md` to `*.mdx`
* Using the `<TestComponent />` in the content files


## `mdx_v3` upgrades Astro to `v3.0.0-beta.4`


Here, the `experimental.assets` setting was removed from astro config, since it is default from v3 (and not even valid anymore).  I noticed that the `/// reference` entries in `src/env.d.ts` were also changed in the process of upgrading, but I did not touch it myself.


Here, the error occurs:

    pages/home.mdx:2:8
    
    Expected ";" but found ":"
    ---
    editDate: 2023-08-23
           ^
    ---
    import TestComponent from "../../components/TestComponent.astro";

    ## Welcome

    The main page

    <TestComponent />
