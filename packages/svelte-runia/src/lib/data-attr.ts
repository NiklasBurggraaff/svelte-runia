export const DATA_ATTR_PREFIX = "svelte-runia";

type DataAttributes = "radio-item";

export function getDataAttribute(name: DataAttributes) {
    return `data-${DATA_ATTR_PREFIX}-${name}`;
}

export function getChildElements(element: HTMLElement, name: DataAttributes) {
    return element.querySelectorAll(`[${getDataAttribute(name)}]`);
}
