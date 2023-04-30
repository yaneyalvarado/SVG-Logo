const inquirer = require("inquirer")
const {Circle} = require("./Shape")
const {Triangle} = require("./Shape")
const {Square} = require("./Shape")
const SVG = require("./logo.svg")

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
  
  function writeToFile(fileName , data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, err => console.log(err));
    }

    function init() {
        inquirer.prompt()
        .then((data) => {
            console.log("Creating SVG File");
            writeToFile('SVG', SVG({...data}));
    });
    }

    init();