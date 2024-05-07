<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import {
        moveLeft,
        moveNext,
        movePrevious,
        moveRight,
        type Direction,
        type MoveResult,
        type Orientation
    } from "$lib/moves.js";
    import type { ARIALabel } from "$lib/label.js";
    import { setRadioGroupContext, type RadioGroupState } from "../context.js";
    import { getRadioButtons, getRadioGroupRootDataAttributes } from "../data-atts.js";

    type Props = {
        name?: string;
        value?: string | null;
        required?: boolean;
        disabled?: boolean;
        loop?: boolean;
        orientation?: Orientation | undefined;
        direction?: Direction;
        element?: HTMLDivElement | undefined;
    } & ARIALabel &
        HTMLAttributes<HTMLDivElement>;

    let {
        name,
        value = $bindable(null),
        required = false,
        disabled = false,
        loop = true,
        orientation = undefined,
        direction = "ltr",
        children,
        element = $bindable(),
        ...props
    }: Props = $props();

    let thisElement: HTMLDivElement | undefined = $state(undefined);

    let radioGroupState: RadioGroupState = $state({
        element,
        name,
        value,
        required,
        disabled,
        orientation
    });
    $effect(() => {
        element = thisElement;
        radioGroupState.element = thisElement;
    });
    $effect(() => {
        radioGroupState.name = name;
    });
    $effect(() => {
        radioGroupState.value = value;
    });
    $effect(() => {
        radioGroupState.required = required;
    });
    $effect(() => {
        radioGroupState.disabled = disabled;
    });
    $effect(() => {
        radioGroupState.orientation = orientation;
    });

    setRadioGroupContext({
        radioGroupState,
        buttonEvents: {
            onclick: selectItem,
            onkeydown: handleKeydown
        }
    });

    function selectItem(item: string) {
        if (disabled) {
            return;
        }

        value = item;
    }

    function getMoved(item: string, event: KeyboardEvent) {
        if (thisElement === undefined) {
            return;
        }

        const radioButtons = getRadioButtons(thisElement);

        let moveResult: MoveResult | undefined = undefined;
        console.log("key", event.key);
        switch (event.key) {
            case "ArrowUp":
                if (orientation !== "horizontal")
                    moveResult = movePrevious(radioButtons, item, loop);
                break;
            case "ArrowDown":
                if (orientation !== "horizontal") moveResult = moveNext(radioButtons, item, loop);
                break;
            case "ArrowLeft":
                if (orientation !== "vertical")
                    moveResult = moveLeft(radioButtons, item, loop, direction);
                break;
            case "ArrowRight":
                if (orientation !== "vertical")
                    moveResult = moveRight(radioButtons, item, loop, direction);
                break;
        }

        if (moveResult !== undefined) {
            event.preventDefault();
            value = moveResult.value;
        }

        return moveResult;
    }

    function handleKeydown(item: string, event: KeyboardEvent) {
        if (disabled) {
            return;
        }

        const moved = getMoved(item, event);
        if (moved !== undefined) {
            moved.element.focus();
        }
    }

    let dataAttributes = $derived(getRadioGroupRootDataAttributes(disabled, orientation));
</script>

<div
    bind:this={thisElement}
    {...props}
    role="radiogroup"
    aria-required={required}
    {...dataAttributes}
>
    {#if children !== undefined}
        {@render children()}
    {/if}
</div>
