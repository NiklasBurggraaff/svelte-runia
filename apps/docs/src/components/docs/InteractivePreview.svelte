<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        preview: Snippet<[]>;
        controls: Snippet<[]>;
    };

    let { preview, controls }: Props = $props();
</script>

<div
    class="not-content items-center justify-center rounded-3xl border-2 border-[var(--sl-color-gray-5)]"
>
    <div class="bg-runic-gradient flex items-center justify-center rounded-t-3xl p-8 sm:p-16">
        <div class="w-96 rounded-xl bg-[var(--sl-color-bg)] p-8">
            {@render preview()}
        </div>
    </div>

    <div class="flex flex-col gap-4 p-8">
        <h3 class="text-2xl">Controls</h3>
        {@render controls()}
    </div>
</div>
