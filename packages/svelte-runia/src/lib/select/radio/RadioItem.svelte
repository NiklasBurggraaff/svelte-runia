<script lang="ts">
    import { getContextKey } from "$lib/context.js";
    import { radioItemAttrs, type RadioGroupContext } from "./utils.js";
    import { getContext, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        value: string;
        indicator: Snippet<[boolean]>;
    } & HTMLAttributes<HTMLDivElement>;

    let { value, children, indicator, ...props }: Props = $props();

    let inputElement: HTMLInputElement | undefined = $state(undefined);

    const context = getContext<RadioGroupContext>(getContextKey("radio-group"))!;

    let checked = $state(false);

    context.valueStore.subscribe((newValue) => {
        checked = value === newValue;
    });

    function onkeydown(event: KeyboardEvent) {
        if (event.key === " " || event.key === "Spacebar") {
            inputElement?.click();
            event.preventDefault();
        }
    }
</script>

<button
    class="radio"
    role="radio"
    tabindex={checked ? 0 : -1}
    onclick={() => {
        console.log("here");
        console.log(context);
        context?.setValue(value);
    }}
    {onkeydown}
    aria-checked={checked}
    {...radioItemAttrs}
>
    {@render indicator(checked)}
</button>
<!-- Don't use hidden -->
<input bind:this={inputElement} type="radio" {value} {...props} tabindex="-1" hidden />

<style>
    button {
        all: unset;
    }
</style>
