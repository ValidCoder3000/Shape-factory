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

    const newShape = new Shape(shapeSelector, colorSelector);
    shapesArray.push(newShape);

    const shapeBlock = document.createElement("div");
    shapeBlock.classList.add('square');
    if(shapeSelector === 'circle'){
        shapeBlock.classList.add('circle');
    }

    shapeBlock.style.backgroundColor = colorSelector;

    gridBox.appendChild(shapeBlock);

}

const button = document.getElementById('thisButton');
button.addEventListener('click', createShape )