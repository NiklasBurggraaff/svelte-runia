<script lang="ts">
    import RadioGroup from "$lib/select/radio/RadioGroup.svelte";
    import RadioItem from "$lib/select/radio/RadioItem.svelte";
    import { scale } from "svelte/transition";

    let picked = $state("red");

    let group = $state(undefined);
    let group2 = $state("blue");
    let group3 = $state(undefined);
    let group4 = $state("blue");
</script>

<div style="padding: 1rem">
    <RadioGroup bind:value={group} id="1">
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="blue" id="blue" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="blue">Blue</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="red" id="red" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="red">Red</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="green" id="green" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="green">Green</label>
        </div>
    </RadioGroup>
</div>

<div style="padding: 1rem">
    <RadioGroup bind:value={group2} id="2">
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="blue" id="blue2" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="blue2">Blue</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="red" id="red2" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="red2">Red</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="green" id="green2" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="green2">Green</label>
        </div>
    </RadioGroup>
</div>

<div style="padding: 1rem">
    <RadioGroup bind:value={group3} id="3" defaultValue="red">
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="blue" id="blue3" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="blue3">Blue</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="red" id="red3" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="red3">Red</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="green" id="green3" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="green3">Green</label>
        </div>
    </RadioGroup>
</div>

<div style="padding: 1rem">
    <RadioGroup bind:value={group4} id="4" defaultValue="red">
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="blue" id="blue4" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="blue4">Blue</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="red" id="red4" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="red4">Red</label>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center">
            <RadioItem value="green" id="green4" class="h-6 w-6 rounded-full border-2 p-1">
                {#snippet indicator()}
                    <div transition:scale|global class="h-full w-full rounded-full bg-slate-500" />
                {/snippet}
            </RadioItem>
            <label for="green4">Green</label>
        </div>
    </RadioGroup>
</div>

<div style="padding: 1rem">
    <div>Picked: {picked}</div>

    <fieldset>
        <legend>Pill</legend>
        <input id="blue-pill" bind:group={picked} type="radio" value="blue" />
        <label for="blue-pill">Blue pill</label>
        <input id="red-pill" bind:group={picked} type="radio" value="red" />
        <label for="red-pill">Red pill</label>
    </fieldset>
</div>

<div>
    <fieldset>
        <legend>Which is the best color?</legend>
        <p>
            <input name="colorOption" type="radio" id="purple" />
            <label for="purple">Purple</label>
        </p>
        <p>
            <input name="colorOption" type="radio" id="aubergine" />
            <label for="aubergine">Aubergine</label>
        </p>
        <p>
            <input name="colorOption" type="radio" id="magenta" />
            <label for="magenta">Magenta</label>
        </p>
        <p>
            <input name="colorOption" type="radio" id="all" />
            <label for="all">All of the above</label>
        </p>
    </fieldset>
</div>
