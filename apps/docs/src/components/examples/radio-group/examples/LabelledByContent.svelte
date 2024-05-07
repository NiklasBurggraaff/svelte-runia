<script lang="ts">
    import { Radio } from "@niklasburggraaff/svelte-runia";
</script>

<Radio.Group aria-label="Select rune" class="flex flex-col gap-4">
    <Radio.Button
        value="state"
        id="state"
        labelledByContent
        class="group flex h-10 w-full items-center justify-between gap-4 rounded-xl border bg-transparent p-2 hover:bg-[var(--sl-color-gray-5)]  disabled:opacity-50 data-[state=checked]:bg-[var(--sl-color-gray-5)] data-[state=unchecked]:text-[var(--sl-color-gray-3)]"
    >
        <div class="h-6 w-6 rounded-full border-2 p-1.5">
            <div class="h-full w-full rounded-full group-data-[state=checked]:bg-orange-500"></div>
        </div>
        <div class="flex-grow text-left">
            Select
            <span class="font-runic text-runic-gradient font-bold">ᛋ</span> -
            <code>$state</code>
        </div>
    </Radio.Button>
    <Radio.Button
        value="derived"
        id="derived"
        labelledByContent
        class="group flex h-10 w-full items-center justify-between gap-4 rounded-xl border bg-transparent p-2 hover:bg-[var(--sl-color-gray-5)]  disabled:opacity-50 data-[state=checked]:bg-[var(--sl-color-gray-5)] data-[state=unchecked]:text-[var(--sl-color-gray-3)]"
    >
        <div class="h-6 w-6 rounded-full border-2 p-1.5">
            <div class="h-full w-full rounded-full group-data-[state=checked]:bg-orange-500"></div>
        </div>
        <div class="flex-grow text-left">
            Select
            <span class="font-runic text-runic-gradient font-bold">ᛞ</span> -
            <code>$derived</code>
        </div>
    </Radio.Button>
    <Radio.Button
        value="effect"
        id="effect"
        labelledByContent
        class="group flex h-10 w-full items-center justify-between gap-4 rounded-xl border bg-transparent p-2 hover:bg-[var(--sl-color-gray-5)]  disabled:opacity-50 data-[state=checked]:bg-[var(--sl-color-gray-5)] data-[state=unchecked]:text-[var(--sl-color-gray-3)]"
    >
        <div class="h-6 w-6 rounded-full border-2 p-1.5">
            <div class="h-full w-full rounded-full group-data-[state=checked]:bg-orange-500"></div>
        </div>
        <div class="flex-grow text-left">
            Select
            <span class="font-runic text-runic-gradient font-bold">ᚷ</span> -
            <code>$effect</code>
        </div>
    </Radio.Button>
    <Radio.Button
        value="props"
        id="props"
        labelledByContent
        class="group flex h-10 w-full items-center justify-between gap-4 rounded-xl border bg-transparent p-2 hover:bg-[var(--sl-color-gray-5)]  disabled:opacity-50 data-[state=checked]:bg-[var(--sl-color-gray-5)] data-[state=unchecked]:text-[var(--sl-color-gray-3)]"
    >
        <div class="h-6 w-6 rounded-full border-2 p-1.5">
            <div class="h-full w-full rounded-full group-data-[state=checked]:bg-orange-500"></div>
        </div>
        <div class="flex-grow text-left">
            Select
            <span class="font-runic text-runic-gradient font-bold">ᚠ</span> -
            <code>$props</code>
        </div>
    </Radio.Button>
</Radio.Group>
