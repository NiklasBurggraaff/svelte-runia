export const DATA_ATTR_PREFIX = "svelte-runia";

type DataAttributes = "radio-item" | "value";

export function getDataAttribute(name: DataAttributes) {
    return `data-${DATA_ATTR_PREFIX}-${name}`;
}

export function getChildElements(element: HTMLElement, name: DataAttributes): Array<HTMLElement> {
    return Array.from(element.querySelectorAll(`[${getDataAttribute(name)}]`));
}
