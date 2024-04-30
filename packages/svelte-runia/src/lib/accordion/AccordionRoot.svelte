<script lang="ts">
    import { Map } from "svelte/reactivity";
    import { getContextKey } from "$lib/context.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import type { AccordionItemInfo, AccordionRootContext } from "$lib/accordion/utils.js";

    type Props = {
        type: "single" | "multiple";
        collapsible?: boolean;
        value?: string[];
        children: Snippet;
    } & HTMLAttributes<HTMLDivElement>;

    let { type, collapsible = false, value = $bindable([]), children, ...props }: Props = $props();

    const items = new Map<string, AccordionItemInfo>();

    setContext<AccordionRootContext>(getContextKey("accordion"), {
        registerItem: (item: string, other: AccordionItemInfo) => {
            items.set(item, other);
        },
        unRegisterItem: (item: string) => {
            items.delete(item);
        },
        toggleItem: (item: string, currentExpanded: boolean) => {
            if (!items.has(item)) {
                return currentExpanded;
            }

            if (value.includes(item)) {
                if (type === "multiple" || collapsible) {
                    value = value.filter((i) => i !== item);
                    items.get(item)!.setExpanded(false);
                    return false;
                } else {
                    return currentExpanded;
                }
            } else {
                if (type === "single") {
                    for (const i of value) {
                        items.get(i)!.setExpanded(false);
                    }
                    value = [item];
                    items.get(item)!.setExpanded(true);
                } else {
                    value = [...value, item];
                    items.get(item)!.setExpanded(true);
                }
                return true;
            }
        }
    });

    $inspect(value);
</script>

<div {...props}>
    {@render children()}
</div>
