import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonCard = ({url}) => {

    const [pokemon, setPokemon ] = useState({})

    const navigate = useNavigate();


useEffect(() => {
    axios.get(url)
        .then(res => setPokemon(res.data))
}, [])

const colorType = pokemon.types?.[0].type.name;
let color = ''; 

console.log(pokemon.types?.[0].type.name)

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
        <div 
            style={
                {backgroundColor: color }}       
            onClick={() => navigate(`/pokedex/${pokemon.id}`)} className='pokemon-item'>

            <h2 className='let-capital'>{pokemon.name}</h2>
            <img className='pokemon-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <div className="card-type">Type:
                    { 
                        pokemon.types?.map(type => 
                            <div 
                                className='let-capital' 
                                key={type.name}
                                
                                >{type.type?.name}
                            </div>
                    )}
                
            </div>
        </div>
    );
};

export default PokemonCard;
