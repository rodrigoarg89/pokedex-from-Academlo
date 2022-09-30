import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState();
    const [ characteristic, setCharacteristic ] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
            axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`)
            .then(res => setCharacteristic(res.data.descriptions[7]))
    }, []);

    console.log(pokemon)

    const colorType = pokemon?.types?.[0].type.name;
    let color = ''; 
    
    console.log(pokemon)
    
    if(colorType == 'fire') {
        color = 'gold'
    } else if(colorType == 'bug') {
        color = 'khaki'
    } else if(colorType == 'rock') {
        color = 'darkgrey'
    } else if(colorType == 'grass') {
        color = 'greenyellow'
    } else if(colorType == 'ground') {
        color = 'burlywood'
    } else if(colorType == 'poison') {
        color = 'blueviolet'
    } else if(colorType == 'ghost') {
        color = 'dark'
    } else if(colorType == 'water') {
        color = 'aquamarine'
    } else if(colorType == 'flying') {
        color = 'palegreen'
    } else if(colorType == 'psychic') {
        color = 'lightseagreen'
    } else if(colorType == 'steel') {
        color = 'silver'
    } else if(colorType == 'electric') {
        color = 'yellow'
    } else if(colorType == 'fighting') {
        color = 'tomato'
    } else if(colorType == 'ice') {
        color = 'lightblue'
    } else if(colorType == 'dragon') {
        color = 'sandybrown'
    } else if(colorType == 'dark') {
        color = 'dimgray'
    } else {
        color = 'snow'
    }

    return (
        <div className="pokemon-details" style={
            {backgroundColor: color }}>
            <Link to="/pokedex/"><i className="fa-solid fa-right-from-bracket"></i></Link>

            <h1 className='let-capital'>{pokemon?.name}</h1>
            <img className='card-image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <div >
                    <h2>"{characteristic?.description}"</h2>
            </div>
            <div className="card-type">Type:
                    { 
                        pokemon?.types.map(type => 
                            <div className='let-capital' key={type.name}>{type.type?.name}</div>
                    )}
            </div>
            <div className='flex-details'>
                <div className="card">Height: {pokemon?.height}</div>
                <div className="card">#0{pokemon?.order}</div>
                <div className="card">Weight: {pokemon?.weight}</div>
            </div>

        </div>
    );
};

export default PokemonDetail;