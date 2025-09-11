### 🔹 **CSS Position Properties**

1. **Static**

   - **Default position** of all elements.
   - `top`, `bottom`, `left`, `right` properties **don’t affect** it.
   - Example:

     ````css
     div {
       position: static; /* default */
     }
     ```̥
     ````

---

2. **Relative**

   - Element stays in the **normal flow**, but you can move it using `top`, `left`, `right`, `bottom`.
   - Its original space is **reserved (footprint remains)**.
   - Example:

     ```css
     div {
       position: relative;
       top: 20px; /* moves 20px down */
       left: 10px; /* moves 10px right */
     }
     ```

---

3. **Absolute**

   - Element is removed from the normal flow.
   - It is positioned **relative to its nearest positioned ancestor** (not `static`).
   - If no such ancestor exists, it is positioned relative to the **document body**.
   - Example:

     ```css
     div {
       position: absolute;
       top: 50px;
       left: 100px;
     }
     ```

---

4. **Fixed**

   - Element is **fixed relative to the viewport** (browser window).
   - It **does not move when the page is scrolled**.
   - Example:

     ```css
     div {
       position: fixed;
       bottom: 0;
       right: 0;
     }
     ```

---

5. **Sticky** ✅

   - A **hybrid of relative and fixed**.
   - The element acts like **relative** until a given scroll threshold is met, then it becomes **fixed**.
   - Useful for **sticky headers, navigation bars, or sidebars**.
   - Example:

     ```css
     div {
       position: sticky;
       top: 0; /* sticks to top while scrolling */
       background: yellow;
     }
     ```

---

👉 **Summary**

| Position     | Moves with scroll?           | Keeps footprint? | Positioned relative to              |
| ------------ | ---------------------------- | ---------------- | ----------------------------------- |
| **Static**   | ✅ Yes                       | ✅ Yes           | Normal document flow                |
| **Relative** | ✅ Yes                       | ✅ Yes           | Itself (original spot)              |
| **Absolute** | ✅ Yes                       | ❌ No            | Nearest positioned ancestor or body |
| **Fixed**    | ❌ No                        | ❌ No            | Viewport (browser window)           |
| **Sticky**   | ✅ Until threshold, ❌ after | ✅ Yes           | Nearest scroll container            |

---
