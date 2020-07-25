let sum = 0;
let N;
let M;
while(N!=Number&&M!=Number){
alert('Hello, take two numbers from 1 to 99. The first number must be less than the second number');
N = prompt('enter the first number');//ввод первого числа
M = prompt('enter the second number');//ввод второго числа
console.log('answer:', N);
console.log('answer:', M);
parseInt(N);
parseInt(M);
if(isNaN(N)===true){//проверка, является ли первое число числом
    alert('the first value is not number'); 
}
else if(isNaN(M)===true){//проверка, является ли второе число числом
    alert('the second value is not number');  
}
else if(N>M){//проверяем не больше ли первое чило второго числа
    alert('the first number bigger than the second number');
    }
    else{
        const typeNumber = confirm('even numbers skip?')//спрашиваем пропускаем ли четные числа
        if(typeNumber===true){
            for(let i=N; i<M; i++){
                if(i%2){
                    sum+=i;
                }
            }
        alert('you want know sum of the numbers? Click ok');//вывод суммы без четных чисел
        alert(sum);
        }
        else{
            for(let i=N; i<M; i++){
               sum+=i; 
            }
            alert('you want know sum of the numbers? Click ok');//вывод суммы всех чисел
            
            alert(sum);
        }
    }
}

