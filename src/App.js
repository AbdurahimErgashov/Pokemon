import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Error from './components/Error';
import Loader from './components/Loader';

const PokemonCard = lazy(() => import('./components/Card'));
const AllPokemon = lazy(() => import('./components/Pokemons'));

const App = () => {
  const [pokeName, setpokeName] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchPok, setSearchPokemon] = useState(null);
  const [error, setError] = useState(false)
  const [more, setMore] = useState([])
  const [moreName, setMoreName] = useState('')
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(true)
  console.log(pokemonList)
  useEffect(() => {
    searchPokemonList();
  }, [offset]);

  const searchPokemonList = () => {
    setLoading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((response) => {
        const results = response.data.results;
        const promises = results.map((result) => axios.get(result.url));
        axios
          .all(promises)
          .then((res) => {
            const data = res.map((item) => ({
              name: item.data.name,
              species: item.data.species.name,
              img: item.data.sprites.front_default,
              attack: item.data.stats[1].base_stat,
              defense: item.data.stats[2].base_stat,
              type: item.data.types[0].type.name,
              id: item.data.name
            }));
            setPokemonList(data);
            setLoading(false)
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const searchPokemon = (pokemonName) => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const data = {
          name: response.data.name,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        };
        setSearchPokemon(data);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setSearchPokemon(null);
        setError(true);
      });
  };

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const handleBack = () => {
    if (offset >= 20) {
      setOffset((prevOffset) => prevOffset - 20);
    }
  };

  const handleSearch = () => {
    searchPokemon(pokeName);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchPokemon(pokeName);
    }
  };

  const handleMore = (item) => {
    const newMore = {
      ...item
    }
    setMore([newMore])
    console.log(more)
  }

  return (
    <>
      <Header
        pokeName={pokeName}
        setpokeName={setpokeName}
        handleKeyPress={handleKeyPress}
        handleSearch={handleSearch}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      {error ? <Error setError={setError} setpokeName={setpokeName} setLoading={setLoading}/> :
        loading ? <Loader /> :
          <Content
            pockemons={pokemonList}
            searchPok={searchPok}
            pokeName={setpokeName}
            setSearchPokemon={setSearchPokemon}
            more={more}
            setMore={setMore}
            click={click}
            setClick={setClick}
            handleMore={handleMore}
            setLoading={setLoading}
          />
      }
      <Footer />
    </>
  );
};

export default App;