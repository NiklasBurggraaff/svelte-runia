<script lang="ts">
    import { slide } from "svelte/transition";

    import { Accordion } from "$lib/index.js";

    let value = $state("1");

    let disabled = $state(false);

    setInterval(() => {
        disabled = !disabled;

        if (value === "1") {
            value = "2";
        } else if (value === "2") {
            value = "3";
        } else if (value === "3") {
            value = "1";
        } else {
            value = "1";
        }
    }, 1000);

    $inspect(value);
</script>

<div class="p-8">
    <p>Disabled: {disabled}</p>

    <div class="p-4"></div>

    <Accordion.Root class="max-w-xl" type="single" bind:value collapsible>
        <Accordion.Item class="border-b-2" value="1" {disabled}>
            <Accordion.Header level={2}>
                <Accordion.Trigger class="w-full">Accordion Item 1</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
                <p transition:slide={{ duration: 200 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item class="border-b-2" value="2">
            <Accordion.Header level={2}>
                <Accordion.Trigger class="w-full">Accordion Item 2</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
                <p transition:slide={{ duration: 200 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item class="border-b-2" value="3">
            <Accordion.Header level={2}>
                <Accordion.Trigger class="w-full">Accordion Item 3</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
                <p transition:slide={{ duration: 200 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                </p>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>

<Accordion.Root class="max-w-xl" type="single">
    <Accordion.Item value="furthark-essentials">
        <Accordion.Header level={3}>
            <Accordion.Trigger class="w-full bg-transparent">Furthark Essentials</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:slide={{ duration: 200 }}>
                The Elder Futhark, used from the 2nd to 8th centuries, comprised 24 runic
                characters, each bearing significance in magic, divination, and communication.
            </p>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="norse-myths">
        <Accordion.Header level={3}>
            <Accordion.Trigger class="w-full bg-transparent">Norse Myths 101</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:slide={{ duration: 200 }}>
                Norse mythology, a tapestry of gods, giants, and heroes, offers insights into
                ancient Scandinavian beliefs, from the creation of the cosmos to the battles of
                Ragnarök.
            </p>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="viking-explorers">
        <Accordion.Header level={3}>
            <Accordion.Trigger class="w-full bg-transparent">Viking Explorers</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:slide={{ duration: 200 }}>
                Vikings, from the 8th to 11th centuries, sailed seas, established trade routes, and
                left their mark on history through exploration and expansion.
            </p>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
