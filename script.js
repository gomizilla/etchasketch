let createdDiv;
let gridNum = 16;
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
    changeSize();
});


function changeSize() {
    var removeDiv = document.getElementsByClassName("grid");
    for (let i = removeDiv.length - 1; i >= 0; i--) {
        removeDiv[i].remove();
    }

    gridNum = prompt("Select size:");
    createDiv(gridNum);
}