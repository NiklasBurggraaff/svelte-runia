<script context="module" lang="ts">
    let count = 0;
</script>

<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import type { AccordionRootContext, AccordionState } from "../utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getChildElements, getValueIndex } from "$lib/data-attr.js";

    // TODO: Add orientation and direction props
    // TODO: Render delegation
    type Props = {
        disabled?: boolean;
        loop?: boolean;
        children: Snippet;
        element?: HTMLDivElement | undefined;
    } & HTMLAttributes<HTMLDivElement>;

    interface AccordionSingleProps extends Props {
        type: "single";
        collapsible?: boolean;
        value?: string | undefined;
        defaultValue?: string;
        values?: never;
        defaultValues?: never;
    }
    interface AccordionMultipleProps extends Props {
        type: "multiple";
        values?: string[];
        defaultValues?: string[];
        collapsible?: never;
        value?: never;
        defaultValue?: never;
    }

    let {
        type,
        collapsible = false,
        value = $bindable(undefined),
        defaultValue,
        values = $bindable([]),
        defaultValues,
        disabled = false,
        loop = true,
        children,
        element = $bindable(undefined),
        ...props
    }: AccordionSingleProps | AccordionMultipleProps = $props();

    // TODO: Handle default values

    const id: string = `svelte-runia-accordion-${count++}`;

    let accordionState: AccordionState = $state({
        value:
            type === "single"
                ? defaultValue === undefined
                    ? []
                    : [defaultValue]
                : defaultValues ?? [],
        disabled,
        collapsible
    });

    $effect(() => {
        accordionState.disabled = disabled;
    });
    $effect(() => {
        accordionState.collapsible = collapsible;
    });

    function toggleItem(item: string) {
        if (disabled) {
            return;
        }

        if (type === "single") {
            if (value === item) {
                if (collapsible) {
                    value = undefined;
                }
            } else {
                value = item;
            }
        } else {
            if (values.includes(item)) {
                values = values.filter((i) => i !== item);
            } else {
                values = [...values, item];
            }
        }
    }

    function handleKeydown(item: string, event: KeyboardEvent) {
        if (disabled) {
            return;
        }
        if (element === undefined) {
            return;
        }

        const accordionTriggers = getChildElements(element, "accordion-trigger");
        const index = getValueIndex(accordionTriggers, item);

        let focusIndex: number | undefined;

        if (event.key === "ArrowUp") {
            focusIndex = index - 1;
            if (focusIndex < 0) {
                if (loop) {
                    focusIndex = accordionTriggers.length - 1;
                } else {
                    focusIndex = undefined;
                }
            }
        } else if (event.key === "ArrowDown") {
            focusIndex = index + 1;
            if (focusIndex >= accordionTriggers.length) {
                if (loop) {
                    focusIndex = 0;
                } else {
                    focusIndex = undefined;
                }
            }
        } else if (event.key === "Home") {
            focusIndex = 0;
        } else if (event.key === "End") {
            focusIndex = accordionTriggers.length - 1;
        }

        if (focusIndex !== undefined) {
            accordionTriggers[focusIndex].focus();
        }
    }

    setContext<AccordionRootContext>(getContextKey("accordion"), {
        id,
        accordionState,
        triggerEvents: {
            onclick: toggleItem,
            onkeydown: handleKeydown
        }
    });

    let expandedItems: string[] = $derived(
        type === "single" ? (value === undefined ? [] : [value]) : values
    );
    $effect(() => {
        accordionState.value = expandedItems;
    });
</script>

<div bind:this={element} {...props}>
    {@render children()}
</div>
