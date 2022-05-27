const sketchpad = document.querySelector(".sketchpad");
let boxFilledColor = "#000";
let toggleRainbowColor = false;

const fillOnMouseDown = (e) => {
    if (toggleRainbowColor) {
        e.target.style.backgroundColor = getRandomColor();
    }
    else {
        e.target.style.backgroundColor = boxFilledColor;
    }
}

// It's called when mouse is hover on box and click on it
const fillOnMouseHover = (e) => {
    if (e.buttons > 0) {
        if (toggleRainbowColor) {
            e.target.style.backgroundColor = getRandomColor();
        }
        else {
            e.target.style.backgroundColor = boxFilledColor;
        }
    }
}



const reFetch = () => {
    const boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        // when mouse is down
        boxes[i].addEventListener('mousedown', fillOnMouseDown);

        // when mouse is down and hover
        boxes[i].addEventListener('mouseenter', fillOnMouseHover);
    }
}


const addBox = (num) => {
    sketchpad.replaceChildren()
    const boxSize = (600 / num) - 2;
    for (let i = 1; i <= (num * num); i++) {
        const box = document.createElement('div');
        box.style.cssText = `border:1px dotted gray;width: ${boxSize}px;height: ${boxSize}px;`;
        box.classList.add('box');
        sketchpad.appendChild(box);
    }
    reFetch();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// To pick color to fill boxes
const colorPicker = document.querySelector(".colorPicker")
colorPicker.addEventListener("change", () => {
    boxFilledColor = colorPicker.value
})

// To clear color from boxes
const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener('click', () => {
    console.log("btn clear clicked")
    const boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#FFF";
    }
})

// toggle for rainbow
const toggleRainbow = document.querySelector(".rainbowToggle");
toggleRainbow.addEventListener("change", () => {
    toggleRainbowColor = toggleRainbow.value;
})

// const boxes = document.getElementsByClassName('.box')
// boxes.array.forEach(element => {
//     element.addEventListener('mousedown', () => {
//         element.style.backgroundColor = "#758283";
//     })
// });




// For slider
const gridText = document.querySelector('.grid-value-text');
const slider = document.querySelector(".slider");

slider.addEventListener("input", () => {
    const gridNum = slider.value
    gridText.textContent = `Grid ${gridNum} * ${gridNum}`;

    sketchpad.style.cssText += `grid-template-columns: repeat(${gridNum},${gridNum}fr);grid-template-rows: repeat(${gridNum},${gridNum}fr);`
    addBox(gridNum)
})

addBox(1);

