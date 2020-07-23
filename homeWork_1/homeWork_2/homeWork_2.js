alert('Hello, take two numbers from 1 to 99. The first number must be less than the second number');
let N = prompt('enter the first number');
console.log('answer:', N);
if(isNaN(N)===true){
    alert('the first value is not number');
}
let M = prompt('enter the second number');
console.log('answer:', M);
if(isNaN(M)===true){
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
alert(sum);
}
else{
    for(let i=N; i<M; i++){
        sum+=i;
    }
    alert(sum);
}







