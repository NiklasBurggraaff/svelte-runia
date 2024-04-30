import { getDataAttribute } from "$lib/data-attr.js";
import { getValueIndex as getValueIndexMain, getValue as getValueMain } from "$lib/data-attr.js";

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

export type AccordionRootContext = {
    registerItem: (value: string, other: AccordionItemInfo) => void;
    unRegisterItem: (value: string) => void;
    /**
     * @returns true if the item is expanded after the toggle and false if not
     */
    toggleItem: (value: string, currentExpanded: boolean) => boolean;
};

export type AccordionItemContext = {
    value: string;
    initialExpanded: boolean;
    setExpanded: (newExpanded: boolean) => void;
};

export function getValueIndex(radioItems: Array<Element>, value: string) {
    return getValueIndexMain(radioItems, value, "value");
}

export function getValue(radioItems: Array<Element>, index: number) {
    return getValueMain(radioItems, index, "value");
}
