alert('Hello, take two numbers from 1 to 99. The first number must be less than the second number');
let N = prompt('enter the first number');//ввод первого числа
console.log('answer:', N);
if(isNaN(N)===true){//проверка, является ли первое число числом
    alert('the first value is not number');
}
let M = prompt('enter the second number');//ввод второго числа
console.log('answer:', M);
if(isNaN(M)===true){//проверка, является ли второе число числом
    alert('the second value is not number');
}
let sum = 0;
if(N>M){//проверяем не больше ли первое чило второго числа
    alert('the first number bigger than the second number');
    }
    const typeNumber = confirm('even numbers skip?')//пропускаем ли четные числа
if(typeNumber===true){
    for(let i=N; i<M; i++){
        while(i%2!==0){
            sum+=i;
    }
}
console.log(sum);//здесь должна выводиться сумма чисел от N до M без парных чисел
}
else{
    for(let i=N; i<M; i++){
        sum+=i;
    }
    console.log(sum);//здесь должна выводиться сумма всех чисел от N до M
}







