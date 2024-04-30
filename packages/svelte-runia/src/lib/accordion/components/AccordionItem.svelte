<script lang="ts">
    import type { AccordionItemContext } from "../utils.js";
    import { getContextKey } from "$lib/context.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        disabled?: boolean;
        children: Snippet;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    let {
        value,
        disabled = false,
        children,
        element = $bindable(undefined),
        ...props
    }: Props = $props();

    let itemState = $state({
        disabled
    });
    $effect(() => {
        itemState.disabled = disabled;
    });

    setContext<AccordionItemContext>(getContextKey("accordion-item"), {
        value,
        itemState
    });
</script>

<div bind:this={element} {...props}>
    {@render children()}
</div>
