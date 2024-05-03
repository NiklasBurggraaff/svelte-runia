<script lang="ts">
    import Main from "./Main.svelte";

    let value = $state("item-1");
</script>

<div>
    <label>
        Value:
        <input bind:value class="w-full rounded-md border px-4 py-1" />
    </label>
</div>

<Main bind:value type="single" />
