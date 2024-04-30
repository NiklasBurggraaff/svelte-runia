export const DATA_ATTR_PREFIX = "svelte-runia";

type DataAttributes = "accordion-item" | "radio-item" | "value";

export function getDataAttribute(name: DataAttributes) {
    return `data-${DATA_ATTR_PREFIX}-${name}`;
}

export function getChildElements(element: HTMLElement, name: DataAttributes): Array<HTMLElement> {
    return Array.from(element.querySelectorAll(`[${getDataAttribute(name)}]`));
}

export function getValueIndex(elements: Array<Element>, value: string, dataAttr: DataAttributes) {
    const dataAttribute = getDataAttribute(dataAttr);
    return elements.findIndex((radioItem) => radioItem.getAttribute(dataAttribute) === value);
}

export function getValue(elements: Array<Element>, index: number, dataAttr: DataAttributes) {
    const dataAttribute = getDataAttribute(dataAttr);
    const value = elements[index].getAttribute(dataAttribute);

    if (value === null) {
        return undefined;
    }

    return value;
}
