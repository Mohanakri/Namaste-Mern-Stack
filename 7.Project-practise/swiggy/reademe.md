# Leassons Learnt

* always use optioning insted of ..

 like ??? instead od .  to retrieve data in object.

using baclquotes, if any dynamic chnage in string
ex: const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgid}`;


* Map
## 🔹 React `.map()` Summary Notes
1. **`.map()` creates JSX for rendering**
   * Iterates over an array and produces a new array, usually of JSX elements.
2. **Inside `return()` → implicit JSX**
   * If `.map()` is used directly in `return`, React automatically renders it.
3. **Before `return()` → must return JSX**
   * If `.map()` runs before the `return`, you must explicitly return the JSX for React to render.
4. **Common mistake**
   * Using `.map()` before `return` **without returning JSX** → becomes a plain JS statement, nothing renders.

