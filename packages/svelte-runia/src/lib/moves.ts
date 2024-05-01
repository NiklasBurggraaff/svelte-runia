import { findValueIndex, getValue } from "$lib/data-attr.js";

export type Direction = "ltr" | "rtl";
export type Orientation = "horizontal" | "vertical";

function getResult(elements: HTMLElement[], index: number) {
    return { index, value: getValue(elements, index)!, element: elements[index] };
}

export function moveNext(elements: HTMLElement[], currentValue: string, loop: boolean) {
    const index = findValueIndex(elements, currentValue);

    let nextIndex = index + 1;
    if (nextIndex >= elements.length) {
        if (loop) {
            nextIndex = 0;
        } else {
            return;
        }
    }

    return getResult(elements, nextIndex);
}

export function movePrevious(elements: HTMLElement[], currentValue: string, loop: boolean) {
    const index = findValueIndex(elements, currentValue);

    let previousIndex = index - 1;
    if (previousIndex < 0) {
        if (loop) {
            previousIndex = elements.length - 1;
        } else {
            return;
        }
    }

    return getResult(elements, previousIndex);
}

export function moveStart(elements: HTMLElement[], currentValue: string) {
    const index = findValueIndex(elements, currentValue);

    if (index === 0) {
        return;
    }

    return getResult(elements, 0);
}

export function moveEnd(elements: HTMLElement[], currentValue: string) {
    const index = findValueIndex(elements, currentValue);

    if (index === elements.length - 1) {
        return;
    }

    return getResult(elements, elements.length - 1);
}

export function moveLeft(
    elements: HTMLElement[],
    currentValue: string,
    loop: boolean,
    direction: Direction
) {
    switch (direction) {
        case "ltr":
            return movePrevious(elements, currentValue, loop);
        case "rtl":
            return moveNext(elements, currentValue, loop);
    }
}

export function moveRight(
    elements: HTMLElement[],
    currentValue: string,
    loop: boolean,
    direction: Direction
) {
    switch (direction) {
        case "ltr":
            return moveNext(elements, currentValue, loop);
        case "rtl":
            return movePrevious(elements, currentValue, loop);
    }
}
