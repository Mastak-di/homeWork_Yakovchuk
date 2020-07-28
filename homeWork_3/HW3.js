//#1
function degree(number, n) {
    let num = number;
    for (let i = 1; i < n; i++) {
        num *= number;
    }
    return num;
}
//#2
function cleenMoney(money, procent){
    const allProcent= 100;
    let res;
  let cleenRes;
    res=money/100*procent;
  cleenRes=money-res;
    return cleenRes;
}
//#3
function big(){
    let name =prompt('enter name');
    let firstLetter =name[0];
    let word =name.substr(1);
    console.log(firstLetter.toUpperCase()+word.toLowerCase());
  }
  //#4
  function random(min, max) {
    let number = Math.floor(Math.random()* (max - min)) + min;
      return number;
    }
    //#5
    function randomPassword(a, b) {
        let password = Math.floor(Math.random()* (a - b)) + b;
          return password;
        }
    }
    //#6
    function convertMoney(uah, $){
        const exchange = 27.80;
          let sum=0;
          let answer = confirm('if you want conver dollar in grivna, click ok');
          if(answer===true){
            sum=$*exchange;
            console.log(sum);
          }
            else{
            sum=uah/exchange;
              console.log(sum);
          }
        }

//task#1
console.log(degree(3, 3));
//task#2
console.log(cleenMoney(3000, 19.5));
//task#3
big();
//task#4
console.log(number(1, 100));
//task#5
console.log(randomPassword(10000000, 99999999));
//task#6
convertMoney(1000, 500);