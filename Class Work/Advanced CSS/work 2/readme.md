## 🔹 **What is a Media Query?**

A **media query** in CSS allows you to apply styles **based on device characteristics** such as **screen size, resolution, or orientation**.

It’s the backbone of **responsive design** (making a website look good on mobile, tablet, and desktop).

---

## 🔹 **Basic Syntax**

```css
@media media-type and (condition) {
  /* CSS rules here */
}
```

- **media-type** → `screen`, `print`, `all` (default).
- **condition** → based on device width, height, orientation, resolution, etc.

---

## 🔹 **Examples**

### 1. Responsive Layouts

```css
/* For devices with max width 600px (like mobiles) */
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

### 2. Between Two Widths (Tablet Range)

```css
@media screen and (min-width: 601px) and (max-width: 1024px) {
  body {
    background-color: lightgreen;
  }
}
```

---

### 3. Desktop Screens

```css
@media screen and (min-width: 1025px) {
  body {
    background-color: lightcoral;
  }
}
```

---

### 4. Orientation

```css
/* Portrait mode */
@media screen and (orientation: portrait) {
  body {
    font-size: 18px;
  }
}

/* Landscape mode */
@media screen and (orientation: landscape) {
  body {
    font-size: 14px;
  }
}
```

---

### 5. High-Resolution Screens (Retina Displays)

```css
@media screen and (min-resolution: 2dppx) {
  img {
    width: 100%;
    height: auto;
  }
}
```

---

## 🔹 **Common Breakpoints (Not fixed, just popular)**

📱 Mobile: `max-width: 600px`
📱📱 Tablet: `min-width: 601px` and `max-width: 1024px`
💻 Desktop: `min-width: 1025px`

---

👉 So basically, **media queries help websites adapt to different screens & devices.**
