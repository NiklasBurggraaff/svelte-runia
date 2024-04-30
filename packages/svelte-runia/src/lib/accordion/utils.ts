import { getDataAttribute } from "$lib/data-attr.js";
import { getValueIndex as getValueIndexMain, getValue as getValueMain } from "$lib/data-attr.js";
import type { ValueEventHandlers } from "$lib/events.js";

export const accordionItemDataAttr = getDataAttribute("accordion-item");
export const valueDataAttr = getDataAttribute("value");

export function getAccordionItemDataAttributes(value: string) {
    return {
        [accordionItemDataAttr]: "",
        [valueDataAttr]: value
    };
}

export type AccordionItemInfo = {
    setExpanded: (newExpanded: boolean) => void;
};

export type AccordionState = {
    value: string[];
    disabled: boolean;
};

export type AccordionRootContext = {
    id: string;
    state: AccordionState;
    triggerEvents: ValueEventHandlers;
};
export type AccordionItemContext = {
    value: string;
};

export function getValueIndex(radioItems: Array<Element>, value: string) {
    return getValueIndexMain(radioItems, value, "value");
}

export function getValue(radioItems: Array<Element>, index: number) {
    return getValueMain(radioItems, index, "value");
}
