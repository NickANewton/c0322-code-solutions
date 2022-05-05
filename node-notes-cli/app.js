const fs = require('fs');
const entryObj = require('./data.json');
const command = process.argv[2];

if (command === 'read') {
  for (const prop in entryObj.hobbies) {
    console.log(prop + ': ' + entryObj.hobbies[prop]);
  }
}
if (command === 'create') {
  entryObj.hobbies[entryObj.nextId] = process.argv[process.argv.length - 1];
  entryObj.nextId++;
}

if (command === 'update') {
  entryObj.hobbies[process.argv[3]] = process.argv[process.argv.length - 1];
}

if (command === 'delete') {
  delete entryObj.hobbies[process.argv[3]];
}

const addEntry = JSON.stringify(entryObj, null, 2);
fs.writeFile('data.json', addEntry, err => {
  if (err) throw err;
});
