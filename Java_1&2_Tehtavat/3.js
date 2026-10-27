let sum = 0;
let income = 1;
let count = 0;
let average = 0;

for(let i = 0; i < 3; i++) {
    const number = parseInt(prompt("Anna luku:"));
    number
    sum += number;
    income *= number;
    count++;
}
document.querySelector("#result").innerHTML = "Summa: " + sum + "<br> Tulo: " + income + "<br>Keskiarvo: " + (sum / count);