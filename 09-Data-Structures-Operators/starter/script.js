'use strict';

const camelCase = function (list) {
  const spisuk = String(list).split('\n');
  let i = 1;
  for (const variable of spisuk) {
    const newvar = variable.toLowerCase().trim();
    const indexof_ = newvar.indexOf('_');
    const indexofCapital = newvar.indexOf('_') + 1;
    console.log(
      newvar
        .replace(
          newvar[indexof_] + `${newvar[indexofCapital]}`,
          newvar[indexofCapital].toUpperCase()
        )
        .padEnd(20, ' ') + `${'✅'.repeat(i)}`
    );
    i++;
  }
};
const list = `underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure`;
// camelCase(list);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;
const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text + '\n\n\n');
  camelCase(text);
});
// // console.log('a+very+nice+string'.split('+'));

// // console.log('Jonas Schmedtmann'.split(' '));

// // const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// // const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// // console.log(newName);

// // const capitalizeName = function (name) {
// //   const names = name.split(' ');
// //   const namesUpper = [];
// //   for (const word of names) {
// //     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
// //   }
// //   console.log(namesUpper.join(' '));
// // };

// // capitalizeName('jessica ann smith davis');

// // const message = 'Go to gate 23!';
// // console.log(message.padStart(25, '==>').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// };
// maskCreditCard(931829038120);
// maskCreditCard('3219839012830912830');
// maskCreditCard(93120);

// const message2 = 'Bad weather... All Departures Delayed... ';

// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';

// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '288,97§';
// const priceUS = priceGB.replace('§', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to barding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.startsWith('Airbus '));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
//   console.log('Part of the new airbus family');

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun'))
//     console.log('You are not allowed on board');
//   else console.log('Welcome aboard');
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airline.lastIndexOf('A'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// let string;
// for (const [key, value] of gameEvents) {
//   string = key <= 45 ? `[FIRST HALF] ${key}:  ` : `[SECOND HALF] ${key}:  `;
//   console.log(`${string}${value}`);
// }
// const events = [new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...NumofPlayers) {
//     console.log(...NumofPlayers);
//     console.log(`Number of goals scored: ${NumofPlayers.length}`);
//   },
// };

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// const rest = new Map();
// rest.set('Name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer: '));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// console.log([...question]);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// console.log(orderSet, orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Nishto'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set('SvetoslavIliev').size);

// let i = 1;
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;

// average /= Object.values(game.odds).length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const scorers = [{}];

// console.log(scorers);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery(obj) {
//     console.log(obj);
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`${ing1}, ${ing2}, ${ing3} `);
//   },
//   orderPizza(mainIngridient, ...otherIngridients) {
//     console.log(mainIngridient);
//     console.log(...otherIngridients);
//   },
// };

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

// const keys = Object.keys(openingHours);
// console.log(keys);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`)
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   if (open == 'closed') {
//     console.log('Closed');
//     continue;
//   }
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'hello@djami.io' }];
// console.log(users?.name ?? 'Empty');

// console.log(restaurant.openingHours.fri.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i,el] of menu.entries()) {
//   console.log(`${i+1}: ${el}`);
// }

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// console.log(players1,players2);
// console.log(gk);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1: team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// team1 < team2 && console.log ("Team 1 is more likely to win");
// team2 < team1 && console.log ("Team 2 is more likely to win");

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// console.log(3 || 'Jonas');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Only null and undefined (bez 0 ili prazen string)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// const mainMenu = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);
// const str = 'Djami';
// const letters = [...str, '', 'S.'];
// console.log(...letters);

// const ingredient = [prompt('Ingridient 1'),prompt('Ingridient 2'),prompt('Ingridient 3')]

// const newRestaurant = {
//   founded: 1998,
//   ...restaurant,
//   founder: 'djami',
// };

// console.log(newRestaurant);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, ,j] = nested;
// // console.log(i,j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p=1, q=1, r=1] = [8];
// console.log(p, q, r);
