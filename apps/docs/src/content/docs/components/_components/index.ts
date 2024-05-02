export { default as Features } from "./Features.astro";
export { default as Links } from "./Links.astro";

import Introduction from "./api/Introduction.astro";
import Props from "./api/Props.astro";
import DataAttributes from "./api/DataAttributes.astro";

export const API = {
    Introduction,
    Props,
    DataAttributes
};

import Keyboard from "./a11y/Keyboard.astro";
import Events from "./a11y/Events.astro";
import ARIAAttributes from "./a11y/ARIAAttributes.astro";

export const A11y = {
    Keyboard,
    Events,
    ARIAAttributes
};
