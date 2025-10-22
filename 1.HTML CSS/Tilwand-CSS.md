Perfect 👌 — let’s do the same thing for **Tailwind CSS** — a **cheat sheet grouped by display/layout types**, just like your CSS glossary.

Here’s your:

# 🧭 Tailwind CSS Glossary — with Effect Context (Current / Children / Inherited)

---

## 🧱 **1. Box Model & Sizing**

**Effect On:** Current

| Purpose        | Tailwind Class                              | Example                         |
| -------------- | ------------------------------------------- | ------------------------------- |
| Width / Height | `w-{size}`, `h-{size}`                      | `w-64 h-32`                     |
| Min / Max      | `min-w-{}`, `max-w-{}`                      | `max-w-screen-lg`               |
| Padding        | `p-{}`, `px-{}`, `py-{}`                    | `p-4`, `px-2`, `py-6`           |
| Margin         | `m-{}`, `mx-{}`, `my-{}`                    | `m-4`, `mx-auto`                |
| Border         | `border`, `border-{side}`, `border-{color}` | `border border-gray-300`        |
| Border radius  | `rounded-{size}`                            | `rounded-lg`                    |
| Box sizing     | `box-border`, `box-content`                 | `box-border`                    |
| Overflow       | `overflow-hidden`, `overflow-auto`          | `overflow-x-scroll`             |
| Aspect Ratio   | `aspect-{ratio}`                            | `aspect-video`, `aspect-square` |

---

## 🧩 **2. Display & Positioning**

**Effect On:** Current

| Type        | Class                                        | Example        |
| ----------- | -------------------------------------------- | -------------- |
| Display     | `block`, `inline-block`, `inline`, `hidden`  | `block`        |
| Flex/Grid   | `flex`, `inline-flex`, `grid`, `inline-grid` | `flex`         |
| Position    | `relative`, `absolute`, `fixed`, `sticky`    | `absolute`     |
| Offsets     | `top-{}`, `right-{}`, `bottom-{}`, `left-{}` | `top-0 left-5` |
| Z-index     | `z-{}`                                       | `z-50`         |
| Float/Clear | `float-left`, `clear-both`                   | `float-right`  |
| Visibility  | `visible`, `invisible`                       | `invisible`    |
| Opacity     | `opacity-{0–100}`                            | `opacity-50`   |

---

## 🧮 **3. Flexbox**

**Effect On:** Children (when container)

| Parent (Container)          | Meaning             | Example          |
| --------------------------- | ------------------- | ---------------- |
| `flex`                      | Enables flex layout | `flex`           |
| `flex-row`, `flex-col`      | Direction           | `flex-col`       |
| `justify-{}`                | Align main axis     | `justify-center` |
| `items-{}`                  | Align cross axis    | `items-center`   |
| `flex-wrap` / `flex-nowrap` | Wrapping            | `flex-wrap`      |
| `gap-{}`                    | Space between       | `gap-4`          |

| Child (Item)    | Meaning                     | Example         |
| --------------- | --------------------------- | --------------- |
| `flex-grow`     | Grow element                | `flex-grow`     |
| `flex-shrink-0` | Prevent shrink              | `flex-shrink-0` |
| `basis-{}`      | Initial width               | `basis-1/2`     |
| `self-{}`       | Override alignment          | `self-end`      |
| `order-{}`      | Change order                | `order-1`       |
| `flex-{}`       | Shorthand grow/shrink/basis | `flex-1`        |

---

## 🧮 **4. Grid**

**Effect On:** Children (when container)

| Parent             | Meaning             | Example                |
| ------------------ | ------------------- | ---------------------- |
| `grid`             | Enables grid        | `grid`                 |
| `grid-cols-{n}`    | Define columns      | `grid-cols-3`          |
| `grid-rows-{n}`    | Define rows         | `grid-rows-2`          |
| `gap-{}`           | Space between cells | `gap-4`                |
| `justify-items-{}` | Align inside cells  | `justify-items-center` |
| `content-{}`       | Align whole grid    | `content-between`      |

| Child             | Meaning              | Example            |
| ----------------- | -------------------- | ------------------ |
| `col-span-{}`     | Span columns         | `col-span-2`       |
| `row-span-{}`     | Span rows            | `row-span-3`       |
| `justify-self-{}` | Horizontal alignment | `justify-self-end` |
| `self-{}`         | Vertical alignment   | `self-center`      |

---

## ✍️ **5. Typography**

**Effect On:** Current + Descendants (inheritable)

| Purpose        | Tailwind Class                              | Example         |
| -------------- | ------------------------------------------- | --------------- |
| Font family    | `font-sans`, `font-serif`, `font-mono`      | `font-sans`     |
| Font size      | `text-{size}`                               | `text-lg`       |
| Font weight    | `font-{weight}`                             | `font-bold`     |
| Line height    | `leading-{}`                                | `leading-loose` |
| Text color     | `text-{color}`                              | `text-gray-700` |
| Text align     | `text-left/right/center/justify`            | `text-center`   |
| Transform      | `uppercase`, `lowercase`, `capitalize`      | `uppercase`     |
| Letter spacing | `tracking-{}`                               | `tracking-wide` |
| Word spacing   | (use `space-x` for flex children)           | `space-x-2`     |
| Decoration     | `underline`, `no-underline`, `line-through` | `underline`     |
| Text shadow    | *(custom plugin)*                           | —               |

---

## 🎨 **6. Backgrounds & Borders**

**Effect On:** Current

| Purpose          | Tailwind Class                             | Example                                        |
| ---------------- | ------------------------------------------ | ---------------------------------------------- |
| Background color | `bg-{color}`                               | `bg-blue-500`                                  |
| Background image | `bg-[url('...')]`                          | `bg-[url('/image.jpg')]`                       |
| Size             | `bg-cover`, `bg-contain`                   | `bg-cover`                                     |
| Position         | `bg-center`, `bg-top`                      | `bg-center`                                    |
| Repeat           | `bg-no-repeat`                             | `bg-no-repeat`                                 |
| Gradient         | `bg-gradient-to-r from-{color} to-{color}` | `bg-gradient-to-r from-pink-500 to-purple-500` |
| Shadow           | `shadow`, `shadow-lg`                      | `shadow-md`                                    |
| Filter           | `blur-{}`, `brightness-{}`                 | `blur-sm`                                      |

---

## 🌀 **7. Transforms & Animation**

**Effect On:** Current

| Purpose                    | Class                                          | Example                               |
| -------------------------- | ---------------------------------------------- | ------------------------------------- |
| Transform                  | `transform` (auto-enabled with modifiers)      | `hover:scale-105`                     |
| Rotate / Scale / Translate | `rotate-{}`, `scale-{}`, `translate-x-{}`      | `rotate-45`                           |
| Transition                 | `transition`, `duration-{}`, `ease-{}`         | `transition duration-300 ease-in-out` |
| Animation                  | `animate-{name}` (default or custom keyframes) | `animate-bounce`                      |

---

## 🖱️ **8. Interaction**

**Effect On:** Current + Descendants

| Purpose        | Class                           | Example               |
| -------------- | ------------------------------- | --------------------- |
| Cursor         | `cursor-pointer`, `cursor-wait` | `cursor-pointer`      |
| Select         | `select-none`, `select-text`    | `select-none`         |
| Pointer events | `pointer-events-none`           | `pointer-events-none` |
| Visibility     | `visible`, `invisible`          | `visible`             |

---

## 📱 **9. Responsive & States**

**Effect On:** Varies

| Purpose             | Example                                       |                       |
| ------------------- | --------------------------------------------- | --------------------- |
| Responsive prefixes | `sm:`, `md:`, `lg:`, `xl:`, `2xl:`            | `md:flex`, `lg:w-1/2` |
| State modifiers     | `hover:`, `focus:`, `active:`, `group-hover:` | `hover:bg-blue-500`   |
| Dark mode           | `dark:`                                       | `dark:bg-gray-900`    |

---

## 🧩 **10. Utility Extras**

| Context    | Class                                      | Example         |
| ---------- | ------------------------------------------ | --------------- |
| Scroll     | `overflow-auto`, `scroll-smooth`, `snap-x` | `scroll-smooth` |
| Columns    | `columns-{n}`                              | `columns-3`     |
| Lists      | `list-disc`, `list-none`                   | `list-inside`   |
| Table      | `table`, `table-auto`, `border-collapse`   | `table-auto`    |
| Object fit | `object-cover`, `object-contain`           | `object-cover`  |

---

## ⚡ **Effect Category Summary**

| Category                              | Tailwind Examples                              | Affects                         |
| ------------------------------------- | ---------------------------------------------- | ------------------------------- |
| **Current (Self)**                    | `p-4`, `bg-red-500`, `shadow-lg`               | Element itself                  |
| **Children (Container)**              | `flex`, `grid`, `justify-center`, `gap-4`      | Layout of children              |
| **Current (as Child)**                | `flex-1`, `order-2`, `col-span-2`              | Responds to parent layout       |
| **Current + Descendants (Inherited)** | `text-blue-600`, `font-sans`, `cursor-pointer` | Affects element and text inside |

---

Would you like me to make this Tailwind version into a **PDF or Notion-style cheat sheet** (like the CSS one)?
