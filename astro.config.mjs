import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    experimental: { assets: true },
    server: {
        port: 3000,
    },
});
