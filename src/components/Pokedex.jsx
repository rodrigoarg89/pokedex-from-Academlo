import axios from 'axios';
import React, { useInsertionEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const name = useSelector(state => state.userName);

    const [ pokemonList, setPokemonList ] = useState([]);
    const [ pokemonTypesList, setPokemonTypesList ] = useState([]);
    const [ nameInput, setNameInput ] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemonList(res.data.results));
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setPokemonTypesList(res.data.results))
    }, [])


    // console.log(pokemonTypesList)

    const searchName = () => {
        navigate(`/pokedex/${nameInput}`)
    }

    const searchType = (typeUrl) => {
        axios.get(typeUrl)
            .then(res => setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon))) //hacemos el map aqui para evitar hacer la condiconal de la linea 73, convirtiendose asi pokemonList a la misma estructura del setPokemonList del useEffect
    }

    //paginacion para ver 5 pokemon por pag.
    const [ page, setPage ] = useState(1);
    const pokemonPerPage = 10;
    const lastPokemonIndex = page * pokemonPerPage; 
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;


    const pokemonPaginated = pokemonList.slice(firstPokemonIndex, lastPokemonIndex)
    
    //para sacar la ultima pagina hacemos, debmos calcular cuantas paginas habrá. CEIL redondea hacia arriba

    const totalPages = Math.ceil(pokemonList.length / pokemonPerPage)
    const pagesNumber = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesNumber.push(i)
    }

    
    return (
        <div>
            <div className='welcome'>
            <   Link to="/"><i className="fa-solid fa-right-from-bracket"></i></Link>
                <h1>Welcome {name.toUpperCase()}!!!</h1>
                <p>Here you can find your favorites pokemons! </p>
            </div>
            <div>
                <input 
                    className='input-poke' 
                    type="text" 
                    placeholder='Find by name'
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)} 
                />
                <button onClick={searchName} className='btn-poke'><i class="fa-solid fa-magnifying-glass"></i></button>
            
                    <select onChange={e => searchType(e.target.value)}>
                        <option value=''>Find by type</option>

                        {
                            pokemonTypesList?.map(type => (
                                <option value={type.url} key={type.url}>{type.name}</option>

                            ))
                        }
                    </select>

            </div>
            <div className='pokemons-container'>
                {
                    // pokemonList.map(pokemon => (
                    pokemonPaginated.map(pokemon => (
                        <PokemonCard 
                            url={pokemon.url}
                            key={pokemon.url}
                            // url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            // key={pokemon.name ? pokemon.name : pokemon.pokemon.name}
                            />
                    ))
                }
            </div>
            <div className='paginator'>
                    <button className='btn-paginator' onClick={(() => setPage(page-1))} disabled={page === 1}>Prev Page</button>{pagesNumber.map(number => (
                    <button className='btn-paginator' onClick={() => setPage(number)}>{number}</button>
                    ))}

                    <button className='btn-paginator' onClick={(() => setPage(page+1))} disabled={page=== totalPages}>Next Page</button>
            </div>
            



        </div>
    );
};

export default Pokedex;