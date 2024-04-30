<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, type Snippet } from "svelte";

    type Props = {
        children: Snippet;
        forceMount?: boolean;
    };

    let { children, forceMount = false }: Props = $props();

    let { value } = getContext<AccordionItemContext>(getContextKey("accordion-item"));
    const { state } = getContext<AccordionRootContext>(getContextKey("accordion"));

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

{#if expanded || forceMount}
    {@render children()}
{/if}
