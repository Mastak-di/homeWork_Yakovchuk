const firstPrice = 15.678;
const secondPrice = 123.965;
const thirdPrice = 90.2345;
console.log('We have three price on goods:');
console.log(firstPrice);
console.log(secondPrice);
console.log(thirdPrice);//1. вывод цены
console.log('find max price:');
console.log(Math.max(firstPrice, secondPrice, thirdPrice));//2. максимальная цена
console.log('find min price:');
console.log(Math.min(firstPrice, secondPrice, thirdPrice));//3. минимальная цена
console.log('find the sum of all goods:');
let summaTovarov=firstPrice+secondPrice+thirdPrice;
console.log(summaTovarov);//4. сумма всех товаров
console.log('find the sum of all goods, without pennies:');
let summaWhole=firstPrice+secondPrice+thirdPrice;
console.log(Math.floor(summaWhole));//5. сумма всех товаров без учета копеек
console.log('this is sum all goods round in bigger side:')
console.log(Math.ceil(summaTovarov/100)*100);//6. сумма всех товаров округленная в большую сторону, до сотен
console.log('paired price or not paired');
console.log(summaWhole/2==0);//7. перная сумма всех цен товаров или нет
console.log('change will be;');
const oplata = 500;
let change=oplata-summaTovarov;
console.log(change);//8. остаток с 500 гривен
console.log('average price:');
console.log(Math.ceil(summaTovarov/3*100)/100);//9. вывод средней ценыconst firstPrice = 15.678;
const secondPrice = 123.965;
const thirdPrice = 90.2345;
console.log('We have three price on goods:');
console.log(firstPrice);
console.log(secondPrice);
console.log(thirdPrice);//1. вывод цены
console.log('find max price:');
console.log(Math.max(firstPrice, secondPrice, thirdPrice));//2. максимальная цена
console.log('find min price:');
console.log(Math.min(firstPrice, secondPrice, thirdPrice));//3. минимальная цена
console.log('find the sum of all goods:');
let summaTovarov=firstPrice+secondPrice+thirdPrice;
console.log(summaTovarov);//4. сумма всех товаров
console.log('find the sum of all goods, without pennies:');
let summaWhole=firstPrice+secondPrice+thirdPrice;
console.log(Math.floor(summaWhole));//5. сумма всех товаров без учета копеек
console.log('this is sum all goods round in bigger side:')
console.log(Math.ceil(summaTovarov/100)*100);//6. сумма всех товаров округленная в большую сторону, до сотен
console.log('paired price or not paired');
console.log(summaWhole/2==0);//7. перная сумма всех цен товаров или нет
console.log('change will be;');
const oplata = 500;
let change=oplata-summaTovarov;
console.log(change);//8. остаток с 500 гривен
console.log('average price:');
console.log(Math.ceil(summaTovarov/3*100)/100);//9. вывод средней цены
console.log('we have discount %');
let discount;
discount = (Math.floor(Math.random(discount)*100));
console.log(discount);
console.log('you saved grn.:');
let d;
d = (Math.ceil(summaTovarov/100*discount));
console.log(d);
console.log('profit will be:');
let profit;
profit = summaTovarov/2-d;
console.log(profit);//10. прибыль
console.log('we have discount %');
let discount = (Math.floor(Math.random(discount)*100));
console.log(discount);
console.log('you saved grn.:');
let d = (Math.ceil(summaTovarov/100*discount));
console.log(d);
console.log('profit will be:');
let profit = summaTovarov/2-d;
console.log(profit);//10. прибыль
