<script lang="ts">
    import { fade } from "svelte/transition";

    import { Accordion } from "$lib/index.js";
</script>

<Accordion.Root type="single">
    <Accordion.Item value="1">
        <Accordion.Header level={2}>
            <Accordion.Trigger>Accordion Item 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="2">
        <Accordion.Header level={2}>
            <Accordion.Trigger>Accordion Item 2</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="3">
        <Accordion.Header level={2}>
            <Accordion.Trigger>Accordion Item 3</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
