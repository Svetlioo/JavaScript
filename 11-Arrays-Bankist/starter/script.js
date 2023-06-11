'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice());
// console.log(arr.splice(-1));
// const reversedArray = arr.reverse();
// console.log(arr);
// const arr2 = ['b', 'c', 'q'];

// const arrays = arr.concat(arr2);

// console.log(arrays.join(' - '));

// const array = [24, 25, 30];

// console.log(array[0]);
// console.log(array.at(-1));
// console.log(...array.slice(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}$\n`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}$\n`);
//   }
// }

// console.log('\n\n\n');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}$\n`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}$\n`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}\n map: ${map}`);
// });

const currenciiies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciiies);

currenciiies.forEach(function (value, key, map) {
  console.log(map);
});

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const slicedArray = arr1.slice(1, -2);
  console.log(`Sliced array: ${slicedArray}`);
  const combined = slicedArray.concat(arr2);
  console.log(`Both arrays array: ${combined}`);
  combined.forEach(function (dog, index) {
    const type = dog >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${index + 1} is a ${type} and is ${dog} years old`);
  });
};

checkDogs(julia, kate);
console.log(julia);
