console.log("Entro al main.js");


const imgPokemon = document.getElementById("imgPokemon");
const nombrePokemon = document.getElementById("nombrePokemon");
const pesoPokemon = document.getElementById("pesoPokemon");


function randomPokemon() {
    console.log("Entro a la funcion de randomPokemon");
    const pokemon_number = generateRandomNumber(1, 151);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_number}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            imgPokemon.src = data.sprites.other.home.front_default;
            nombrePokemon.innerText = data.name.toUpperCase();
            pesoPokemon.innerText = data.weight;
        })
        .catch(error => console.log(error));
}

function generateRandomNumber(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}