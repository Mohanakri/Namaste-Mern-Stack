# CSS Glossary - Properties with Application Context

> **Legend**: 🎯 = Current Element | 👪 = Parent/Container | 🧒 = Child/Item

---

## **BOX MODEL**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **width** | 🎯 Current | Width of current element | div { width: 300px; } |
| **height** | 🎯 Current | Height of current element | div { height: 200px; } |
| **padding** | 🎯 Current | Space inside current element (between content and border) | padding: 20px; |
| **border** | 🎯 Current | Border around current element | border: 2px solid black; |
| **margin** | 🎯 Current | Space outside current element (pushes other elements away) | margin: 20px; |
| **box-sizing** | 🎯 Current | How width/height are calculated for current element | box-sizing: border-box; |

---

## **DISPLAY & POSITIONING**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **display** | 🎯 Current | How current element is rendered | display: block; / inline / flex / grid |
| **position** | 🎯 Current | Positioning method for current element | position: relative; / absolute / fixed |
| **top/right/bottom/left** | 🎯 Current | Offset for current positioned element | top: 20px; left: 10px; |
| **z-index** | 🎯 Current | Stacking order of current element | z-index: 1000; |
| **float** | 🎯 Current | Float current element left/right | float: left; |
| **clear** | 🎯 Current | Prevent current element from wrapping around floats | clear: both; |
| **visibility** | 🎯 Current | Visibility of current element | visibility: hidden; |
| **opacity** | 🎯 Current | Transparency of current element | opacity: 0.5; |

---

## **FLEXBOX**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **display: flex** | 👪 Parent | Makes current element a flex container | .container { display: flex; } |
| **flex-direction** | 👪 Parent | Direction of flex children's main axis | flex-direction: row; / column |
| **justify-content** | 👪 Parent | Align children along main axis | justify-content: center; / space-between |
| **align-items** | 👪 Parent | Align children along cross axis | align-items: center; / flex-start |
| **flex-wrap** | 👪 Parent | Whether children wrap to new line | flex-wrap: wrap; / nowrap |
| **align-content** | 👪 Parent | Align wrapped lines of children | align-content: space-between; |
| **gap** | 👪 Parent | Space between flex children | gap: 20px; |
| **flex-grow** | 🧒 Child | How much child grows to fill space | .item { flex-grow: 1; } |
| **flex-shrink** | 🧒 Child | How much child shrinks when space is tight | .item { flex-shrink: 0; } |
| **flex-basis** | 🧒 Child | Initial size of child before growing/shrinking | .item { flex-basis: 200px; } |
| **flex** | 🧒 Child | Shorthand for grow, shrink, basis | .item { flex: 1; } |
| **align-self** | 🧒 Child | Override align-items for single child | .item { align-self: flex-end; } |
| **order** | 🧒 Child | Change visual order of child | .item { order: -1; } |

---

## **CSS GRID**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **display: grid** | 👪 Parent | Makes current element a grid container | .container { display: grid; } |
| **grid-template-columns** | 👪 Parent | Define column tracks for children | grid-template-columns: 1fr 2fr 1fr; |
| **grid-template-rows** | 👪 Parent | Define row tracks for children | grid-template-rows: 100px auto 100px; |
| **grid-template-areas** | 👪 Parent | Named grid regions for children | grid-template-areas: "header header" "sidebar main"; |
| **gap / grid-gap** | 👪 Parent | Space between grid children | gap: 20px; |
| **justify-items** | 👪 Parent | Align children horizontally in their cells | justify-items: center; |
| **align-items** | 👪 Parent | Align children vertically in their cells | align-items: start; |
| **justify-content** | 👪 Parent | Align entire grid horizontally within container | justify-content: center; |
| **align-content** | 👪 Parent | Align entire grid vertically within container | align-content: space-between; |
| **grid-auto-flow** | 👪 Parent | How auto-placed children flow | grid-auto-flow: dense; |
| **grid-auto-columns** | 👪 Parent | Size of implicitly created columns | grid-auto-columns: 100px; |
| **grid-auto-rows** | 👪 Parent | Size of implicitly created rows | grid-auto-rows: 150px; |
| **grid-column** | 🧒 Child | Which columns child spans | .item { grid-column: 1 / 3; } |
| **grid-row** | 🧒 Child | Which rows child spans | .item { grid-row: 1 / 4; } |
| **grid-area** | 🧒 Child | Named area for child | .item { grid-area: header; } |
| **justify-self** | 🧒 Child | Override justify-items for single child | .item { justify-self: end; } |
| **align-self** | 🧒 Child | Override align-items for single child | .item { align-self: center; } |

---

## **TYPOGRAPHY**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **font-family** | 🎯 Current (inheritable) | Typeface for current element's text | font-family: Arial, sans-serif; |
| **font-size** | 🎯 Current (inheritable) | Size of current element's text | font-size: 16px; |
| **font-weight** | 🎯 Current (inheritable) | Boldness of current element's text | font-weight: bold; |
| **font-style** | 🎯 Current (inheritable) | Style of current element's text | font-style: italic; |
| **line-height** | 🎯 Current (inheritable) | Vertical spacing between lines in current element | line-height: 1.6; |
| **text-align** | 🎯 Current (affects inline children) | Horizontal alignment of text/inline content | text-align: center; |
| **text-decoration** | 🎯 Current | Line decoration on current element's text | text-decoration: underline; |
| **text-transform** | 🎯 Current (inheritable) | Case transformation of current element's text | text-transform: uppercase; |
| **letter-spacing** | 🎯 Current (inheritable) | Space between characters in current element | letter-spacing: 2px; |
| **word-spacing** | 🎯 Current (inheritable) | Space between words in current element | word-spacing: 5px; |
| **text-indent** | 🎯 Current | Indent first line of current element's text | text-indent: 30px; |
| **text-shadow** | 🎯 Current | Shadow on current element's text | text-shadow: 2px 2px 4px rgba(0,0,0,0.5); |
| **white-space** | 🎯 Current | How white space is handled in current element | white-space: nowrap; |
| **word-wrap** | 🎯 Current | Break long words in current element | word-wrap: break-word; |
| **color** | 🎯 Current (inheritable) | Text color of current element | color: #333; |

---

## **COLORS & BACKGROUNDS**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **background-color** | 🎯 Current | Background color of current element | background-color: lightblue; |
| **background-image** | 🎯 Current | Background image of current element | background-image: url('image.jpg'); |
| **background-size** | 🎯 Current | Size of current element's background image | background-size: cover; |
| **background-position** | 🎯 Current | Position of current element's background image | background-position: center; |
| **background-repeat** | 🎯 Current | How current element's background repeats | background-repeat: no-repeat; |
| **background-attachment** | 🎯 Current | Whether current element's background scrolls | background-attachment: fixed; |

---

## **TRANSFORMS**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **transform** | 🎯 Current | Apply transformations to current element | transform: rotate(45deg); |
| **transform-origin** | 🎯 Current | Point around which current element transforms | transform-origin: top left; |
| **perspective** | 👪 Parent | 3D perspective for children's transforms | perspective: 1000px; |

---

## **TRANSITIONS & ANIMATIONS**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **transition** | 🎯 Current | Smooth changes on current element | transition: background 0.3s ease; |
| **transition-property** | 🎯 Current | Which properties of current element transition | transition-property: transform, opacity; |
| **transition-duration** | 🎯 Current | Duration of current element's transition | transition-duration: 0.3s; |
| **transition-timing-function** | 🎯 Current | Speed curve of current element's transition | transition-timing-function: ease-in-out; |
| **transition-delay** | 🎯 Current | Delay before current element's transition starts | transition-delay: 0.2s; |
| **animation** | 🎯 Current | Keyframe animation on current element | animation: slideIn 1s ease-out; |
| **animation-name** | 🎯 Current | Name of keyframes for current element | animation-name: fadeIn; |
| **animation-duration** | 🎯 Current | Duration of current element's animation | animation-duration: 2s; |
| **animation-iteration-count** | 🎯 Current | How many times current element animates | animation-iteration-count: infinite; |

---

## **OVERFLOW & CLIPPING**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **overflow** | 🎯 Current | How content beyond current element is handled | overflow: hidden; / scroll / auto |
| **overflow-x** | 🎯 Current | Horizontal overflow of current element | overflow-x: scroll; |
| **overflow-y** | 🎯 Current | Vertical overflow of current element | overflow-y: auto; |
| **text-overflow** | 🎯 Current | Handle overflowing text in current element | text-overflow: ellipsis; |
| **clip-path** | 🎯 Current | Clip current element to shape | clip-path: circle(50%); |

---

## **FILTERS & EFFECTS**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **filter** | 🎯 Current | Visual effects on current element | filter: blur(5px); |
| **backdrop-filter** | 🎯 Current | Filter applied to area behind current element | backdrop-filter: blur(10px); |
| **box-shadow** | 🎯 Current | Shadow around current element's box | box-shadow: 2px 2px 8px rgba(0,0,0,0.3); |

---

## **RESPONSIVE DESIGN**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **@media** | N/A | Conditional styles based on device characteristics | @media (max-width: 768px) { } |
| **min-width** | 🎯 Current | Minimum width of current element | min-width: 300px; |
| **max-width** | 🎯 Current | Maximum width of current element | max-width: 1200px; |
| **min-height** | 🎯 Current | Minimum height of current element | min-height: 500px; |
| **max-height** | 🎯 Current | Maximum height of current element | max-height: 80vh; |

---

## **LAYOUT PROPERTIES**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **aspect-ratio** | 🎯 Current | Maintain width-to-height ratio of current element | aspect-ratio: 16 / 9; |
| **object-fit** | 🎯 Current | How replaced content (img/video) fits in current element | object-fit: cover; |
| **object-position** | 🎯 Current | Position of replaced content in current element | object-position: center top; |

---

## **MULTI-COLUMN LAYOUT**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **column-count** | 👪 Parent | Number of columns for content | column-count: 3; |
| **column-width** | 👪 Parent | Ideal width of columns | column-width: 250px; |
| **column-gap** | 👪 Parent | Space between columns | column-gap: 40px; |
| **column-rule** | 👪 Parent | Line between columns | column-rule: 2px solid #ddd; |
| **column-span** | 🧒 Child | Span child across columns | column-span: all; |
| **break-inside** | 🧒 Child | Prevent breaks inside child element | break-inside: avoid; |

---

## **CURSOR & INTERACTION**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **cursor** | 🎯 Current | Mouse cursor style over current element | cursor: pointer; |
| **pointer-events** | 🎯 Current | Whether current element receives pointer events | pointer-events: none; |
| **user-select** | 🎯 Current | Whether text in current element can be selected | user-select: none; |

---

## **SCROLL BEHAVIOR**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **scroll-behavior** | 🎯 Current | Smooth or instant scrolling in current element | scroll-behavior: smooth; |
| **scroll-margin** | 🎯 Current | Offset for scroll snap/anchor of current element | scroll-margin-top: 80px; |
| **scroll-padding** | 👪 Parent | Padding in scroll container | scroll-padding: 20px; |
| **scroll-snap-type** | 👪 Parent | Enable scroll snapping for children | scroll-snap-type: x mandatory; |
| **scroll-snap-align** | 🧒 Child | Where child snaps in scroll container | scroll-snap-align: center; |
| **overscroll-behavior** | 🎯 Current | Behavior at scroll boundaries of current element | overscroll-behavior: contain; |

---

## **LISTS**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **list-style-type** | 🎯 Current (list container) | Style of list markers for children | list-style-type: disc; / none |
| **list-style-position** | 🎯 Current (list container) | Marker position for children | list-style-position: inside; |
| **list-style-image** | 🎯 Current (list container) | Custom image as marker for children | list-style-image: url('bullet.png'); |

---

## **TABLES**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **border-collapse** | 👪 Parent (table) | Merge table cell borders | border-collapse: collapse; |
| **border-spacing** | 👪 Parent (table) | Space between table cells | border-spacing: 10px; |
| **table-layout** | 👪 Parent (table) | Table layout algorithm | table-layout: fixed; |
| **vertical-align** | 🎯 Current (table cell) | Vertical alignment in current table cell | vertical-align: middle; |

---

## **INHERITANCE & SCOPE**

| Property | Applies To | Definition | Example |
|----------|------------|------------|---------|
| **inherit** | 🎯 Current | Inherit value from parent | color: inherit; |
| **initial** | 🎯 Current | Use initial default value | margin: initial; |
| **unset** | 🎯 Current | Inherit if inheritable, otherwise initial | all: unset; |
| **revert** | 🎯 Current | Revert to browser default | display: revert; |

---

## **KEY INHERITANCE NOTES**

### Properties that INHERIT by default (children automatically get parent's value):
- **Typography**: `color`, `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, `letter-spacing`, `word-spacing`, `text-align`, `text-transform`
- **Visibility**: `visibility`
- **Lists**: `list-style-type`, `list-style-position`
- **Cursor**: `cursor`

### Properties that DO NOT inherit (each element needs its own value):
- **Box Model**: `width`, `height`, `padding`, `margin`, `border`
- **Positioning**: `position`, `top`, `left`, `display`, `float`
- **Backgrounds**: `background-color`, `background-image`, etc.
- **Layout**: `flex`, `grid` properties
- **Transforms/Filters**: `transform`, `filter`, `opacity`

---

## **QUICK REFERENCE**

**🎯 Current Element**: Property affects the element it's applied to
- Example: `div { padding: 20px; }` → Padding inside the div

**👪 Parent/Container**: Property affects how children are laid out
- Example: `.container { display: flex; }` → Children become flex items

**🧒 Child/Item**: Property affects how child behaves within parent
- Example: `.item { flex-grow: 1; }` → How item grows in flex container

---

**Pro Tip**: Understanding which element a property affects is crucial for debugging CSS! Most layout confusion comes from applying properties to the wrong element (e.g., applying `justify-content` to a child instead of the flex parent).