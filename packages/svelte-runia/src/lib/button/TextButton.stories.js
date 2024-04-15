import TextButton from "./TextButton.svelte";

export default {
    title: "TextButton",
    component: TextButton,
    tags: ["autodocs"]
};

export const Default = () => ({
    Component: TextButton,
    props: {
        name: "Click me"
    }
});
