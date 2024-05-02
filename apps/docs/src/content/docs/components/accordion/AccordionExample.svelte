<script lang="ts">
import Accordion from "./Accordion.svelte";

let type: "single" | "multiple" = $state("single");

let value: string | null = $state(null);
let collapsible = $state(true);

let values: string[] = $state([]);

let disabled = $state(false);
let loop = $state(true);
</script>

<div class="m-4 items-center justify-center rounded-3xl border-2 border-[var(--sl-color-gray-5)]">
    <div
        class="flex items-center justify-center rounded-t-3xl bg-gradient-to-r from-orange-500 to-yellow-500 p-8 sm:p-16"
    >
        <div class="w-96 rounded-xl bg-[var(--sl-color-bg)] p-8">
            <Accordion
                type={type}
                bind:value={value}
                bind:values={values}
                collapsible={collapsible}
                disabled={disabled}
                loop={loop}
            />
        </div>
    </div>

    <div class="p-8">
        <h3 id="controls">Controls</h3>

        <button onclick={() => {type = type === "single" ? "multiple" : "single"}}>
            Toggle Type ({type})
        </button>

        {#if type === "single"}
            <h4>Single controls</h4>

            <p>Value: <code>{value === null ? "null" : `"${value}"`}</code></p>

            <button onclick={() => {collapsible = !collapsible}}>
                Toggle Collapsible ({collapsible})
            </button>
        {:else}
            <h4>Multiple controls</h4>

            <p>Values: <code>[{values.map((v) => `"${v}"`).join(", ")}]</code></p>
        {/if}

        <h4>Other controls</h4>

        <button onclick={() => {disabled = !disabled}}>
            Toggle Disabled ({disabled})
        </button>
        <button onclick={() => {loop = !loop}}>
            Toggle Loop ({loop})
        </button>
    </div>
</div>
