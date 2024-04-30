<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        level: 2 | 3 | 4 | 5 | 6;
        useHeading?: boolean;
        children: Snippet;
    } & HTMLAttributes<HTMLHeadingElement>;

    let { level = 3, useHeading = false, children, ...props }: Props = $props();
</script>

{#snippet content()}
    {@render children()}
{/snippet}

{#if useHeading}
    <div aria-level={level} {...props}>
        {@render content()}
    </div>
{:else if level === 2}
    <h2 {...props}>
        {@render content()}
    </h2>
{:else if level === 3}
    <h3 {...props}>
        {@render content()}
    </h3>
{:else if level === 4}
    <h4 {...props}>
        {@render content()}
    </h4>
{:else if level === 5}
    <h5 {...props}>
        {@render content()}
    </h5>
{:else if level === 6}
    <h6 {...props}>
        {@render content()}
    </h6>
{/if}
