function calculateGrade(score) {
    return score >= 90 ? 'A' :
        score >= 80 ? 'B' :
        score >= 70 ? 'C' :
        score >= 60 ? 'D' :
        score < 60 ? 'F' : ''
}

function swapGrades(student1, student2) {
    let randomVariable = student1.grade;
    student1.grade = student2.grade;
    student2.grade = randomVariable;
}

function updateGrade(student) {
    student.grade = calculateGrade(student.score); 
}

let student1 = {
     name: 'harsha',
     score: 92, 
     grade: calculateGrade(92)
     };
let student2 = { 
     name: 'raju',
     score: 54,
     grade: calculateGrade(54) 
    };
    
student1.score=70
updateGrade(student1);
console.log(student1)



updateGrade(student2);

console.log("before swapping" +" : "+student1.grade); 
console.log("before swapping" +" : "+student2.grade); 

swapGrades(student1,student2); 

console.log("after swaping"+" : " +student1.grade); 
console.log("after swaping"+" : " +student2.grade); 


