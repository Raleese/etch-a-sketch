const container = document.querySelector(".container");
const button = document.querySelector(".reset");

function changeColor(item){
    item.style.backgroundColor = "black";
}

function resetGrid(){
    console.log("worked");
}

for (let i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => {changeColor(box)});
    container.appendChild(box);
}

button.addEventListener("click", resetGrid);