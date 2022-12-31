### Why Emotion instead of StyledComponents?

#### Export CSS as Class

Consider we need to migrate existing CSS classes to CSS-in-JS. With Emotion, we can do this easily.
Styled Components cannot do this at all. With Styled Components, CSS declarations have to be bound to Components. So, you cannot write baseline CSS class, that later would be used by many components.
Example can be: .form-control class in Bootstrap. That later could be used by different input types.

Example in Emotion.js

```css
export default css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
        color: ${color};
    }
`
```

See:

- https://stackoverflow.com/questions/52378924/use-styled-components-to-supply-a-css-class

#### Framework Agnostic

- Emotion.js potentially can be used in frameworks other than React.
- Styled Components library is bound to React
