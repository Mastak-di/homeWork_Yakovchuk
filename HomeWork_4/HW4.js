//HW4

const students = ["Александр", "Игорь", "Алена", "Ира", "Алексей", "Света"];
const themes = ["Дифференцированное уровнение", "Теория автоматов", "Алгоритм и структура данных"];
const marks = [4, 5, 5, 3, 4, 5];
const doubleStudents = [];
const giveTheme = [];
const assessmentEach = [];
const giveMarks = [];

function twoStudents(){
doubleStudents.push([students[0], students[5]]);
doubleStudents.push([students[1], students[2]]);
doubleStudents.push([students[3], students[4]]);
  return doubleStudents;
}
console.log('The first task:', twoStudents());

function themeForStudents(){
  giveTheme.push(doubleStudents.slice(0, 1), themes.slice(0, 1));
  giveTheme.push(doubleStudents.slice(1, 2), themes.slice(1, 2));
  giveTheme.push(doubleStudents.slice(2), themes.slice(2));

return giveTheme;
}
console.log('The second task:', themeForStudents());
  
function assessmentEveryone(){
  assessmentEach.push(students.slice(0, 1), marks.slice(0, 1));
  assessmentEach.push(students.slice(0, 1), marks.slice(1, 2));
  assessmentEach.push(students.slice(0, 1), marks.slice(2, 3));
  assessmentEach.push(students.slice(0, 1), marks.slice(3, 4));
  assessmentEach.push(students.slice(0, 1), marks.slice(4, 5));
  assessmentEach.push(students.slice(0, 1), marks.slice(5));
  return assessmentEach;
}
 console.log('The third task:', assessmentEveryone()); 

function randomAssessment(a, b) {
  let assessment = Math.floor(Math.random()* (a - b)) + b;
  giveMarks.push(doubleStudents.slice(0, 1), themes.slice(0, 1), assessment);
  let assessment1 = Math.floor(Math.random()* (a - b)) + b;
  giveMarks.push(doubleStudents.slice(1, 2), themes.slice(1, 2), assessment1);
  let assessment2 = Math.floor(Math.random()* (a - b)) + b;
  giveMarks.push(doubleStudents.slice(2), themes.slice(2), assessment2);
          return giveMarks;
}
console.log('The fourth task:', randomAssessment(1, 5));







