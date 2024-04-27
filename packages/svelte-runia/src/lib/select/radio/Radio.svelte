<script context="module" lang="ts">
    let counter = 0;
</script>

<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        groupValue: string | undefined;
        children: Snippet;
        indicator: Snippet<[boolean]>;
    } & HTMLAttributes<HTMLDivElement>;

    let {
        value,
        groupValue = $bindable(undefined),
        children,
        indicator,
        ...props
    }: Props = $props();

    let inputElement: HTMLInputElement | undefined = $state(undefined);

    counter += 1;
    const radioId = `runia-radio-${counter}`;
    const labelId = `runia-radio-label-${counter}`;

    let checked = $derived(groupValue === value);

    function onkeydown(event: KeyboardEvent) {
        if (event.key === " " || event.key === "Spacebar") {
            inputElement?.click();
            event.preventDefault();
        }
    }
</script>

<div class="radio-container">
    <button
        class="radio"
        role="radio"
        tabindex={checked ? 0 : -1}
        {onkeydown}
        aria-checked={checked}
    >
        {@render indicator(checked)}
    </button>
    <!-- Don't use hidden -->
    <input
        bind:this={inputElement}
        type="radio"
        bind:group={groupValue}
        {value}
        {...props}
        tabindex="-1"
        hidden
    />
    <label id={labelId} for={radioId}>{@render children()}</label>
</div>

<style>
    .radio-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    button {
        all: unset;
    }
</style>
