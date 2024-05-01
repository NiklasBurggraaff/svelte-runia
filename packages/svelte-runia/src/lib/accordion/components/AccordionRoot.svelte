<script context="module" lang="ts">
    let count = 0;
</script>

<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { getContextKey } from "$lib/context.js";
    import {
        moveEnd,
        moveLeft,
        moveNext,
        movePrevious,
        moveRight,
        moveStart,
        type Direction,
        type Orientation
    } from "$lib/moves.js";
    import type { AccordionRootContext, AccordionState } from "../context.js";
    import { getAccordionTriggers } from "../data-atts.js";

    type Props = {
        disabled?: boolean;
        loop?: boolean;
        direction?: Direction;
        orientation?: Orientation;
        children: Snippet;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    interface AccordionSingleProps extends Props {
        type: "single";
        // Null indicates the accordion is closed
        value?: string | null;
        defaultValue?: string;
        collapsible?: boolean;
        values?: never;
        defaultValues?: never;
    }
    interface AccordionMultipleProps extends Props {
        type: "multiple";
        values?: string[];
        defaultValues?: string[];
        value?: never;
        defaultValue?: never;
        collapsible?: never;
    }

    let {
        type,
        value = $bindable(),
        defaultValue,
        values = $bindable(),
        defaultValues,
        collapsible = false,
        disabled = false,
        loop = true,
        direction = "ltr",
        orientation = "vertical",
        children,
        element = $bindable(undefined),
        ...props
    }: AccordionSingleProps | AccordionMultipleProps = $props();

    // Handle default values
    switch (type) {
        case "single":
            if (value === undefined) {
                value = defaultValue;
            }
            break;
        case "multiple":
            if (values === undefined) {
                values = defaultValues;
            }
            break;
    }

    let accordionState: AccordionState = $state({
        value:
            type === "single"
                ? defaultValue === undefined
                    ? []
                    : [defaultValue]
                : defaultValues ?? [],
        collapsible,
        disabled,
        orientation
    });
    $effect(() => {
        accordionState.disabled = disabled;
    });
    $effect(() => {
        accordionState.collapsible = collapsible;
    });
    $effect(() => {
        accordionState.orientation = orientation;
    });

    let expandedItems: string[] = $derived(
        type === "single" ? (value === undefined || value === null ? [] : [value]) : values ?? []
    );
    $effect(() => {
        accordionState.value = expandedItems;
    });

    const id: string = `svelte-runia-accordion-${count++}`;

    setContext<AccordionRootContext>(getContextKey("accordion"), {
        accordionId: id,
        accordionState,
        triggerEvents: {
            onclick: toggleItem,
            onkeydown: handleKeydown
        }
    });

    function toggleItem(item: string) {
        if (disabled) {
            return;
        }

        switch (type) {
            case "single":
                if (value === item) {
                    if (collapsible) {
                        value = null;
                    }
                } else {
                    value = item;
                }
                break;
            case "multiple":
                if (values === undefined) {
                    values = [item];
                } else {
                    if (values.includes(item)) {
                        values = values.filter((i) => i !== item);
                    } else {
                        values = [...values, item];
                    }
                }
                break;
        }
    }

    function getMoved(item: string, event: KeyboardEvent) {
        if (element === undefined) {
            return;
        }

        const accordionTriggers = getAccordionTriggers(element);

        switch (event.key) {
            case "ArrowUp":
                if (orientation === "vertical") return movePrevious(accordionTriggers, item, loop);
            case "ArrowDown":
                if (orientation === "vertical") return moveNext(accordionTriggers, item, loop);
            case "ArrowLeft":
                if (orientation === "horizontal")
                    return moveLeft(accordionTriggers, item, loop, direction);
            case "ArrowRight":
                if (orientation === "horizontal")
                    return moveRight(accordionTriggers, item, loop, direction);
            case "Home":
                return moveStart(accordionTriggers, item);
            case "End":
                return moveEnd(accordionTriggers, item);
        }

        return;
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
</script>

<div bind:this={element} {...props}>
    {@render children()}
</div>
