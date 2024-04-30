<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        controlsId: string;
        children: Snippet;
    } & HTMLAttributes<HTMLButtonElement>;

    let { controlsId, children, ...props }: Props = $props();
    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { state, toggleItem } = getContext<AccordionRootContext>(getContextKey("accordion"));

    let expanded = $derived(state.value.includes(value));
    let disabled = $derived(state.disabled);
</script>

<button
    onclick={() => {
        toggleItem(value);
    }}
    aria-controls={controlsId}
    {disabled}
    {...props}
>
    {expanded ? "Expanded" : "Collapsed"}
    {@render children()}
</button>
