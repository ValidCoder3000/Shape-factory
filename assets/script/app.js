'use strict'

const shapesArray = [];

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name(){return this._name}
    get color(){return this._color}

    getInfo() {
        return `${this._name} with color ${this._color}`
    }
}

function createShape () {
    const shapeSelector = document.getElementById('display-grid-box').value;
    const colorSelector = document.getElementById("display-grid-tank").value;
    const gridBox = document.getElementById("some-container");

    if (shapesArray.length >= 20) {
        alert("You've reached the maximum number of shapes (20).")
        return
    }
    const newShape = new Shape(shapeSelector, colorSelector);
    shapesArray.push(newShape);

    const shapeBlock = document.createElement("div");
    shapeBlock.classList.add(shapeSelector);
    shapeBlock.style.backgroundColor = colorSelector

    shapeBlock.addEventListener("click", function() {
        console.log(newShape.getInfo())
    })

    gridBox.appendChild(shapeBlock)
}

const button = document.getElementById('thisButton');
button.addEventListener('click', createShape)