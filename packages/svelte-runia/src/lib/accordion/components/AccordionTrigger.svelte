<script lang="ts">
    import {
        getAccordionTriggerDataAttributes,
        type AccordionItemContext,
        type AccordionRootContext
    } from "../utils.js";
    import { getContextKey } from "$lib/context.js";
    import { addValueParam } from "$lib/events.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        children: Snippet;
        element?: HTMLButtonElement | undefined;
    } & HTMLAttributes<HTMLButtonElement>;

    let { children, element = $bindable(undefined), ...props }: Props = $props();
    let { value, itemState } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { id, accordionState, triggerEvents } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let expanded = $derived(accordionState.value.includes(value));
    let disabled = $derived(accordionState.disabled || itemState.disabled);
    let ariaDisabled = $derived(disabled || (expanded && !accordionState.collapsible));
</script>

<button
    bind:this={element}
    id={`${id}-${value}-trigger`}
    aria-controls={`${id}-${value}-content`}
    aria-expanded={expanded}
    {disabled}
    aria-disabled={ariaDisabled}
    {...addValueParam(value, triggerEvents)}
    {...getAccordionTriggerDataAttributes(value)}
    {...props}
>
    {@render children()}
    ({expanded ? "Expanded" : "Collapsed"})
</button>
