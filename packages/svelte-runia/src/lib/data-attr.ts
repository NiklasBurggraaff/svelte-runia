export const DATA_ATTR_PREFIX = "svelte-runia";

const PublicDataAttributes = ["state", "disabled"];
export type PublicDataAttributes = (typeof PublicDataAttributes)[number];

const GeneralDataAttributes = ["value"];
type GeneralDataAttributes = (typeof GeneralDataAttributes)[number];
const ComponentDataAttributes = ["accordion-trigger", "radio-button"];
export type ComponentDataAttributes = (typeof ComponentDataAttributes)[number];

type PrivateDataAttributes = GeneralDataAttributes | ComponentDataAttributes;

export type DataAttributes = PublicDataAttributes | PrivateDataAttributes;

function getDataAttribute(name: DataAttributes) {
    if (PublicDataAttributes.includes(name)) {
        return getPublicDataAttribute(name);
    } else {
        return getPrivateDataAttribute(name);
    }
}

export function getPublicDataAttribute(name: PublicDataAttributes) {
    return `data-${name}`;
}

export function getPrivateDataAttribute(name: PrivateDataAttributes) {
    return `data-${DATA_ATTR_PREFIX}-${name}`;
}

export function getChildElements(
    element: HTMLElement,
    name: ComponentDataAttributes,
    exclude: DataAttributes | undefined = "disabled"
): Array<HTMLElement> {
    const nameQuery = `[${getDataAttribute(name)}]`;

    let query: string | undefined;
    if (exclude === undefined) {
        query = nameQuery;
    } else {
        const excludeQuery = `:not([${getDataAttribute(exclude)}])`;
        query = `${nameQuery}${excludeQuery}`;
    }

    return Array.from(element.querySelectorAll(query));
}

export function findValueIndex(
    elements: Array<Element>,
    value: string,
    dataAttr?: ComponentDataAttributes
) {
    if (dataAttr === undefined) {
        dataAttr = "value";
    }
    const dataAttribute = getDataAttribute(dataAttr);
    return elements.findIndex((radioItem) => radioItem.getAttribute(dataAttribute) === value);
}

export function getValue(
    elements: Array<Element>,
    index: number,
    dataAttr?: ComponentDataAttributes
) {
    if (dataAttr === undefined) {
        dataAttr = "value";
    }

    const dataAttribute = getDataAttribute(dataAttr);
    const value = elements[index].getAttribute(dataAttribute);

    if (value === null) {
        return undefined;
    }

    return value;
}
