// 'use strict'

// const shapesArray = [];

// class Shape {
//     constructor(name, color) {
//         this._name = name;
//         this._color = color;
//     }

//     get name(){return this._name}
//     get color(){return this._color}

//     getInfo() {
//         return `${this._name} with color ${this._color}`
//     }
// }

// function createShape () {
//     const shapeSelector = document.getElementById('display-grid-box').value;
//     const colorSelector = document.getElementById("display-grid-tank").value;
//     const gridBox = document.getElementById("some-container");

//     if (shapesArray.length >= 20) {
//         alert("You've reached the maximum number of shapes (20).")
//         return
//     }
//     const newShape = new Shape(shapeSelector, colorSelector);
//     shapesArray.push(newShape);

//     const shapeBlock = document.createElement("div");
//     shapeBlock.classList.add(shapeSelector);
//     shapeBlock.style.backgroundColor = colorSelector
//     // getInfo().style.color = rgb(255, 0, 0);

//     shapeBlock.addEventListener("hover", function() {
//         let ice = '<p>'
//         console.log(newShape.getInfo())
//     })

//     gridBox.appendChild(shapeBlock)
// }

// const button = document.getElementById('thisButton');
// button.addEventListener('click', createShape)


'use strict';

const shapesArray = [];

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return `${this._name} with color ${this._color}`;
    }
}

function createShape() {
    const shapeSelector = document.getElementById('display-grid-box').value;
    const colorSelector = document.getElementById('display-grid-tank').value;
    const gridBox = document.getElementById('some-container');

    if (shapesArray.length >= 20) {
        alert("You've reached the maximum number of shapes (20).");
        return;
    }

    const newShape = new Shape(shapeSelector, colorSelector);
    shapesArray.push(newShape);

    const shapeBlock = document.createElement('div');
    shapeBlock.classList.add(shapeSelector);
    shapeBlock.style.backgroundColor = colorSelector;

    shapeBlock.addEventListener('click', function () {
        alert(newShape.getInfo());
    });

    gridBox.appendChild(shapeBlock);
}

function resetShapes() {
    const gridBox = document.getElementById('some-container');

    // Clear the array
    shapesArray.length = 0;

    // Remove all shapes from the screen
    gridBox.innerHTML = '';
}

const button = document.getElementById('thisButton');
button.addEventListener('click', createShape);

// Reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetShapes);