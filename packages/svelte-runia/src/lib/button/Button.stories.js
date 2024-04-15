import ButtonView from "./ButtonView.svelte";

export default {
    title: "Button",
    component: ButtonView,
    tags: ["autodocs"]
};

export const Label = () => ({
    Component: ButtonView,
    props: {
        "aria-label": "Click me"
    }
});

export const LabelledBy = () => ({
    Component: ButtonView,
    props: {
        "aria-labelledby": "label-id"
    }
});
