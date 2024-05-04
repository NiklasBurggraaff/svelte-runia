<script lang="ts">
    import InteractivePreview from "@/components/docs/InteractivePreview.svelte";
    import InteractiveToggle from "./InteractiveToggle.svelte";
    import { Toggle } from "@niklasburggraaff/svelte-runia";

    let pressed = $state(false);
    let disabled = $state(false);
</script>

<InteractivePreview>
    {#snippet preview()}
        <div class="flex justify-center">
            <InteractiveToggle bind:pressed {disabled} />
        </div>
    {/snippet}
    {#snippet controls()}
        <div>
            Pressed: {pressed}
        </div>
        <div>
            <Toggle bind:pressed aria-label="Toggle">Toggle</Toggle>
            <button
                onclick={() => {
                    disabled = !disabled;
                }}
            >
                Toggle Disabled ({disabled})
            </button>
        </div>
    {/snippet}
</InteractivePreview>
