import type { EventHandler } from "svelte/elements";

export type EventHandlers = { [key: string]: EventHandler };
export type ValueEventHandlers = { [key: string]: ValueEventHandler };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValueEventHandler = (value: string, event: any) => void;

export function addValueParam(value: string, events: ValueEventHandlers): EventHandlers {
    return Object.keys(events).reduce((result, key) => {
        result[key] = (event) => events[key](value, event);
        return result;
    }, {} as EventHandlers);
}
