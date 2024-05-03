<script lang="ts">
    import Main from "./Main.svelte";

    let value = $state("item-1");
</script>

<Main bind:value />
