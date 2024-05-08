<script lang="ts">
    import { scale } from "svelte/transition";
    import { Radio } from "@niklasburggraaff/svelte-runia";

    let { value = $bindable(null), disabled = false, loop = true }: any = $props();
</script>

<Radio.Group bind:value {disabled} {loop} aria-label="Select rune">
    <div class="flex items-center gap-4">
        <Radio.Button
            value="state"
            id="state-home-radio-group"
            aria-labelledby="state-label-home-radio-group"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="state-label-home-radio-group" for="state-home-radio-group" class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛋ</span> - "sun" (<code
                class="text-xs">$state</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="derived"
            id="derived-home-radio-group"
            aria-labelledby="derived-label-home-radio-group"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="derived-label-home-radio-group" for="derived-home-radio-group" class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛞ</span> - "day" (<code
                class="text-xs">$derived</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="effect"
            id="effect-home-radio-group"
            aria-labelledby="effect-label-home-radio-group"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="effect-label-home-radio-group" for="effect-home-radio-group" class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᚷ</span> - "gift" (<code
                class="text-xs">$effect</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="props"
            id="props-home-radio-group"
            aria-labelledby="props-label-home-radio-group"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id="props-label-home-radio-group" for="props-home-radio-group" class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᚠ</span> - "cattle; wealth" (<code
                class="text-xs">$props</code
            >)
        </label>
    </div>
</Radio.Group>
