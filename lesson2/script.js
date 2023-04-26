
let numN ;
let numM ;
let sum = 0;
do{
  numN = +prompt("Enter the first Number");
}
while (!(Number.isInteger(numN)) || numN < 0 )
do{
  numM = +prompt("Enter the second Number");
}
while (!(Number.isInteger(numM)) || numN >= numM) 
const skipNumber = confirm("Do you need to skip even numbers?(yes/ok or no/cancel)");
              export function lesson2(){
                for (let i = numN; i <= numM; i++ ){
                  if (skipNumber === true){
                    sum +=i;
                  }
                  else{
                    if (i % 2 === 0) continue
                    sum +=i;
                }
                  }

             alert (`Sum of numbers = ${sum}`);
              }  
                  

 