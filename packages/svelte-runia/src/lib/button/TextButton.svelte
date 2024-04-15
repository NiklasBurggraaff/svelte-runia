<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    type OtherAttributes = Omit<HTMLButtonAttributes, "aria-label" | "aria-labelledby" | "onclick">;

    type Props = {
        name: string;
        onclick: (event: UIEvent) => void;
    } & OtherAttributes;
    let { name, onclick, ...props }: Props = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
            onclick(event);
            event.preventDefault();
        }
    }
</script>

<button {...props} {onclick} {onkeydown}>{name}</button>
