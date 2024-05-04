<script lang="ts">
    import InteractivePreview from "@/components/docs/InteractivePreview.svelte";
    import InteractiveAccordion from "./InteractiveAccordion.svelte";

    let type: "single" | "multiple" = $state("single");

    let value: string | null = $state(null);
    let collapsible = $state(false);

    let disabled = $state(false);
    let loop = $state(true);

    let values: string = $state("");
    let valuesInput: string = $state("");
    $effect(() => {
        valuesInput = values;
    });

    function updateValues() {
        values = valuesInput;
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            updateValues();
        }
    }
</script>

<InteractivePreview>
    {#snippet preview()}
        <InteractiveAccordion
            {type}
            bind:value
            bind:valuesInput={values}
            {collapsible}
            {disabled}
            {loop}
        />
    {/snippet}
    {#snippet controls()}
        {#if type === "single"}
            <label>
                Value:
                <input bind:value class="w-full rounded-md border px-4 py-1" />
            </label>
        {:else}
            <label>
                Values:
                <input
                    bind:value={valuesInput}
                    onfocusout={updateValues}
                    {onkeydown}
                    class="w-full rounded-md border px-4 py-1"
                />
            </label>
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
