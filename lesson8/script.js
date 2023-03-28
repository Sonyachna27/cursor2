class Student {
    
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

let studentsInfo = new Student(1,'Вищої Школи Психотерапії м.Одеса', 'Остап Родоманський Бендер');

console.log(`${studentsInfo.getInfo()}`);
console.log(`геттер оцінок: ${studentsInfo.marks}`);

studentsInfo.marks = 5;
console.log(`сеттер оцінок: ${studentsInfo.marks}`);

console.log(`середній бал: ${studentsInfo.getAverageMark()}`);

studentsInfo.dismissed();
console.log(`"виключить" студента геттер оцінок: ${studentsInfo.marks}`);

studentsInfo.recover()
studentsInfo.marks = 5;
console.log(`поновити студента геттер оцінок: ${studentsInfo.marks}`);


class  BudgetStudent extends Student {
    constructor(university,course, fullName, ){
       super(university,course, fullName) 
    }
    getScholarship() {
        if (this.dismiss) {
            console.log('Вас виключено');
        } else if (super.getAverageMark() < 4){
            console.log('Ви не отримаєте стипендії');
        }    else { 
          let interval = setInterval(console.log('Ви отримали 1400 грн. стипендії' ), 30000);
            setTimeout(() => { clearInterval(interval)}, 60000);
        }
    }
}
let budgetStudents = new BudgetStudent(3,'Вищої Школи Психотерапії м.Львів', 'Остап Родоманський Войтович');

console.log(budgetStudents.getScholarship());

budgetStudents._marks = [1,2,3,5];
console.log(budgetStudents.getScholarship());

budgetStudents.dismissed();
console.log(budgetStudents.getScholarship());


