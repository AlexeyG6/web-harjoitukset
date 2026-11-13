const maara = prompt("Kuinka monta ehdokasta?");
let ehdokkaaat = [];
for (let i = 0; i < maara; i++) {
    let ehdokas = prompt("Ehdokkaan " + (i + 1) + " nimi: ");
    let Ehdokkaat = {
    name: ehdokas,
    votes: 0
    }
    ehdokkaaat.push(Ehdokkaat);
}
let äänestäjiä = prompt("Kuinka monta äänestäjää?");
for (let i = 0; i < äänestäjiä; i++) {
    let ääni = prompt("Anna äänesi (1-" + maara + "): ");
    if (ääni >= 1 && ääni <= maara) {
        ehdokkaaat[ääni - 1].votes++;
    }
}
let voittaja = [];
ehdokkaaat.sort((a, b) => {
    if (a.votes > b.votes) {
        voittaja = [a.name, a.votes];
    }
    else if (a.votes < b.votes) {
        voittaja = [b.name, b.votes];
    }
});

console.log("Voittaja on: " + voittaja[0] + " with " + voittaja[1] + " ääntä)");
for (let i = 0; i < ehdokkaaat.length; i++) {
    console.log("Tuolkset")
    console.log(ehdokkaaat[i].name + ": " + ehdokkaaat[i].votes + " ääntä");
}