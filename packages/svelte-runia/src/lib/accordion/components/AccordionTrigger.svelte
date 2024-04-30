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
    } & HTMLAttributes<HTMLButtonElement>;

    let { children, ...props }: Props = $props();
    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { id, accordionState, triggerEvents } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let expanded = $derived(accordionState.value.includes(value));

    let events = addValueParam(value, triggerEvents);
    console.log(events);
</script>

<button
    {...events}
    aria-controls={`${id}-${value}-content`}
    aria-expanded={expanded}
    disabled={accordionState.disabled}
    {...getAccordionTriggerDataAttributes(value)}
    {...props}
>
    {@render children()}
    ({expanded ? "Expanded" : "Collapsed"})
</button>
