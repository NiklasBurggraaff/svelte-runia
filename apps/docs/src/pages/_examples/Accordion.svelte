<script lang="ts">
import { Accordion } from "@niklasburggraaff/svelte-runia";
import { slide } from "svelte/transition";
</script>

<Accordion.Root type="single" collapsible>
    <Accordion.Item class="border-b" value="furthark-essentials">
        <Accordion.Header level={5}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-1 text-center text-base [&[data-state=open]>svg]:rotate-180"
            >
                Furthark Essentials
                <svg
                    class="size-8 transition-transform duration-200"
                    style={`width: "1rem", height: "1rem"`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"
                    />
                </svg>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="line-clamp-2 pb-2 pl-1.5" transition:slide={{ duration: 200 }}>
                The Elder Futhark, used from the 2nd to 8th centuries, comprised 24 runic
                characters, each bearing significance in magic, divination, and communication.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item class="border-b" value="norse-myths">
        <Accordion.Header level={5}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-1 text-center text-base [&[data-state=open]>svg]:rotate-180"
            >
                Norse Myths 101
                <svg
                    class="size-8 transition-transform duration-200"
                    style={`width: "1rem", height: "1rem"`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"
                    />
                </svg>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="line-clamp-2 pb-2 pl-1.5" transition:slide={{ duration: 200 }}>
                Norse mythology, a tapestry of gods, giants, and heroes, offers insights into
                ancient Scandinavian beliefs, from the creation of the cosmos to the battles of
                Ragnarök.
            </div>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item class="border-b" value="viking-explorers">
        <Accordion.Header level={5}>
            <Accordion.Trigger
                class="flex w-full items-center justify-between bg-transparent py-1 text-center text-base [&[data-state=open]>svg]:rotate-180"
            >
                Viking Explorers
                <svg
                    class="size-8 transition-transform duration-200"
                    style={`width: "1rem", height: "1rem"`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"
                    />
                </svg>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
            <div class="line-clamp-2 pb-2 pl-1.5" transition:slide={{ duration: 200 }}>
                Vikings, from the 8th to 11th centuries, sailed seas, established trade routes, and
                left their mark on history through exploration and expansion.
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
