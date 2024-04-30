<script lang="ts">
    import type { AccordionItemContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        expandedItems: string[];
        value: string;
        disabled?: boolean;
        header: Snippet<[boolean]>;
        content: Snippet<[boolean]>;
    } & HTMLAttributes<HTMLDivElement>;

    let { expandedItems, value, disabled = false, header, content, ...props }: Props = $props();

    let expanded = $derived(expandedItems.includes(value));

    setContext<AccordionItemContext>(getContextKey("accordion-item"), {
        value
    });
</script>

<div {...props}>
    {@render header(expanded)}
    {@render content(expanded)}
</div>
