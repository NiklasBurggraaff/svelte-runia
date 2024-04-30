<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "../utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        region?: boolean;
        children: Snippet;
        element?: HTMLElement | undefined;
    } & HTMLAttributes<HTMLElement>;

    let { region = false, children, element = $bindable(undefined), ...props }: Props = $props();

    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { id, accordionState: state } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let expanded = $derived(state.value.includes(value));
</script>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

On region: (https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- Avoid using the region role in circumstances that create landmark region proliferation, e.g., in an accordion that contains more than approximately 6 panels that can be expanded at the same time.
- Role region is especially helpful to the perception of structure by screen reader users when panels contain heading elements or a nested accordion.
-->

<!-- TODO: Handle out transition -->
{#if region}
    <section
        bind:this={element}
        id={`${id}-${value}-content`}
        aria-labelledby={`${id}-${value}-trigger`}
        hidden={!expanded}
        {...props}
    >
        {@render children()}
    </section>
{:else}
    <div bind:this={element} id={`${id}-${value}-content`} hidden={!expanded} {...props}>
        {@render children()}
    </div>
{/if}
