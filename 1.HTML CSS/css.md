# CSS Glossary - Complete Reference Guide

---

## **CORE CONCEPTS**

| Term | Definition | Example |
|------|------------|---------|
| **CSS** | Cascading Style Sheets - language for styling HTML | /* Styles the paragraph */<br>p {<br>&nbsp;&nbsp;color: blue;<br>&nbsp;&nbsp;font-size: 16px;<br>} |
| **Selector** | Pattern that targets HTML elements to style | /* Element selector */<br>div { color: red; }<br><br>/* Class selector */<br>.container { width: 100%; }<br><br>/* ID selector */<br>#header { height: 60px; } |
| **Property** | Aspect of element to style (color, size, etc.) | p {<br>&nbsp;&nbsp;color: blue; /* property: value */<br>&nbsp;&nbsp;font-size: 18px;<br>&nbsp;&nbsp;margin: 10px;<br>} |
| **Value** | Setting for a CSS property | color: #FF5733; /* hex color */<br>width: 50%; /* percentage */<br>padding: 20px; /* pixels */ |
| **Declaration** | Property-value pair | font-size: 16px; /* one declaration */ |
| **Declaration Block** | Group of declarations inside curly braces | h1 {<br>&nbsp;&nbsp;color: navy;<br>&nbsp;&nbsp;font-size: 32px;<br>&nbsp;&nbsp;text-align: center;<br>} |
| **Rule/Rule Set** | Selector + declaration block | .button {<br>&nbsp;&nbsp;background: blue;<br>&nbsp;&nbsp;color: white;<br>} |
| **Cascade** | Algorithm determining which styles apply when conflicts exist | /* Last rule wins if same specificity */<br>p { color: red; }<br>p { color: blue; } /* This applies */ |
| **Specificity** | Weight determining which rule applies | /* ID (100) > Class (10) > Element (1) */<br>#nav { } /* specificity: 100 */<br>.menu { } /* specificity: 10 */<br>ul { } /* specificity: 1 */ |
| **Inheritance** | Child elements inherit certain parent styles | body {<br>&nbsp;&nbsp;color: black; /* inherited by children */<br>&nbsp;&nbsp;font-family: Arial;<br>} |

---

## **SELECTORS**

| Term | Definition | Example |
|------|------------|---------|
| **Universal Selector** | Selects all elements | * {<br>&nbsp;&nbsp;margin: 0;<br>&nbsp;&nbsp;padding: 0;<br>&nbsp;&nbsp;box-sizing: border-box;<br>} |
| **Type/Element Selector** | Selects all elements of given type | h1 { font-size: 32px; }<br>p { line-height: 1.6; }<br>div { display: block; } |
| **Class Selector** | Selects elements with specific class | .card { padding: 20px; }<br>.btn-primary { background: blue; }<br><br>&lt;div class="card"&gt;...&lt;/div&gt; |
| **ID Selector** | Selects element with specific ID (unique) | #header { height: 80px; }<br>#main-content { max-width: 1200px; }<br><br>&lt;div id="header"&gt;...&lt;/div&gt; |
| **Attribute Selector** | Selects elements with specific attributes | input[type="text"] { border: 1px solid gray; }<br>a[href^="https"] { color: green; }<br>img[alt] { border: 2px solid; } |
| **Descendant Selector** | Selects elements inside another element | article p {<br>&nbsp;&nbsp;color: gray;<br>}<br>/* All p inside article */ |
| **Child Selector** | Selects direct children only | ul > li {<br>&nbsp;&nbsp;list-style: none;<br>}<br>/* Only direct li children of ul */ |
| **Adjacent Sibling** | Selects element immediately after another | h2 + p {<br>&nbsp;&nbsp;font-weight: bold;<br>}<br>/* p directly after h2 */ |
| **General Sibling** | Selects all siblings after element | h2 ~ p {<br>&nbsp;&nbsp;margin-top: 10px;<br>}<br>/* All p after h2 at same level */ |
| **Pseudo-class** | Selects elements in specific state | a:hover { color: red; }<br>li:first-child { font-weight: bold; }<br>input:focus { outline: 2px solid blue; }<br>div:nth-child(2n) { background: #f0f0f0; } |
| **Pseudo-element** | Selects part of element or creates virtual element | p::first-line { font-weight: bold; }<br>p::first-letter { font-size: 2em; }<br>.quote::before { content: '"'; }<br>.quote::after { content: '"'; } |
| **Grouping Selector** | Apply same styles to multiple selectors | h1, h2, h3 {<br>&nbsp;&nbsp;font-family: Georgia;<br>&nbsp;&nbsp;color: navy;<br>} |

---

## **BOX MODEL**

| Term | Definition | Example |
|------|------------|---------|
| **Content** | Actual content area (text, images) | div {<br>&nbsp;&nbsp;width: 300px;<br>&nbsp;&nbsp;height: 200px;<br>} |
| **Padding** | Space between content and border | padding: 20px; /* all sides */<br>padding: 10px 20px; /* top/bottom left/right */<br>padding: 10px 15px 20px 25px; /* T R B L */ |
| **Border** | Line around padding and content | border: 2px solid black;<br>border-width: 1px;<br>border-style: dashed;<br>border-color: red;<br>border-radius: 10px; |
| **Margin** | Space outside border (between elements) | margin: 20px; /* all sides */<br>margin: 10px auto; /* top/bottom, center */<br>margin-top: 15px;<br>margin-bottom: 30px; |
| **box-sizing** | How width/height are calculated | /* Default: content-box */<br>div { box-sizing: border-box; }<br>/* width includes padding & border */ |
| **Collapsing Margins** | Vertical margins combine to larger value | /* Top margin 20px, bottom 30px */<br>/* Actual gap: 30px (not 50px) */ |

---

## **DISPLAY & POSITIONING**

| Term | Definition | Example |
|------|------------|---------|
| **display** | How element is rendered | display: block; /* full width, new line */<br>display: inline; /* flows with text */<br>display: inline-block; /* inline but accepts width/height */<br>display: none; /* hidden, no space */ |
| **Block Element** | Takes full width, starts on new line | div, p, h1, section, article {<br>&nbsp;&nbsp;display: block;<br>} |
| **Inline Element** | Flows with text, no width/height | span, a, strong, em {<br>&nbsp;&nbsp;display: inline;<br>} |
| **position** | Positioning method for element | position: static; /* default, normal flow */<br>position: relative; /* relative to normal position */<br>position: absolute; /* relative to positioned ancestor */<br>position: fixed; /* relative to viewport */<br>position: sticky; /* hybrid relative/fixed */ |
| **top/right/bottom/left** | Offset properties for positioned elements | .box {<br>&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;top: 20px;<br>&nbsp;&nbsp;right: 10px;<br>} |
| **z-index** | Stacking order of positioned elements | .modal {<br>&nbsp;&nbsp;position: fixed;<br>&nbsp;&nbsp;z-index: 1000; /* front */<br>}<br>.overlay {<br>&nbsp;&nbsp;z-index: 999; /* behind modal */<br>} |
| **float** | Element floats to left/right (legacy layout) | img {<br>&nbsp;&nbsp;float: left;<br>&nbsp;&nbsp;margin-right: 15px;<br>}<br>.clearfix::after {<br>&nbsp;&nbsp;content: "";<br>&nbsp;&nbsp;display: table;<br>&nbsp;&nbsp;clear: both;<br>} |
| **clear** | Prevents element from wrapping around floats | .footer {<br>&nbsp;&nbsp;clear: both; /* clears left & right floats */<br>} |
| **visibility** | Hide element but keep space | visibility: hidden; /* invisible but takes space */<br>visibility: visible; /* default */ |
| **opacity** | Transparency level (0-1) | .overlay {<br>&nbsp;&nbsp;opacity: 0.5; /* 50% transparent */<br>} |

---

## **FLEXBOX**

| Term | Definition | Example |
|------|------------|---------|
| **Flexbox** | One-dimensional layout method | .container {<br>&nbsp;&nbsp;display: flex;<br>} |
| **flex-direction** | Main axis direction | flex-direction: row; /* default, horizontal */<br>flex-direction: column; /* vertical */<br>flex-direction: row-reverse;<br>flex-direction: column-reverse; |
| **justify-content** | Alignment along main axis | justify-content: flex-start; /* default */<br>justify-content: center;<br>justify-content: space-between;<br>justify-content: space-around;<br>justify-content: space-evenly; |
| **align-items** | Alignment along cross axis | align-items: stretch; /* default */<br>align-items: center;<br>align-items: flex-start;<br>align-items: flex-end;<br>align-items: baseline; |
| **flex-wrap** | Whether items wrap to new line | flex-wrap: nowrap; /* default, single line */<br>flex-wrap: wrap; /* multi-line */<br>flex-wrap: wrap-reverse; |
| **align-content** | Aligns lines when wrapping occurs | align-content: center;<br>align-content: space-between;<br>align-content: stretch; |
| **flex-grow** | How item grows to fill space | .item {<br>&nbsp;&nbsp;flex-grow: 1; /* grow equally */<br>}<br>.item-large {<br>&nbsp;&nbsp;flex-grow: 2; /* grows twice as much */<br>} |
| **flex-shrink** | How item shrinks when space is tight | .item {<br>&nbsp;&nbsp;flex-shrink: 1; /* can shrink */<br>}<br>.no-shrink {<br>&nbsp;&nbsp;flex-shrink: 0; /* maintains size */<br>} |
| **flex-basis** | Initial size before growing/shrinking | .item {<br>&nbsp;&nbsp;flex-basis: 200px; /* base width */<br>&nbsp;&nbsp;flex-basis: 25%; /* percentage */<br>&nbsp;&nbsp;flex-basis: auto; /* based on content */<br>} |
| **flex** | Shorthand for grow, shrink, basis | flex: 1; /* grow: 1, shrink: 1, basis: 0 */<br>flex: 0 1 auto; /* don't grow, can shrink */<br>flex: 2 1 200px; |
| **align-self** | Override align-items for single item | .item {<br>&nbsp;&nbsp;align-self: center;<br>&nbsp;&nbsp;align-self: flex-end;<br>} |
| **order** | Change visual order of flex items | .item-first {<br>&nbsp;&nbsp;order: -1; /* appears first */<br>}<br>.item-last {<br>&nbsp;&nbsp;order: 999; /* appears last */<br>} |
| **gap** | Space between flex items | .container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;gap: 20px; /* space between all items */<br>&nbsp;&nbsp;row-gap: 10px;<br>&nbsp;&nbsp;column-gap: 15px;<br>} |

---

## **CSS GRID**

| Term | Definition | Example |
|------|------------|---------|
| **Grid** | Two-dimensional layout system | .container {<br>&nbsp;&nbsp;display: grid;<br>} |
| **grid-template-columns** | Define column tracks | grid-template-columns: 200px 1fr 1fr;<br>grid-template-columns: repeat(3, 1fr);<br>grid-template-columns: 100px auto 100px;<br>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); |
| **grid-template-rows** | Define row tracks | grid-template-rows: 100px 200px auto;<br>grid-template-rows: repeat(3, 150px);<br>grid-template-rows: 80px 1fr 60px; |
| **fr unit** | Flexible fraction of available space | grid-template-columns: 1fr 2fr 1fr;<br>/* Middle column is twice as wide */ |
| **grid-template-areas** | Named grid regions | grid-template-areas:<br>&nbsp;&nbsp;"header header header"<br>&nbsp;&nbsp;"sidebar main main"<br>&nbsp;&nbsp;"footer footer footer";<br><br>.header { grid-area: header; } |
| **grid-column** | Item spans columns | grid-column: 1 / 3; /* span columns 1-2 */<br>grid-column: 2 / -1; /* to last column */<br>grid-column: span 2; /* span 2 columns */ |
| **grid-row** | Item spans rows | grid-row: 1 / 4; /* span rows 1-3 */<br>grid-row: span 2; /* span 2 rows */ |
| **gap** | Space between grid cells | gap: 20px; /* row and column gap */<br>row-gap: 10px;<br>column-gap: 15px; |
| **justify-items** | Align items horizontally in cells | justify-items: start;<br>justify-items: center;<br>justify-items: stretch; /* default */ |
| **align-items** | Align items vertically in cells | align-items: start;<br>align-items: center;<br>align-items: end; |
| **justify-content** | Align grid within container horizontally | justify-content: center;<br>justify-content: space-between;<br>justify-content: start; |
| **align-content** | Align grid within container vertically | align-content: center;<br>align-content: space-around;<br>align-content: end; |
| **grid-auto-flow** | How auto-placed items flow | grid-auto-flow: row; /* default */<br>grid-auto-flow: column;<br>grid-auto-flow: dense; /* fill holes */ |
| **grid-auto-columns** | Size of implicitly created columns | grid-auto-columns: 100px;<br>grid-auto-columns: minmax(100px, auto); |
| **grid-auto-rows** | Size of implicitly created rows | grid-auto-rows: 150px;<br>grid-auto-rows: minmax(50px, auto); |
| **minmax()** | Define min and max size | grid-template-columns: repeat(3, minmax(200px, 1fr));<br>/* Min 200px, max 1fr */ |
| **repeat()** | Repeat track sizes | repeat(3, 100px); /* 100px 100px 100px */<br>repeat(auto-fill, 200px);<br>repeat(auto-fit, minmax(250px, 1fr)); |

---

## **TYPOGRAPHY**

| Term | Definition | Example |
|------|------------|---------|
| **font-family** | Typeface for text | font-family: Arial, sans-serif;<br>font-family: 'Times New Roman', serif;<br>font-family: 'Courier New', monospace; |
| **font-size** | Size of text | font-size: 16px;<br>font-size: 1.2em; /* relative to parent */<br>font-size: 1.5rem; /* relative to root */<br>font-size: 120%; |
| **font-weight** | Boldness of text | font-weight: normal; /* 400 */<br>font-weight: bold; /* 700 */<br>font-weight: 300; /* light */<br>font-weight: 900; /* black */ |
| **font-style** | Text style (italic, normal) | font-style: normal;<br>font-style: italic;<br>font-style: oblique; |
| **line-height** | Vertical spacing between lines | line-height: 1.6; /* 1.6 × font-size */<br>line-height: 24px;<br>line-height: 150%; |
| **text-align** | Horizontal text alignment | text-align: left; /* default */<br>text-align: center;<br>text-align: right;<br>text-align: justify; |
| **text-decoration** | Line decoration on text | text-decoration: none; /* remove underline */<br>text-decoration: underline;<br>text-decoration: line-through;<br>text-decoration: overline; |
| **text-transform** | Text case transformation | text-transform: uppercase;<br>text-transform: lowercase;<br>text-transform: capitalize;<br>text-transform: none; |
| **letter-spacing** | Space between characters | letter-spacing: 2px;<br>letter-spacing: 0.1em;<br>letter-spacing: normal; |
| **word-spacing** | Space between words | word-spacing: 5px;<br>word-spacing: 0.2em; |
| **text-indent** | Indent first line of text | text-indent: 30px;<br>text-indent: 2em; |
| **text-shadow** | Shadow effect on text | text-shadow: 2px 2px 4px rgba(0,0,0,0.5);<br>/* x-offset y-offset blur color */ |
| **white-space** | How white space is handled | white-space: normal; /* default */<br>white-space: nowrap; /* no wrapping */<br>white-space: pre; /* preserve spaces */<br>white-space: pre-wrap; |
| **word-wrap / overflow-wrap** | Break long words | word-wrap: break-word;<br>overflow-wrap: break-word; |
| **@font-face** | Import custom fonts | @font-face {<br>&nbsp;&nbsp;font-family: 'CustomFont';<br>&nbsp;&nbsp;src: url('font.woff2') format('woff2');<br>}<br>body { font-family: 'CustomFont'; } |

---

## **COLORS & BACKGROUNDS**

| Term | Definition | Example |
|------|------------|---------|
| **color** | Text color | color: red;<br>color: #FF5733;<br>color: rgb(255, 87, 51);<br>color: rgba(255, 87, 51, 0.8);<br>color: hsl(9, 100%, 60%); |
| **background-color** | Background color of element | background-color: lightblue;<br>background-color: #f0f0f0;<br>background-color: rgba(0, 0, 0, 0.5); |
| **background-image** | Background image | background-image: url('image.jpg');<br>background-image: linear-gradient(to right, red, blue);<br>background-image: radial-gradient(circle, yellow, green); |
| **background-size** | Size of background image | background-size: cover; /* fill area */<br>background-size: contain; /* fit in area */<br>background-size: 100px 200px;<br>background-size: 50%; |
| **background-position** | Position of background image | background-position: center;<br>background-position: top right;<br>background-position: 50% 50%;<br>background-position: 10px 20px; |
| **background-repeat** | How background image repeats | background-repeat: no-repeat;<br>background-repeat: repeat; /* default */<br>background-repeat: repeat-x; /* horizontal */<br>background-repeat: repeat-y; /* vertical */ |
| **background-attachment** | Background scrolls or fixed | background-attachment: scroll; /* default */<br>background-attachment: fixed; /* stays in place */ |
| **background** | Shorthand for all background properties | background: url('bg.jpg') no-repeat center/cover;<br>background: linear-gradient(red, blue);<br>background: #fff url('img.png') center/50% no-repeat; |
| **linear-gradient** | Linear color gradient | background: linear-gradient(to bottom, red, yellow);<br>background: linear-gradient(45deg, blue, green);<br>background: linear-gradient(red 0%, yellow 50%, green 100%); |
| **radial-gradient** | Radial color gradient | background: radial-gradient(circle, red, yellow);<br>background: radial-gradient(ellipse at center, blue, green); |
| **opacity** | Transparency of element | opacity: 1; /* fully opaque */<br>opacity: 0.5; /* 50% transparent */<br>opacity: 0; /* fully transparent */ |
| **RGBA** | RGB color with alpha transparency | color: rgba(255, 0, 0, 0.5); /* 50% transparent red */<br>background: rgba(0, 0, 0, 0.8); |
| **HSL/HSLA** | Hue, Saturation, Lightness color model | color: hsl(120, 100%, 50%); /* green */<br>color: hsla(240, 100%, 50%, 0.5); /* blue, 50% opacity */ |
| **currentColor** | Value of color property | border: 2px solid currentColor;<br>/* Uses text color for border */ |

---

## **SIZING & UNITS**

| Term | Definition | Example |
|------|------------|---------|
| **px (pixels)** | Absolute unit, fixed size | width: 300px;<br>font-size: 16px;<br>margin: 10px; |
| **% (percentage)** | Relative to parent element | width: 50%; /* 50% of parent width */<br>font-size: 120%; /* 120% of parent font */ |
| **em** | Relative to parent font-size | font-size: 1.5em; /* 1.5 × parent font */<br>padding: 2em; /* 2 × current font-size */ |
| **rem** | Relative to root (html) font-size | font-size: 1.5rem; /* 1.5 × root font */<br>margin: 2rem; /* consistent spacing */ |
| **vw (viewport width)** | 1% of viewport width | width: 50vw; /* 50% of viewport width */<br>font-size: 5vw; |
| **vh (viewport height)** | 1% of viewport height | height: 100vh; /* full viewport height */<br>min-height: 50vh; |
| **vmin** | 1% of smaller viewport dimension | width: 50vmin; /* 50% of smaller dimension */ |
| **vmax** | 1% of larger viewport dimension | width: 50vmax; /* 50% of larger dimension */ |
| **ch** | Width of "0" character | width: 40ch; /* approximately 40 characters wide */ |
| **calc()** | Perform calculations | width: calc(100% - 50px);<br>font-size: calc(1rem + 2vw);<br>height: calc(100vh - 80px); |
| **min()** | Use smallest value | width: min(500px, 100%);<br>/* 500px or 100%, whichever is smaller */ |
| **max()** | Use largest value | width: max(300px, 50%);<br>/* 300px or 50%, whichever is larger */ |
| **clamp()** | Value between min and max | font-size: clamp(1rem, 2.5vw, 2rem);<br>/* min 1rem, preferred 2.5vw, max 2rem */ |

---

## **TRANSITIONS & ANIMATIONS**

| Term | Definition | Example |
|------|------------|---------|
| **transition** | Smooth change between states | .button {<br>&nbsp;&nbsp;transition: background 0.3s ease;<br>}<br>.button:hover {<br>&nbsp;&nbsp;background: blue;<br>} |
| **transition-property** | Which properties to transition | transition-property: background, color, transform;<br>transition-property: all; |
| **transition-duration** | How long transition takes | transition-duration: 0.3s;<br>transition-duration: 500ms; |
| **transition-timing-function** | Speed curve of transition | transition-timing-function: ease; /* default */<br>transition-timing-function: linear;<br>transition-timing-function: ease-in;<br>transition-timing-function: ease-out;<br>transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); |
| **transition-delay** | Wait before transition starts | transition-delay: 0.2s;<br>transition-delay: 100ms; |
| **animation** | Keyframe-based animation | @keyframes slideIn {<br>&nbsp;&nbsp;from { transform: translateX(-100%); }<br>&nbsp;&nbsp;to { transform: translateX(0); }<br>}<br><br>.box {<br>&nbsp;&nbsp;animation: slideIn 1s ease-out;<br>} |
| **@keyframes** | Define animation steps | @keyframes bounce {<br>&nbsp;&nbsp;0% { transform: translateY(0); }<br>&nbsp;&nbsp;50% { transform: translateY(-30px); }<br>&nbsp;&nbsp;100% { transform: translateY(0); }<br>} |
| **animation-name** | Name of keyframes to use | animation-name: slideIn; |
| **animation-duration** | How long animation takes | animation-duration: 2s; |
| **animation-timing-function** | Speed curve of animation | animation-timing-function: ease-in-out; |
| **animation-delay** | Wait before animation starts | animation-delay: 0.5s; |
| **animation-iteration-count** | How many times to repeat | animation-iteration-count: 3;<br>animation-iteration-count: infinite; |
| **animation-direction** | Play forward, backward, or alternate | animation-direction: normal;<br>animation-direction: reverse;<br>animation-direction: alternate; |
| **animation-fill-mode** | Style before/after animation | animation-fill-mode: forwards; /* keeps end state */<br>animation-fill-mode: backwards;<br>animation-fill-mode: both; |
| **animation-play-state** | Pause or run animation | animation-play-state: running;<br>animation-play-state: paused; |

---

## **TRANSFORMS**

| Term | Definition | Example |
|------|------------|---------|
| **transform** | Apply 2D/3D transformations | transform: rotate(45deg);<br>transform: scale(1.5);<br>transform: translate(50px, 100px); |
| **translate** | Move element | transform: translate(50px, 100px); /* x, y */<br>transform: translateX(50px);<br>transform: translateY(100px); |
| **rotate** | Rotate element | transform: rotate(45deg);<br>transform: rotate(-90deg); |
| **scale** | Resize element | transform: scale(1.5); /* 150% size */<br>transform: scale(2, 0.5); /* x, y */<br>transform: scaleX(1.2); |
| **skew** | Skew/distort element | transform: skew(20deg, 10deg); /* x, y */<br>transform: skewX(30deg); |
| **transform-origin** | Point around which transform occurs | transform-origin: center; /* default */<br>transform-origin: top left;<br>transform-origin: 50% 50%; |
| **Multiple transforms** | Combine multiple transformations | transform: translate(50px, 50px) rotate(45deg) scale(1.2);<br>/* Applied right to left */ |
| **3D Transforms** | 3D transformations | transform: rotateX(45deg);<br>transform: rotateY(45deg);<br>transform: rotateZ(45deg);<br>transform: translate3d(10px, 20px, 30px); |
| **perspective** | 3D perspective effect | perspective: 1000px;<br>transform: perspective(500px) rotateY(45deg); |

---

## **RESPONSIVE DESIGN**

| Term | Definition | Example |
|------|------------|---------|
| **Media Query** | Apply styles based on device characteristics | @media (max-width: 768px) {<br>&nbsp;&nbsp;.container {<br>&nbsp;&nbsp;&nbsp;&nbsp;width: 100%;<br>&nbsp;&nbsp;}<br>} |
| **Breakpoint** | Width at which layout changes | /* Mobile: < 768px */<br>/* Tablet: 768px - 1024px */<br>/* Desktop: > 1024px */ |
| **min-width** | Styles apply at width and above | @media (min-width: 768px) {<br>&nbsp;&nbsp;/* Tablet & desktop styles */<br>} |
| **max-width** | Styles apply at width and below | @media (max-width: 767px) {<br>&nbsp;&nbsp;/* Mobile styles */<br>} |
| **Mobile-First** | Design for mobile, then add larger styles | /* Base mobile styles */<br>.container { width: 100%; }<br><br>@media (min-width: 768px) {<br>&nbsp;&nbsp;.container { width: 750px; }<br>} |
| **Desktop-First** | Design for desktop, then scale down | /* Base desktop styles */<br>.container { width: 1200px; }<br><br>@media (max-width: 768px) {<br>&nbsp;&nbsp;.container { width: 100%; }<br>} |
| **Viewport Meta Tag** | Control viewport on mobile devices | &lt;meta name="viewport"<br>&nbsp;&nbsp;content="width=device-width, initial-scale=1.0"&gt; |
| **Media Features** | Test device characteristics | @media (orientation: landscape) { }<br>@media (prefers-color-scheme: dark) { }<br>@media (min-resolution: 2dppx) { /* retina */ } |

---

## **PSEUDO-CLASSES**

| Term | Definition | Example |
|------|------------|---------|
| **:hover** | Element being hovered over | a:hover {<br>&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;text-decoration: underline;<br>} |
| **:active** | Element being clicked | button:active {<br>&nbsp;&nbsp;transform: scale(0.95);<br>} |
| **:focus** | Element with focus | input:focus {<br>&nbsp;&nbsp;outline: 2px solid blue;<br>&nbsp;&nbsp;border-color: blue;<br>} |
| **:first-child** | First child of parent | li:first-child {<br>&nbsp;&nbsp;font-weight: bold;<br>} |
| **:last-child** | Last child of parent | li:last-child {<br>&nbsp;&nbsp;border-bottom: none;<br>} |
| **:nth-child(n)** | Specific child by position | li:nth-child(2) { color: red; } /* 2nd child */<br>li:nth-child(odd) { background: #f0f0f0; }<br>li:nth-child(even) { background: white; }<br>li:nth-child(3n) { color: blue; } /* every 3rd */ |
| **:nth-of-type(n)** | Specific element by type | p:nth-of-type(2) { font-size: 18px; }<br>/* 2nd p element */ |
| **:not()** | Elements that don't match selector | button:not(.disabled) {<br>&nbsp;&nbsp;cursor: pointer;<br>}<br>div:not(.special) { color: gray; } |
| **:checked** | Checked checkbox/radio button | input:checked {<br>&nbsp;&nbsp;accent-color: green;<br>}<br>input:checked + label { font-weight: bold; } |
| **:disabled** | Disabled form elements | input:disabled {<br>&nbsp;&nbsp;background: #e0e0e0;<br>&nbsp;&nbsp;cursor: not-allowed;<br>} |
| **:enabled** | Enabled form elements | input:enabled {<br>&nbsp;&nbsp;background: white;<br>} |
| **:visited** | Visited links | a:visited {<br>&nbsp;&nbsp;color: purple;<br>} |
| **:link** | Unvisited links | a:link {<br>&nbsp;&nbsp;color: blue;<br>} |
| **:target** | Element targeted by URL fragment | #section1:target {<br>&nbsp;&nbsp;background: yellow;<br>}<br>/* example.com#section1 */ |
| **:empty** | Element with no children | div:empty {<br>&nbsp;&nbsp;display: none;<br>} |
| **:root** | Root element (usually html) | :root {<br>&nbsp;&nbsp;--primary-color: blue;<br>&nbsp;&nbsp;--spacing: 20px;<br>} |

---

## **PSEUDO-ELEMENTS**

| Term | Definition | Example |
|------|------------|---------|
| **::before** | Insert content before element | .quote::before {<br>&nbsp;&nbsp;content: '"';<br>&nbsp;&nbsp;font-size: 2em;<br>&nbsp;&nbsp;color: gray;<br>} |
| **::after** | Insert content after element | .external-link::after {<br>&nbsp;&nbsp;content: ' ↗';<br>&nbsp;&nbsp;font-size: 0.8em;<br>} |
| **::first-letter** | First letter of text | p::first-letter {<br>&nbsp;&nbsp;font-size: 3em;<br>&nbsp;&nbsp;font-weight: bold;<br>&nbsp;&nbsp;float: left;<br>} |
| **::first-line** | First line of text | p::first-line {<br>&nbsp;&nbsp;font-weight: bold;<br>&nbsp;&nbsp;color: navy;<br>} |
| **::selection** | Selected/highlighted text | ::selection {<br>&nbsp;&nbsp;background: yellow;<br>&nbsp;&nbsp;color: black;<br>} |
| **::placeholder** | Placeholder text in inputs | input::placeholder {<br>&nbsp;&nbsp;color: #999;<br>&nbsp;&nbsp;font-style: italic;<br>} |
| **::marker** | List item marker (bullet/number) | li::marker {<br>&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;font-size: 1.5em;<br>} |

---

## **VARIABLES (CUSTOM PROPERTIES)**

| Term | Definition | Example |
|------|------------|---------|
| **CSS Variables** | Reusable values stored in custom properties | :root {<br>&nbsp;&nbsp;--primary-color: #3498db;<br>&nbsp;&nbsp;--spacing: 20px;<br>&nbsp;&nbsp;--font-stack: Arial, sans-serif;<br>} |
| **--custom-property** | Define custom property (usually in :root) | :root {<br>&nbsp;&nbsp;--main-bg: #f0f0f0;<br>&nbsp;&nbsp;--text-color: #333;<br>} |
| **var()** | Use custom property value | .button {<br>&nbsp;&nbsp;background: var(--primary-color);<br>&nbsp;&nbsp;padding: var(--spacing);<br>&nbsp;&nbsp;font-family: var(--font-stack);<br>} |
| **Fallback Value** | Default if variable undefined | color: var(--text-color, black);<br>/* Use black if --text-color not defined */ |
| **Local Variables** | Scoped to specific selector | .card {<br>&nbsp;&nbsp;--card-padding: 15px;<br>&nbsp;&nbsp;padding: var(--card-padding);<br>} |
| **Updating Variables** | Change variable values dynamically | .dark-theme {<br>&nbsp;&nbsp;--bg-color: #1a1a1a;<br>&nbsp;&nbsp;--text-color: #ffffff;<br>} |

---

## **FILTERS & EFFECTS**

| Term | Definition | Example |
|------|------------|---------|
| **filter** | Apply visual effects to element | filter: blur(5px);<br>filter: brightness(150%);<br>filter: contrast(200%); |
| **blur()** | Blur effect | filter: blur(3px); |
| **brightness()** | Adjust brightness | filter: brightness(120%); /* brighter */<br>filter: brightness(50%); /* darker */ |
| **contrast()** | Adjust contrast | filter: contrast(150%); |
| **grayscale()** | Convert to grayscale | filter: grayscale(100%); /* full grayscale */<br>filter: grayscale(50%); /* half */ |
| **hue-rotate()** | Rotate colors | filter: hue-rotate(90deg); |
| **invert()** | Invert colors | filter: invert(100%); |
| **saturate()** | Adjust color saturation | filter: saturate(200%); /* more saturated */<br>filter: saturate(0%); /* grayscale */ |
| **sepia()** | Sepia tone effect | filter: sepia(100%); |
| **drop-shadow()** | Drop shadow (better than box-shadow) | filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3)); |
| **Multiple Filters** | Combine multiple filters | filter: brightness(110%) contrast(120%) blur(1px); |
| **backdrop-filter** | Apply filter to area behind element | .glass {<br>&nbsp;&nbsp;background: rgba(255,255,255,0.1);<br>&nbsp;&nbsp;backdrop-filter: blur(10px);<br>} |
| **box-shadow** | Shadow around element box | box-shadow: 2px 2px 8px rgba(0,0,0,0.3);<br>/* x y blur spread color */<br>box-shadow: 0 4px 6px rgba(0,0,0,0.1),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 1px 3px rgba(0,0,0,0.08); |
| **text-shadow** | Shadow on text | text-shadow: 2px 2px 4px rgba(0,0,0,0.5); |

---

## **OVERFLOW & CLIPPING**

| Term | Definition | Example |
|------|------------|---------|
| **overflow** | How content beyond box is handled | overflow: visible; /* default, overflows */<br>overflow: hidden; /* clip overflow */<br>overflow: scroll; /* always show scrollbar */<br>overflow: auto; /* scrollbar when needed */ |
| **overflow-x** | Horizontal overflow behavior | overflow-x: hidden;<br>overflow-x: scroll; |
| **overflow-y** | Vertical overflow behavior | overflow-y: auto;<br>overflow-y: scroll; |
| **text-overflow** | Handle overflowing text | .truncate {<br>&nbsp;&nbsp;white-space: nowrap;<br>&nbsp;&nbsp;overflow: hidden;<br>&nbsp;&nbsp;text-overflow: ellipsis; /* shows ... */<br>} |
| **clip-path** | Clip element to shape | clip-path: circle(50%);<br>clip-path: polygon(50% 0%, 100% 100%, 0% 100%);<br>clip-path: inset(10px 20px 30px 40px); |

---

## **TABLES**

| Term | Definition | Example |
|------|------------|---------|
| **border-collapse** | Merge table borders | table {<br>&nbsp;&nbsp;border-collapse: collapse; /* merge borders */<br>&nbsp;&nbsp;border-collapse: separate; /* separate */<br>} |
| **border-spacing** | Space between table cells | table {<br>&nbsp;&nbsp;border-collapse: separate;<br>&nbsp;&nbsp;border-spacing: 10px 5px; /* horizontal vertical */<br>} |
| **table-layout** | Table layout algorithm | table {<br>&nbsp;&nbsp;table-layout: auto; /* default */<br>&nbsp;&nbsp;table-layout: fixed; /* equal width */<br>} |
| **vertical-align** | Vertical alignment in table cells | td {<br>&nbsp;&nbsp;vertical-align: top;<br>&nbsp;&nbsp;vertical-align: middle;<br>&nbsp;&nbsp;vertical-align: bottom;<br>} |

---

## **MULTI-COLUMN LAYOUT**

| Term | Definition | Example |
|------|------------|---------|
| **column-count** | Number of columns | .article {<br>&nbsp;&nbsp;column-count: 3;<br>} |
| **column-width** | Ideal width of columns | .article {<br>&nbsp;&nbsp;column-width: 250px;<br>} |
| **columns** | Shorthand for count and width | columns: 3 250px; /* count width */<br>columns: auto 200px; |
| **column-gap** | Space between columns | column-gap: 40px; |
| **column-rule** | Line between columns | column-rule: 2px solid #ddd;<br>column-rule-width: 1px;<br>column-rule-style: dashed;<br>column-rule-color: gray; |
| **column-span** | Span element across columns | h2 {<br>&nbsp;&nbsp;column-span: all; /* span all columns */<br>} |
| **break-inside** | Prevent breaks inside element | .box {<br>&nbsp;&nbsp;break-inside: avoid;<br>} |

---

## **CURSOR & POINTER**

| Term | Definition | Example |
|------|------------|---------|
| **cursor** | Mouse cursor style | cursor: pointer; /* hand pointer */<br>cursor: default; /* arrow */<br>cursor: text; /* I-beam */<br>cursor: move;<br>cursor: not-allowed;<br>cursor: grab;<br>cursor: zoom-in; |
| **pointer-events** | Whether element receives pointer events | .disabled {<br>&nbsp;&nbsp;pointer-events: none; /* ignores clicks */<br>}<br>.overlay {<br>&nbsp;&nbsp;pointer-events: auto;<br>} |
| **user-select** | Whether text can be selected | .no-select {<br>&nbsp;&nbsp;user-select: none; /* can't select text */<br>}<br>code {<br>&nbsp;&nbsp;user-select: all; /* select all on click */<br>} |

---

## **LAYOUT PROPERTIES**

| Term | Definition | Example |
|------|------------|---------|
| **width / height** | Element dimensions | width: 300px;<br>height: 200px;<br>width: 100%;<br>height: auto; |
| **min-width / max-width** | Minimum/maximum width constraints | min-width: 300px;<br>max-width: 1200px;<br>width: 100%; |
| **min-height / max-height** | Minimum/maximum height constraints | min-height: 500px;<br>max-height: 80vh; |
| **aspect-ratio** | Maintain width-to-height ratio | .video {<br>&nbsp;&nbsp;aspect-ratio: 16 / 9;<br>}<br>.square {<br>&nbsp;&nbsp;aspect-ratio: 1;<br>} |
| **object-fit** | How replaced content (img/video) fits | img {<br>&nbsp;&nbsp;object-fit: cover; /* fill, crop if needed */<br>&nbsp;&nbsp;object-fit: contain; /* fit within */<br>&nbsp;&nbsp;object-fit: fill; /* stretch */<br>&nbsp;&nbsp;object-fit: none; /* original size */<br>} |
| **object-position** | Position of replaced content | img {<br>&nbsp;&nbsp;object-fit: cover;<br>&nbsp;&nbsp;object-position: center top;<br>} |

---

## **LISTS**

| Term | Definition | Example |
|------|------------|---------|
| **list-style-type** | Style of list marker | ul { list-style-type: disc; /* default */ }<br>ul { list-style-type: circle; }<br>ul { list-style-type: square; }<br>ol { list-style-type: decimal; }<br>ol { list-style-type: lower-alpha; }<br>list-style-type: none; /* no marker */ |
| **list-style-position** | Marker position | list-style-position: outside; /* default */<br>list-style-position: inside; /* inside content */ |
| **list-style-image** | Custom image as marker | list-style-image: url('bullet.png'); |
| **list-style** | Shorthand for list styling | list-style: square inside url('bullet.png'); |

---

## **ADVANCED SELECTORS**

| Term | Definition | Example |
|------|------------|---------|
| **[attr^="value"]** | Attribute starts with value | a[href^="https"] { color: green; }<br>/* Links starting with https */ |
| **[attr$="value"]** | Attribute ends with value | img[src$=".png"] { border: 2px solid; }<br>/* PNG images */ |
| **[attr*="value"]** | Attribute contains value | a[href*="example"] { font-weight: bold; }<br>/* Links containing "example" */ |
| **:is()** | Match any selector in list | :is(h1, h2, h3) {<br>&nbsp;&nbsp;color: navy;<br>}<br>/* Cleaner than h1, h2, h3 */ |
| **:where()** | Like :is() but zero specificity | :where(h1, h2) { margin: 0; }<br>/* Easier to override */ |
| **:has()** | Parent selector (if contains) | div:has(> img) {<br>&nbsp;&nbsp;border: 2px solid;<br>}<br>/* div containing img child */ |
| **:focus-within** | Element or descendant has focus | form:focus-within {<br>&nbsp;&nbsp;box-shadow: 0 0 10px blue;<br>} |
| **:focus-visible** | Focus via keyboard (not click) | button:focus-visible {<br>&nbsp;&nbsp;outline: 3px solid blue;<br>} |

---

## **SCROLL BEHAVIOR**

| Term | Definition | Example |
|------|------------|---------|
| **scroll-behavior** | Smooth or instant scrolling | html {<br>&nbsp;&nbsp;scroll-behavior: smooth;<br>}<br>/* Smooth scroll to anchors */ |
| **scroll-margin** | Offset for scroll snap/anchor | .section {<br>&nbsp;&nbsp;scroll-margin-top: 80px;<br>}<br>/* Account for fixed header */ |
| **scroll-padding** | Padding in scroll container | .container {<br>&nbsp;&nbsp;scroll-padding: 20px;<br>} |
| **scroll-snap-type** | Enable scroll snapping | .container {<br>&nbsp;&nbsp;scroll-snap-type: x mandatory;<br>&nbsp;&nbsp;scroll-snap-type: y proximity;<br>} |
| **scroll-snap-align** | Where element snaps | .item {<br>&nbsp;&nbsp;scroll-snap-align: start;<br>&nbsp;&nbsp;scroll-snap-align: center;<br>&nbsp;&nbsp;scroll-snap-align: end;<br>} |
| **overscroll-behavior** | Behavior at scroll boundaries | body {<br>&nbsp;&nbsp;overscroll-behavior: contain;<br>&nbsp;&nbsp;/* Prevent scroll chaining */<br>} |

---

## **CONTENT & COUNTERS**

| Term | Definition | Example |
|------|------------|---------|
| **content** | Generate content with pseudo-elements | .label::before {<br>&nbsp;&nbsp;content: "→ ";<br>}<br>.external::after {<br>&nbsp;&nbsp;content: url('icon.png');<br>} |
| **counter-reset** | Initialize counter | body {<br>&nbsp;&nbsp;counter-reset: section;<br>} |
| **counter-increment** | Increment counter | h2 {<br>&nbsp;&nbsp;counter-increment: section;<br>}<br>h2::before {<br>&nbsp;&nbsp;content: "Section " counter(section) ": ";<br>} |
| **attr()** | Use attribute value in content | a::after {<br>&nbsp;&nbsp;content: " (" attr(href) ")";<br>} |

---

## **WRITING MODES**

| Term | Definition | Example |
|------|------------|---------|
| **writing-mode** | Text flow direction | writing-mode: horizontal-tb; /* default */<br>writing-mode: vertical-rl; /* vertical right-to-left */<br>writing-mode: vertical-lr; /* vertical left-to-right */ |
| **direction** | Text direction | direction: ltr; /* left-to-right */<br>direction: rtl; /* right-to-left */ |
| **text-orientation** | Orientation of characters | text-orientation: mixed;<br>text-orientation: upright; |

---

## **MISCELLANEOUS**

| Term | Definition | Example |
|------|------------|---------|
| **will-change** | Hint browser about upcoming changes | .animated {<br>&nbsp;&nbsp;will-change: transform, opacity;<br>}<br>/* Optimize performance */ |
| **contain** | Limit scope of layout/paint/style | .widget {<br>&nbsp;&nbsp;contain: layout style paint;<br>}<br>/* Performance optimization */ |
| **resize** | Allow user to resize element | textarea {<br>&nbsp;&nbsp;resize: both; /* default */<br>&nbsp;&nbsp;resize: vertical;<br>&nbsp;&nbsp;resize: horizontal;<br>&nbsp;&nbsp;resize: none;<br>} |
| **outline** | Outline around element (doesn't affect layout) | button:focus {<br>&nbsp;&nbsp;outline: 2px solid blue;<br>&nbsp;&nbsp;outline-offset: 3px;<br>} |
| **accent-color** | Theme color for form controls | input[type="checkbox"] {<br>&nbsp;&nbsp;accent-color: #3498db;<br>} |
| **all** | Reset all properties | .reset {<br>&nbsp;&nbsp;all: unset; /* reset all */<br>&nbsp;&nbsp;all: initial; /* initial values */<br>} |
| **!important** | Override specificity (use sparingly) | .override {<br>&nbsp;&nbsp;color: red !important;<br>} |
| **@import** | Import external stylesheet | @import url('typography.css');<br>@import url('layout.css') screen; |
| **@supports** | Feature query (conditional CSS) | @supports (display: grid) {<br>&nbsp;&nbsp;.container {<br>&nbsp;&nbsp;&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;}<br>} |
| **@layer** | Define cascade layers | @layer base, components, utilities;<br><br>@layer base {<br>&nbsp;&nbsp;h1 { font-size: 2em; }<br>} |

---

## **BEST PRACTICES**

| Term | Definition | Example |
|------|------------|---------|
| **BEM** | Block Element Modifier naming convention | .card { } /* Block */<br>.card__title { } /* Element */<br>.card--featured { } /* Modifier */<br><br>&lt;div class="card card--featured"&gt;<br>&nbsp;&nbsp;&lt;h2 class="card__title"&gt;Title&lt;/h2&gt;<br>&lt;/div&gt; |
| **Reset/Normalize CSS** | Remove default browser styling | * {<br>&nbsp;&nbsp;margin: 0;<br>&nbsp;&nbsp;padding: 0;<br>&nbsp;&nbsp;box-sizing: border-box;<br>}<br>/* Or use normalize.css */ |
| **Mobile-First Approach** | Start with mobile, enhance for larger screens | /* Base mobile styles */<br>.container { padding: 10px; }<br><br>@media (min-width: 768px) {<br>&nbsp;&nbsp;.container { padding: 20px; }<br>} |
| **CSS Architecture** | Organize CSS for maintainability | /* Common patterns: */<br>- SMACSS (Scalable & Modular)<br>- OOCSS (Object-Oriented CSS)<br>- ITCSS (Inverted Triangle)<br>- Atomic CSS |
| **Performance** | Optimize CSS for speed | /* Tips: */<br>- Minimize specificity<br>- Avoid expensive properties<br>- Use transform instead of position<br>- Limit repaints/reflows<br>- Minify and compress CSS |

---

**Pro Tip**: Master the Box Model, Flexbox, and Grid for 90% of layout needs. Use CSS Variables for maintainable theming! 🎨
