# 🎨 CSS Animation Examples

This repository demonstrates **CSS animations** using `@keyframes` and `animation-name`.

---

## 📌 Key Concepts

- **`@keyframes`** → Defines the animation steps (e.g., 0%, 50%, 100%).
- **`animation-name`** → Assigns a name to the animation.
- **`animation-duration`** → Specifies how long the animation runs.
- **`animation-iteration-count`** → Defines how many times it repeats (e.g., `infinite`).

---

## 🔹 Example 1: Keyframes (0% → 50% → 100%)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Animation 0-50-100</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background: tomato;
        position: relative;
        animation-name: moveBox1;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }

      @keyframes moveBox1 {
        0% {
          left: 0;
          top: 0;
          background: tomato;
        }
        50% {
          left: 200px;
          top: 0;
          background: gold;
        }
        100% {
          left: 0;
          top: 0;
          background: limegreen;
        }
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

---

## 🔹 Example 2: Keyframes (0% → 25% → 50% → 100%)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Animation 0-25-50-100</title>
    <style>
      .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: skyblue;
        position: relative;
        animation-name: moveCircle;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }

      @keyframes moveCircle {
        0% {
          left: 0;
          top: 0;
          background: skyblue;
        }
        25% {
          left: 150px;
          top: 0;
          background: pink;
        }
        50% {
          left: 150px;
          top: 150px;
          background: orange;
        }
        100% {
          left: 0;
          top: 0;
          background: purple;
        }
      }
    </style>
  </head>
  <body>
    <div class="circle"></div>
  </body>
</html>
```

---

## 🔹 Example 3: Keyframes (0% → 100%)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Animation 0-100</title>
    <style>
      .bar {
        width: 50px;
        height: 50px;
        background: crimson;
        position: relative;
        animation-name: growBar;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }

      @keyframes growBar {
        0% {
          transform: scale(1);
          background: crimson;
        }
        100% {
          transform: scale(2);
          background: teal;
        }
      }
    </style>
  </head>
  <body>
    <div class="bar"></div>
  </body>
</html>
```

---

## 🚀 How to Run

1. Copy any example into a `.html` file.
2. Open it in your browser.
3. Watch the animation! 🎬

---

## 📚 Summary

- **0%** → Starting point of the animation.
- **Intermediate points (25%, 50%, etc.)** → Define transitions.
- **100%** → End point of the animation.
- Use **`animation-name`** to link the CSS animation to an element.
