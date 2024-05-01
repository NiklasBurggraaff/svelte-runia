import {
    getChildElements,
    getPrivateDataAttribute,
    getPublicDataAttribute
} from "$lib/data-attr.js";
import type { Orientation } from "$lib/moves.js";

export function getAccordionTriggers(element: HTMLElement) {
    return getChildElements(element, "accordion-trigger");
}

export const stateDataAttr = getPublicDataAttribute("state");
export const disabledDataAttr = getPublicDataAttribute("disabled");
export const orientationDataAttr = getPublicDataAttribute("orientation");

export const valueDataAttr = getPrivateDataAttribute("value");
export const accordionTriggerDataAttr = getPrivateDataAttribute("accordion-trigger");

export function getAccordionRootDataAttributes(orientation: Orientation) {
    return {
        [orientationDataAttr]: orientation
    };
}

export function getAccordionItemDataAttributes(
    expanded: boolean,
    disabled: boolean,
    orientation: Orientation
) {
    const stateValue = expanded ? "open" : "closed";
    if (disabled) {
        return {
            [stateDataAttr]: stateValue,
            [disabledDataAttr]: "",
            [orientationDataAttr]: orientation
        };
    } else {
        return {
            [stateDataAttr]: stateValue,
            [orientationDataAttr]: orientation
        };
    }
}

export function getAccordionTriggerDataAttributes(
    value: string,
    disabled: boolean,
    expanded: boolean,
    orientation: Orientation
) {
    const stateValue = expanded ? "open" : "closed";

    if (disabled) {
        return {
            [accordionTriggerDataAttr]: "",
            [valueDataAttr]: value,
            [disabledDataAttr]: "",
            [stateDataAttr]: stateValue,
            [orientationDataAttr]: orientation
        };
    } else {
        return {
            [accordionTriggerDataAttr]: "",
            [valueDataAttr]: value,
            [stateDataAttr]: stateValue,
            [orientationDataAttr]: orientation
        };
    }
}
