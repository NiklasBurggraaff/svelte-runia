<script lang="ts">
    import { slide } from "svelte/transition";
    import { Accordion } from "@niklasburggraaff/svelte-runia";

    let {
        type,
        value = $bindable(),
        values = $bindable(),
        collapsible,
        disabled,
        loop
    }: any = $props();
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

<Accordion.Root {type} bind:value bind:values {collapsible} {disabled} {loop}>
    <Accordion.Item value="furthark-essentials" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl [&[data-state=open]>svg]:rotate-180"
            >
                Furthark Essentials {@render chevronDown()}
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="px-1.5 pb-4" transition:slide={{ duration: 200 }}>
                The Elder Futhark, used from the 2nd to 8th centuries, comprised 24 runic
                characters, each bearing significance in magic, divination, and communication.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="norse-myths" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl [&[data-state=open]>svg]:rotate-180"
            >
                Norse Myths 101 {@render chevronDown()}
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="px-1.5 pb-4" transition:slide={{ duration: 200 }}>
                Norse mythology, a tapestry of gods, giants, and heroes, offers insights into
                ancient Scandinavian beliefs, from the creation of the cosmos to the battles of
                Ragnarök.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="viking-explorers" class="border-b">
        <Accordion.Header level={3}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-2 text-center text-xl [&[data-state=open]>svg]:rotate-180"
            >
                Viking Explorers {@render chevronDown()}
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="px-1.5 pb-4" transition:slide={{ duration: 200 }}>
                Vikings, from the 8th to 11th centuries, sailed seas, established trade routes, and
                left their mark on history through exploration and expansion.
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
