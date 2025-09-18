const canvas = document.querySelector(".canvas");
const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "white",
  "aqua",
  "crimson",
  "dodgerblue",
  "limegreen",
  "gold",
  "violet",
  "orange",
  "pink",
  "purple",
  "teal",
  "magenta",
  "coral",
  "salmon",
  "indigo",
  "turquoise",
  "darkorange",
  "khaki",
  "lightgreen",
  "lightblue",
  "hotpink",
  "chartreuse",
  "orangered",
  "plum",
  "lavender",
  "slateblue",
  "springgreen",
  "deeppink",
  "tomato",
  "royalblue",
  "peru",
  "sandybrown",
];

canvas.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  const circle = document.createElement("div");
  circle.classList.add("circle-shape");

  let num = Math.floor(Math.random() * colors.length) - 1;
  circle.style.backgroundColor = colors[num];

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 50}px`;

  canvas.appendChild(circle);
});
