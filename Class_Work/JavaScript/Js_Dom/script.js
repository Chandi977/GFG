function changeElements() {
  // 1. getElementById
  let idElement = document.getElementById("unique-para");
  idElement.style.backgroundColor = "lightgreen";
  idElement.innerText += " ✅ (Changed by getElementById)";

  // 2. getElementsByClassName
  let classElements = document.getElementsByClassName("demo");
  for (let i = 0; i < classElements.length; i++) {
    classElements[i].style.backgroundColor = "lightblue";
    classElements[i].innerText += " ✅ (Changed by getElementsByClassName)";
  }

  // 3. getElementsByTagName
  let tagElements = document.getElementsByTagName("p");
  for (let i = 0; i < tagElements.length; i++) {
    tagElements[i].style.border = "2px solid orange";
  }

  // 4. querySelector
  let queryOne = document.querySelector(".query");
  queryOne.style.backgroundColor = "pink";
  queryOne.innerText += " ✅ (Changed by querySelector)";

  // 5. querySelectorAll
  let queryAll = document.querySelectorAll(".query");
  queryAll.forEach((el) => {
    el.style.fontWeight = "bold";
    el.style.color = "red";
  });

  // Disable button after one click
  document.querySelector("button").disabled = true;
  document.querySelector("button").innerText = "Changes Applied!";
}

/*
---

## 🔹 1. **ID (`getElementById`)**

* An **ID is unique** → should be used only once in an HTML page.
* Faster because it directly looks for that single element.
* Returns **only one element**.

```html
<p id="unique">Hello</p>
<script>
  let byId = document.getElementById("unique");
  console.log(byId.innerText); // Hello
</script>
```

---

## 🔹 2. **Class (`getElementsByClassName`)**

* A **class can be used by multiple elements**.
* Returns a **collection (HTMLCollection)** of all elements with that class.
* You must loop through them to apply changes.

```html
<p class="item">One</p>
<p class="item">Two</p>
<script>
  let byClass = document.getElementsByClassName("item");
  console.log(byClass[0].innerText); // One
</script>
```

---

## 🔹 3. **Tag (`getElementsByTagName`)**

* Selects elements by their **HTML tag** (like `p`, `div`, `h1`, `li`, etc.).
* Returns an **HTMLCollection** of all matching elements.

```html
<h1>Heading 1</h1>
<h1>Heading 2</h1>
<script>
  let byTag = document.getElementsByTagName("h1");
  console.log(byTag.length); // 2
</script>
```

---

## 🔹 4. **Query Selector (`querySelector` & `querySelectorAll`)**

* Uses **CSS selectors** to target elements.
* Very **flexible** → can select by `id`, `class`, `tag`, or even advanced selectors (`.class > p`, `#id .child`, etc.).
* `querySelector()` → returns the **first match only**.
* `querySelectorAll()` → returns a **NodeList of all matches**.

```html
<p id="one">ID Example</p>
<p class="two">Class Example</p>
<p>Tag Example</p>

<script>
  console.log(document.querySelector("#one").innerText);   // ID Example
  console.log(document.querySelector(".two").innerText);   // Class Example
  console.log(document.querySelector("p").innerText);      // ID Example (first p)
  console.log(document.querySelectorAll("p").length);      // 3 (all p tags)
</script>
```

---

## 🔑 **Key Differences**

| Method                             | Selector Type    | Returns                | Use Case                                 |
| ---------------------------------- | ---------------- | ---------------------- | ---------------------------------------- |
| `getElementById("id")`             | **ID**           | Single element         | When element is unique                   |
| `getElementsByClassName("class")`  | **Class**        | HTMLCollection         | When multiple elements share a class     |
| `getElementsByTagName("tag")`      | **Tag**          | HTMLCollection         | When selecting by tag name               |
| `querySelector("CSS selector")`    | **CSS selector** | First matching element | When you want the first match            |
| `querySelectorAll("CSS selector")` | **CSS selector** | NodeList (all matches) | When you want all matches with CSS power |

---

## 🔹 What is `querySelector`?

* `document.querySelector()` selects the **first element** that matches a **CSS selector**.
* Very powerful because it understands **CSS syntax**.

✅ Example:

```html
<p id="one">ID Example</p>
<p class="two">Class Example</p>
<p>Tag Example</p>

<script>
  // Select by ID
  console.log(document.querySelector("#one").innerText);  // "ID Example"

  // Select by Class
  console.log(document.querySelector(".two").innerText);  // "Class Example"

  // Select by Tag
  console.log(document.querySelector("p").innerText);     // "ID Example" (first p tag)
</script>
```

---

## 🔹 What is `querySelectorAll`?

* `document.querySelectorAll()` selects **all elements** that match the CSS selector.
* Returns a **NodeList** (can use `forEach`).

✅ Example:

```html
<p class="test">First</p>
<p class="test">Second</p>

<script>
  let all = document.querySelectorAll(".test");
  all.forEach(el => console.log(el.innerText));
  // First
  // Second
</script>
```

---

## 🔹 Power of CSS Selectors

Since it uses **CSS rules**, you can do much more than just ID/class/tag.

### Examples:

```javascript
// Select first <p> inside a div
document.querySelector("div p");

// Select element with ID "header" inside a class ".container"
document.querySelector(".container #header");

// Select input of type "text"
document.querySelector("input[type='text']");

// Select all list items inside an unordered list
document.querySelectorAll("ul li");
```

---

## 🔹 Live Example with Button

Here’s a small **HTML demo** that shows how `querySelector` and `querySelectorAll` work:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>querySelector Demo</title>
  <style>
    .highlight { background: yellow; font-weight: bold; }
  </style>
</head>
<body>
  <h2>querySelector & querySelectorAll Demo</h2>
  
  <p class="item">Paragraph 1</p>
  <p class="item">Paragraph 2</p>
  <p class="item">Paragraph 3</p>
  
  <button onclick="highlight()">Click Me</button>

  <script>
    function highlight() {
      // querySelector → first match only
      let first = document.querySelector(".item");
      first.classList.add("highlight");

      // querySelectorAll → all matches
      let all = document.querySelectorAll(".item");
      all.forEach(el => el.style.border = "2px solid red");
    }
  </script>
</body>
</html>
```

---

👉 When you click the button:

* The **first `.item`** becomes highlighted (yellow + bold).
* **All `.item`** paragraphs get a red border.

---
*/

// Create an element

// function changeElements() {
//   // Change existing elements
//   let idElement = document.getElementById("unique-para");
//   idElement.style.backgroundColor = "lightgreen";
//   idElement.innerText += " ✅ (Changed by getElementById)";
// }

function createNewElement() {
  // Create a new <p> tag
  let newPara = document.createElement("p");
  newPara.innerText = "👉 I was created and appended dynamically!";
  newPara.style.backgroundColor = "lightyellow";
  newPara.style.border = "2px dashed green";

  // Append it at the end of body
  document.body.appendChild(newPara);
}

const container = document.querySelector(".container");
console.log(container.children); // HTMLCollection(3)
console.log(container.children[0].innerText); //

const img = document.getElementById("imgTag");

function imgChange() {
  return img.setAttribute(
    "src",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
  );
}

function removeImg() {
  return img.removeAttribute("src");
}

function restToDefault() {
  return img.setAttribute(
    "src",
    "https://images.pexels.com/photos/33873357/pexels-photo-33873357.jpeg"
  );
}
