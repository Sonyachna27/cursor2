let chocolate = 15.678;
let fruits = 123.965;
let sweet = 90.2345;
let randomSale = (Math.random()*100).toFixed();
export {randomSale};

let numN = 10;
let numM = 15;
let sum = 0;
export function lesson2(numN,numM ){

    for (let i = numN; i <= numM; i++ ){
      if (numM > numN){
        sum +=i;
      }
      else{
        if (i % 2 === 0) continue
        sum +=i;
    }
      }

 console.log (`Sum of numbers = ${sum}`);
  }  
  export const getMaxDigit = function (number) {
    let str = String(number).split('').map(n => +n).sort(function sor(a,b){
        if(a>=b) return -1;
        if(a<=b) return 1;
        return 0;
        })
        return str.at(0);
     }

     const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
     const marks = [4, 5, 5, 3, 4, 5];
     export function getPairs(students) {
        const coupleStudents = students.map((x) => x);
            const male = [];
            const female = [];
            for (let coupleName of coupleStudents){
                if(coupleName[coupleName.length-1] ==='а'){
                    female.push(coupleName)  
                } else{
                    male.push(coupleName)
                }
            }
        let coupleResult = [];
           for(let i = 0; i<male.length; i++){
            coupleResult[i] = [male[i], female[i]]
           }
            return coupleResult;
    } 
    export function replaceBadWords(string){
        let arrOfBadWords = string.split(' ');
        let badWords = /(shit|fuck)/gi;
       let str = arrOfBadWords.map((n) => n.replaceAll(badWords, '****')).join(' ');
        return str;
    }
    export const stud = [
        {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
        },
        {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
        }, 
        {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
        }];
        export const getBestStudent = (students) =>{
            const student = students;
            const modal = students.map((n) => Object.entries(n));
           let res = [];
            for (let item of student){
                const numOfAverageMark = (Object.values(item.subjects).join('').replace(/,/g,'').split('').map(num => +num)) ;
            let AverageMark = +(numOfAverageMark.reduce((acc,item) =>  acc + item) / numOfAverageMark.length).toFixed(2);
           res.push(AverageMark)
           }
           let result = [];
              modal.forEach(entry => {
                let key = entry[0][1];
                result.push(key)
                });  
                let coupleResult = [];
               for(let i = 0; i < result.length; i++){
                coupleResult[i] = [result[i], res[i]]
               }
               let best = coupleResult.sort((a,b) => {
                if(a>b) return 1;
                if(a<b) return -1;
                return 0;
               })
            return best[0][0]; 
        }
      export  const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
      export  const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
      export  const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
        
        export function getMySalary(country) {
            let res = {}
            res.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
            res.taxes = res.salary * country.tax;
            res.profit = res.salary - res.taxes;
            return (res)
        }
        export default class Student {
    
            constructor(university,course, fullName,){
                this.fullnameStudent = fullName;
                this.courseofUniversity = course;
                this.universityOfStudent = university;
                this._marks = [5,4,5,4];
                this.marksOfStudent = [...this._marks];
                this.dismiss = false;
                    }
                getInfo() {
                        return `Студент ${this.courseofUniversity}-го курсу ${this.universityOfStudent}, ${this.fullnameStudent}`
                    }  
               getAverageMark () {
                        if(!this.dismiss){
                            return ((this._marks.reduce((acc,item) => acc+item)) / this._marks.length).toFixed(1);
                        }
                        return null
                    }
                set marks (mark){
                    if(!this.dismiss) {
                    return this._marks.push(mark);
                    } else{
                        return this._marks = [];
                    }
                }
                get marks() {
                    return this._marks
                }
                dismissed() {
                    this.dismiss = true; 
                    this._marks = null; 
                }
                recover() {
                    this.dismiss = false;
                    this._marks = this.marksOfStudent;
                }
        }
        
        export let studentsInfo = new Student(1,'Вищої Школи Психотерапії м.Одеса', 'Остап Родоманський Бендер');
        
        
   export const generate =  document.body.onload = generateBlocks();
        export  function generateBlocks() {
          const wrapper = document.createElement('div');
          wrapper.classList.add('#wrap');
            wrap.style.cssText =`width: 250px;
            height: 250px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;`;
            wrapper.innerHTML = '';
                  for (let j = 0; j < 25; j++) {
                    let block = document.createElement('div');
                    block.classList.add('block');
                   wrapper.append(block);
                  }
         }   
        
   window.addEventListener('keydown', listen) 

   export  function listen(event) {
      const audio = document.querySelector(`audio[data-key="${event.code}"]`);
      const key = document.querySelector(`.play[data-key="${event.code}"]`);
      removeActiveClass() 
      if(!audio) return;
          audio.play()
      key.classList.add('active')
     }
  
  export const play = document.querySelectorAll('.play') 
   export    function removeActiveClass() {
          play.forEach(panel => {
              panel.classList.remove('active')
          })
          }
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
        
        // console.log(getRandomChinese(5))
        