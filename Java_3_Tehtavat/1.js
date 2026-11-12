lista = [];
let luku;
for (let i = 0; i < 5; i++) {
    luku = prompt("Anna luku: ");
    lista.push(luku);
}
document.querySelector("#tulos").innerHTML = "Luvut: " + lista.join(", ");