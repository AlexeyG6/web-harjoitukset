"use strict";

alert("Hello!"); // näytetään alert-ikkuna

const name1 = prompt("What is your name?"); //kysytään nimi
const age = prompt("What is your age?"); // kysytään ikä
const number = prompt("Enter a decimal number:"); // kysytään desimaaliluku

const ageStr = age.toString(); // muutetaan ikä stringiksi
const numberStr = number.toString(); // muutetaan desimaaliluku stringiksi
const testText = `This is text 1 
This is text 2`; // luodaan monirivinen teksti
const greeting = `Hello ${name1}`; // luodaan tervehdys käyttäjän nimellä

console.log("Hello World"); // tulostetaan Hello World consoliin 
console.log(typeof name1); // tulostetaan konsoliin muuttujan name1 tyyppi
console.log(greeting); // tulostetaan konsoliin tervehdys
console.log("Hello " + name1 + ", " + age + "! " + "Integer is " + parseInt(numberStr)); // tulostetaan konsoliin tervehdys, ikä ja kokonaisluku
console.log(testText); // tulostetaan konsoliin monirivinen teksti

document.querySelector("#target").innerHTML = "Hello, " + name1 + ", " + age + "! " + "Integer is " + parseInt(numberStr); // tulostetaan HTML-sivulle tervehdys, ikä ja kokonaisluku
