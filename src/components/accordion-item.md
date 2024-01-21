# Accordion Item

:::info
Single accordion item can also exist for cases like single collapsible content
:::

It's fine to not provide props for title prefix icon & arrow icon because it can involve transitions based on icon type. So, it's better to handle it in user land.

## Props

- `title`: Title of accordion item
- `value`: Value of accordion item. Used for identifying accordion item in events and slots
- `disabled`: Make accordion item disabled
- `open`: Make accordion item open by default

## Slots

- `before-title`: Render content before title for each accordion item. E.g. icon, checkbox, badge, etc. Expose looping accordion item as slot prop
- `title`: Rendering custom title other than just plain text. Expose looping accordion item as slot prop
- `after-title`: Render content after title for each accordion item. E.g. arrow/close icon, badge, etc. Expose looping accordion item as slot prop
- `default`: Slot for rendering accordion item content

## Events

- `change`: When accordion item is opened/closed

## UX

- Whole Accordion header should be clickable instead of just accordion title for opening/closing accordion. If your accordion header involves some interactive elements like checkbox, radio, etc. then you can make those elements clickable and rest of the header should be clickable for toggling accordion item.
