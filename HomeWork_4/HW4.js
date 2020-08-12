const students = ["Александр", "Игорь", "Алена", "Ира", "Алексей", "Света"];
const themes = ["Дифференцированное уровнение", "Теория автоматов", "Алгоритм и структура данных"];
const marks = [4, 5, 5, 3, 4, 5];
const doubleStudents = [];
let giveTheme = [];
const giveMarks = [];

function twoStudents(){
doubleStudents.push([students[0], students[5]]);
doubleStudents.push([students[1], students[2]]);
doubleStudents.push([students[3], students[4]]);
  return doubleStudents;
}
console.log('The first task:', twoStudents());

function themeForStudents(){
  
  for(let i=0; i<doubleStudents.length; i++){
    giveTheme[i] = [doubleStudents[i].join(" и "), themes[i]];
  }
return giveTheme;
}
console.log('The second task:', themeForStudents());

function markForStudents(){
  let assessmentEach = [];
  for(let i=0; i<students.length; i++){
    assessmentEach[i] = [students[i], marks[i]];
  }
return assessmentEach;
}
console.log('The third task:', markForStudents());

function randomeNumbers(a=1, b=5){
  let assessment = Math.floor(Math.random()* (b - a)) + a;
  return assessment;
}
console.log(randomeNumbers());

function randomAssessment() {
  let getAssessmentPair = [];
  for(let i=0; i<giveTheme.length; i++){
    getAssessmentPair[i] = [giveTheme[i], randomeNumbers()];
  }
  return getAssessmentPair;
}
console.log('The fourth task:', randomAssessment());