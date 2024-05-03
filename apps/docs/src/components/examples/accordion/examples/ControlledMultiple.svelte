<script lang="ts">
    import Main from "./Main.svelte";

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
</script>

<div>
    <label>
        Values:
        <input bind:value onfocusout={updateValues} class="w-full rounded-md border px-4 py-1" />
    </label>
</div>

<Main bind:values type="multiple" />
