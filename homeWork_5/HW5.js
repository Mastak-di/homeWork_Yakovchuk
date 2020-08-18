//task#1
const fifteenNumbers = [];
function getRandomNumbers(min, max){
    let randomNumbers = Math.floor(Math.random()* (max - min)) + min;
  return randomNumbers;
}

function getRandomArray(length, min, max){
  for(let i=0; i<length; i++){
    fifteenNumbers.push(getRandomNumbers(15, 1, 100));
  }
  return fifteenNumbers;
}
console.log("Array on fifteen numbers:", getRandomArray(15, 1, 100));
//task#2
function getAverage(){
  let sumNumbers = 0;
      for(let i=0; i<fifteenNumbers.length; i++){
        sumNumbers += fifteenNumbers[i];   
  }
  let averageNumber = Math.floor(sumNumbers/fifteenNumbers.length);
  return averageNumber;
}
console.log("Average random numbers is:", getAverage());