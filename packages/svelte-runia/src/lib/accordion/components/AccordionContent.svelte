<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { getContextKey } from "$lib/context.js";
    import type { AccordionItemContext, AccordionRootContext } from "../context.js";
    import { getAccordionItemDataAttributes } from "../data-atts.js";

    type Props = {
        children: Snippet;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    let { children, element = $bindable(), ...props }: Props = $props();

    let thisElement: HTMLDivElement | undefined = $state(undefined);
    $effect(() => {
        element = thisElement;
    });

    let { value, itemState } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { accordionId, accordionState } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let expanded = $derived(accordionState.value.includes(value));
    let disabled = $derived(accordionState.disabled || itemState.disabled);

    let id = $derived(`${accordionId}-${value}-content`);
    let dataAttributes = $derived(
        getAccordionItemDataAttributes(expanded, disabled, accordionState.orientation)
    );
</script>

<div bind:this={thisElement} {...props} {id} {...dataAttributes}>
    {#if expanded}
        {@render children()}
    {/if}
</div>
