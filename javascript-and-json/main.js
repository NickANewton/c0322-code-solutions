var books = [
  {
    isbn: 12345,
    title: 'I love coding',
    author: 'Stackus Overflowis'
  },
  {
    isbn: 54321,
    title: 'Coding Dreams (nightmares)',
    author: 'LearningFuze Junior'
  },
  {
    isbn: 98765,
    title: 'All the Codes: A Beginners Guide',
    author: 'Cody and Tim'
  }
];

console.log(books);
console.log('books typeof:', typeof (books));

console.log('JSON string:', JSON.stringify(books));
console.log('JSON string typeof:', typeof (books));

var student = '[{"id":15432,"name":"Genius Coder"}]';
console.log('typeof student:', typeof (student));

var toJSON = JSON.parse(student);
console.log('toJSON:', toJSON);
console.log('typeof toJSON:', typeof (toJSON));
