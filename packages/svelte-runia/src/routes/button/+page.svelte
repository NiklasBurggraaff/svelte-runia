<script lang="ts">
    import ChildButton from "$lib/button/ChildButton.svelte";
    import TextButton from "$lib/button/TextButton.svelte";
    import Button from "$lib/button/Button.svelte";

    function onclick() {
        window.alert("clicked");
    }
</script>

<h1>Button</h1>

<div style="padding: 1rem">
    <h2>Default button</h2>
    <button {onclick}>Click me</button>
</div>

<!-- <div style="padding: 1rem"><Button {onclick}>Click me</Button></div> -->

<div style="padding: 1rem">
    <h2>ARIA label</h2>
    <Button {onclick} aria-label="Click me">Content</Button>
</div>

<div style="padding: 1rem">
    <h2>ARIA labelled by</h2>
    <Button {onclick} aria-labelledby="label-id">Content</Button>
    <div id="label-id">Click button</div>
</div>

<div style="padding: 1rem">
    <h2>Text Button</h2>
    <TextButton {onclick} name="Click me" />
</div>

<div style="padding: 1rem">
    <h2>Child Button (label)</h2>
    <ChildButton {onclick} asChild aria-label="Click me">
        {#snippet children(props)}
            <div {...props}>Content</div>
        {/snippet}
    </ChildButton>
</div>

<div style="padding: 1rem">
    <h2>Child Button (labelled by)</h2>
    <ChildButton {onclick} asChild aria-labelledby="child-id">
        {#snippet children(props)}
            <div {...props}>Content</div>
        {/snippet}
    </ChildButton>
    <div id="child-id">Click button</div>
</div>
