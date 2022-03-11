//Variables needed for the calculator
let input = ""; //All numbers typed or klicked come here
let operator = ""; // All operators + - / * etc. come here
let quickSpace = 0; // In between storage for the input value
let resultStorage = 0; // Stores a result after an operation took place
let firstTime = 0; // Just a counter to make shure the calculator doesn't perform any operations when you click them for the first time

// EventListeners for the NUMBER clicks
document.querySelector('#one').addEventListener('click', addNumber);
document.querySelector('#two').addEventListener('click', addNumber);
document.querySelector('#three').addEventListener('click', addNumber);
document.querySelector('#four').addEventListener('click', addNumber);
document.querySelector('#five').addEventListener('click', addNumber);
document.querySelector('#six').addEventListener('click', addNumber);
document.querySelector('#seven').addEventListener('click', addNumber);
document.querySelector('#eight').addEventListener('click', addNumber);
document.querySelector('#nine').addEventListener('click', addNumber);
document.querySelector('#zero').addEventListener('click', addNumber);

//Eventlistener for the KEYBOARD INPUT Numbers and Operators
window.addEventListener('keypress', pressNumber);

// EventListeners for the OPERATIONS
document.querySelector('#sub').addEventListener('click', addFunction);
document.querySelector('#add').addEventListener('click', addFunction);
document.querySelector('#multiply').addEventListener('click', addFunction);
document.querySelector('#devide').addEventListener('click', addFunction);
document.querySelector('#comma').addEventListener('click', addNumber);
document.querySelector('#percent').addEventListener('click', percentFun);
document.querySelector('#ac').addEventListener('click', reset);
document.querySelector('#minus').addEventListener('click', minus);

//RESULT
document.querySelector('#equal').addEventListener('click', addFunction);

// This function adds a number to the input string
function addNumber(num) {
    // This refers to an object of the EventListener method. This.id shows the id of the button, which was clicked.
    let string = this.id
    //Swicht to find the correct input and add the number at the end of the input string.
    switch (string) {
        case "one":
            input += "1";
            break;
        case "two":
            input += "2";
            break;
        case "three":
            input += "3";
            break;
        case "four":
            input += "4"
            break;
        case "five":
            input += "5"
            break;
        case "six":
            input += "6"
            break;
        case "seven":
            input += "7"
            break;
        case "eight":
            input += "8"
            break;
        case "nine":
            input += "9"
            break;
        case "zero":
            input += "0"
            break;
        case "comma":
            input += "."
        default:
            break;
    }

    //Show the new input value on the screen
    document.querySelector("#output").innerText = input;

}

// Checks which operator was clicked and calls a function for the fitting operation
function addFunction() {

    //Change input(String) to float and transfer the value to quickspace
    quickSpace = parseFloat(input);
    //Clear input
    input = "";
    //A calculator performs the calculation after both numbers a put in. So we need to store the value of the operator until there is a new operator pressed or we want to return the result. If this is the first time for an operation the calculator should store the value of the operator at "operator" and transfer the value of quickspace to resultStorage.
    if (operator === "") {
        resultStorage = quickSpace;
    } else {
        //If it's not the firstTime to click an operator check for the current value of operator and call the fitting function.
        if (operator === "-") {
            substraction();
        }
        else if (operator === "+") {
            addition();
        }
        else if (operator === "/") {
            devide();
        }
        else if (operator === "*") {
            multiplication();
        }

    }
    //Now we need to update the value of operator
    //This refers to an object of the EventListener method. This.id shows the id of the button, which was clicked.
    const string = this.id;
    switch (string) {
        case "equal":
            result();
            break;
        case "sub":
            operator = "-";
            firstTime++
            break;
        case "add":
            operator = "+";
            firstTime++
            break;
        case "devide":
            operator = "/";
            firstTime++
            break;
        case "multiply":
            operator = "*";
            firstTime++
            break;
        case "percent": {
            percentFun();
            break;
        }
    }
}


// Adds the value of quickSpace to resultStorage
function addition() {
    resultStorage += quickSpace;
    //Show result on the Screen
    document.querySelector("#output").innerText = resultStorage;
  }
  //Substract the value of quickSpace from resultStorage
  function substraction() {
    resultStorage = resultStorage - quickSpace;
    //Show result on the screen
    document.querySelector("#output").innerText = resultStorage;
  }
  //Devides resultStorage by quickSpace
  function devide() {
    resultStorage = resultStorage / quickSpace;
    //Show result on the screen
    document.querySelector("#output").innerText = resultStorage;
  }
  //Multiplies resulStorage with quickSpace
  function multiplication() {
    resultStorage = resultStorage * quickSpace;
    //Show result on the screen
    document.querySelector("#output").innerText = resultStorage;
  }
  //Devides input by 100
  function percentFun() {
    input = input / 100;
    //Show result on the screen
    document.querySelector("#output").innerText = input;
  }

//Function to handle all the input by keys
function pressNumber(n) {
    //This refers to an object of the EventListener method. n.key shows the value as String of the button, which was pressed.
    const string = n.key;
    //Switch to handle all the numbers
    switch (string) {
      case "1":
        input += 1;
        document.querySelector("#output").innerText = input;
        break;
      case "2":
        input += "2";
        document.querySelector("#output").innerText = input;
        break;
      case "3":
        input += "3";
        document.querySelector("#output").innerText = input;
        break;
      case "4":
        input += "4";
        document.querySelector("#output").innerText = input;
        break;
      case "5":
        input += "5";
        document.querySelector("#output").innerText = input;
        break;
      case "6":
        input += "6";
        document.querySelector("#output").innerText = input;
        break;
      case "7":
        input += "7";
        document.querySelector("#output").innerText = input;
        break;
      case "8":
        input += "8";
        document.querySelector("#output").innerText = input;
        break;
      case "9":
        input += "9";
        document.querySelector("#output").innerText = input;
        break;
      case "0":
        input += "0";
        document.querySelector("#output").innerText = input;
        break;
      case ".":
        input += ".";
        document.querySelector("#output").innerText = input;
        break;
      //All other key values are handled here
      default:
        //A calculator performs the calculation after both numbers a put in. So we need to store the value of the operator until there is a new operator pressed or we want to return the result. If this is the first time for an operation and the value of string is NOT "%" the calculator should store the value of the operator at "operator" and transfer the value of quickspace to resultStorage.
        if (firstTime === 0 && string !== "%") {
          //Store value of input at quickSpace
          quickSpace = parseFloat(input);
          //Clear input
          input = "";
          resultStorage = quickSpace;
        } else {
          //If it's not the firstTime to click an operator check for the current value of operator and call the fitting function.
          if (operator === "-") {
            quickSpace = parseFloat(input);
            input = "";
            substraction();
          } else if (operator === "+") {
            quickSpace = parseFloat(input);
            input = "";
            addition();
          } else if (operator === "/") {
            quickSpace = parseFloat(input);
            input = "";
            devide();
          } else if (operator === "*") {
            quickSpace = parseFloat(input);
            input = "";
            multiplication();
          }
        }
        //Change value of operator
        switch (string) {
          //If value is "=" or "Enter" call result()
          case "=":
          case "Enter":
            result();
            break;
          case "-":
            operator = "-";
            firstTime++;
            break;
          case "+":
            operator = "+";
            firstTime++;
            break;
          case "/":
            operator = "/";
            firstTime++;
            break;
          case "*":
            operator = "*";
            firstTime++;
            break;
          case "%": {
            percentFun();
            break;
          }
        }
    }
  }
  //Shows result and call reset function
  function result() {
    const output = resultStorage.toString();
    reset();
    document.querySelector("#output").innerText = output;
  }
  //Resets all values
  function reset() {
    input = "";
    quickSpace = 0;
    operator = "";
    resultStorage = 0;
    firstTime = 0;
    document.querySelector("#output").innerText = "0";
  }
  //Changes value from positiv to negativ or from negativ to positiv
  function minus() {
    input = input * -1;
    document.querySelector("#output").innerText = input.toString();
  }