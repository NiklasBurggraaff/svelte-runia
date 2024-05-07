<script lang="ts">
    import InteractivePreview from "@/components/docs/InteractivePreview.svelte";
    import InteractiveRadioGroup from "./InteractiveRadioGroup.svelte";

    let value: string | null = $state(null);

    let disabled = $state(false);
    let loop = $state(true);
</script>

<InteractivePreview>
    {#snippet preview()}
        <InteractiveRadioGroup bind:value {disabled} {loop} />
    {/snippet}
    {#snippet controls()}
        <label>
            Value:
            <input bind:value class="w-full rounded-md border px-4 py-1" />
        </label>
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
