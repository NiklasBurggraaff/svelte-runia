<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type DefaultValueProps =
        | {
              defaultValue: string;
              required: true;
          }
        | {
              defaultValue?: string;
              required?: false;
          };

    type Props = DefaultValueProps & {
        children: Snippet;
    } & HTMLAttributes<HTMLDivElement>;

    let { defaultValue, required, children, ...props }: Props = $props();
</script>

<div role="radiogroup" aria-required={required} {...props}>
    {@render children()}
</div>
