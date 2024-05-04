<script lang="ts">
    import InteractiveAccordion from "../InteractiveAccordion.svelte";

    let values: string[] = $state([]);
    let value: string = $state("");
    $effect(() => {
        value = values.join(", ");
    });

    function updateValues() {
        values = value
            .split(",")
            .map((v) => v.trim())
            .filter((v) => v !== "");
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            updateValues();
        }
    }
</script>

<div>
    <label>
        Values: <span class="text-sm">(comma separated, <kbd>Enter</kbd> to update)</span>
        <input
            bind:value
            onfocusout={updateValues}
            {onkeydown}
            class="w-full rounded-md border px-4 py-1"
        />
    </label>
</div>

<InteractiveAccordion bind:values type="multiple" />
