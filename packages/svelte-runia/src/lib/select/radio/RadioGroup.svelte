<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import { writable } from "svelte/store";
    import type { HTMLAttributes } from "svelte/elements";

    import type { RadioGroupContext } from "./utils.js";
    import { getContextKey } from "$lib/context.js";
    import { getChildElements, getValue, getValueIndex } from "$lib/data-attr.js";

    // Default to first value?
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
        name?: string;
        value: string | undefined;
        children: Snippet;
        loop?: boolean;
    } & HTMLAttributes<HTMLDivElement>;

    let {
        name,
        value = $bindable(),
        defaultValue,
        required,
        children,
        loop = true,
        ...props
    }: Props = $props();

    if (defaultValue !== undefined && value === undefined) {
        value = defaultValue;
    }

    const valueStore = writable<string | undefined>(value);
    $effect(() => {
        valueStore.set(value);
    });

    let groupElement: HTMLDivElement | undefined = undefined;

    const setValue = (newValue: string, index: number) => {
        if (groupElement === undefined) {
            return;
        }

        const radioItems = getChildElements(groupElement, "radio-item");

        value = newValue;

        const radioItem = radioItems[index]!;
        radioItem.focus();
    };

    setContext<RadioGroupContext>(getContextKey("radio-group"), {
        groupName: name,
        valueStore,
        getRadioItems: () => {
            if (groupElement === undefined) {
                return [];
            }
            return getChildElements(groupElement, "radio-item");
        },
        setValue: (newValue: string) => {
            if (groupElement === undefined) {
                return;
            }

            const radioItems = getChildElements(groupElement, "radio-item");
            const index = getValueIndex(radioItems, newValue);
            setValue(newValue, index);
        },
        selectNext: (currentValue: string) => {
            if (groupElement === undefined) {
                return;
            }

            const radioItems = getChildElements(groupElement, "radio-item");
            const index = getValueIndex(radioItems, currentValue);

            let nextIndex = index + 1;
            if (nextIndex >= radioItems.length) {
                if (loop) {
                    nextIndex = 0;
                } else {
                    return;
                }
            }

            const newValue = getValue(radioItems, nextIndex);
            if (newValue === undefined) {
                return;
            }

            setValue(newValue, nextIndex);
        },
        selectPrevious: (currentValue: string) => {
            if (groupElement === undefined) {
                return;
            }

            const radioItems = getChildElements(groupElement, "radio-item");
            const index = getValueIndex(radioItems, currentValue);

            let previousIndex = index - 1;
            if (previousIndex < 0) {
                if (loop) {
                    previousIndex = radioItems.length - 1;
                } else {
                    return;
                }
            }

            const newValue = getValue(radioItems, previousIndex);
            if (newValue === undefined) {
                return;
            }

            setValue(newValue, previousIndex);
        }
    });
</script>

<div bind:this={groupElement} role="radiogroup" aria-required={required} {...props}>
    {@render children()}
</div>
