<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        element: HTMLElement;
        child: Snippet<[{ width: number; height: number }]>;
    };
    const { element, child }: Props = $props();

    let width = $state(0);
    let height = $state(0);

    $effect(() => {
        if (element !== undefined) {
            const resizeObserver = new ResizeObserver((entries) => {
                const entry = entries[0];
                if ("borderBoxSize" in entry) {
                    const borderSizeEntry = entry["borderBoxSize"];
                    // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry)
                        ? borderSizeEntry[0]
                        : borderSizeEntry;
                    width = borderSize["inlineSize"];
                    height = borderSize["blockSize"];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
            });
            resizeObserver.observe(element);
        }
    });
</script>

{@render child({ width, height })}
