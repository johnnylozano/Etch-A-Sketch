const sketchContainer = document.querySelector(".sketch-container");
const button = document.querySelector(".btn");

let grid = 0;
function setGridSize(grid) {
   if (grid !== 0) {
      clearGrid();
   }
   if (grid > 100) grid = 100;

   for (let j = 0; j < grid; j++) {
      sketchContainer.appendChild(document.createElement("div"));
      sketchContainer.lastChild.classList.add("row");

      for (let i = 0; i < grid; i++) {
         let lastRow = sketchContainer.lastChild;
         lastRow.appendChild(document.createElement("div"));
         lastRow.lastChild.classList.add("square");
      }
   }
   return drawGrid();
}

button.addEventListener("click", () => {
   let grid = prompt("Please enter a number up to 100");
   parseInt(grid);
   return setGridSize(grid);
});

function drawGrid() {
   let square = document.querySelectorAll(".square");

   square.forEach((sq) => {
      sq.addEventListener("mouseover", () => {
         sq.classList.add("dark");
      });
   });
}

function clearGrid() {
   let row = document.querySelectorAll(".row");

   row.forEach((r) => {
      r.remove();
   });
}
