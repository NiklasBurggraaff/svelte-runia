<script lang="ts">
    import { slide } from "svelte/transition";

    import { Accordion } from "../../lib/index.js";

    let disabled = $state(false);

    setInterval(() => {
        disabled = !disabled;
    }, 1000);
</script>

<div class="p-8">
    <p>Disabled: {disabled}</p>

    <div class="p-4"></div>

    <Accordion.Root class="max-w-xl" type="single" collapsible>
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
            <Accordion.Content hideDelay={400}>
                <p transition:slide={{ duration: 200 }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                </p>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>
