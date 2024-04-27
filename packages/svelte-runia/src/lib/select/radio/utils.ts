import { getDataAttribute } from "$lib/data-attr.js";
import type { Writable } from "svelte/store";

const dataAttr = getDataAttribute("radio-item");

export const radioItemAttrs = Object.fromEntries([dataAttr].map((attr) => [attr, ""]));

// export const onClick

export type RadioGroupContext = {
    valueStore: Writable<string | undefined>;
    groupElement: HTMLDivElement | undefined;
    setValue: (value: string) => void;
};
