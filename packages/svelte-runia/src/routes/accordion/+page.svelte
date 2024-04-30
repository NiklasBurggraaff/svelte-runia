<script lang="ts">
    import AccordionRoot from "$lib/accordion/AccordionRoot.svelte";
    import AccordionItem from "$lib/accordion/AccordionItem.svelte";
    import AccordionHeader from "$lib/accordion/AccordionHeader.svelte";
    import AccordionTrigger from "$lib/accordion/AccordionTrigger.svelte";
</script>

<AccordionRoot type="single">
    <AccordionItem value="1">
        <AccordionHeader level={2}>
            <AccordionTrigger controlsId="content-1">Accordion Item 1</AccordionTrigger>
        </AccordionHeader>
        {#snippet content(expanded)}
            <p id="content-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        {/snippet}
    </AccordionItem>
    <AccordionItem value="2">
        <AccordionHeader level={2}>
            <AccordionTrigger controlsId="content-2">Accordion Item 2</AccordionTrigger>
        </AccordionHeader>
        {#snippet content(expanded)}
            <p id="content-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        {/snippet}
    </AccordionItem>
    <AccordionItem value="3">
        <AccordionHeader level={2}>
            <AccordionTrigger controlsId="content-3">Accordion Item 3</AccordionTrigger>
        </AccordionHeader>
        {#snippet content(expanded)}
            <p id="content-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
            </p>
        {/snippet}
    </AccordionItem>
</AccordionRoot>
