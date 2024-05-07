<script lang="ts">
    import { scale } from "svelte/transition";
    import { Radio } from "@niklasburggraaff/svelte-runia";

    const thisCount = 90;
</script>

<Radio.Group aria-label="Select rune">
    <div class="flex items-center gap-4">
        <Radio.Button
            value="state"
            id={`state-${thisCount}`}
            aria-label="state"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <p class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛋ</span> - "sun" (<code
                class="text-xs">$state</code
            >)
        </p>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="derived"
            id={`derived-${thisCount}`}
            aria-label="derived"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <p class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᛞ</span> - "day" (<code
                class="text-xs">$derived</code
            >)
        </p>
    </div>
    <div class="flex items-center gap-4">
        <Radio.Button
            value="effect"
            id={`effect-${thisCount}`}
            aria-label="effect"
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
            aria-label="props"
            class="h-4 w-4 rounded-full border bg-[var(--sl-color-bg)] p-1 hover:bg-[var(--sl-color-gray-5)] disabled:opacity-50"
        >
            {#snippet indicator()}
                <div transition:scale class="h-full w-full rounded-full bg-orange-500"></div>
            {/snippet}
        </Radio.Button>
        <p class="text-md">
            <span class="font-runic text-runic-gradient font-bold">ᚠ</span> - "cattle; wealth" (<code
                class="text-xs">$props</code
            >)
        </p>
    </div>
</Radio.Group>
