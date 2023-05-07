'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23123123123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 23123123123) {
    alert('Checked in');
  } else {
    alert('Wrong!');
  }
};

checkIn(flight,jonas);