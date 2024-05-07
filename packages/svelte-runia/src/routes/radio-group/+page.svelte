<script lang="ts">
    import { scale } from "svelte/transition";

    import { Radio } from "$lib/index.js";
</script>

<Radio.Group aria-label="Rune">
    <div class="flex items-center gap-4">
        <Radio.Button
            value="state"
            id="state"
            aria-labelledby="state-label"
            class="h-6 w-6 rounded-full border bg-[var(--sl-color-bg)] p-1.5 disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="state-label" for="state" class="text-xl">
            <span class="font-runic text-runic-gradient font-bold">ᛋ</span> - sun (<code
                class="text-sm">$state</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="derived"
            id="derived"
            aria-labelledby="derived-label"
            class="h-6 w-6 rounded-full border bg-[var(--sl-color-bg)] p-1.5 disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="derived-label" for="derived" class="text-xl">
            <span class="font-runic text-runic-gradient font-bold">ᛞ</span> - day (<code
                class="text-sm">$derived</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="effect"
            id="effect"
            aria-labelledby="effect-label"
            class="h-6 w-6 rounded-full border bg-[var(--sl-color-bg)] p-1.5 disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="effect-label" for="effect" class="text-xl">
            <span class="font-runic text-runic-gradient font-bold">ᚷ</span> - gift (<code
                class="text-sm">$effect</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="props"
            id="props"
            aria-labelledby="props-label"
            class="h-6 w-6 rounded-full border bg-[var(--sl-color-bg)] p-1.5 disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="props-label" for="props" class="text-xl">
            <span class="font-runic text-runic-gradient font-bold">ᚠ</span> - cattle; wealth (<code
                class="text-sm">$props</code
            >)
        </label>
    </div>
</Radio.Group>
