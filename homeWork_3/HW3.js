function degree(number, n) {
    let num = number;
    for (let i = 1; i < n; i++) {
        num *= number;
    }
    return num;
}







//task#1
console.log(degree(3, 3));
