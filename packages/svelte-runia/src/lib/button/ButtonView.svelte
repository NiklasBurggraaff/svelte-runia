<script lang="ts">
    import type { ComponentProps } from "svelte";
    import Button from "./Button.svelte";

    let {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        ...props
    }: ComponentProps<Button> = $props();
</script>

{#if ariaLabel}
    <Button
        aria-label={ariaLabel}
        onclick={() => {
            window.alert("Clicked " + ariaLabel);
        }}
        {...props}
    ></Button>
{:else if ariaLabelledby}
    <Button
        aria-labelledby={ariaLabelledby}
        onclick={() => {
            window.alert("Clicked " + ariaLabelledby);
        }}
        {...props}
    ></Button>
{/if}
