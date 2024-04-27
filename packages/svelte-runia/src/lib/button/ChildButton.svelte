<script lang="ts">
    import type { Snippet } from "svelte";

    type ARIALabelOrLabelledByProps =
        | { "aria-label": string; "aria-labelledby"?: null }
        | { "aria-labelledby": string; "aria-label"?: null };

    type Props = ARIALabelOrLabelledByProps & {
        onclick: (event: UIEvent) => void;
        children: Snippet<[any]>;
    };
    let {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        onclick,
        children,
        ...props
    }: Props = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
            onclick(event);
            event.preventDefault();
        }
    }
</script>

{@render children({
    role: "button",
    tabindex: 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    onclick,
    onkeydown,
    ...props
})}
