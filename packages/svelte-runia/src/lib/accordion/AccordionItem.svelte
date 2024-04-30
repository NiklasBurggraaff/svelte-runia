<script lang="ts">
    import type { AccordionItemContext, AccordionRootContext } from "$lib/accordion/utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getContext, setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        disabled?: boolean;
        children: Snippet;
        content: Snippet<[boolean]>;
    } & HTMLAttributes<HTMLDivElement>;

    let { value, disabled = false, children, content, ...props }: Props = $props();

    const { registerItem, unRegisterItem } = getContext<AccordionRootContext>(
        getContextKey("accordion")
    );

    const initialExpanded = false;
    let expanded = $state(initialExpanded);

    setContext<AccordionItemContext>(getContextKey("accordion-item"), {
        value,
        initialExpanded: initialExpanded,
        setExpanded: (newExpanded: boolean) => {
            console.log("setExpanded", value, newExpanded);
            expanded = newExpanded;
        }
    });

    $effect(() => {
        registerItem(value, {
            setExpanded: (newExpanded: boolean) => {
                expanded = newExpanded;
            }
        });

        return () => {
            unRegisterItem(value);
        };
    });

    $inspect(expanded);
</script>

<div {...props}>
    {@render children()}

    {#if expanded}
        {@render content(expanded)}
    {/if}
</div>
