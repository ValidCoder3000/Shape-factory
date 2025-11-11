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
// function createShape() {}


// The ‘Create’ button will create a Shape object, save it in an array and add a new shape (div) to the grid. 

// This div is the HTML representation of the JavaScript object.
// Implement a function named createShape() to create and append a shape to the grid box.


// const Hexagon = new Shape('Hexagon', 'purple')
// console.log(Hexagon.getInfo())





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