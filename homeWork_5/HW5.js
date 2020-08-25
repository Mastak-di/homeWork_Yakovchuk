const manyNumbers = [];
function getRandomNumbers(){
  const length = 15;
  const min = -10;
  const max = 100;
  const randomNumbers = Math.floor(Math.random()* (max - min)) + min;
  return randomNumbers;
}

//task 1
function getRandomArray(length, min, max){
    for(let i=0; i<length; i++){
    manyNumbers.push(getRandomNumbers(length, min, max));
  }
  return manyNumbers;
}
console.log("Array on fifteen numbers:", getRandomArray(15, -10, 100));

//task 2
function getAverage(){
  let sumNumbers = 0;
      for(let i=0; i<manyNumbers.length; i++){
        sumNumbers += manyNumbers[i];   
  }
  let averageNumber = Math.floor(sumNumbers/manyNumbers.length);
  return averageNumber;
}
console.log("Average random numbers is:", getAverage());

//task 3
function filterEvenNumbers() {
     let filterEven = manyNumbers.filter((num) => num % 2 !== 0);
  return filterEven;
  }
console.log("Array without paired numbers:", filterEvenNumbers());

//task4
function countPositiveNumbers() {
     let filterBiggerZero = manyNumbers.filter((notZero) => notZero > 0);
  return filterBiggerZero;
  }
console.log("Array numbers bigger zero:", countPositiveNumbers());

//task 5
function getDividedByFive() {
     let filterDivide = manyNumbers.filter((onFive) => onFive % 5 === 0);
  return filterDivide;
  }
console.log("Numbers which divide on five:", getDividedByFive());

// task 6
function divideByThree(word){
  let cutWord;
      if(word.length <= 3){
      cutWord = word.toLowerCase();
    }
    else{
      cutWord = word.toLowerCase().match(/.{1,3}/g); 
    }
  return cutWord;
}
console.log("divide the word:", divideByThree("Commander"));