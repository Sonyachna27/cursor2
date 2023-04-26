export async function getRandomChinese (length) {
    let sign = (Date.now() + '').split('').slice(-5).join('');
    const res = String.fromCharCode(sign);
    let result = '';
    let i = length;
    while(i > 1){
        const res = String.fromCharCode(sign);
        result += res;   
          i--;
} 
return new Promise(resolve => {
    setTimeout(() => {
      resolve(result += res);
    }, i*500);
  }).then(console.log)
   
} 

console.log(getRandomChinese(5))

    
   