<script lang="ts">
    import Main from "./Main.svelte";

    let values: string[] = $state([]);
    let value: string = $state("");
    $effect(() => {
        value = values.join(", ");
    });

    $effect(() => {
        updateValues(value);
    });
    function updateValues(newValue: string) {
        if (newValue === "") {
            values = [];
            return;
        }

        values = newValue.split(",").map((v) => v.trim());
    }
</script>

<div>
    <label>
        Values:
        <input bind:value class="w-full rounded-md border px-4 py-1" />
    </label>
</div>

<Main bind:values type="multiple" />
