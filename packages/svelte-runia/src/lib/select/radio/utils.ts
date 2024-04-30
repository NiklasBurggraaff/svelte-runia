import { getDataAttribute } from "$lib/data-attr.js";
import type { Writable } from "svelte/store";

export const radioItemDataAttr = getDataAttribute("radio-item");
export const valueDataAttr = getDataAttribute("value");

export function getRadioItemDataAttributes(value: string) {
    return {
        [radioItemDataAttr]: "",
        [valueDataAttr]: value
    };
}

export type RadioGroupContext = {
    groupName: string | undefined;
    valueStore: Writable<string | undefined>;
    getRadioItems: () => Array<HTMLElement>;
    setValue: (newValue: string) => void;
    selectNext: (currentValue: string) => void;
    selectPrevious: (currentValue: string) => void;
};
