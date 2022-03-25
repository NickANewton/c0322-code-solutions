/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  students.forEach(function (students) {
    for (var x in students) {
      values.push(students[x]);
    }
  });
  return values;
}
