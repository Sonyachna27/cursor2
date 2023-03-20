
function getRandomArray(length, min, max){
    let random = [];
    let randomLength = length;
    min = Math.ceil(min);
    max = Math.floor(max);
    for(i= 0; i < randomLength; i++){
        let randomNumber = Math.floor(Math.random() * (max - min) + min);
        random.push(randomNumber);  
    }
            return random  
}
document.writeln(`Функція No1: ${getRandomArray(15, 1, 100)}`)
        document.write("<br>"); 

function getModa(...numbers){
    let obj = {}
    numbers.forEach(function(s) {
        obj[s] ? obj[s]++ : obj[s] = 1;
     })
     const modal = Object.entries(obj);
    let res = 0;
    for (let key in obj) {
      if(obj[key] > res){
        res = obj[key];
      }
    }
      let result = [];
      modal.forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        if(value === res){
          result.push(key)
        }
        });  
  return result.join('')
}

document.writeln(`Функція No2: ${getModa(6, 2, 55, 11, 78, 2, 55, 11, 11, 11, 11, 77, 57, 87, 23, 2, 56, 3, 2)}`)
        document.write("<br>"); 


function getAverage(...numbers){
   let number = numbers.filter(num => Number.isInteger(num));
    let res = number.reduce((acc,item)=> acc + item);
    
 return (res / number.length).toFixed(2);
}
document.writeln(`Функція No3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 100, 87, 23, 2, 56, 3, 2)}`)
        document.write("<br>"); 


function getMedian(...numbers) {
    const number = numbers.filter(num => Number.isInteger(num));
     const getSort = numbers.sort(function sor(a,b) {
                if(a>b) return 1;
                if(a<b) return -1;
                return 0;
                }); 
    let result = '';
    
    if (getSort.length % 2 != 0){
        result =  getSort[((getSort.length - 1) / 2)] ;
    } else{
        result =  ((getSort[(getSort.length / 2) - 1] +  getSort[getSort.length / 2]) / 2).toFixed(1);
    }
       
    return result

}

document.writeln(`Функція No4: ${getMedian(1, 2, 3, 15, 5, 6, 8)}`)
        document.write("<br>"); 

const filterEvenNumbers = (...numbers) => numbers.filter(item => item % 2 !=0);
document.writeln(`Функція No5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`)
        document.write("<br>"); 
const countPositiveNumbers = (...numbers) => (numbers.filter(item => item > 0)).length
document.writeln(`Функція No6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)
        document.write("<br>"); 
const getDividedByFive = (...numbers) => numbers.filter(item => item % 5 === 0);
       document.writeln(`Функція No7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 25, 77, 57, 87, 23, 2, 56, 3, 2)}`)
                document.write("<br>"); 

function replaceBadWords(string){
    let arrOfBadWords = string.split(' ');
    let badWords = /(shit|fuck)/gi;
   let str = arrOfBadWords.map((n) => n.replaceAll(badWords, '****')).join(' ');
    return str;
}
document.writeln(`Функція No8: ${replaceBadWords("Are you man fucking kidding?")}`)
                document.write("<br>"); 


function divideByThree(word){
    if (word === 0) {
        result = [];
        } 
      let result = [];
       let sentense = String(word);
      for (let i = 0; i < sentense.length; i+=3) {
            if(sentense[i+1] === undefined){
                result.push(sentense[i])
            } else if (sentense[i+2] === undefined){
                result.push(sentense[i]+sentense[i+1]); 
            } else {
                result.push(sentense[i]+sentense[i+1]+sentense[i+2]);
            }
           
             }
             return result;
        }
        document.writeln(`Функція No9: ${divideByThree('love')}`)
                document.write("<br>"); 

const generateCombinations = (word) =>{
   let string = word.substring(0,10);
   
   const perms = (str) => {
    const result = [];
    if (str.length < 2) return [str];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const otherChars = str.substring(0, i) + str.substring(i + 1);
      const otherPerms = perms(otherChars);
      otherPerms.forEach(x => {
        result.push(char + x)
      });
    }
    return result;
  }
  const permutations = perms(string);
  const hasRepeat = (str) => {
    let prevChar = str[0];
    for (let i = 1; i < str.length; i++) {
      if (prevChar === str[i]) return true;
      prevChar = str[i];
    }
    return false;
  }
  const noRepeatPerms = [];
  for (const str of permutations) {
    if (!hasRepeat(str)) {
      noRepeatPerms.push(str);
    }
  }
  return noRepeatPerms;
}

document.writeln(`Функція No10: ${generateCombinations('love')}`)
                document.write("<br>");

