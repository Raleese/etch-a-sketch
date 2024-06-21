const container = document.querySelector(".container");
const button = document.querySelector(".reset");

function changeColor(item){
    item.style.backgroundColor = "black";
}

function resetGrid(){
    let size = prompt("Enter a new grid");

    if (size > 100){
        size = 16;
        alert("Grid size cannot be bigger than 100x100!");
    }

    document.querySelectorAll(".box").forEach(e => e.remove());

    for (let i = 0; i < size*size; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = (800/size) - 2 + "px";
        box.style.width = (800/size) - 2 + "px";
        box.addEventListener("mouseover", () => {changeColor(box)});
        container.appendChild(box);
    }
}

for (let i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => {changeColor(box)});
    container.appendChild(box);
}

button.addEventListener("click", resetGrid);