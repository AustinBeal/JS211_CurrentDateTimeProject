// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:


const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}
 




// Write a JavaScript program to convert a number to a string.

let numberExample = 100
let stringExample = '99'
let numberOFInput = document.getElementById("NumberInHere");


let idNumber = 1;
let id = 1

let setIdSearch = (id) => {
    idNumber = id
    console.log(idNumber)
  }

const numberToString = () => {
  makeString = idNumber.toString()
  console.log('our new string is', makeString)
  
}

numberToString(numberExample)



// Write a JavaScript program to convert a string to the number.
let idNumber2 = '';
let id2 = ''

let setIdSearch2 = (id2) => {
    idNumber2 = id2
    console.log(idNumber2)
  }

const stringToNumber = () => {
  makeNumber = parseInt(idNumber2, 10)
  console.log('our new number is', makeNumber)
}
stringToNumber(stringExample)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  let booleanVar = true;

  let noValue = null;
  
  let undefinedVar;
  
  let numberVariable = 1;
  
  let stringVar = 'This is a String'
  
  const checkVariableType = (checkVariable) => {
    typeof checkVariable
    console.log(typeof checkVariable)
  }
  checkVariableType(stringVar)
  // console.log('below are checked data types')
  // checkVariableType(booleanVar)
  // checkVariableType(noValue)
  // checkVariableType(undefinedVar)
  // checkVariableType(numberVariable)
  // checkVariableType(stringVar)
  
  
// Write a JavaScript program that adds 2 numbers together.
var num1 = 30
var num2 = 25

const addNums = (x, y) => {
 sum = x + y;
 console.log(sum)
}
 addNums(num1, num2)


// Write a JavaScript program that runs only when 2 things are true.
var trueCheck1 = true
var trueCheck2 = true
var falseCheck1 = false
var falseCheck2 = false

const checkTruthliness = (booleanValue1, booleanValue2) => {
  if((booleanValue1 === true) && (booleanValue2 === true)){
    console.log('its true! twice')}
}
checkTruthliness(trueCheck1, trueCheck2)

// Write a JavaScript program that runs when 1 of 2 things are true.
const checkHalfTruthliness = (booleanValue1, booleanValue2) => {
  if((booleanValue1 === true) && (booleanValue2 === false))
    console.log('its half true!');
}
checkHalfTruthliness(trueCheck1, falseCheck2)



// Write a JavaScript program that runs when both things are not true.  
const checkFalseliness = (booleanValue1, booleanValue2) => {
  if((booleanValue1 === false) && (booleanValue2 === false))
    console.log('its totally false!');
}
checkFalseliness(falseCheck1, falseCheck2)


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24


