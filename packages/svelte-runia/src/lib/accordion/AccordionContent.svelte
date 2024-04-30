<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        children: Snippet;
    } & HTMLAttributes<HTMLDivElement>;

    let { children, ...props }: Props = $props();

    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { id, state } = getContext<AccordionRootContext>(getContextKey("accordion"));

    let expanded = $derived(state.value.includes(value));
</script>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

- You can use markdown here.
- You can also use code blocks here.
- Usage:
  ```tsx
  <main name="Arethra">
    ```
-->

<div id={`${id}-${value}-content`} hidden={!expanded} {...props}>
    {#if expanded}
        {@render children()}
    {/if}
</div>
