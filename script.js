
let createdDiv;
let gridNum = 16;
const divContainer = document.getElementById("container");

function createDiv() {
    const newDiv = document.createElement("div");
    createdDiv = newDiv;
    newDiv.classList.add("grid");
    return createdDiv;
}


function divGrid() {
    for (let i = 0; i < gridNum; i++) {
        createDiv();
        divContainer.appendChild(createdDiv);
        if (i % 2 === 0) {
            createdDiv.style.backgroundColor = "yellow";
        }
    }

}

createDiv();
divGrid();




// newDiv.style.display = "grid";
// newDiv.style.gridTemplateColumns = "repeat(16, 12px)";
// newDiv.style.gridTemplateRows = "50px";
// newDiv.style.border = "50px";
// newDiv.style.backgroundColor = "yellow";
// newDiv.style.width = "50%";