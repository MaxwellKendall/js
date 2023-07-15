// global-scope: RED
var students = [
    { id: 1, name: "Max"},
    { id: 2, name: "Kyle"}
];

function getStudentName(studentID) {
    // function-scope: BLUE

    for (let student of students) {
        // loop-scope: GREEN
        if (student.id === studentID) {
            getStudentName(student.id)
        }
    }
}

getStudentName(1);