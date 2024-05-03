<script lang="ts">
    import Main from "./Main.svelte";

    let values = $state([]);
    let value = $state("");
    $effect(() => {
        value = values.join(", ");
    });

    $effect(() => {
        updateValues(value);
    });
    function updateValues(newValue: string) {
        values = newValue
            .split(",")
            .map((v) => v.trim())
            .filter((v) => v !== "");
    }
</script>

<div><input bind:value class="w-full rounded-md border px-4 py-1" /></div>

<Main bind:values type="multiple" />
