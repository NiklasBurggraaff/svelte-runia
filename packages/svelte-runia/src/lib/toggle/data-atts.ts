import { getChildElements, getPublicDataAttribute } from "$lib/data-attr.js";

export function getAccordionTriggers(element: HTMLElement) {
    return getChildElements(element, "accordion-trigger");
}

const stateDataAttr = getPublicDataAttribute("state");
const disabledDataAttr = getPublicDataAttribute("disabled");

export function getToggleDataAttributes(pressed: boolean, disabled: boolean) {
    if (disabled) {
        return {
            [stateDataAttr]: pressed ? "on" : "off",
            [disabledDataAttr]: ""
        };
    } else {
        return {
            [stateDataAttr]: pressed ? "on" : "off"
        };
    }
}
