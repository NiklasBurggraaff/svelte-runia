import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

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
                SiteTitle: "./src/components/SiteTitle.astro",
                Hero: "./src/components/Hero.astro",
                CallToAction: "./src/components/CallToAction.astro"
            },
            editLink: {
                baseUrl: "https://github.com/NiklasBurggraaff/svelte-runia/tree/main/apps/docs"
            }
        }),
        svelte(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
