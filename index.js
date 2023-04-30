const inquirer = require("inquirer")
const {Circle} = require("./Shape")
const {Triangle} = require("./Shape")
const {Square} = require("./Shape")

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters',
      name: 'text',
    },
    {
        type: 'input',
        message: 'Enter the text color',
        name: 'text color',
      },
      {
        type: 'list',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
      },
      {
        type: 'input',
        message: 'Choose the color for your shape',
        name: 'shape color',
      } 
  ])
  .then((response) => {
    let shape = new Circle() 
    shape.setColor(response.name)
    console.log(shape)
  })
  .then((response) => {
    let shape = new Triangle()
    shape.setColor(response.name)
    console.log(shape)
  })
  .then((response) => {
    let shape = new Square()
    shape.setColor(response.name)
    console.log(shape)
  });
  

