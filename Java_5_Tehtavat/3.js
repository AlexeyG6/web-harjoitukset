"use strict";

const tv_form = document.querySelector('#tv_form');
tv_form.addEventListener("submit", async function (evt){
    evt.preventDefault();
    const input_value = document.querySelector("input[name=q]").value;
    let jsonData;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input_value}`);
        jsonData = await response.json();
        console.log(input_value);
        console.log(jsonData);
    }catch (error) {
        console.log(error.message);
    }
    document.querySelector("#results").innerHTML = "";
    const target = document.querySelector("#results")
    for (const result of jsonData){
        const show = result.show;

        const name = document.createElement("h2");
        const tiivistelma = document.createElement("div");
        const linkki = document.createElement("a");
        const kuva = document.createElement("img");
        const article = document.createElement("article")
        
        name.innerHTML = show.name;
        tiivistelma.innerHTML = show.summary;
        linkki.innerHTML = "Linkki"
        linkki.href = show.url;
        linkki.target = "_blank";
        
        kuva.src = show.image?.medium;
        kuva.alt = show.name;
        
        article.appendChild(name);
        article.appendChild(tiivistelma);
        article.appendChild(linkki);
        article.appendChild(kuva)

        target.appendChild(article);
    };
});