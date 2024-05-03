<script lang="ts">
    import { slide } from "svelte/transition";
    import { Accordion } from "@niklasburggraaff/svelte-runia";
</script>

<Accordion.Root type="single" collapsible>
    <Accordion.Item value="item-1" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger class="w-full bg-transparent py-2 text-xl">Item 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div transition:slide={{ duration: 200 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger class="w-full bg-transparent py-2 text-xl">Item 2</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div transition:slide={{ duration: 200 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
