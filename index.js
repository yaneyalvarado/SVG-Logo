const inquirer = require("inquirer")
const {Circle} = require("./Shape")



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    }
   
  ])
  .then((response) => {
    let shape = new Circle() 
    shape.setColor(response.username)
    console.log(shape)
  }
  );

  