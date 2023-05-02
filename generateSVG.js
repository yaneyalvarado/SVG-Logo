const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./Shape");
const SVG = require("./newSVG");
const { writeFile } = require("fs/promises");

class generateSVG {
    generate() {

        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter up to three characters',
                    name: 'text',
                },
                {
                    type: 'input',
                    message: 'Enter the text color',
                    name: 'textColor',
                },
                {
                    type: 'list',
                    message: 'Choose a shape',
                    choices: ['Circle', 'Triangle', 'Square'],
                    name: 'shapeLogo',
                },
                {
                    type: 'input',
                    message: 'Choose the color for your shape',
                    name: 'shapeColor',
                },
            ])
            .then(({ text, textColor, shapeLogo, shapeColor}) => {
    let shape;
    switch (shape) {
        case "Circle":
            shape = new Circle();
            break;

        case "Triangle":
            shape = new Triangle();
            break;


        default:
            shape = new Square();
            break;
    }
    shape.setColor(shapeColor);

    const newSVG = new SVG();
    newSVG.setText(text, textColor);
    newSVG.setShape(shape);
    return writeFile("logo.svg", newSVG.render());
})
.then(() => {
    console.log("Creating SVG File");
})
    .catch((error) => {
        console.log(error)
    });
}
}

module.exports = generateSVG;