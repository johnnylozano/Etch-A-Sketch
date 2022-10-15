const div = document.createElement("div");
const row = document.querySelector(".row");
const sketchContainer = document.querySelector(".sketch-container");

let grid = 16;

// for (let i = 0; i < grid; i++) {
//    sketchContainer.insertBefore(document.createElement("div"), row);
//    div.classList.add("row");
//    row.appendChild(document.createElement("div"));
//    row.lastChild.classList.add("square");
// }

sketchContainer.insertBefore(document.createElement("div"), row);
let newRow = sketchContainer.firstChildElement;
newRow.classList.add("row");
// div.classList.add("square");
