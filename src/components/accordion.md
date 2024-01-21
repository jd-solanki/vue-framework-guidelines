# Accordion

:::details Example Usage

- [FAQ](https://dribbble.com/shots/21694708-Frequently-Asked-Questions-FAQs-Untitled-UI)
- [Schedule](https://dribbble.com/shots/20152811-Combo-Scheduled-videos)
- [Navigation](https://dribbble.com/shots/2702664-Responsive-Sidebar)
- [Form](https://dribbble.com/shots/19103913-Accordion-components-for-Figma-Frames-X)
:::

## Props

- `disabled`: Make accordion disabled
- `items`: Array of accordion item (`AccordionItem`) props

## Slots

- `before-title`: Render content before title for each accordion item. E.g. icon, checkbox, badge, etc. Expose looping accordion item as slot prop
- `title`: Rendering custom title other than just plain text. Expose looping accordion item as slot prop
- `after-title`: Render content after title for each accordion item. E.g. arrow/close icon, badge, etc. Expose looping accordion item as slot prop
- `<dynamic>-content`: Slot for rendering each accordion item content. Slot name will be dynamically generated for each accordion item based on `value` prop or index of item if `value` prop is not provided. e.g. `0-content` when value prop is not provided, `options-content` here `options` is value prop for accordion item

## Events

- `change`: When accordion item is opened/closed. Provide index or value prop as event parameters
