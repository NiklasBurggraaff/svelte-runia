export type ARIALabel =
    | { "aria-label": string; "aria-labelledby"?: never }
    | { "aria-labelledby": string; "aria-label"?: never };

export type ARIALabelOrContent =
    | { labelledByContent: true; "aria-label"?: never; "aria-labelledby"?: never }
    | { "aria-label": string; "aria-labelledby"?: never; labelledByContent?: never }
    | { "aria-labelledby": string; "aria-label"?: never; labelledByContent?: never };
