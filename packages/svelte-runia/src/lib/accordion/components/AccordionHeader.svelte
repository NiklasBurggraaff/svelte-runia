<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        level: 2 | 3 | 4 | 5 | 6;
        children: Snippet;
    };

    type HeadingProps = Props & {
        useHeading?: true;
        element?: HTMLHeadingElement | undefined;
    } & HTMLAttributes<HTMLHeadingElement>;

    type NonHeadingProps = Props & {
        useHeading?: false;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    let {
        level = 3,
        useHeading = false,
        children,
        element = $bindable(undefined),
        ...props
    }: HeadingProps | NonHeadingProps = $props();
</script>

{#if useHeading}
    <div bind:this={element} {...props} aria-level={level}>
        {@render children()}
    </div>
{:else if level === 2}
    <h2 bind:this={element} {...props}>
        {@render children()}
    </h2>
{:else if level === 3}
    <h3 bind:this={element} {...props}>
        {@render children()}
    </h3>
{:else if level === 4}
    <h4 bind:this={element} {...props}>
        {@render children()}
    </h4>
{:else if level === 5}
    <h5 bind:this={element} {...props}>
        {@render children()}
    </h5>
{:else if level === 6}
    <h6 bind:this={element} {...props}>
        {@render children()}
    </h6>
{/if}
