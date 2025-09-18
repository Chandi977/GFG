const btn = document.getElementById("btn");
const canvas = document.querySelector(".canvas");

function generateShapes() {
  const shapeName = document.getElementById("shapeName").value;
  const colorName = document.querySelector(".colorName").value || "gray";
  const quantity = parseInt(document.querySelector(".qtn").value) || 1;

  canvas.innerHTML = "";

  for (let i = 0; i < quantity; i++) {
    const shape = document.createElement("div");
    shape.classList.add("shape", shapeName);

    if (shapeName === "triangle") {
      shape.style.borderBottomColor = colorName;
    } else if (shapeName === "hexagon") {
      shape.style.backgroundColor = colorName;
    } else if (shapeName === "star") {
      shape.style.backgroundColor = colorName;
    } else {
      shape.style.backgroundColor = colorName;
    }

    canvas.appendChild(shape);
  }
}
btn.addEventListener("click", generateShapes);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateShapes();
  }
});
