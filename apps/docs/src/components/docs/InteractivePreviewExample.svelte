<script lang="ts">
    import InteractivePreview from "./InteractivePreview.svelte";

    let value = $state("World");
    let disabled = $state(false);
</script>

<InteractivePreview>
    {#snippet preview()}
        <div class="flex justify-center">
            <button
                class="rounded-xl border bg-transparent px-4 py-1"
                onclick={() => alert(`Hello ${value}`)}
                {disabled}
            >
                Say Hello
            </button>
        </div>
    {/snippet}
    {#snippet controls()}
        <div>
            <label>Value: <input bind:value class="w-full rounded-md border px-4 py-1" /></label>
        </div>
        <div>
            <button onclick={() => (disabled = !disabled)}>Toggle Disabled ({disabled})</button>
        </div>
    {/snippet}
</InteractivePreview>
