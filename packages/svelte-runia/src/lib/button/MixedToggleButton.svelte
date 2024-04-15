<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type ARIALabelOrLabelledByProps =
        | { "aria-label": string; "aria-labelledby"?: null }
        | { "aria-labelledby": string; "aria-label"?: null };

    type Props = ARIALabelOrLabelledByProps & {
        state: "true" | "false" | "mixed";
        children: Snippet;
    } & OtherAttributes;
    let {
        state = $bindable("false"),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        children,
        ...props
    }: Props = $props();

    function onclick(event: MouseEvent) {
        if (state === "mixed") {
            state = "true";
        } else if (state === "true") {
            state = "false";
        } else {
            state = "mixed";
        }

        event.preventDefault();
    }
</script>

<button
    aria-pressed={state}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    {onclick}
    {...props}
>
    {@render children()}
</button>
