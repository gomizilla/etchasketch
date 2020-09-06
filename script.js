let createdDiv;
let gridNum = 3;
const divContainer = document.getElementById("container");

function createDiv(gridNum) {

    divContainer.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
    
    for (let i = 0; i < gridNum * gridNum; i++) {
        const newDiv = document.createElement("div");
        createdDiv = newDiv;
        createdDiv.classList.add("grid");
        divContainer.appendChild(createdDiv);
    }
    
    clear();
    sketch();
}
createDiv(gridNum);

function sketch() {
    let cell = document.querySelectorAll(".grid");
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
    }
}

function clear() {
    const clear = document.getElementById("clear");
    clear.addEventListener("click", function() {
        let cell = document.querySelectorAll(".grid");
        for (let i = 0; i < cell.length; i++) {
            cell[i].style.backgroundColor = "white";
        }
    });
}

const resize = document.getElementById("resize");
resize.addEventListener("click", function() {
    // prompt("Select size: ");
    // gridNum = prompt;
    // createDiv(gridNum);
    changeSize();
});

function changeSize() {
    gridNum = prompt("Select size:");
    createDiv(gridNum);
}

// sketch();