Perfect 👍 Here’s your **simplified CSS Glossary — grouped by `display` type** so it’s easier to learn and write:

---

## 🧱 **1. Box Model & Layout Basics**

**Affects:** Current element

| Property                          | Meaning                          | Example                    |
| --------------------------------- | -------------------------------- | -------------------------- |
| `width`, `height`                 | Element size                     | `width: 300px;`            |
| `padding`                         | Space inside border              | `padding: 20px;`           |
| `border`                          | Outline of element               | `border: 1px solid black;` |
| `margin`                          | Space outside element            | `margin: 10px;`            |
| `box-sizing`                      | Includes border/padding in width | `box-sizing: border-box;`  |
| `overflow`, `overflow-x/y`        | Handle extra content             | `overflow: hidden;`        |
| `min/max-width`, `min/max-height` | Set limits                       | `max-width: 1200px;`       |
| `aspect-ratio`                    | Maintain width:height            | `aspect-ratio: 16/9;`      |

---

## 🧩 **2. Display Types**

### ➤ `display: block / inline / inline-block`

**Affects:** Current element

| Property     | Meaning                    | Example               |
| ------------ | -------------------------- | --------------------- |
| `display`    | How element behaves        | `display: block;`     |
| `visibility` | Show/hide without removing | `visibility: hidden;` |
| `opacity`    | Transparency               | `opacity: 0.5;`       |

### ➤ `display: flex` → **Flexbox Layout**

**Affects:** Children

| Parent (Container) Properties | Meaning                 | Example                    |
| ----------------------------- | ----------------------- | -------------------------- |
| `display: flex`               | Enables flex mode       | `.box { display: flex; }`  |
| `flex-direction`              | Row / column layout     | `flex-direction: row;`     |
| `justify-content`             | Align along main axis   | `justify-content: center;` |
| `align-items`                 | Align along cross axis  | `align-items: center;`     |
| `flex-wrap`                   | Wrap items to next line | `flex-wrap: wrap;`         |
| `gap`                         | Space between items     | `gap: 10px;`               |

| Child (Item) Properties | Meaning            | Example                 |
| ----------------------- | ------------------ | ----------------------- |
| `flex-grow`             | Expand ratio       | `flex-grow: 1;`         |
| `flex-shrink`           | Shrink ratio       | `flex-shrink: 0;`       |
| `flex-basis`            | Initial size       | `flex-basis: 200px;`    |
| `align-self`            | Override alignment | `align-self: flex-end;` |
| `order`                 | Change order       | `order: -1;`            |

---

### ➤ `display: grid` → **Grid Layout**

**Affects:** Children

| Parent (Container) Properties | Meaning               | Example                           |
| ----------------------------- | --------------------- | --------------------------------- |
| `display: grid`               | Enables grid layout   | `.grid { display: grid; }`        |
| `grid-template-columns`       | Define columns        | `grid-template-columns: 1fr 2fr;` |
| `grid-template-rows`          | Define rows           | `grid-template-rows: 100px auto;` |
| `gap`                         | Space between cells   | `gap: 20px;`                      |
| `justify-content`             | Align entire grid     | `justify-content: center;`        |
| `align-content`               | Align rows vertically | `align-content: space-between;`   |

| Child (Item) Properties | Meaning             | Example               |
| ----------------------- | ------------------- | --------------------- |
| `grid-column`           | Span columns        | `grid-column: 1 / 3;` |
| `grid-row`              | Span rows           | `grid-row: 1 / 2;`    |
| `grid-area`             | Place in named area | `grid-area: header;`  |
| `justify-self`          | Align horizontally  | `justify-self: end;`  |
| `align-self`            | Align vertically    | `align-self: center;` |

---

## ✍️ **3. Typography (Inheritable)**

**Affects:** Current + Descendants

| Property                                  | Meaning             | Example                          |
| ----------------------------------------- | ------------------- | -------------------------------- |
| `font-family`, `font-size`, `font-weight` | Font settings       | `font-size: 16px;`               |
| `line-height`                             | Space between lines | `line-height: 1.6;`              |
| `color`                                   | Text color          | `color: #333;`                   |
| `text-align`                              | Align text          | `text-align: center;`            |
| `text-transform`                          | Upper/lowercase     | `text-transform: uppercase;`     |
| `letter-spacing`, `word-spacing`          | Spacing             | `letter-spacing: 2px;`           |
| `text-shadow`                             | Text shadow         | `text-shadow: 1px 1px 3px #000;` |

---

## 🎨 **4. Backgrounds & Effects**

**Affects:** Current element

| Property                                | Meaning                | Example                             |
| --------------------------------------- | ---------------------- | ----------------------------------- |
| `background-color`                      | Fill color             | `background-color: lightblue;`      |
| `background-image`                      | Background picture     | `background-image: url('pic.jpg');` |
| `background-size`, `position`, `repeat` | Control image          | `background-size: cover;`           |
| `box-shadow`                            | Box shadow             | `box-shadow: 2px 2px 8px #0003;`    |
| `filter`                                | Visual filter          | `filter: blur(5px);`                |
| `backdrop-filter`                       | Blur background behind | `backdrop-filter: blur(10px);`      |

---

## 🌀 **5. Transforms & Animation**

**Affects:** Current element

| Property           | Meaning                    | Example                          |
| ------------------ | -------------------------- | -------------------------------- |
| `transform`        | Rotate / scale / translate | `transform: rotate(45deg);`      |
| `transform-origin` | Center of transform        | `transform-origin: top left;`    |
| `transition`       | Smooth change              | `transition: all 0.3s ease;`     |
| `animation`        | Keyframe animation         | `animation: bounce 2s infinite;` |

---

## 🖱️ **6. Interaction**

**Affects:** Current + Descendants

| Property         | Meaning                | Example                 |
| ---------------- | ---------------------- | ----------------------- |
| `cursor`         | Mouse cursor           | `cursor: pointer;`      |
| `user-select`    | Disable text selection | `user-select: none;`    |
| `pointer-events` | Block clicks           | `pointer-events: none;` |

---

## 📱 **7. Responsive & Media**

**Affects:** Layout

| Property                 | Meaning         | Example                        |
| ------------------------ | --------------- | ------------------------------ |
| `@media`                 | Responsive rule | `@media (max-width: 768px) {}` |
| `min-width`, `max-width` | Constraints     | `max-width: 1200px;`           |

---

## 📜 **8. Misc Layouts**

| Context      | Property                              | Example                      |
| ------------ | ------------------------------------- | ---------------------------- |
| Multi-column | `column-count`, `column-gap`          | `column-count: 3;`           |
| Tables       | `border-collapse`, `border-spacing`   | `border-collapse: collapse;` |
| Scroll       | `scroll-behavior`, `scroll-snap-type` | `scroll-behavior: smooth;`   |

---

✅ **Summary Rule:**

| Type                  | Applies To              | Example                   |
| --------------------- | ----------------------- | ------------------------- |
| Current               | Itself                  | `padding: 10px;`          |
| Children (container)  | Affects child layout    | `.box { display: flex; }` |
| Current (child)       | Reacts to parent layout | `.item { flex: 1; }`      |
| Current + Descendants | Inheritable             | `.text { color: red; }`   |

---

Would you like me to make this into a **printable table (PDF)** or **editable cheat sheet (Markdown/Notion style)** format next?
