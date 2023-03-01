let chocolate = 15.678;
let fruits = 123.965;
let sweet = 90.2345;
let max = Math.max(chocolate,fruits,sweet);
let min = Math.min(chocolate,fruits,sweet);
let sum = chocolate + fruits + sweet;
let round = Math.floor(chocolate + fruits + sweet);
let cash = 500;
let rest = cash - chocolate -  fruits - sweet;
let sale = ((chocolate + fruits + sweet) / 3).toFixed(2);
let randomSale = (Math.random()*100).toFixed();
let randomSum = (sum - (sum*randomSale)/100).toFixed(2);
let profit = (randomSum - (sum/2)).toFixed(2);
let truth = Boolean(round%2);
let ceil = Math.ceil(round/100)*100;
let result = `Максимальна ціна: ${max}. Мінімальна ціна: ${min}. вартість всіх товарів: ${sum}. Ціла частина вартості
кожного товару між собою округлення в МЕНШУ сторону: ${round}. Сума товарів округлена до сотень: ${ceil} булеве значення: ${truth}. Сума решти: ${rest}. Середнє значення цін: ${sale}. 
Випадкова знижка: ${randomSale}. Чистий прибуток: ${profit}. `
console.log(Math.floor(chocolate) + Math.floor(fruits) + Math.floor(sweet));
