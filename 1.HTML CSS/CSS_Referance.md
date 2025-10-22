# CSS Glossary - Properties with Effect Context

> **Effect On**: Current = affects the element itself | Children = affects child elements | Current + Descendants = affects element and inherits to children

---

## **BOX MODEL**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **width** | Current | Width of current element | div { width: 300px; } |
| **height** | Current | Height of current element | div { height: 200px; } |
| **padding** | Current | Space inside current element (between content and border) | padding: 20px; |
| **border** | Current | Border around current element | border: 2px solid black; |
| **margin** | Current | Space outside current element (pushes other elements away) | margin: 20px; |
| **box-sizing** | Current | How width/height are calculated for current element | box-sizing: border-box; |

---

## **DISPLAY & POSITIONING**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **display** | Current | How current element is rendered | display: block; / inline / flex / grid |
| **position** | Current | Positioning method for current element | position: relative; / absolute / fixed |
| **top/right/bottom/left** | Current | Offset for current positioned element | top: 20px; left: 10px; |
| **z-index** | Current | Stacking order of current element | z-index: 1000; |
| **float** | Current | Float current element left/right | float: left; |
| **clear** | Current | Prevent current element from wrapping around floats | clear: both; |
| **visibility** | Current | Visibility of current element | visibility: hidden; |
| **opacity** | Current | Transparency of current element | opacity: 0.5; |

---

## **FLEXBOX**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **display: flex** | Children | Makes current element a flex container for its children | .container { display: flex; } |
| **flex-direction** | Children | Direction of children's main axis | flex-direction: row; / column |
| **justify-content** | Children | Align children along main axis | justify-content: center; / space-between |
| **align-items** | Children | Align children along cross axis | align-items: center; / flex-start |
| **flex-wrap** | Children | Whether children wrap to new line | flex-wrap: wrap; / nowrap |
| **align-content** | Children | Align wrapped lines of children | align-content: space-between; |
| **gap** | Children | Space between children | gap: 20px; |
| **flex-grow** | Current | How much current element grows (responds to parent's flex) | .item { flex-grow: 1; } |
| **flex-shrink** | Current | How much current element shrinks (responds to parent's flex) | .item { flex-shrink: 0; } |
| **flex-basis** | Current | Initial size of current element (responds to parent's flex) | .item { flex-basis: 200px; } |
| **flex** | Current | Shorthand for grow, shrink, basis | .item { flex: 1; } |
| **align-self** | Current | Override parent's align-items for current element | .item { align-self: flex-end; } |
| **order** | Current | Change visual order of current element among siblings | .item { order: -1; } |

---

## **CSS GRID**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **display: grid** | Children | Makes current element a grid container for its children | .container { display: grid; } |
| **grid-template-columns** | Children | Define column tracks for children | grid-template-columns: 1fr 2fr 1fr; |
| **grid-template-rows** | Children | Define row tracks for children | grid-template-rows: 100px auto 100px; |
| **grid-template-areas** | Children | Named grid regions for children | grid-template-areas: "header header" "sidebar main"; |
| **gap / grid-gap** | Children | Space between children | gap: 20px; |
| **justify-items** | Children | Align children horizontally in their cells | justify-items: center; |
| **align-items** | Children | Align children vertically in their cells | align-items: start; |
| **justify-content** | Children | Align entire grid of children horizontally within current element | justify-content: center; |
| **align-content** | Children | Align entire grid of children vertically within current element | align-content: space-between; |
| **grid-auto-flow** | Children | How auto-placed children flow | grid-auto-flow: dense; |
| **grid-auto-columns** | Children | Size of implicitly created columns for children | grid-auto-columns: 100px; |
| **grid-auto-rows** | Children | Size of implicitly created rows for children | grid-auto-rows: 150px; |
| **grid-column** | Current | Which columns current element spans (responds to parent's grid) | .item { grid-column: 1 / 3; } |
| **grid-row** | Current | Which rows current element spans (responds to parent's grid) | .item { grid-row: 1 / 4; } |
| **grid-area** | Current | Named area for current element (responds to parent's grid) | .item { grid-area: header; } |
| **justify-self** | Current | Override parent's justify-items for current element | .item { justify-self: end; } |
| **align-self** | Current | Override parent's align-items for current element | .item { align-self: center; } |

---

## **TYPOGRAPHY**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **font-family** | Current + Descendants | Typeface for current element's text (inherits to children) | font-family: Arial, sans-serif; |
| **font-size** | Current + Descendants | Size of current element's text (inherits to children) | font-size: 16px; |
| **font-weight** | Current + Descendants | Boldness of current element's text (inherits to children) | font-weight: bold; |
| **font-style** | Current + Descendants | Style of current element's text (inherits to children) | font-style: italic; |
| **line-height** | Current + Descendants | Vertical spacing between lines (inherits to children) | line-height: 1.6; |
| **text-align** | Current | Horizontal alignment of text/inline content in current element | text-align: center; |
| **text-decoration** | Current | Line decoration on current element's text | text-decoration: underline; |
| **text-transform** | Current + Descendants | Case transformation (inherits to children) | text-transform: uppercase; |
| **letter-spacing** | Current + Descendants | Space between characters (inherits to children) | letter-spacing: 2px; |
| **word-spacing** | Current + Descendants | Space between words (inherits to children) | word-spacing: 5px; |
| **text-indent** | Current | Indent first line of current element's text | text-indent: 30px; |
| **text-shadow** | Current | Shadow on current element's text | text-shadow: 2px 2px 4px rgba(0,0,0,0.5); |
| **white-space** | Current | How white space is handled in current element | white-space: nowrap; |
| **word-wrap** | Current | Break long words in current element | word-wrap: break-word; |
| **color** | Current + Descendants | Text color (inherits to children) | color: #333; |

---

## **COLORS & BACKGROUNDS**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **background-color** | Current | Background color of current element | background-color: lightblue; |
| **background-image** | Current | Background image of current element | background-image: url('image.jpg'); |
| **background-size** | Current | Size of current element's background image | background-size: cover; |
| **background-position** | Current | Position of current element's background image | background-position: center; |
| **background-repeat** | Current | How current element's background repeats | background-repeat: no-repeat; |
| **background-attachment** | Current | Whether current element's background scrolls | background-attachment: fixed; |

---

## **TRANSFORMS**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **transform** | Current | Apply transformations to current element | transform: rotate(45deg); |
| **transform-origin** | Current | Point around which current element transforms | transform-origin: top left; |
| **perspective** | Children | 3D perspective for children's transforms | perspective: 1000px; |

---

## **TRANSITIONS & ANIMATIONS**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **transition** | Current | Smooth changes on current element | transition: background 0.3s ease; |
| **transition-property** | Current | Which properties of current element transition | transition-property: transform, opacity; |
| **transition-duration** | Current | Duration of current element's transition | transition-duration: 0.3s; |
| **transition-timing-function** | Current | Speed curve of current element's transition | transition-timing-function: ease-in-out; |
| **transition-delay** | Current | Delay before current element's transition starts | transition-delay: 0.2s; |
| **animation** | Current | Keyframe animation on current element | animation: slideIn 1s ease-out; |
| **animation-name** | Current | Name of keyframes for current element | animation-name: fadeIn; |
| **animation-duration** | Current | Duration of current element's animation | animation-duration: 2s; |
| **animation-iteration-count** | Current | How many times current element animates | animation-iteration-count: infinite; |

---

## **OVERFLOW & CLIPPING**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **overflow** | Current | How content beyond current element is handled | overflow: hidden; / scroll / auto |
| **overflow-x** | Current | Horizontal overflow of current element | overflow-x: scroll; |
| **overflow-y** | Current | Vertical overflow of current element | overflow-y: auto; |
| **text-overflow** | Current | Handle overflowing text in current element | text-overflow: ellipsis; |
| **clip-path** | Current | Clip current element to shape | clip-path: circle(50%); |

---

## **FILTERS & EFFECTS**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **filter** | Current | Visual effects on current element | filter: blur(5px); |
| **backdrop-filter** | Current | Filter applied to area behind current element | backdrop-filter: blur(10px); |
| **box-shadow** | Current | Shadow around current element's box | box-shadow: 2px 2px 8px rgba(0,0,0,0.3); |

---

## **RESPONSIVE DESIGN**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **@media** | N/A | Conditional styles based on device characteristics | @media (max-width: 768px) { } |
| **min-width** | Current | Minimum width of current element | min-width: 300px; |
| **max-width** | Current | Maximum width of current element | max-width: 1200px; |
| **min-height** | Current | Minimum height of current element | min-height: 500px; |
| **max-height** | Current | Maximum height of current element | max-height: 80vh; |

---

## **LAYOUT PROPERTIES**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **aspect-ratio** | Current | Maintain width-to-height ratio of current element | aspect-ratio: 16 / 9; |
| **object-fit** | Current | How replaced content (img/video) fits in current element | object-fit: cover; |
| **object-position** | Current | Position of replaced content in current element | object-position: center top; |

---

## **MULTI-COLUMN LAYOUT**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **column-count** | Current (content flows) | Number of columns for current element's content | column-count: 3; |
| **column-width** | Current (content flows) | Ideal width of columns for current element's content | column-width: 250px; |
| **column-gap** | Current (content flows) | Space between columns in current element | column-gap: 40px; |
| **column-rule** | Current (content flows) | Line between columns in current element | column-rule: 2px solid #ddd; |
| **column-span** | Current | Span current element across parent's columns | column-span: all; |
| **break-inside** | Current | Prevent breaks inside current element | break-inside: avoid; |

---

## **CURSOR & INTERACTION**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **cursor** | Current + Descendants | Mouse cursor style over current element (inherits) | cursor: pointer; |
| **pointer-events** | Current | Whether current element receives pointer events | pointer-events: none; |
| **user-select** | Current | Whether text in current element can be selected | user-select: none; |

---

## **SCROLL BEHAVIOR**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **scroll-behavior** | Current | Smooth or instant scrolling in current element | scroll-behavior: smooth; |
| **scroll-margin** | Current | Offset for scroll snap/anchor of current element | scroll-margin-top: 80px; |
| **scroll-padding** | Current | Padding in current element's scroll area | scroll-padding: 20px; |
| **scroll-snap-type** | Children | Enable scroll snapping for children | scroll-snap-type: x mandatory; |
| **scroll-snap-align** | Current | Where current element snaps in parent's scroll container | scroll-snap-align: center; |
| **overscroll-behavior** | Current | Behavior at scroll boundaries of current element | overscroll-behavior: contain; |

---

## **LISTS**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **list-style-type** | Children | Style of list markers for children | list-style-type: disc; / none |
| **list-style-position** | Children | Marker position for children | list-style-position: inside; |
| **list-style-image** | Children | Custom image as marker for children | list-style-image: url('bullet.png'); |

---

## **TABLES**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **border-collapse** | Children | Merge borders of child cells | border-collapse: collapse; |
| **border-spacing** | Children | Space between child cells | border-spacing: 10px; |
| **table-layout** | Children | Layout algorithm for child cells | table-layout: fixed; |
| **vertical-align** | Current | Vertical alignment in current table cell | vertical-align: middle; |

---

## **INHERITANCE & SCOPE**

| Property | Effect On | Definition | Example |
|----------|-----------|------------|---------|
| **inherit** | Current | Inherit value from parent | color: inherit; |
| **initial** | Current | Use initial default value | margin: initial; |
| **unset** | Current | Inherit if inheritable, otherwise initial | all: unset; |
| **revert** | Current | Revert to browser default | display: revert; |

---

## **PROPERTY EFFECT CATEGORIES**

### **Current** (Self-affecting)
Property affects only the element it's applied to.
- **Box model**: `padding`, `margin`, `border`, `width`, `height`
- **Positioning**: `position`, `top`, `left`, `z-index`
- **Backgrounds**: `background-color`, `background-image`
- **Effects**: `transform`, `filter`, `opacity`

### **Children** (Parent/Container properties)
Property is added to current element but controls/affects its children.
- **Flexbox**: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `gap`
- **Grid**: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`
- **Table**: `border-collapse`, `border-spacing`
- **Multi-column**: `column-count`, `column-width`, `column-gap`
- **Scroll snap**: `scroll-snap-type`
- **Lists**: `list-style-type`, `list-style-position`

### **Current** (Child/Item properties)
Property affects how current element responds to its parent's layout rules.
- **Flex items**: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`
- **Grid items**: `grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`
- **Column items**: `column-span`, `break-inside`
- **Scroll items**: `scroll-snap-align`

### **Current + Descendants** (Inheritable)
Property affects current element and automatically inherits to descendants.
- **Typography**: `font-family`, `font-size`, `font-weight`, `color`, `line-height`
- **Text**: `text-transform`, `letter-spacing`, `word-spacing`
- **Interaction**: `cursor`

---

## **QUICK REFERENCE TABLE**

| Pattern | Meaning | Example |
|---------|---------|---------|
| **Current** | Add to element, affects same element | `.box { padding: 20px; }` |
| **Children** | Add to element, controls its children | `.container { display: flex; }` |
| **Current** (responds to parent) | Add to element, responds to parent's rules | `.item { flex-grow: 1; }` |
| **Current + Descendants** | Add to element, inherits to descendants | `.text { color: blue; }` |

---

**Pro Tip**: Most CSS confusion comes from applying **Children** properties to the wrong element. Remember: `display: flex`, `grid-template-columns`, and `justify-content` go on the **parent/container**, not the children!