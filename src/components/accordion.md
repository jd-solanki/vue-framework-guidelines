# Accordion

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
