<script lang="ts">
    import { Toggle } from "@niklasburggraaff/svelte-runia";
</script>

{#snippet axe()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-axe"
    >
        <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
        <path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
    </svg>
{/snippet}

<p id="axe-label">Arm axe</p>

<Toggle
    aria-labelledby="axe-label"
    class="data-[state=on]:text-text-[var(--sl-color-white] inline-flex size-10 items-center justify-center rounded-[9px] bg-[var(--sl-color-bg)] transition-all hover:bg-[var(--sl-color-gray-5)] data-[state=on]:bg-[var(--sl-color-gray-5)] data-[state=off]:text-[var(--sl-color-gray-3)]"
>
    {@render axe()}
</Toggle>
