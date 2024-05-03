<script lang="ts">
    import { Accordion } from "@niklasburggraaff/svelte-runia";
</script>

{#snippet chevronDown()}
    <svg
        class="size-8 transition-transform duration-200"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"
        />
    </svg>
{/snippet}

<Accordion.Root type="single" collapsible>
    <Accordion.Item value="item-1" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl [&[data-state=open]>span>svg]:rotate-180"
            >
                Item 1
                <span class="transition-transform duration-200">
                    {@render chevronDown()}
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl [&[data-state=open]>span>svg]:rotate-180"
            >
                Item 2
                <span class="transition-transform duration-200">
                    {@render chevronDown()}
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
