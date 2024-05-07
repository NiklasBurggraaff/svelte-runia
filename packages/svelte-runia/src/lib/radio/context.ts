import { getContextKey } from "$lib/context.js";
import type { ValueEventHandlers } from "$lib/events.js";
import type { Orientation } from "$lib/moves.js";
import { getContext, setContext } from "svelte";

export type RadioGroupState = {
    element: HTMLElement | undefined;
    name: string | undefined;
    value: string | null;
    required: boolean;
    disabled: boolean;
    orientation: Orientation | undefined;
};

export type RadioGroupContext = {
    radioGroupState: RadioGroupState;
    buttonEvents: ValueEventHandlers;
};

export function setRadioGroupContext(context: RadioGroupContext) {
    setContext<RadioGroupContext>(getContextKey("radio-group"), context);
}

export function getRadioGroupContext(): RadioGroupContext {
    return getContext<RadioGroupContext>(getContextKey("radio-group"));
}
