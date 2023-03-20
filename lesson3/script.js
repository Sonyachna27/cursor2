// Створити функцію getMaxDigit(number) – яка отримує будь-яке
// число та виводить найбільшу цифру в цьому числі.

const getMaxDigit = function (number) {
            let str = String(number).split('').map(n => +n).sort(function sor(a,b){
                if(a>=b) return -1;
                if(a<=b) return 1;
                return 0;
                })
                return str.at(0);
             }
        
        document.writeln(`Функція No1: ${getMaxDigit(152397595482320)}`)
        document.write("<br>");

        // Створити функцію, яка визначає ступінь числа. Не
        // використовуючи Math.pow та **.
        const mathPow = function (number,step){
            let num = Number(number);
            let byStep = Number(step);
           
            if (num === 0 ){
                return 0;
            }
            if (num === 1 || byStep === 0){
                return 1;
            }
            let result = num;
            for (let i = 1; i < byStep; i++){
                result*= num;
            }
            return result;
        }
        
 document.writeln(`Функція No2: ${mathPow(2, 0)}`)
 document.write("<br>");

//  Створити функцію, яка форматує ім'я, роблячи першу букву великою.
 const nameUpper = function (string){
    let str = String(string);
    return str[0].toUpperCase() + str.slice(1); 
}
document.writeln(`Функція No3: ${nameUpper('deni')}`)
 document.write("<br>");

//  Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// 19.5%).
const count = function (sum, tax) {
    return sum - ((sum*tax)/100);
} 

document.writeln(`Функція No4: ${count(100, 19.5)}`)
 document.write("<br>");

//  Створити функцію, яка повертає випадкове ціле число в
//  діапазоні від N до M.
const getRandomNumber = function (N, M){
    let numberN = +N;
    let numberM = +M;
    return Math.floor(Math.random() * (numberN - numberM) + numberM);

}
document.writeln(`Функція No5: ${getRandomNumber(10, 100)}`)
 document.write("<br>");

//  Створити функцію, яка рахує скільки разів певна буква
//  повторюється в слові.

  const char_count = function (str, letter) { 
                let string = str.toUpperCase();
                let letters = letter.toUpperCase();
                let result = 0;
             for (let i = 0; i < string.length; i++) {
                if (string.charAt(i) === letters) 
                  {
                    result += 1;
                  }
              }
              return result;
            }
        document.writeln(`Функція No6: ${char_count('Асталавіста', 'а')}`)
        document.write("<br>");

        // Створіть функцію, яка конвертує долари в гривні та навпаки в
        // залежності від наявності символа $ або UAH в рядку.

        function convertCurrency(str) {
            const course = 25;
            let currency = str.toUpperCase();
            if(currency.includes('UAH')){
                let uah = currency.split('UAH');
                return (uah[0] / course) + "$";
            }
            if(currency.includes('$')){
                let usd = currency.split('$');
                return (usd[0] * course) + "UAH";
            } else {
                return 'We cannot convert currency'
            }
        }
document.writeln(`Функція No7: ${convertCurrency('100uah')}`)
document.write("<br>");

// Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8
// символам.

    function getRandomPassword(num){
        const character = '0123456789';
        const passwordCharacter = 8;
        let password = '';
            if (num > 8 || num < 0){
             return 'Password must be 8 sumbols';
             }
             if (num === undefined){
                for(let i =0; i < passwordCharacter; i++){
                    password += character [Math.floor(Math.random() * character.length)];
                }
            } 
             if(num <= passwordCharacter ){
                for(let i = 0; i <= num-1; i++){
                  password += character[Math.floor(Math.random() * (character.length))];
                }
              }
        return password;
    }

    document.writeln(`Функція No8: ${getRandomPassword(6)}`)
    document.write("<br>");

    // Створіть функцію, яка видаляє всі букви з речення.
    function deleteLetters(letter, string){
        let result = '';
        for (let ch of string){
            if (ch != letter) {
                result += ch;
              }
        }
        return result;
    }
    document.writeln(`Функція No9: ${deleteLetters('a', 'blablabla')}`)
    document.write("<br>");

    // Створіть функцію, яка перевіряє, чи є слово паліндромом.

    function isPalyndrom(target){
        let direct = '';
        let reversed = '';
        let str = target.toUpperCase().replace(/(\s)/g,'');
        let num = str.replace(/(\d)/g, '');
        let com = num.replace(/\W/g, '');
         for (let ch of com) { 
          direct += ch;
            reversed = ch + reversed;
         }
           return direct  === reversed;
    }
document.writeln(`Функція No10: ${isPalyndrom('я несу гусеня')}`)
    document.write("<br>");

    // Створіть функцію, яка видалить з речення букви, які
    // зустрічаються більше 1 разу.

function deleteDuplicateLetter(str){
    let split = str.toUpperCase();
    
    let obj = {}
  for(item of split){
    if(!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
  }
  result = '';
    for(const i in obj){
        if(obj[i] === 1){
            result +=i;
        }
    }
    console.log(obj);
  return result.toLowerCase()
       }

document.writeln(`Функція No11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`)
    document.write("<br>");
