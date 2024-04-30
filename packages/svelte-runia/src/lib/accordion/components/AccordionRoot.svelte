<script context="module" lang="ts">
    let count = 0;
</script>

<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import type { AccordionRootContext, AccordionState } from "../utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getChildElements, getValueIndex } from "$lib/data-attr.js";

    type Props = {
        disabled?: boolean;
        loop?: boolean;
        children: Snippet;
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
        ...props
    }: AccordionSingleProps | AccordionMultipleProps = $props();

    const id: string = `svelte-runia-accordion-${count++}`;

    let accordionState: AccordionState = $state({
        value:
            type === "single"
                ? defaultValue === undefined
                    ? []
                    : [defaultValue]
                : defaultValues ?? [],
        disabled
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

    let rootElement: HTMLDivElement | undefined = $state(undefined);

    function handleKeydown(item: string, event: KeyboardEvent) {
        if (rootElement === undefined) {
            return;
        }

        const accordionTriggers = getChildElements(rootElement, "accordion-trigger");
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
        accordionState: accordionState,
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

<div bind:this={rootElement} {...props}>
    {@render children()}
</div>
