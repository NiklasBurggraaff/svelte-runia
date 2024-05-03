<script lang="ts">
    import { Accordion } from "@niklasburggraaff/svelte-runia";

    let value = $state("item-1");
</script>

<div><input bind:value class="w-full rounded-md border px-4 py-1" /></div>

<Accordion.Root bind:value type="single">
    <Accordion.Item value="item-1" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl"
            >
                Item 1
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl"
            >
                Item 2
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
