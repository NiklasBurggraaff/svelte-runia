<script>
    import RadioGroup from "$lib/select/radio/RadioGroup.svelte";
    import Radio from "$lib/select/radio/Radio.svelte";

    let picked = $state("red");

    let group = $state("blue");
</script>

<div style="padding: 1rem">
    <RadioGroup>
        <Radio value="blue" bind:groupValue={group}>
            {#snippet indicator(checked)}
                <div class="indicator">
                    {#if checked}
                        <span class="indicator-inner"></span>
                    {/if}
                </div>
            {/snippet}
            Blue
        </Radio>
        <Radio value="red" bind:groupValue={group}>
            {#snippet indicator(checked)}
                <div class="indicator">
                    {#if checked}
                        <span class="indicator-inner"></span>
                    {/if}
                </div>
            {/snippet}
            Red
        </Radio>
        <Radio value="green" bind:groupValue={group}>
            {#snippet indicator(checked)}
                <div class="indicator">
                    {#if checked}
                        <span class="indicator-inner"></span>
                    {/if}
                </div>
            {/snippet}
            Green
        </Radio>
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

<div style="padding: 1rem">
    <div role="radiogroup" aria-labelledby="question">
        <div id="question">Which is the best color?</div>
        <div id="radioGroup">
            <p>
                <span
                    id="colorOption_0"
                    tabindex="0"
                    role="radio"
                    aria-checked="false"
                    aria-labelledby="purple"
                    style="display:inline-block; width: 1rem; height: 1rem;"
                ></span>
                <span id="purple">Purple</span>
            </p>
            <p>
                <span
                    id="colorOption_1"
                    tabindex="-1"
                    role="radio"
                    aria-checked="false"
                    aria-labelledby="aubergine"
                    style="display:inline-block; width: 1rem; height: 1rem;"
                ></span>
                <span id="aubergine">Aubergine</span>
            </p>
            <p>
                <span
                    id="colorOption_2"
                    tabindex="-1"
                    role="radio"
                    aria-checked="false"
                    aria-labelledby="magenta"
                    style="display:inline-block; width: 1rem; height: 1rem;"
                ></span>
                <span id="magenta">Magenta</span>
            </p>
            <p>
                <span
                    id="colorOption_3"
                    tabindex="-1"
                    role="radio"
                    aria-checked="false"
                    aria-labelledby="all"
                    style="display:inline-block; width: 1rem; height: 1rem;"
                ></span>
                <span id="all">All of the above</span>
            </p>
        </div>
    </div>
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

<style>
    .indicator {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #767676;
    }

    .indicator-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .indicator-inner::after {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: black;
        border-radius: 50%;
    }
</style>
