alert('Hello, take two numbers from 1 to 99. The first number must be less than the second number');
let N = prompt('enter the first number');
let M = prompt('enter the second number');
console.log('answer:', N);
console.log('answer:', M);
let sum = 0;
if(N>M){//проверяем не больше ли первое чило второго числа
    alert('the first number bigger or first number');
    }
if(N==NaN || M==NaN){
    alert('this is non number')
}
const typeNumber = confirm('even numbers skip?')//пропускаем ли четные числа
if(typeNumber){
    for(let i=N; i<M; i++){
        while(i%2!==0){
            sum+=i;
    }
}
alert(sum);
}
else{
    for(let i=N; i<M; i++){
        sum+=i;
    }
    alert(sum);
}







