/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  for (var i = 0; i <= students.length - 1; i++) {
    for (var x in students) {
      name.push(students[x]);
    }
  }
  return values;
}
