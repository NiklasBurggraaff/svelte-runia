import { getDataAttribute } from "$lib/data-attr.js";
import type { ValueEventHandlers } from "$lib/events.js";

export const accordionTriggerDataAttr = getDataAttribute("accordion-trigger");
export const valueDataAttr = getDataAttribute("value");

export function getAccordionTriggerDataAttributes(value: string) {
    return {
        [accordionTriggerDataAttr]: "",
        [valueDataAttr]: value
    };
}

export type AccordionState = {
    value: string[];
    disabled: boolean;
    collapsible: boolean;
};
export type AccordionItemState = {
    disabled: boolean;
};

export type AccordionRootContext = {
    id: string;
    accordionState: AccordionState;
    triggerEvents: ValueEventHandlers;
};
export type AccordionItemContext = {
    value: string;
    itemState: AccordionItemState;
};
