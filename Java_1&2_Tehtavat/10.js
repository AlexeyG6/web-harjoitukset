const noppa_maara = prompt("Kuinka monta noppaa heitetään?");
const silm_luku_summ = prompt("Mistä silmäluku summasta olet kiinnostunut?");
let prosentti = 0;

for (let i = 0; i < 10000; i++) {
    let luku = 0;
    for(let o = 0; o < noppa_maara;){
        luku += Math.floor(Math.random() * 7);
    }
    if (luku === silm_luku_summ){
        prosentti++;
    }
}
console.log(prosentti % 10000)