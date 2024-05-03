<script lang="ts">
    import { slide } from "svelte/transition";
    import { Accordion } from "@niklasburggraaff/svelte-runia";

    import ChevronDown from "@/components/icons/ChevronDown.svelte";

    let {
        type = "single",
        value = $bindable(null),
        values = $bindable([]),
        collapsible = false
    }: {
        type?: "single" | "multiple";
        value?: string;
        values?: string[];
        collapsible?: boolean;
    } = $props();
</script>

<Accordion.Root {type} bind:value bind:values {collapsible}>
    <Accordion.Item value="item-1" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-xl [&[data-state=open]>span>svg]:rotate-180"
            >
                Item 1
                <span class="transition-transform duration-200">
                    <ChevronDown />
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="px-1.5 pb-2" transition:slide={{ duration: 200 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-xl [&[data-state=open]>span>svg]:rotate-180"
            >
                Item 2
                <span class="transition-transform duration-200">
                    <ChevronDown />
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="px-1.5 pb-4" transition:slide={{ duration: 200 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
