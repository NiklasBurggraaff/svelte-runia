<script lang="ts">
    import InteractivePreview from "../_components/InteractivePreview.svelte";

    import Accordion from "./Accordion.svelte";

    let type: "single" | "multiple" = $state("single");

    let value: string | null = $state(null);
    let collapsible = $state(true);

    let values: string[] = $state([]);

    let disabled = $state(false);
    let loop = $state(true);
</script>

<InteractivePreview>
    {#snippet preview()}
        <Accordion {type} bind:value bind:values {collapsible} {disabled} {loop} />
    {/snippet}
    {#snippet controls()}
        {#if type === "single"}
            <div>Value: <code>{value === null ? "null" : `"${value}"`}</code></div>
        {:else}
            <div>Values: <code>[{values.map((v) => `"${v}"`).join(", ")}]</code></div>
        {/if}
        <div>
            <button
                onclick={() => {
                    type = type === "single" ? "multiple" : "single";
                }}
            >
                Toggle Type ({type})
            </button>
            <button
                disabled={type !== "single"}
                onclick={() => {
                    collapsible = !collapsible;
                }}
            >
                Toggle Collapsible ({collapsible})
            </button>
        </div>
        <div>
            <button
                onclick={() => {
                    disabled = !disabled;
                }}
            >
                Toggle Disabled ({disabled})
            </button>
            <button
                onclick={() => {
                    loop = !loop;
                }}
            >
                Toggle Loop ({loop})
            </button>
        </div>
    {/snippet}
</InteractivePreview>
