# Tailwind CSS Utility Classes - Component Context Guide

> **Applied To**: Element = applies to the element itself | Children = affects direct children | Descendants = affects nested children

---

## **LAYOUT**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **container** | Element | Constrained max-width container | `<div class="container">` |
| **block** | Element | Display as block element | `<div class="block">` |
| **inline-block** | Element | Display as inline-block | `<span class="inline-block">` |
| **inline** | Element | Display as inline element | `<span class="inline">` |
| **hidden** | Element | Hide element (display: none) | `<div class="hidden">` |
| **static** | Element | Static positioning | `<div class="static">` |
| **relative** | Element | Relative positioning | `<div class="relative">` |
| **absolute** | Element | Absolute positioning | `<div class="absolute">` |
| **fixed** | Element | Fixed positioning | `<div class="fixed">` |
| **sticky** | Element | Sticky positioning | `<div class="sticky">` |

---

## **FLEXBOX**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **flex** | Element (affects children) | Make element a flex container | `<div class="flex">` |
| **flex-row** | Element (affects children) | Flex children in row direction | `<div class="flex flex-row">` |
| **flex-col** | Element (affects children) | Flex children in column direction | `<div class="flex flex-col">` |
| **flex-row-reverse** | Element (affects children) | Reverse row direction | `<div class="flex flex-row-reverse">` |
| **flex-col-reverse** | Element (affects children) | Reverse column direction | `<div class="flex flex-col-reverse">` |
| **flex-wrap** | Element (affects children) | Allow children to wrap | `<div class="flex flex-wrap">` |
| **flex-nowrap** | Element (affects children) | Prevent children from wrapping | `<div class="flex flex-nowrap">` |
| **justify-start** | Element (affects children) | Align children to start | `<div class="flex justify-start">` |
| **justify-center** | Element (affects children) | Center children horizontally | `<div class="flex justify-center">` |
| **justify-end** | Element (affects children) | Align children to end | `<div class="flex justify-end">` |
| **justify-between** | Element (affects children) | Space between children | `<div class="flex justify-between">` |
| **justify-around** | Element (affects children) | Space around children | `<div class="flex justify-around">` |
| **justify-evenly** | Element (affects children) | Even space around children | `<div class="flex justify-evenly">` |
| **items-start** | Element (affects children) | Align children to start | `<div class="flex items-start">` |
| **items-center** | Element (affects children) | Center children vertically | `<div class="flex items-center">` |
| **items-end** | Element (affects children) | Align children to end | `<div class="flex items-end">` |
| **items-stretch** | Element (affects children) | Stretch children to fill | `<div class="flex items-stretch">` |
| **items-baseline** | Element (affects children) | Align children to baseline | `<div class="flex items-baseline">` |
| **gap-{n}** | Element (affects children) | Space between children | `<div class="flex gap-4">` |
| **gap-x-{n}** | Element (affects children) | Horizontal gap between children | `<div class="flex gap-x-4">` |
| **gap-y-{n}** | Element (affects children) | Vertical gap between children | `<div class="flex gap-y-4">` |
| **flex-1** | Element (responds to parent) | Flex grow and shrink | `<div class="flex-1">` |
| **flex-auto** | Element (responds to parent) | Flex with auto basis | `<div class="flex-auto">` |
| **flex-initial** | Element (responds to parent) | Initial flex value | `<div class="flex-initial">` |
| **flex-none** | Element (responds to parent) | Don't flex | `<div class="flex-none">` |
| **grow** | Element (responds to parent) | Allow to grow | `<div class="grow">` |
| **grow-0** | Element (responds to parent) | Don't grow | `<div class="grow-0">` |
| **shrink** | Element (responds to parent) | Allow to shrink | `<div class="shrink">` |
| **shrink-0** | Element (responds to parent) | Don't shrink | `<div class="shrink-0">` |
| **self-auto** | Element (responds to parent) | Auto align self | `<div class="self-auto">` |
| **self-start** | Element (responds to parent) | Align self to start | `<div class="self-start">` |
| **self-center** | Element (responds to parent) | Center self | `<div class="self-center">` |
| **self-end** | Element (responds to parent) | Align self to end | `<div class="self-end">` |
| **self-stretch** | Element (responds to parent) | Stretch self | `<div class="self-stretch">` |
| **order-{n}** | Element (responds to parent) | Change visual order | `<div class="order-1">` |

---

## **GRID**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **grid** | Element (affects children) | Make element a grid container | `<div class="grid">` |
| **grid-cols-{n}** | Element (affects children) | Number of columns for children | `<div class="grid grid-cols-3">` |
| **grid-rows-{n}** | Element (affects children) | Number of rows for children | `<div class="grid grid-rows-3">` |
| **grid-flow-row** | Element (affects children) | Auto-place children by row | `<div class="grid grid-flow-row">` |
| **grid-flow-col** | Element (affects children) | Auto-place children by column | `<div class="grid grid-flow-col">` |
| **auto-cols-auto** | Element (affects children) | Auto column size for children | `<div class="grid auto-cols-auto">` |
| **auto-rows-auto** | Element (affects children) | Auto row size for children | `<div class="grid auto-rows-auto">` |
| **col-span-{n}** | Element (responds to parent) | Span across columns | `<div class="col-span-2">` |
| **row-span-{n}** | Element (responds to parent) | Span across rows | `<div class="row-span-2">` |
| **col-start-{n}** | Element (responds to parent) | Start at column | `<div class="col-start-2">` |
| **col-end-{n}** | Element (responds to parent) | End at column | `<div class="col-end-4">` |
| **row-start-{n}** | Element (responds to parent) | Start at row | `<div class="row-start-2">` |
| **row-end-{n}** | Element (responds to parent) | End at row | `<div class="row-end-4">` |
| **justify-items-start** | Element (affects children) | Justify children to start | `<div class="grid justify-items-start">` |
| **justify-items-center** | Element (affects children) | Center children horizontally | `<div class="grid justify-items-center">` |
| **justify-items-end** | Element (affects children) | Justify children to end | `<div class="grid justify-items-end">` |
| **justify-self-auto** | Element (responds to parent) | Auto justify self | `<div class="justify-self-auto">` |
| **justify-self-start** | Element (responds to parent) | Justify self to start | `<div class="justify-self-start">` |
| **justify-self-center** | Element (responds to parent) | Center self horizontally | `<div class="justify-self-center">` |
| **justify-self-end** | Element (responds to parent) | Justify self to end | `<div class="justify-self-end">` |

---

## **SPACING**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **m-{n}** | Element | Margin on all sides | `<div class="m-4">` |
| **mx-{n}** | Element | Horizontal margin | `<div class="mx-4">` |
| **my-{n}** | Element | Vertical margin | `<div class="my-4">` |
| **mt-{n}** | Element | Top margin | `<div class="mt-4">` |
| **mr-{n}** | Element | Right margin | `<div class="mr-4">` |
| **mb-{n}** | Element | Bottom margin | `<div class="mb-4">` |
| **ml-{n}** | Element | Left margin | `<div class="ml-4">` |
| **p-{n}** | Element | Padding on all sides | `<div class="p-4">` |
| **px-{n}** | Element | Horizontal padding | `<div class="px-4">` |
| **py-{n}** | Element | Vertical padding | `<div class="py-4">` |
| **pt-{n}** | Element | Top padding | `<div class="pt-4">` |
| **pr-{n}** | Element | Right padding | `<div class="pr-4">` |
| **pb-{n}** | Element | Bottom padding | `<div class="pb-4">` |
| **pl-{n}** | Element | Left padding | `<div class="pl-4">` |
| **space-x-{n}** | Element (affects children) | Horizontal space between children | `<div class="flex space-x-4">` |
| **space-y-{n}** | Element (affects children) | Vertical space between children | `<div class="space-y-4">` |

---

## **SIZING**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **w-{n}** | Element | Fixed width | `<div class="w-64">` |
| **w-full** | Element | 100% width | `<div class="w-full">` |
| **w-screen** | Element | 100vw width | `<div class="w-screen">` |
| **w-auto** | Element | Auto width | `<div class="w-auto">` |
| **min-w-{n}** | Element | Minimum width | `<div class="min-w-0">` |
| **max-w-{n}** | Element | Maximum width | `<div class="max-w-xl">` |
| **h-{n}** | Element | Fixed height | `<div class="h-64">` |
| **h-full** | Element | 100% height | `<div class="h-full">` |
| **h-screen** | Element | 100vh height | `<div class="h-screen">` |
| **h-auto** | Element | Auto height | `<div class="h-auto">` |
| **min-h-{n}** | Element | Minimum height | `<div class="min-h-0">` |
| **max-h-{n}** | Element | Maximum height | `<div class="max-h-screen">` |

---

## **TYPOGRAPHY**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **text-{size}** | Element + Descendants | Font size (inherits) | `<div class="text-lg">` |
| **font-{weight}** | Element + Descendants | Font weight (inherits) | `<div class="font-bold">` |
| **font-{family}** | Element + Descendants | Font family (inherits) | `<div class="font-sans">` |
| **italic** | Element + Descendants | Italic text (inherits) | `<div class="italic">` |
| **not-italic** | Element + Descendants | Normal text (inherits) | `<div class="not-italic">` |
| **text-left** | Element | Left align text | `<div class="text-left">` |
| **text-center** | Element | Center align text | `<div class="text-center">` |
| **text-right** | Element | Right align text | `<div class="text-right">` |
| **text-justify** | Element | Justify text | `<div class="text-justify">` |
| **uppercase** | Element + Descendants | Uppercase text (inherits) | `<div class="uppercase">` |
| **lowercase** | Element + Descendants | Lowercase text (inherits) | `<div class="lowercase">` |
| **capitalize** | Element + Descendants | Capitalize text (inherits) | `<div class="capitalize">` |
| **normal-case** | Element + Descendants | Normal case (inherits) | `<div class="normal-case">` |
| **underline** | Element | Underline text | `<span class="underline">` |
| **line-through** | Element | Strike-through text | `<span class="line-through">` |
| **no-underline** | Element | No underline | `<a class="no-underline">` |
| **leading-{n}** | Element + Descendants | Line height (inherits) | `<div class="leading-relaxed">` |
| **tracking-{n}** | Element + Descendants | Letter spacing (inherits) | `<div class="tracking-wide">` |
| **truncate** | Element | Truncate with ellipsis | `<div class="truncate">` |
| **whitespace-normal** | Element | Normal whitespace | `<div class="whitespace-normal">` |
| **whitespace-nowrap** | Element | No wrap text | `<div class="whitespace-nowrap">` |
| **break-words** | Element | Break long words | `<div class="break-words">` |

---

## **COLORS**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **text-{color}** | Element + Descendants | Text color (inherits) | `<div class="text-blue-500">` |
| **bg-{color}** | Element | Background color | `<div class="bg-gray-100">` |
| **border-{color}** | Element | Border color | `<div class="border-red-500">` |

---

## **BORDERS**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **border** | Element | Border on all sides | `<div class="border">` |
| **border-{n}** | Element | Border width | `<div class="border-2">` |
| **border-t** | Element | Top border | `<div class="border-t">` |
| **border-r** | Element | Right border | `<div class="border-r">` |
| **border-b** | Element | Bottom border | `<div class="border-b">` |
| **border-l** | Element | Left border | `<div class="border-l">` |
| **rounded** | Element | Border radius all corners | `<div class="rounded">` |
| **rounded-{size}** | Element | Border radius size | `<div class="rounded-lg">` |
| **rounded-t** | Element | Top corners rounded | `<div class="rounded-t">` |
| **rounded-r** | Element | Right corners rounded | `<div class="rounded-r">` |
| **rounded-b** | Element | Bottom corners rounded | `<div class="rounded-b">` |
| **rounded-l** | Element | Left corners rounded | `<div class="rounded-l">` |
| **rounded-full** | Element | Fully rounded (circle) | `<div class="rounded-full">` |

---

## **EFFECTS**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **shadow** | Element | Box shadow | `<div class="shadow">` |
| **shadow-{size}** | Element | Box shadow size | `<div class="shadow-lg">` |
| **opacity-{n}** | Element | Opacity level | `<div class="opacity-50">` |
| **blur** | Element | Blur effect | `<div class="blur">` |
| **brightness-{n}** | Element | Brightness filter | `<div class="brightness-50">` |
| **contrast-{n}** | Element | Contrast filter | `<div class="contrast-125">` |
| **grayscale** | Element | Grayscale filter | `<div class="grayscale">` |
| **backdrop-blur** | Element | Backdrop blur | `<div class="backdrop-blur">` |

---

## **TRANSFORMS**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **scale-{n}** | Element | Scale transform | `<div class="scale-110">` |
| **rotate-{n}** | Element | Rotate transform | `<div class="rotate-45">` |
| **translate-x-{n}** | Element | Horizontal translate | `<div class="translate-x-4">` |
| **translate-y-{n}** | Element | Vertical translate | `<div class="translate-y-4">` |
| **skew-x-{n}** | Element | Horizontal skew | `<div class="skew-x-12">` |
| **skew-y-{n}** | Element | Vertical skew | `<div class="skew-y-12">` |
| **origin-center** | Element | Transform origin center | `<div class="origin-center">` |
| **origin-top** | Element | Transform origin top | `<div class="origin-top">` |

---

## **TRANSITIONS & ANIMATIONS**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **transition** | Element | Transition all properties | `<div class="transition">` |
| **transition-{property}** | Element | Transition specific property | `<div class="transition-colors">` |
| **duration-{n}** | Element | Transition duration | `<div class="duration-300">` |
| **ease-{type}** | Element | Timing function | `<div class="ease-in-out">` |
| **delay-{n}** | Element | Transition delay | `<div class="delay-150">` |
| **animate-{name}** | Element | Built-in animation | `<div class="animate-spin">` |

---

## **INTERACTIVITY**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **cursor-{type}** | Element + Descendants | Cursor style (inherits) | `<div class="cursor-pointer">` |
| **pointer-events-none** | Element | Disable pointer events | `<div class="pointer-events-none">` |
| **pointer-events-auto** | Element | Enable pointer events | `<div class="pointer-events-auto">` |
| **select-none** | Element | Disable text selection | `<div class="select-none">` |
| **select-text** | Element | Enable text selection | `<div class="select-text">` |
| **select-all** | Element | Select all on click | `<div class="select-all">` |

---

## **OVERFLOW**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **overflow-auto** | Element | Auto overflow | `<div class="overflow-auto">` |
| **overflow-hidden** | Element | Hide overflow | `<div class="overflow-hidden">` |
| **overflow-visible** | Element | Visible overflow | `<div class="overflow-visible">` |
| **overflow-scroll** | Element | Scrollable overflow | `<div class="overflow-scroll">` |
| **overflow-x-auto** | Element | Horizontal auto overflow | `<div class="overflow-x-auto">` |
| **overflow-y-auto** | Element | Vertical auto overflow | `<div class="overflow-y-auto">` |

---

## **Z-INDEX & STACKING**

| Class | Applied To | Definition | Example |
|-------|------------|------------|---------|
| **z-{n}** | Element | Z-index level | `<div class="z-10">` |
| **z-auto** | Element | Auto z-index | `<div class="z-auto">` |

---

## **RESPONSIVE PREFIXES**

| Prefix | Breakpoint | Definition | Example |
|--------|------------|------------|---------|
| **sm:** | ≥640px | Small screens and up | `<div class="sm:flex">` |
| **md:** | ≥768px | Medium screens and up | `<div class="md:grid">` |
| **lg:** | ≥1024px | Large screens and up | `<div class="lg:w-1/2">` |
| **xl:** | ≥1280px | Extra large screens | `<div class="xl:text-xl">` |
| **2xl:** | ≥1536px | 2X large screens | `<div class="2xl:container">` |

---

## **STATE PREFIXES**

| Prefix | State | Definition | Example |
|--------|-------|------------|---------|
| **hover:** | On hover | Apply on hover | `<div class="hover:bg-blue-500">` |
| **focus:** | On focus | Apply on focus | `<input class="focus:ring-2">` |
| **active:** | On active | Apply when active | `<button class="active:scale-95">` |
| **disabled:** | When disabled | Apply when disabled | `<button class="disabled:opacity-50">` |
| **group-hover:** | Parent hover | Apply when parent hovered | `<div class="group-hover:block">` |
| **dark:** | Dark mode | Apply in dark mode | `<div class="dark:bg-gray-800">` |

---

## **QUICK PATTERNS**

| Pattern | Where to Apply | Common Use | Example |
|---------|----------------|------------|---------|
| **flex/grid** | Parent container | Layout children | `<div class="flex gap-4">` |
| **justify-*/items-*** | Parent container | Align children | `<div class="flex justify-center items-center">` |
| **flex-1/col-span-*** | Child element | Size within parent | `<div class="flex-1">` |
| **text-*/font-*** | Any element | Style text (inherits) | `<div class="text-lg font-bold">` |
| **bg-*/text-*** | Element | Colors | `<div class="bg-blue-500 text-white">` |
| **p-*/m-*** | Element | Spacing | `<div class="p-4 m-2">` |
| **w-*/h-*** | Element | Sizing | `<div class="w-64 h-32">` |

---

## **COMMON MISTAKES TO AVOID**

❌ **Wrong**: Applying flex utilities to children
```html
<div>
  <div class="justify-center">Content</div>
</div>
```

✅ **Correct**: Apply flex utilities to parent
```html
<div class="flex justify-center">
  <div>Content</div>
</div>
```

---

❌ **Wrong**: Using space-* without flex/grid
```html
<div class="space-x-4">
  <div>Item</div>
</div>
```

✅ **Correct**: Use space-* with flex/grid
```html
<div class="flex space-x-4">
  <div>Item</div>
</div>
```

---

**Pro Tip**: Layout utilities (`flex`, `grid`, `justify-*`, `items-*`, `gap-*`, `space-*`) go on the **parent container**, not the children!