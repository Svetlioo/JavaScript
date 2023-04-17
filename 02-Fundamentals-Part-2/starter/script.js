// function calctip(bill) {
// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
//     return tip

// } else {
//     tip = bill * 0.20
//     return tip
// }
// }

// function cqloto(bill) {
//     return bill + calctip(bill)
// }
// bills = [125,555,44]

// const newLocal = tips = []
// tips.push(calctip(bills[0]),calctip(bills[1]),calctip(bills[bills.length-1]))
// total = []
// total.push(cqloto(bills[0]),cqloto(bills[1]),cqloto(bills[bills.length-1]))
// console.log(`Bills: ${bills}\nTips: ${tips}\nTotal: ${total}`)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)
// console.log(jonas['friends'])
// console.log(jonas.calcAge());

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
// calcAge: function(birthYear) {
//     return 2037 - birthYear;
// }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//             return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}driver's license.`)
//     }
//   };

// console.log(jonas.getSummary())

// const MarkMiller = {
//   fullName: 'MarkMiller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI.toFixed(1);
//   }
// }

// const JohnSmith = {
//   fullName: 'JohnSmith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI.toFixed(1);
//   }
// }

// MarkMiller.calcBMI() > JohnSmith.calcBMI() ? console.log(`${MarkMiller.fullName}'s BMI (${MarkMiller.calcBMI()
// }) is higher than ${JohnSmith.fullName}'s (${JohnSmith.calcBMI()}) `) : console.log(`${JohnSmith.fullName}'s BMI (${JohnSmith.calcBMI()}) is higher than ${MarkMiller.fullName}'s (${MarkMiller.calcBMI()})`)

// for(let rep = 1; rep <= 9; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`)
// }

// const types = []

// for (let i = 0; i < jonas.length;i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   types.push(typeof jonas[i]);
// }

// console.log(types)

// const years = [1991,2007,1969,2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }

// console.log(ages)

// for (let i = 0; i < jonas.length;i++) {
//   if(typeof jonas [i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i])
//   }
// const jonas = [
// 'Jonas',
// 'Schmedtmann',
// 'teacher',
// ['Michael', 'Peter', 'Steven'],
// 1,
// 2
// ]

// for (let i = jonas.length-1; i >= 0; i--){
// console.log(i, jonas[i]);
// // }

// for (let djami = 1; djami <=3; djami++) {
//   console.log(`Djami ${djami}`)
//   for (let djamaikata = 1; djamaikata < 6; djamaikata++) {
//     console.log(`Djamaikata ${djamaikata} ot djami${djami}`)
//   }
// }

// let djami = 1;
// let djamaikata = 1;
// while(djami<=3) {
//   console.log((`WHILE: Djami ${djami}`))
//   djami++;
//   while (djamaikata < 6) {
//   console.log(`WHILE: Djamaikata ${djamaikata} ot djami${djami}`)
//   djamaikata++
//   }
//   djamaikata=1
// }
// let dice = Math.trunc(Math.random()* 6) + 1;

// while (dice !==6) {
// console.log(`You rolled a ${dice}`)
// dice = Math.trunc(Math.random()* 6) + 1;
// if (dice ===6) console.log('6')
// }

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calctip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tip = calctip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));
