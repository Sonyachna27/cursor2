const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
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
const pairs = getPairs(students);

function getThemes(pairs, themes) {
    let pair = pairs.map((a) => [a[0]+' i '+a[1]]);
    let themesCount = []
    for (let i =0; i<themes.length; i++){
        themesCount.push(themes[i]);
    }
    let result = [];
    for (let i = 0; i < pair.length; i++){
        result[i] = pair[i].concat(themesCount[i])
    }
    return result;
}
const theme = getThemes(pairs, themes);

function getMarkOfStudents(pairs, marks) {
    let student = pairs.join(',').split(',');
    let marksOfStudents = [];
    for (let i =0; i<student.length; i++){
        marksOfStudents[i] = [student[i], marks[i]]
    }
    return marksOfStudents
}
const markOfStudents = getMarkOfStudents(pairs, marks);
function getRandomMarks(theme){
    let random = [];
    function getRandomArbitrary (min, max) {
        min = 1;
        max = 5;
        return Math.ceil(Math.random() * (max - min) + min)
    };
      
    for (let i =0; i<theme.length; i++){

         random[i] = theme[i].concat(getRandomArbitrary());
    }
    return random
}
const mark = getRandomMarks(theme);

document.writeln(`Функція No1: ${pairs}`)
        document.write("<br>");
document.writeln(`Функція No2: ${theme}`)
        document.write("<br>");
document.writeln(`Функція No3: ${markOfStudents}`)
        document.write("<br>");
document.writeln(`Функція No4: ${mark}`)
        document.write("<br>");

