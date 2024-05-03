import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

import * as path from "path";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Svelte Runia",
            customCss: ["./src/tailwind.css", "@fontsource/noto-sans-runic"],
            social: {
                github: "https://github.com/NiklasBurggraaff/svelte-runia"
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "Introduction",
                            link: "/guides/introduction/"
                        },
                        {
                            label: "Get Started",
                            link: "/guides/get-started/"
                        }
                    ]
                },
                {
                    label: "Reference",
                    autogenerate: {
                        directory: "reference"
                    }
                },
                {
                    label: "Components",
                    autogenerate: {
                        directory: "components"
                    }
                }
            ],
            components: {
                SiteTitle: "./src/components/override/SiteTitle.astro",
                Hero: "./src/components/override/Hero.astro",
                CallToAction: "./src/components/override/CallToAction.astro"
            },
            editLink: {
                baseUrl: "https://github.com/NiklasBurggraaff/svelte-runia/tree/main/apps/docs"
            }
        }),
        svelte(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    vite: {
        resolve: {
            alias: {
                "@niklasburggraaff/svelte-runia": path.resolve(
                    "../../packages/svelte-runia/src/lib/index.js"
                ),
                $lib: path.resolve("../../packages/svelte-runia/src/lib"),
                "@": path.resolve("./src")
            }
        }
    }
});
