<!-- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role -->
<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type ARIALabelOrLabelledByProps =
        | { "aria-label": string; "aria-labelledby"?: null }
        | { "aria-labelledby": string; "aria-label"?: null };

    type Props = ARIALabelOrLabelledByProps & {
        onclick: (event: UIEvent) => void;
        children: Snippet<[any]>;
    } & OtherAttributes;
    let {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        onclick,
        children,
        ...props
    }: Props = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === " " || event.key === "Enter") {
            onclick(event);
            event.preventDefault();
        }
    }
</script>

{@render children({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    tabindex: 0,
    onclick,
    onkeydown,
    ...props
})}
