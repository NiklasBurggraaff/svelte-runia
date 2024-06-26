<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { getContextKey } from "$lib/context.js";
    import { addValueParam } from "$lib/events.js";
    import type { AccordionItemContext, AccordionRootContext } from "../context.js";
    import { getAccordionTriggerDataAttributes } from "../data-atts.js";

    type Props = {
        children: Snippet;
        element?: HTMLButtonElement | undefined;
    } & HTMLButtonAttributes;

    let { children, element = $bindable(), ...props }: Props = $props();

    let thisElement: HTMLButtonElement | undefined = $state(undefined);
    $effect(() => {
        element = thisElement;
    });

    let { value, itemState } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { accordionId, accordionState, triggerEvents } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let expanded = $derived(accordionState.value.includes(value));
    let disabled = $derived(accordionState.disabled || itemState.disabled);
    // If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header button element has aria-disabled set to true.
    let ariaDisabled = $derived(disabled || (expanded && !accordionState.collapsible));

    let id = $derived(`${accordionId}-${value}-trigger`);
    let contentId = $derived(`${accordionId}-${value}-content`);
    let events = $derived(addValueParam(value, triggerEvents));
    let dataAttributes = $derived(
        getAccordionTriggerDataAttributes(value, disabled, expanded, accordionState.orientation)
    );
</script>

<button
    bind:this={thisElement}
    {...props}
    {id}
    {...events}
    {disabled}
    aria-disabled={ariaDisabled}
    aria-controls={contentId}
    aria-expanded={expanded}
    {...dataAttributes}
>
    {@render children()}
</button>
