let question = +prompt('Write first number', '0');
let question2 = +prompt('Write second number', '0');
          
    let num = Number.isInteger(question);
    let num1 = Number.isInteger(question2);
          if((num === true) && (num1 === true)){ 
          if (question > question2){
            alert ('The number first must be smaller');
            } else {
              let sum = 0;
              if (confirm('Do you need to skip even numbers?(yes/ok or no/cancel)') === true){
                for (let i = question; i <= question2; i++ ){
                  if (i % 2 === 0)
                    sum+=i;
                }
             } else {
              for (let i = question; i <= question2; i++ ){
                sum+=i;
              }
             }
            alert (`Sum of numbers = ${sum}`);
             }
            }
