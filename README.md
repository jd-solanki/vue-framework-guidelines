# Vue Framework Guidelines

- Provide both a prop and a named slot for the same data for ultimate flexibility ([Tweet](https://twitter.com/danielkelly_io/status/1742564440287957489) - _tweet image don't use named slot but author mentioned it in thread_)
- You can also go with vuetify's aprroach where you provide additional component with default slot for rendering custom content but with styles from framework.
  <details>
  <summary>View Image</summary>
  
  ![image](https://github.com/jd-solanki/vue-framework-guidelines/assets/47495003/b405bcab-2d2d-4488-925f-8c611f4233ac)
  
  </details>

- For boolean props, use `is-` or `should-` prefix. E.g. `<SomeComponent is-active />`
