<script lang="ts">
    import { fade } from "svelte/transition";

    import AccordionRoot from "$lib/accordion/AccordionRoot.svelte";
    import AccordionItem from "$lib/accordion/AccordionItem.svelte";
    import AccordionHeader from "$lib/accordion/AccordionHeader.svelte";
    import AccordionTrigger from "$lib/accordion/AccordionTrigger.svelte";
    import AccordionContent from "$lib/accordion/AccordionContent.svelte";
</script>

<AccordionRoot type="single">
    <AccordionItem value="1">
        <AccordionHeader level={2}>
            <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
        <AccordionHeader level={2}>
            <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
        <AccordionHeader level={2}>
            <AccordionTrigger>Accordion Item 3</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
            <p transition:fade>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        </AccordionContent>
    </AccordionItem>
</AccordionRoot>
