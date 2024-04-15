<script lang="ts">
    import ChildButton from "$lib/button/ChildButton.svelte";
    import TextButton from "$lib/button/TextButton.svelte";
    import Button from "$lib/button/Button.svelte";
    import ToggleButton from "$lib/button/ToggleButton.svelte";
    import MixedToggleButton from "$lib/button/MixedToggleButton.svelte";

    function onclick() {
        window.alert("clicked");
    }

    let buttonState = $state(false);
    let mixedState: "true" | "false" | "mixed" = $state("false");
</script>

<h1>Button</h1>

<div style="padding: 1rem">
    <h2>Default button</h2>
    <button {onclick}>Click me</button>
</div>

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
    <h2>Disabled</h2>
    <Button disabled {onclick} aria-label="Click me">Content</Button>
</div>

<div style="padding: 1rem">
    <h2>Text Button</h2>
    <TextButton {onclick} name="Click me" />
</div>

<div style="padding: 1rem">
    <h2>Child Button (label)</h2>
    <ChildButton {onclick} aria-label="Click me">
        {#snippet children(props)}
            <div {...props}>Content</div>
        {/snippet}
    </ChildButton>
</div>

<div style="padding: 1rem">
    <h2>Child Button (labelled by)</h2>
    <ChildButton {onclick} aria-labelledby="child-id">
        {#snippet children(props)}
            <div {...props}>Content</div>
        {/snippet}
    </ChildButton>
    <div id="child-id">Click button</div>
</div>

<div style="padding: 1rem">
    <h2>Toggle Button</h2>
    <ToggleButton bind:state={buttonState} aria-label="Toggle me">
        State: {buttonState ? "on" : "off"}
    </ToggleButton>
</div>

<div style="padding: 1rem">
    <h2>Mixed Toggle Button</h2>
    <MixedToggleButton bind:state={mixedState} aria-label="Toggle me">
        State: {mixedState}
    </MixedToggleButton>
</div>

<div style="padding: 1rem">
    <h2>Disabled Toggle Button</h2>
    <ToggleButton disabled bind:state={buttonState} aria-label="Toggle me">
        State: {buttonState ? "on" : "off"}
    </ToggleButton>
</div>
