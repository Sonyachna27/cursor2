
const students = [
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

   const getSubjects = (students) => {
      let subject = [];
    for (let key in students.subjects){
       key = (key.charAt(0).toUpperCase() + key.slice(1).replace(/_/gi,' '));
        subject.push(key) 
    }
        return subject
   }
   document.writeln(`Функція No1: ${getSubjects(students[2])}`)
                document.write("<br>"); 
   
   const getAverageMark = (students) => {
    const entry = Object.values(students.subjects).join('').replace(/,/g,'').split('').map(num => +num);
    let sum = entry.reduce((acc,item) =>  acc + item);
    return (sum / entry.length).toFixed(2)
   }
   
   document.writeln(`Функція No2: ${getAverageMark(students[0])}`)
document.write("<br>"); 

const getStudentInfo = (students) =>{
    let entry = Object.entries(students);
    const numOfAverageMark = (Object.values(students.subjects).join('').replace(/,/g,'').split('').map(num => +num)) ;
    let AverageMark = +(numOfAverageMark.reduce((acc,item) =>  acc + item) / numOfAverageMark.length).toFixed(2);
    let result = [];
    let res = entry.slice(0,entry.length-1);
    for (let i of res){
        result.push(i)
    }
    let mark = result.push(Array('AverageMark', AverageMark)); 
return Array(Object.fromEntries(result));
}
document.writeln(`Функція No3: ${getStudentInfo(students[0])}`)
document.write("<br>"); 

const getStudentsNames = (students) => {
    let keys =  Object.keys(...students).sort((a,b)=> a.localeCompare(b));
    return keys;
}
document.writeln(`Функція No4: ${getStudentsNames(students)}`)
document.write("<br>"); 

const getBestStudent = (students) =>{
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
document.writeln(`Функція No5: ${getBestStudent(students)}`)
document.write("<br>"); 
const calculateWordLetters = (string) =>{
    let obj = {}
    let str = string.split('').forEach(function(s) {
        obj[s] ? obj[s]++ : obj[s] = 1;
     })
     return obj
}

document.writeln(`Функція No6: ${calculateWordLetters('calculateWordLetters')}`)
document.write("<br>"); 