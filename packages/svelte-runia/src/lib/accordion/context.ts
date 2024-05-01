import type { ValueEventHandlers } from "$lib/events.js";
import type { Orientation } from "$lib/moves.js";

export type AccordionState = {
    value: string[];
    disabled: boolean;
    collapsible: boolean;
    orientation: Orientation;
};
export type AccordionItemState = {
    disabled: boolean;
};

export type AccordionRootContext = {
    accordionId: string;
    accordionState: AccordionState;
    triggerEvents: ValueEventHandlers;
};
export type AccordionItemContext = {
    value: string;
    itemState: AccordionItemState;
};
