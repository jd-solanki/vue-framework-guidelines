# Component Design

- Provide both a prop and a named slot for the same data for ultimate flexibility ([Tweet](https://twitter.com/danielkelly_io/status/1742564440287957489) - _tweet image don't use named slot but author mentioned it in thread_)
- You can also go with vuetify's aprroach where you provide additional component with default slot for rendering custom content but with styles from framework.

  :::details  
  ![image](https://github.com/jd-solanki/vue-framework-guidelines/assets/47495003/b405bcab-2d2d-4488-925f-8c611f4233ac)
  :::

- For boolean props, use `is-` or `should-` prefix. E.g. `<SomeComponent is-active />`
- Provide [props default](https://vuetifyjs.com/en/features/global-configuration/#setup) like Vuetify and [PassThrough](https://primevue.org/passthrough) (for adding custom attributes) like PrimeVue
- Allow passing custom/own directive to the component & it's child. I guess if you implement props defaults & PassThrough it might get covered. For example, adding ripple to all buttons, list item, list item's action button etc.
- Provide [virtual components](https://vuetifyjs.com/en/features/global-configuration/#using-with-virtual-components) like Vuetify
- Provide High level component like `<Alert title="CPU Usage is High!" />` for quick prototype & common usage and low level component unstyled component like RadixUI `<Alert><AlertTitle class="text-red font-weight-medium">CPU Usage is High!<AlertTitle></Alert>` for customizing structure and style of the component.
- [Highly Opinionated] Props should be for functionality, class should be for styling & slots should be for content.
- Component transitions should be [customizable](https://anu-vue.netlify.app/guide/features/transitions.html#customizing-transitions).
- [Experimental & RnD] Allow overriding slots content once instead of writing same markup everywhere. E.g. We develop table component and provide pagination slot to override our pagination where we just proide left & right arrow to change page but user want pagination with numbers in this case user has to write same markup (Numbered Pagination) for overriding the pagination component everywhere table component is used. I don't have any way right now for implementing this but I guess @sxzz can help by somehow using [unplugin-macros](https://github.com/unplugin/unplugin-macros)
- When providing colors of the components (like button colors, alert colors) leave it to the preset so that it allows adding or removing colors however the user like. To achieve this you can set CSS color in style attr and let CSS apply text color or bg color by using CSS var defined in style attribute. This also allow defining the arbitrary colors. Finally, You have to take care of text color accessibility when some light color is used.

  ```html
  <button style="--component-color: primary" />
  <button style="--component-color: #111" />
  ```

- Allow overriding style via either some prop like Nuxt UI's `ui` or primeVue's `pt`. `<UButton :ui="{ icon: 'text-2xl' }">Button</UButton>` or there can be some CSS utility that allows styling children `for:.btn-icon:text-xl` (_syntax is invalid I guess_). This CSS based approach is more friendly to UnoCSS than Tailwind.
- Component variants & sizes should be [defined by the preset](https://ui.nuxt.com/elements/button#config) instead of imposing them in component itself. _Following, props for functionality & CSS for styling._
- Component text should get translated by user when locale changes
- Provide a way to override specific slot for all component instances at one place. E.g. Table pagination slots can just have arrows in your component framework but user might need numbered pagination so we can allow define render/callback function while registering plugin to override this pagination slot. Pass all props to this render/callback function so it can render the UI accordiongly. Also, Allow ignoring this per component usage for cases when user creates completely new custom component on top of our component.
