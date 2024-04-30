<script lang="ts">
    import type { AccordionItemContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        disabled?: boolean;
        children: Snippet;
    } & HTMLAttributes<HTMLDivElement>;

    let { value, disabled = false, children, ...props }: Props = $props();

    setContext<AccordionItemContext>(getContextKey("accordion-item"), {
        value
    });
</script>

<div {...props}>
    {@render children()}
</div>
