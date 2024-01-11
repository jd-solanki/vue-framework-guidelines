# Vue Framework Guidelines

<details>
<summary>💭 Thoughts</summary>

_These are my thoughts feel free to open issue in this repo to discuss this_

- Q: I really like how nuxt is pluggable and we can extend it. It's great power when you use it, I wonder can UI framework be pluggable & extendable.

</details>

<br />

## Component Design

- Provide both a prop and a named slot for the same data for ultimate flexibility ([Tweet](https://twitter.com/danielkelly_io/status/1742564440287957489) - _tweet image don't use named slot but author mentioned it in thread_)
- You can also go with vuetify's aprroach where you provide additional component with default slot for rendering custom content but with styles from framework.
  <details>
  <summary>View Image</summary>
  
  ![image](https://github.com/jd-solanki/vue-framework-guidelines/assets/47495003/b405bcab-2d2d-4488-925f-8c611f4233ac)
  
  </details>

- For boolean props, use `is-` or `should-` prefix. E.g. `<SomeComponent is-active />`
- Provide [props default](https://vuetifyjs.com/en/features/global-configuration/#setup) like Vuetify and [PassThrough](https://primevue.org/passthrough) (for adding custom attributes) like PrimeVue
- Allow passing custom/own directive to the component & it's child. I guess if you implement props defaults & PassThrough it might get covered. For example, adding ripple to all buttons, list item, list item's action button etc.
- Provide [virtual components](https://vuetifyjs.com/en/features/global-configuration/#using-with-virtual-components) like Vuetify
- Provide High level component like `<Alert title="CPU Usage is High!" />` for quick prototype & common usage and low level component unstyled component like RadixUI `<Alert><AlertTitle class="text-red font-weight-medium">CPU Usage is High!<AlertTitle></Alert>` for customizing structure and style of the component.
- [Highly Opinionated] Props should be for functionality, class should be for styling & slots should be for content.
- Component transitions should be [customizable](https://anu-vue.netlify.app/guide/features/transitions.html#customizing-transitions).
- [Experimental & RnD] Allow overriding slots content once instead of writing same markup everywhere. E.g. We develop table component and provide pagination slot to override our pagination where we just proide left & right arrow to change page but user want pagination with numbers in this case user has to write same markup (Numbered Pagination) for overriding the pagination component everywhere table component is used. I don't have any way right now for implementing this but I guess @sxzz can help by somehow using [unplugin-macros](https://github.com/unplugin/unplugin-macros)
- When providing colors of the components (like button colors, alert colors) leave it to the preset so that it allows adding or removing colors however the developer like. To achieve this you can set CSS color in style attr and let CSS apply text color or bg color by using CSS var defined in style attribute. This also allow defining the arbitrary colors. Finally, You have to take care of text color accessibility when some light color is used.

  ```html
  <button style="--component-color: primary" />
  <button style="--component-color: #111" />
  ```

- Allow overriding style via either some prop like Nuxt UI's `ui` or primeVue's `pt`. `<UButton :ui="{ icon: 'text-2xl' }">Button</UButton>` or there can be some CSS utility that allows styling children `for:.btn-icon:text-xl` (_syntax is invalid I guess_). This CSS based approach is more friendly to UnoCSS than Tailwind.

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

## Documentation

- Ensure your component have API section and user can search though props,slots & events via single input
  - [UX] If possible provide configuration to keep it on top or bottom of the page according to user preference.
- Documentation should be interactive. You can either make [code editable right in code snippet](https://mui.com/material-ui/react-button/#basic-button) or provide [link to open code snippet in your framework's playground](https://vuetifyjs.com/en/components/buttons/#density).
  - Ensure using [Vue REPL playground](https://play.vuejs.org/) instead of CodePen or Sandbox for quick interactivity.
 
## Enterprise Solutions / Advanced

- Allow creating UI via text prompt. Refer to this amazing [tweet](https://twitter.com/zernonia/status/1742945562977251703).
- Allow a way to generate code from Figma Design.
