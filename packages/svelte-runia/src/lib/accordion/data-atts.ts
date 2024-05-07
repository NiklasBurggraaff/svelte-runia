import {
    getChildElements,
    getPrivateDataAttribute,
    getPublicDataAttribute
} from "$lib/data-attr.js";
import type { Orientation } from "$lib/moves.js";

export function getAccordionTriggers(element: HTMLElement) {
    return getChildElements(element, "accordion-trigger");
}

const stateDataAttr = getPublicDataAttribute("state");
const disabledDataAttr = getPublicDataAttribute("disabled");
const orientationDataAttr = getPublicDataAttribute("orientation");

const valueDataAttr = getPrivateDataAttribute("value");
const accordionTriggerDataAttr = getPrivateDataAttribute("accordion-trigger");

export function getAccordionRootDataAttributes(disabled: boolean, orientation: Orientation) {
    return {
        [disabledDataAttr]: disabled ? "" : undefined,
        [orientationDataAttr]: orientation
    };
}

export function getAccordionItemDataAttributes(
    expanded: boolean,
    disabled: boolean,
    orientation: Orientation
) {
    return {
        [stateDataAttr]: expanded ? "open" : "closed",
        [disabledDataAttr]: disabled ? "" : undefined,
        [orientationDataAttr]: orientation
    };
}

export function getAccordionTriggerDataAttributes(
    value: string,
    disabled: boolean,
    expanded: boolean,
    orientation: Orientation
) {
    return {
        [accordionTriggerDataAttr]: "",
        [valueDataAttr]: value,
        [stateDataAttr]: expanded ? "open" : "closed",
        [disabledDataAttr]: disabled ? "" : undefined,
        [orientationDataAttr]: orientation
    };
}
