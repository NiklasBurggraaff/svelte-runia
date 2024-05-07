import {
    getChildElements,
    getPrivateDataAttribute,
    getPublicDataAttribute
} from "$lib/data-attr.js";
import type { Orientation } from "$lib/moves.js";

export function getRadioButtons(element: HTMLElement) {
    return getChildElements(element, "radio-button");
}

const stateDataAttr = getPublicDataAttribute("state");
const disabledDataAttr = getPublicDataAttribute("disabled");
const orientationDataAttr = getPublicDataAttribute("orientation");

const valueDataAttr = getPrivateDataAttribute("value");
const radioButtonDataAttr = getPrivateDataAttribute("radio-button");

export function getRadioGroupRootDataAttributes(
    disabled: boolean,
    orientation: Orientation | undefined
) {
    return {
        [disabledDataAttr]: disabled ? "" : undefined,
        [orientationDataAttr]: orientation
    };
}

export function getRadioButtonDataAttributes(
    value: string,
    checked: boolean,
    disabled: boolean,
    orientation: Orientation | undefined
) {
    return {
        [radioButtonDataAttr]: "",
        [valueDataAttr]: value,
        [stateDataAttr]: checked ? "checked" : "unchecked",
        [disabledDataAttr]: disabled ? "" : undefined,
        [orientationDataAttr]: orientation
    };
}
