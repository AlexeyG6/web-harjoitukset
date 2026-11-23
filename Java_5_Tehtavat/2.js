"use strict";

const tv_form = document.querySelector('#tv_form');
tv_form.addEventListener("submit", async function (evt){
    evt.preventDefault();
    const input_value = document.querySelector("input[name=q]").value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input_value}`)
        const jsonData = await response.json();
        console.log(input_value)
        console.log(jsonData);
    }catch (error) {
        console.log(error.message);
    }
});