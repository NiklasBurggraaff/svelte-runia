export const CONTEXT_KEY_PREFIX = "svelte-runia";

type ContextKeys = "radio-group";

export function getContextKey(name: ContextKeys) {
    return `${CONTEXT_KEY_PREFIX}:${name}`;
}
