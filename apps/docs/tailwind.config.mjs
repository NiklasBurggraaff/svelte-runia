import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: [starlightPlugin()],
    theme: {
        extend: {
            colors: {
                accent: {
                    200: colors.orange[200],
                    600: colors.orange[500],
                    900: colors.orange[900],
                    950: colors.orange[950]
                },
                gray: colors.stone
            },
            fontFamily: {
                sans: ['"Atkinson Hyperlegible"'],
                mono: ['"JetBrains Mono"'],
                runic: ['"Noto Sans Runic"']
            }
        }
    }
};
