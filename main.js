/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(array){
  array.push('Colin')
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function addMeToStart(array){
  array.unshift('Colin')
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function changeLast(array, num){
  array[array.length - 1] = num 
  // or
  array.splice(array.length - 1, 1, num)
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function changeAllValuesTo(array, num){
  for (let i = 0; i < array.length; i++){
    array[i] = num
  }
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function oddOrEven(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      array[i] = 'even'
    } else {
      array[i] = 'odd'
    }
  }
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function changeNextThreeToValue(i, array, value){
  for (let n = i; n < i + 3; n++){
    array[n] = value
  }
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
