<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type ARIALabelOrLabelledByProps =
        | { "aria-label": string; "aria-labelledby"?: null }
        | { "aria-labelledby": string; "aria-label"?: null };

    type Props = ARIALabelOrLabelledByProps & {
        onclick: (event: UIEvent) => void;
        children: Snippet;
    } & OtherAttributes;
    let {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        onclick,
        children,
        ...props
    }: Props = $props();
</script>

<button aria-label={ariaLabel} aria-labelledby={ariaLabelledby} {onclick} {...props}>
    {@render children()}
</button>
