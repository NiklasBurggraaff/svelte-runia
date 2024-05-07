<script lang="ts" context="module">
    let count = 10;
</script>

<script lang="ts">
    import { scale } from "svelte/transition";
    import { Radio } from "@niklasburggraaff/svelte-runia";

    let { value = $bindable(null), disabled = false, loop = true }: any = $props();

    const thisCount = count++;
</script>

<Radio.Group bind:value {disabled} {loop} aria-label="Select rune">
    <div class="flex items-center gap-4">
        <Radio.Button
            value="state"
            id={`state-${thisCount}`}
            aria-labelledby={`state-label-${thisCount}`}
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id={`state-label-${thisCount}`} for={`state-${thisCount}`} class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛋ</span> - "sun" (<code
                class="text-xs">$state</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="derived"
            id={`derived-${thisCount}`}
            aria-labelledby={`derived-label-${thisCount}`}
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id={`derived-label-${thisCount}`} for={`derived-${thisCount}`} class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛞ</span> - "day" (<code
                class="text-xs">$derived</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="effect"
            id={`effect-${thisCount}`}
            aria-labelledby={`effect-label-${thisCount}`}
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id={`effect-label-${thisCount}`} for={`effect-${thisCount}`} class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᚷ</span> - "gift" (<code
                class="text-xs">$effect</code
            >)
        </label>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="props"
            id={`props-${thisCount}`}
            aria-labelledby={`props-label-${thisCount}`}
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <label id={`props-label-${thisCount}`} for={`props-${thisCount}`} class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᚠ</span> - "cattle; wealth" (<code
                class="text-xs">$props</code
            >)
        </label>
    </div>
</Radio.Group>
