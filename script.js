"use strict";

let pokemon;

window.addEventListener("load", initApp);

async function initApp() {
  const pokemonData = await fetchJSON(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  for (const pokemon of pokemonData) {
    showPokemon(pokemon);
  }
}


async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  console.log("showpokemon");
  const pokemonHTML = /*html*/ `
    <article class="grid-item">
        <img src="${pokemon.image}">
        <h2>${pokemon.name}</h2>
        <p>${pokemon.dexindex}</p>
    </article>`;
  document
    .querySelector("#pokemon")
    .insertAdjacentHTML("beforeend", pokemonHTML);
  document
    .querySelector("#pokemon article:last-child")
    .addEventListener("click", function () {
      clickPokemon(pokemon);
    });
}

function clickPokemon(pokemon) {
  const id = `pokemon-info-${pokemon.name}`;
  const detailHTML = /*html*/ `
    <article id="pokemon-grid2">
      <h1>${pokemon.name}</h1>
      <img class=pokemon-info-img src="${pokemon.image}">
      <h3>"${pokemon.description}"</h3>
      <ul id="pokemon-ul">
      <li>Footprint: <img class="footprint"src="${pokemon.footprint}"></li>
      <li>Ability: ${pokemon.ability}</li>
      <li>Type: ${pokemon.type}</li>
      <li>Subtype: ${pokemon.subtype}</li>
      <li>Weaknesses: ${pokemon.weaknesses}</li>
      <li>Weight: ${pokemon.weight} grams</li>
      <li>Height: ${pokemon.height} centimeters</li>
      <li>Generation: ${pokemon.generation}</li>
      <li>Game version: ${pokemon.spilversion}</li>
      <li>HP: ${pokemon.statsHP}</li>
      </ul>
      <button id="close-btn">Close</button>
    </article>`;
  document
    .querySelector("#pokemon-details")
    .insertAdjacentHTML("beforeend", detailHTML);

  document.querySelector("#pokemon-details").showModal();

  document.querySelector("#close-btn").addEventListener("click", closeDialog);
}

function closeDialog() {
  console.log("closeDialog");
  document.querySelector("#pokemon-details").close();
  document.querySelector("#pokemon-info-" + pokemon.name).remove();
}

