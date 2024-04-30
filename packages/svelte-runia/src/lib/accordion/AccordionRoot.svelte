<script lang="ts">
    import { getContextKey } from "$lib/context.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import type { AccordionRootContext, AccordionState } from "$lib/accordion/utils.js";

    type Props = {
        disabled?: boolean;
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
        children,
        ...props
    }: AccordionSingleProps | AccordionMultipleProps = $props();

    let state: AccordionState = $state({
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
    setContext<AccordionRootContext>(getContextKey("accordion"), {
        state,
        toggleItem
    });

    let expandedItems: string[] = $derived(
        type === "single" ? (value === undefined ? [] : [value]) : values
    );
    $effect(() => {
        state.value = expandedItems;
    });
</script>

<div {...props}>
    {@render children()}
</div>
