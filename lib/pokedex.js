export async function getPokemons() {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemons = [];
    const batchSize = 50;

    for (let i = 1; i <= 1025; i += batchSize) {
        const fetchPromises = Array.from({ length: batchSize }, (_, j) => {
            const index = i + j;
            return index <= 1025 ? fetch(api_url + index).then(response => response.json()) : null;
        }).filter(promise => promise !== null);

        const pokemonData = await Promise.all(fetchPromises);
        pokemons.push(...pokemonData);
    }

    return pokemons;
}

export async function getPokemon(id) {
    const api_url = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonData = await fetch(api_url + id).then(response => response.json());

    return pokemonData;
}
