//1.функция которая находит степень числа
function findDegree(number, n) {
    let num = number;
    for (let i = 1; i < n; i++) {
        num *= number;
    }
    return num;
}


//2.функция которая выводит чистую сумму выплат, после вычитания налога
function cleenMoney(money, procent){
    const allProcent= 100;
    let res;
  let cleenRes;
    res=money/100*procent;
  cleenRes=money-res;
    return cleenRes;
}


//3.функция которая выводит первую большую букву, остальные маленькие
function replacementLetter(){
    let name =prompt('enter name');
    let firstLetter =name[0];
    let word =name.substr(1);
    console.log(firstLetter.toUpperCase()+word.toLowerCase());
  }


  //4.функция нахождения рандомного числа от min до max
  function randomNumber(min, max) {
    let number = Math.floor(Math.random()* (max - min)) + min;
      return number;
    }


    //5.функция рандомного вывода восьмизначного пароля
    function randomPassword(a, b) {
        let password = Math.floor(Math.random()* (a - b)) + b;
          return password;
        }
    

    //6.функция конвертации доллара в гривну и наоборот
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


//функция 1
console.log(findDegree(3, 3));
//функция 2
console.log(cleenMoney(3000, 19.5));
//функция 3
replacementLetter();
//функция 4
console.log(randomNumber(1, 100));
//функция 5
console.log(randomPassword(10000000, 99999999));
//функция 6
convertMoney(1000, 500);