# Guide

:::info
These are my thoughts feel free to open issue/PR in this repo to discuss this

🚧 This is still in development so I might arrange content as I write more.
:::

## Goals

- Framework API & Usage Stability is important because developers don't actively work on same project forever
- DX & Speed should not get compromised as this allows developing app faster
- Do consider the RTL & I18n
- When developer consumes your component framework and customize it their code shouldn't have to be duplicated due to framework limitations. Check [this](/scenarios.html#table-component-pagination-slot) scenario.

:::details My Thoughts

- I really like how nuxt is pluggable and we can extend it. It's great power when you use it, I wonder can UI framework be pluggable & extendable.
:::

## High Level Decisions

- Use CSS where possible instead of JS to make it faster
- Allow using any icon library and configuration to customize the icons used in high level component. E.g. Allow changing arrow icon in accordion or select component.

## CSS

- Use `oklch` color format for better HDR colors
- Use `color-mix` instead of opacity based color shades.
- If possible distribute component/lib styles seperately as package (like preset/plugin) so users can set different styles for components if needed. Agencies can even create their personal preset for custom styling without worrying about breaking the components.
- I noticed some great UI libraries like NuxtUI provides JS object to style the component. Furthermore, libs like MUI & PrimeVue takes it even further and allow you to style the components based on passed props like below:

  ```ts
  export default {
      root: ({ props, context, parent }) => ({ ... })
  }
  ```

  However, according to me it'll be more flexible if we use class (or attr) based approach instead where we just add a class if prop is used. For example, add `btn-disabled` class (or attr) when `disabled` prop is used. This makes flexible enough that even user viewing the site can even customize based on behavior of the component if they like. To encourage this, `:has` selector now supported in all browsers so I guess there's only one down side to this approach is now and that is component might end up with too much classes of we have many props.

- (_Optional_) Allow changing preset/theme on the fly for preview
- Style should consider RTL as well

## Documentation

- Ensure your component have API section and user can search though props,slots & events via single input
  - [UX] If possible provide configuration to keep it on top or bottom of the page according to user preference.
- Documentation should be interactive. You can either make [code editable right in code snippet](https://mui.com/material-ui/react-button/#basic-button) or provide [link to open code snippet in your framework's playground](https://vuetifyjs.com/en/components/buttons/#density).
  - Ensure using [Vue REPL playground](https://play.vuejs.org/) instead of CodePen or Sandbox for quick interactivity.

## Enterprise Solutions / Advanced

- Allow creating UI via text prompt. Refer to this amazing [tweet](https://twitter.com/zernonia/status/1742945562977251703)
- Allow a way to generate code from Figma Design
