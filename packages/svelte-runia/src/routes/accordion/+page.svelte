<script lang="ts">
    import AccordionRoot from "$lib/accordion/AccordionRoot.svelte";
    import AccordionItem from "$lib/accordion/AccordionItem.svelte";
    import AccordionHeader from "$lib/accordion/AccordionHeader.svelte";
    import AccordionTrigger from "$lib/accordion/AccordionTrigger.svelte";
    import AccordionContent from "$lib/accordion/AccordionContent.svelte";
</script>

<AccordionRoot type="single">
    {#snippet items(value, disabled)}
        <AccordionItem expandedItems={value} value="1">
            {#snippet header(expanded)}
                <AccordionHeader level={2}>
                    <AccordionTrigger {expanded} {disabled} controlsId="content-1">
                        Accordion Item 1
                    </AccordionTrigger>
                </AccordionHeader>
            {/snippet}
            {#snippet content(expanded)}
                <AccordionContent {expanded}>
                    <p id="content-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                    </p>
                </AccordionContent>
            {/snippet}
        </AccordionItem>
        <AccordionItem expandedItems={value} value="2">
            {#snippet header(expanded)}
                <AccordionHeader level={2}>
                    <AccordionTrigger {expanded} {disabled} controlsId="content-2">
                        Accordion Item 2
                    </AccordionTrigger>
                </AccordionHeader>
            {/snippet}
            {#snippet content(expanded)}
                <AccordionContent {expanded}>
                    <p id="content-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                    </p>
                </AccordionContent>
            {/snippet}
        </AccordionItem>
        <AccordionItem expandedItems={value} value="3">
            {#snippet header(expanded)}
                <AccordionHeader level={2}>
                    <AccordionTrigger {expanded} {disabled} controlsId="content-3">
                        Accordion Item 3
                    </AccordionTrigger>
                </AccordionHeader>
            {/snippet}
            {#snippet content(expanded)}
                <AccordionContent {expanded}>
                    <p id="content-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, et.
                    </p>
                </AccordionContent>
            {/snippet}
        </AccordionItem>
    {/snippet}
</AccordionRoot>
