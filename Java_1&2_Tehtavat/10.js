const noppa_maara = parseInt(prompt("Kuinka monta noppaa heitetään?"));
const silm_luku_summ = parseInt(prompt("Mistä silmäluku summasta olet kiinnostunut?"));
let monta = 0;

for (let i = 0; i < 20000; i++) {
    console.log("1 silmukka")
    let luku = 0;
    for(let o = 0; o < noppa_maara; o++){
        console.log("2 silmukka")
        luku += Math.floor(Math.random() * 6) + 1;
    }
    if (luku === silm_luku_summ){
        monta++;
    }
}
const todenakoisyys = (monta / 20000) * 100; 
document.querySelector("#print").innerHTML = "Todennäköysyys saada summa " + "nopalla on " + todenakoisyys.toFixed(2) + "%"