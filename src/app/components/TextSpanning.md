# TextSpanning Component

A flexible and robust React component for rendering text with mixed font families, weights, sizes, and styles within a single text block.

## Features

- **Multiple Font Families**: Support for Gilroy and Albra Sans fonts
- **Font Weight Control**: Supports weights 400, 500, 600, 700 with both numeric and string values
- **Dynamic Font Sizes**: Accepts both pixel values and CSS units
- **Color Customization**: Individual color control for each text span
- **Font Style Options**: Normal and italic styles
- **CSS Class Integration**: Works with both CSS modules and custom styling
- **Flexible Styling**: Support for custom inline styles
- **TypeScript**: Full TypeScript support with type safety

## Props

### TextSpanningProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `spans` | `SpanItem[]` | Required | Array of text spans with individual styling |
| `className` | `string` | Optional | CSS class for the wrapper span |
| `style` | `React.CSSProperties` | Optional | Inline styles for the wrapper span |

### SpanItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Required | The text content to display |
| `fontFamily` | `'gilroy' \| 'albra' \| 'inherit'` | Optional | Font family to use |
| `fontWeight` | `400 \| 500 \| 600 \| 700 \| 'normal' \| 'medium' \| 'semibold' \| 'bold'` | Optional | Font weight |
| `fontSize` | `string \| number` | Optional | Font size (px if number, CSS unit if string) |
| `color` | `string` | Optional | Text color |
| `fontStyle` | `'normal' \| 'italic'` | Optional | Font style |
| `className` | `string` | Optional | CSS class for the individual span |
| `style` | `React.CSSProperties` | Optional | Inline styles for the individual span |

## Usage Examples

### Basic Font Family and Weight

```tsx
<TextSpanning
  spans={[
    { text: "Regular text ", fontFamily: 'gilroy', fontWeight: 400 },
    { text: "Bold text", fontFamily: 'gilroy', fontWeight: 700 }
  ]}
/>
```

### Different Sizes and Colors

```tsx
<TextSpanning
  spans={[
    { 
      text: "Small text ", 
      fontFamily: 'gilroy', 
      fontWeight: 400, 
      fontSize: '14px', 
      color: '#666' 
    },
    { 
      text: "Large text", 
      fontFamily: 'albra', 
      fontWeight: 700, 
      fontSize: '24px', 
      color: '#ff0000' 
    }
  ]}
/>
```

### Using CSS Classes

```tsx
<TextSpanning
  spans={[
    { text: "Styled with ", className: styles.customClass },
    { text: "CSS classes", className: styles.anotherClass }
  ]}
/>
```

### Mixed Approaches

```tsx
<TextSpanning
  spans={[
    { text: "Font props ", fontFamily: 'gilroy', fontWeight: 700 },
    { text: "CSS class ", className: styles.highlight },
    { 
      text: "Custom styles", 
      style: { 
        textDecoration: 'underline',
        background: 'yellow' 
      } 
    }
  ]}
/>
```

### Advanced Styling

```tsx
<TextSpanning
  spans={[
    { 
      text: "Gradient text ",
      fontFamily: 'albra',
      fontWeight: 700,
      style: {
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }
    },
    {
      text: "with shadow",
      fontFamily: 'gilroy',
      fontWeight: 600,
      style: {
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }
    }
  ]}
/>
```

## Available Font Classes

The component automatically generates CSS classes for font combinations:

- `.gilroy400`, `.gilroy500`, `.gilroy600`, `.gilroy700`
- `.albra400`, `.albra500`, `.albra600`, `.albra700`

These classes are available in both `TextSpanning.module.css` and `HeroSection.module.css`.

## Font Files Required

Ensure these font files are present in your `/public/fonts/` directory:

- `Gilroy-Light.ttf` (300)
- `Gilroy-Regular.ttf` (400) 
- `Gilroy-Medium.ttf` (500)
- `Gilroy-Bold.ttf` (700)
- `Gilroy-Heavy.ttf` (900)
- `AlbraSans-Regular.otf` (400)
- `AlbraSans-Bold.otf` (700)

## Performance Optimizations

- Uses `font-display: swap` for better loading performance
- Supports efficient CSS class-based styling
- TypeScript optimized for tree-shaking

## Notes

- When both `fontFamily`/`fontWeight` props and `className` are provided, CSS classes take precedence
- Custom `style` prop values override all other styling options
- Font weights 500 and 600 may fall back to available weights if specific font files aren't present
- The component renders spans within a wrapper span element 