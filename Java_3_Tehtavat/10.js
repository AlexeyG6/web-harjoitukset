const maara = prompt("Kuinka monta ehdokasta?");
ehdokkaaat = [];
for (let i = 0; i < maara; i++) {
    let ehdokas = prompt("Ehdokkaan " + (i + 1) + " nimi: ");
    ehdokkaaat.push(ehdokas);
}
