import React, { useState, useEffect } from 'react';

const GetPokemon = () => {
const [pokemonList, setPokemonList] = useState([]);
const fetchPokemonList = async () => {
    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
    const data = await response.json();
    setPokemonList(data.results);
    } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    }
};

useEffect(() => {
    fetchPokemonList();
}, []);

return (
    <div>
        <button onClick={fetchPokemonList}>Fetch Pokemon</button>
    {pokemonList.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
    ))}
    
    </div>
);
};
export default GetPokemon;
