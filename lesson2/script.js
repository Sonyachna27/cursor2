            
            
let numN ;
let numM ;
let sum = 0;
let integerN= Number.isInteger(numN);
let integerM = Number.isInteger(numM)
do {
    numN = +prompt("Enter the first Number");
}
while (!integerN && numN < 0);

do {
    numM = +prompt("Enter the second Number");
}
while (!integerM && numN >= numM);

const skipNumber = confirm("Do you need to skip even numbers?(yes/ok or no/cancel)");
                
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
              
 