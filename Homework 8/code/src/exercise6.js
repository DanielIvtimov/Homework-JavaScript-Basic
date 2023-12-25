let examGrades = [10, 6, 8, 9, 6];
function checkPassed(grades){
    let averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return averageGrade >= 8;
}
let hasPassedSemester = checkPassed(examGrades);
if (hasPassedSemester) {
    alert("Congratulations you passed");
} else {
    alert("Sorry, you have not passed");
}


