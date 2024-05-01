<script lang="ts">
    import { getContextKey } from "$lib/context.js";
    import { findValueIndex } from "$lib/data-attr.js";
    import Resize from "$lib/utilComponents/Resize.svelte";
    import { getRadioItemDataAttributes, type RadioGroupContext } from "./utils.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        required?: boolean;
        disabled?: boolean;
        indicator: Snippet<[boolean]>;
    } & HTMLAttributes<HTMLButtonElement>;

    let { value, required, disabled, children, indicator, ...props }: Props = $props();

    const { valueStore, groupName, getRadioItems, setValue, selectNext, selectPrevious } =
        getContext<RadioGroupContext>(getContextKey("radio-group"))!;

    let groupValue = $state<string | undefined>(undefined);
    valueStore.subscribe((newValue) => {
        groupValue = newValue;
    });
    let checked = $derived(groupValue === value);

    function onclick() {
        setValue(value);
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.preventDefault();
            return;
        }

        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            selectNext(value);
            event.preventDefault();
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            selectPrevious(value);
            event.preventDefault();
        }
    }

    let firstElement = $state(false);
    $effect(() => {
        if (groupValue === undefined) {
            const radioItems = getRadioItems();

            firstElement = findValueIndex(radioItems, value) === 0;
        }
    });

    let focusable = $derived(groupValue === undefined ? firstElement : checked);

    let buttonElement: HTMLButtonElement | undefined = $state(undefined);
</script>

<!-- Add data -->
<button
    bind:this={buttonElement}
    class="radio"
    role="radio"
    tabindex={focusable ? 0 : -1}
    {onclick}
    {onkeydown}
    aria-checked={checked}
    {...getRadioItemDataAttributes(value)}
    {...props}
>
    {#if checked}
        {@render indicator(checked)}
    {/if}
</button>

<Resize element={buttonElement}>
    {#snippet child({ width, height })}
        <input
            type="radio"
            aria-hidden={true}
            {value}
            {checked}
            {required}
            {disabled}
            name={groupName}
            tabindex="-1"
            style={`width: ${width}px; height: ${height}px;`}
        />
    {/snippet}
</Resize>

<style>
    input {
        position: absolute;
        pointer-events: none;
        opacity: 0;
        margin: 0;
    }
</style>
