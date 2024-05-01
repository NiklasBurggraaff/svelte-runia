<script lang="ts">
    import { getContext, setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { getContextKey } from "$lib/context.js";
    import type { AccordionItemContext, AccordionRootContext } from "../context.js";
    import { getAccordionItemDataAttributes } from "../data-atts.js";

    type Props = {
        value: string;
        disabled?: boolean;
        children: Snippet;
    };

    type RegionProps = Props & {
        region?: true;
        element?: HTMLElement | undefined;
    } & HTMLAttributes<HTMLElement>;

    type NonRegionProps = Props & {
        region?: false;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    let {
        value,
        disabled: localDisabled = false,
        region = false,
        children,
        element = $bindable(undefined),
        ...props
    }: RegionProps | NonRegionProps = $props();

    const { accordionId, accordionState } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    let itemState = $state({
        disabled: localDisabled
    });
    $effect(() => {
        itemState.disabled = localDisabled || accordionState.disabled;
    });

    setContext<AccordionItemContext>(getContextKey("accordion-item"), {
        value,
        itemState
    });

    let expanded = $derived(accordionState.value.includes(value));

    let triggerId = $derived(`${accordionId}-${value}-trigger`);
    let dataAttributes = $derived(
        getAccordionItemDataAttributes(expanded, itemState.disabled, accordionState.orientation)
    );
</script>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

On region: (https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- Avoid using the region role in circumstances that create landmark region proliferation, e.g., in an accordion that contains more than approximately 6 panels that can be expanded at the same time.
- Role region is especially helpful to the perception of structure by screen reader users when panels contain heading elements or a nested accordion.
-->

{#if region}
    <section
        bind:this={element}
        {...props as HTMLAttributes<HTMLElement>}
        aria-labelledby={triggerId}
        {...dataAttributes}
    >
        {@render children()}
    </section>
{:else}
    <div bind:this={element} {...props} {...dataAttributes}>
        {@render children()}
    </div>
{/if}
