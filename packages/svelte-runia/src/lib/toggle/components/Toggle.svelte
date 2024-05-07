<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { getToggleDataAttributes } from "../data-atts.js";
    import type { ARIALabelOrContent } from "$lib/label.js";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type Props = ARIALabelOrContent & {
        pressed?: boolean;
        disabled?: boolean;
        element?: HTMLButtonElement | undefined;
    } & OtherAttributes;
    let {
        pressed = $bindable(false),
        disabled = false,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        children,
        element = $bindable(),
        ...props
    }: Props = $props();

    let thisElement: HTMLButtonElement | undefined = $state(undefined);
    $effect(() => {
        element = thisElement;
    });

    function onclick() {
        pressed = !pressed;
    }

    let dataAttributes = $derived(getToggleDataAttributes(pressed, disabled));
</script>

<button
    bind:this={thisElement}
    {onclick}
    {...props}
    {disabled}
    aria-pressed={pressed}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    {...dataAttributes}
>
    {#if children}
        {@render children()}
    {/if}
</button>
