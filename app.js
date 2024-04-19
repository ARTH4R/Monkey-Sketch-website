let inputPlayer = 16;
let isDrawing = 1;
let isRainbow = false;

const resizeButton = document.getElementById('resize-button');
const rainbowButton = document.getElementById('rainbow-mode-button');
const clearButton = document.getElementById('clear-button');
const sketchPad = document.getElementById('sketch-pad');

preGrid()

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`;
}
function resetColor() {
    const gridItems = document.querySelectorAll('#sketch-pad div');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}


function reSize () {
    const resetContainer = document.getElementById("sketch-pad")
    resetContainer.innerHTML = ``;

    inputPlayer = prompt("Enter a new grid size (1-100)")
        if (inputPlayer <= 100 && inputPlayer >= 1) {
            for (let count = 0; count < inputPlayer * inputPlayer; count++) {
                const sizeBox = (100 / inputPlayer) + "%";
                const chid = document.createElement("div");
                document.getElementById('sketch-pad').appendChild(chid);
                chid.style.width = (sizeBox);
                chid.style.height = (sizeBox);
                chid.style.border = "1px solid black";
            }
        } else {
            reSize()
        }
    const textCount = document.getElementById('current-grid')
    textCount.textContent = `Currnet Size : ${inputPlayer} x ${inputPlayer}`;
}

function preGrid () {
    inputPlayer = 16;
        if (inputPlayer <= 100 && inputPlayer >= 1) {
            for (let count = 0; count < inputPlayer * inputPlayer; count++) {
                const sizeBox = (100 / inputPlayer) + "%";
                const chid = document.createElement("div");
                document.getElementById('sketch-pad').appendChild(chid);
                chid.style.width = (sizeBox);
                chid.style.height = (sizeBox);
                chid.style.border = "1px solid black";
            }
        } else {
            reSize()
        }
}


const hover = document.getElementById('sketch-pad');
const handleClick = (e) => {
    if (e.target.matches('div') && e.buttons === 1) {
        isDrawing = true;
      if(e.target.matches('div') && isDrawing) {
        isRainbow ? e.target.style.background = randomRGB() : e.target.style.background = "black"
      }
    }else {
        isDrawing = false;
    }
}

hover.addEventListener("mouseover", handleClick)
hover.addEventListener("mouseout", () => {
    isDrawing = false;
})

rainbowButton.addEventListener("click", () => {
    isRainbow = !isRainbow;
})

