/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  students.forEach(function (students) {
    values.push(students.name);
  });
  return values;
}
