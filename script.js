"use strict";

window.addEventListener("load", initApp);

async function initApp(){
  const pokemons=await getPokemons("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  showPokemons();
}



function initApp(){
}
function fetchJSON(){

}
function showPokemons(){

}
function showQuagsire(Quagsire){
  document.querySelector("body").insertAdjacentHTML("afterbegin",
  
  
  );
}
  document.querySelector("#pokemon-list").insertAdjacentHTML(
    "beforeend",
    /*html*/ `

<article class="list-entry">
    <img id="list-image" src = "${pokemon.image}"/>
    <div class="type-color-${typeColor}"></div>
    <h2 id="list-name">${pokemon.name}</h2>
    <h3 id="list-number">#${dexNumber}</h3>
    <p id="list-description">${pokemonDesc}</p>
</article>
`
  );

  document.querySelector("#pokemon-list article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    document.querySelector("#background").classList.remove("dim");
    document.querySelector("#background").classList.add("dark");
    document.querySelector("#pokemon-list").classList.add("dark");
    document.querySelector("#dialog-color").classList.add(`dialog-type-${typeColor}`);

    document.querySelector("#pokemon-name").textContent = pokemon.name;
    document.querySelector("#pokemon-type").textContent = `Type: ${pokemon.type}`;
    document.querySelector("#pokemon-dex").textContent = `Dex Number: ${dexNumber}`;
    document.querySelector("#pokemon-image").src = pokemon.image;
    document.querySelector("#pokemon-footprint").src = pokemon.footprint;
    document.querySelector("#pokemon-description").textContent = pokemon.description;
    document.querySelector(".pokemon-hp").textContent = `HP: ${pokemon.statsHP}`;
    document.querySelector(".pokemon-attack").textContent = `ATTACK: ${pokemon.statsAttack}`;
    document.querySelector(".pokemon-defense").textContent = `DEFENSE: ${pokemon.statsDefence}`;
    document.querySelector(".pokemon-spattack").textContent = `SP.ATTACK: ${pokemon.statsSpecialAttack}`;
    document.querySelector(".pokemon-spdefense").textContent = `SP.DEFENSE: ${pokemon.statsSpecialDefence}`;
    document.querySelector(".pokemon-speed").textContent = `SPEED: ${pokemon.statsSpeed}`;
    document.querySelector("dialog").showModal();
    document.querySelector(".btn-close").addEventListener("click", pokemonClose);
  }
}

function pokemonClose() {
  document.querySelector("dialog").close();
  document.querySelector("#background").classList.remove("dark");
  document.querySelector("#pokemon-list").classList.remove("dark");
  document.querySelector("#dialog-color").removeAttribute("class");
  document.querySelector("#background").classList.add("dim");
}

function removePokemon() {
  document.querySelectorAll(".list-entry").forEach((e) => e.remove());
}