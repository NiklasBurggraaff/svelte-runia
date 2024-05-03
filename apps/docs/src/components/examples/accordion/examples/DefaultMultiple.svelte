<script lang="ts">
    import Main from "./Main.svelte";

    let values = $state(["item-1", "item-2"]);
</script>

<Main type="multiple" bind:values />
