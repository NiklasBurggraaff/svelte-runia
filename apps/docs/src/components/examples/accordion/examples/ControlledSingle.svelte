<script lang="ts">
    import InteractiveAccordion from "../InteractiveAccordion.svelte";

    let value = $state(null);
</script>

<div>
    <label>
        Value:
        <input bind:value class="w-full rounded-md border px-4 py-1" />
    </label>
</div>

<InteractiveAccordion bind:value type="single" />
