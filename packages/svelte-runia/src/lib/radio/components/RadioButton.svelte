<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";
    import { findValueIndex } from "$lib/data-attr.js";
    import Resize from "$lib/utilComponents/Resize.svelte";
    import { addValueParam } from "$lib/events.js";
    import type { ARIALabelOrContent } from "$lib/label.js";
    import { getRadioGroupContext } from "../context.js";
    import { getRadioButtons, getRadioButtonDataAttributes } from "../data-atts.js";

    type Props = {
        value: string;
        indicator?: Snippet<[boolean]>;
        disabled?: boolean;
        forceMount?: boolean;
        element?: HTMLButtonElement | undefined;
    } & ARIALabelOrContent &
        HTMLButtonAttributes;

    let {
        value,
        indicator,
        disabled: buttonDisabled = false,
        forceMount = false,
        children,
        element = $bindable(),
        ...props
    }: Props = $props();

    let thisElement: HTMLButtonElement | undefined = $state(undefined);
    $effect(() => {
        element = thisElement;
    });

    let { radioGroupState, buttonEvents } = getRadioGroupContext();
    let groupName = $derived(radioGroupState.name);

    let checked = $derived(radioGroupState.value === value);
    let required = $derived(radioGroupState.required);
    let disabled = $derived(radioGroupState.disabled || buttonDisabled);

    let firstElement = $state(false);
    $effect(() => {
        if (radioGroupState.value === null && radioGroupState.element !== undefined) {
            const radioButtons = getRadioButtons(radioGroupState.element);

            firstElement = findValueIndex(radioButtons, value) === 0;
        }
    });
    let focusable = $derived(radioGroupState.value === null ? firstElement : checked);

    let events = $derived(addValueParam(value, buttonEvents));
    let dataAttributes = $derived(
        getRadioButtonDataAttributes(value, checked, disabled, radioGroupState.orientation)
    );
</script>

<!-- Add data -->
<button
    bind:this={thisElement}
    {...props}
    role="radio"
    tabindex={focusable ? 0 : -1}
    {disabled}
    {...events}
    aria-checked={checked}
    {...dataAttributes}
>
    {#if indicator !== undefined && (forceMount || checked)}
        {@render indicator(checked)}
    {/if}
    {#if children !== undefined}
        {@render children()}
    {/if}
</button>

<Resize element={thisElement}>
    {#snippet child({ width, height })}
        <input
            type="radio"
            aria-hidden="true"
            {value}
            {checked}
            {required}
            disabled
            name={groupName}
            tabindex="-1"
            style={`position: absolute; width: ${width}px; height: ${height}px; pointer-events: none; opacity: 0; margin: 0;`}
        />
    {/snippet}
</Resize>
