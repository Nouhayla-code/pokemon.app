"use strict";

window.addEventListener("load", initApp);

async function initApp(){
  const pokemons=await getPokemons();
  showPokemons();
}

const Quagsire = {
  pokeName: "Quagsire",
  description:
    "It has an easygoing nature. It doesnt care if it bumps its head on boats and boulders while swimming",
  abilityOne:
    "DAMP:The Pokémon dampens its surroundings, preventing all Pokémon from using explosive moves such as Self-Destruct.",
  abilityTwo:
    "WATER ABSORB:If hit by a Water-type move, the Pokémon has its HP restored instead of taking damage.",
  number: 195,
  height: 139.7,
  weight: 73935.5,
  weaknesses: "Grass",
  gender: "male and female",
  canEvolve: true,
  type:"Water ground",
  generation: 2,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png",
};


// footprint: url (til et andet billede) 
// type: tekst – begrænset til: fire, ice, flying, etc …
// subtype: tekst


// generation: tal
// spilversion: tekst



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