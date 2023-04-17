"use strict";

// const temperatures = [3, -2, -6, "error", -1, 9, 13, 17, 15, 14, 9, 5];

// // console.log(max(temperetures) - min(temperetures));
// function amplCalc(arr) {
//   let temperatureMax = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > temperatureMax) {
//       temperatureMax = arr[i];
//     } else if (typeof arr[i] !== "number") {
//       continue;
//     }
//   }
//   let temperatureMin = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < temperatureMin) {
//       temperatureMin = arr[i];
//     } else if (typeof arr[i] == "string") {
//       continue;
//     }
//   }
//   return temperatureMax - temperatureMin;
// }

// console.log(amplCalc(temperatures));
// console.log(Math.max(temperatures)-Math.min(temperatures))

// function measureKelvin() {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     value: prompt("Degree celcius: "),
//   };
//   console.table(measurement);
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// }

// console.log(measureKelvin());

const testData = [12, 5, -2, 0, 4];

function printForecast(arr) {
  let finalniq = ``;
  for (let i = 0, x = 1; i < arr.length, x < arr.length + 1; i++, x++) {
    let stringa = `${arr[i]} C° in ${x} days ... `;
    finalniq += stringa;
  }
  return finalniq;
}

console.log(printForecast(testData));

function printForecast2(arr) {
  let finalniq = `... `;
  for (let i = 0; i < arr.length; i++) {
    let stringa = `${arr[i]} C° in ${i + 1} days ... `;
    finalniq += stringa;
  }
  return finalniq;
}

console.log(printForecast2(testData));
