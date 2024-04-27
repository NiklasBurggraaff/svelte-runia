<script lang="ts">
    import { getContextKey } from "$lib/context.js";
    import { getChildElements } from "$lib/data-attr.js";
    import { writable } from "svelte/store";
    import type { RadioGroupContext } from "./utils.js";
    import { setContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type DefaultValueProps =
        | {
              defaultValue: string;
              required: true;
          }
        | {
              defaultValue?: string;
              required?: false;
          };

    type Props = DefaultValueProps & {
        value: string | undefined;
        children: Snippet;
    } & HTMLAttributes<HTMLDivElement>;

    let groupElement: HTMLDivElement | undefined = undefined;

    const valueStore = writable<string | undefined>(undefined);

    let {
        value = $bindable(undefined),
        defaultValue,
        required,
        children,
        ...props
    }: Props = $props();

    $effect(() => {
        valueStore.set(value);
    });

    setContext<RadioGroupContext>(getContextKey("radio-group"), {
        valueStore,
        groupElement,
        setValue: (newValue: string) => {
            console.log("setValue", newValue);
            value = newValue;
        }
    });

    $effect(() => {
        if (groupElement) {
            console.log(getChildElements(groupElement, "radio-item"));
        }
    });
</script>

<div bind:this={groupElement} role="radiogroup" aria-required={required} {...props}>
    {@render children()}
</div>
