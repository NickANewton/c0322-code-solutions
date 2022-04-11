/* exported student */
var student = {
  firstName: 'Nick',
  lastName: 'Newton',
  subject: 'History',
  getFullName: function (first, last) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (name, subject) {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
