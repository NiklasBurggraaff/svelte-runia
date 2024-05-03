<script lang="ts">
    import { Accordion } from "@niklasburggraaff/svelte-runia";

    let values = $state([]);
    let value = $state("");
    $effect(() => {
        value = values.join(", ");
    });

    $effect(() => {
        updateValues(value);
    });
    function updateValues(newValue: string) {
        values = newValue.split(",").map((v) => v.trim());
    }
</script>

<div><input bind:value class="w-full rounded-md border px-4 py-1" /></div>

<Accordion.Root bind:values type="multiple">
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
