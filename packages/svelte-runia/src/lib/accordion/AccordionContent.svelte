<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        expanded: boolean;
        children: Snippet;
        forceMount?: boolean;
    };

    let { expanded, children, forceMount = false }: Props = $props();
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
