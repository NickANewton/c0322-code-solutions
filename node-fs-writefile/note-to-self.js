const fs = require('fs');
const data = process.argv[process.argv.length - 1] + '\n';

fs.writeFile('note.txt', data, 'utf8', err => {
  if (err) throw err;
});
