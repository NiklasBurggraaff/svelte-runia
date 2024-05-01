import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

const penumbraColors = {
    base: {
        100: "#FFFDFB",
        200: "#FFF7ED",
        300: "#F2E6D4",
        400: "#CECECE",
        500: "#9E9E9E",
        600: "#636363",
        700: "#3E4044",
        800: "#24272B",
        900: "#181B1F"
    },
    red: "#DF7F78",
    orange: "#D68B47",
    yellow: "#9CA748",
    green: "#50B584",
    cyan: "#00B3C2",
    blue: {
        200: "#c6def7",
        600: "#61a3e6",
        900: "#2a447e",
        950: "#1e2b4d"
    },
    purple: "#A48FE1",
    magenta: "#D080B6"
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: [starlightPlugin()],
    theme: {
        extend: {
            colors: {
                accent: colors.orange,
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
