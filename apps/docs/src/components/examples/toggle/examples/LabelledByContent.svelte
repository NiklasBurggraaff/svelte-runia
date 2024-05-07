<script lang="ts">
    import { Toggle } from "@niklasburggraaff/svelte-runia";
</script>

<Toggle
    labelledByContent
    class="rounded-[9px] bg-[var(--sl-color-bg)] px-4 py-1 transition-all hover:bg-[var(--sl-color-gray-5)] data-[state=on]:bg-[var(--sl-color-gray-5)] data-[state=off]:text-[var(--sl-color-gray-3)]"
>
    Arm axe
</Toggle>
