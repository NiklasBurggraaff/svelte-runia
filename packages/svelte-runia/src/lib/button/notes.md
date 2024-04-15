# Button Notes

- Order of usage (only use next one if you can use the one before):
  - TextButton: Ensures text content
  - Button: Ensure element has accessible name
    - Label: Add label
    - Labelled by: Add label by id (takes precedence over label)
  - ChildButton: Only use if you have to!!!

## Copy pasta

Use `<button>` or `<input>` with type="button" instead.
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button>

The purpose of aria-label is the same as aria-labelledby. Both provide an accessible name for an element. If there is no visible name for the element you can reference, use aria-label to provide the user with a recognizable accessible name. If label text is available in the DOM and it's possible to reference it for an acceptable user experience, prefer to use aria-labelledby. Don't use both on the same element because aria-labelledby will take precedence over aria-label if both are applied.
<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label>

As an example, the mute button on an audio player labeled "mute" could indicate that sound is muted by setting the aria-pressed state true. The label of a toggle button should not change when its state changes.
