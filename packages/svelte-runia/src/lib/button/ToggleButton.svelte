<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type ARIALabelOrLabelledByProps =
        | { "aria-label": string; "aria-labelledby"?: null }
        | { "aria-labelledby": string; "aria-label"?: null };

    type Props = ARIALabelOrLabelledByProps & {
        pressed: boolean;
        children: Snippet;
    } & OtherAttributes;
    let {
        pressed = $bindable(false),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        children,
        ...props
    }: Props = $props();

    function onclick(event: MouseEvent) {
        pressed = !pressed;

        event.preventDefault();
    }
</script>

<button
    aria-pressed={pressed}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    {onclick}
    {...props}
>
    {@render children()}
</button>
