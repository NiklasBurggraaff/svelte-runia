<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = { controlsId: string; children: Snippet } & HTMLAttributes<HTMLButtonElement>;

    let { controlsId, children, ...props }: Props = $props();

    let { value, initialExpanded, setExpanded } = getContext<AccordionItemContext>(
        getContextKey("accordion-item")
    );

    let expanded = $state(initialExpanded);
    $effect(() => {
        setExpanded(expanded);
    });

    const { toggleItem } = getContext<AccordionRootContext>(getContextKey("accordion"));
</script>

<button
    onclick={() => {
        expanded = toggleItem(value, expanded);
    }}
    aria-controls={controlsId}
    {...props}
>
    {expanded ? "Expanded" : "Collapsed"}
    {@render children()}
</button>
