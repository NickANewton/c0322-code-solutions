const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, current) => prev + current);
console.log('sum:', sum);

const product = numbers.reduce((prev, current) => prev * current);
console.log('product:', product);

const balance = account.reduce((prev, current) => {
  if (current.type === 'deposit') {
    return prev + current.amount;
  } else {
    return prev - current.amount;
  }
}, 0);

console.log('balance:', balance);

const composite = traits.reduce((allObj, obj) => {
  for (const key in obj) {
    allObj[key] = obj[key];
  }
  return allObj;
}, {});

console.log('composite:', composite);
