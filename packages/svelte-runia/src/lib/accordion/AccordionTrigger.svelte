<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        expanded: boolean;
        disabled: boolean;
        controlsId: string;
        children: Snippet;
    } & HTMLAttributes<HTMLButtonElement>;

    let { expanded, disabled = false, controlsId, children, ...props }: Props = $props();
    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { toggleItem } = getContext<AccordionRootContext>(getContextKey("accordion"));
</script>

<button
    {disabled}
    onclick={() => {
        toggleItem(value);
    }}
    aria-controls={controlsId}
    {...props}
>
    {expanded ? "Expanded" : "Collapsed"}
    {@render children()}
</button>
