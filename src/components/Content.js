import '../components/css/Content.css'
import Card from './Card'
import More from './More'
import SearchCard from './SearchCard'
export default function Content(props) {
    const { pockemons, searchPok, pokeName, setSearch, setSearchPokemon, more, setMore, click, setClick, handleMore, setMoreName, setLoading} = props
    return (
        <div className="content">
            {searchPok ?
                searchPok &&  <SearchCard 
                                    searchPok={searchPok} 
                                    pokeName={pokeName} 
                                    tSearch={setSearch} 
                                    setSearchPokemon={setSearchPokemon}
                                    setLoading={setLoading}
                              />
                :
                    click ? more.map(item=>(
                        <More key={item.name}  more={more} setClick={setClick} {...item} setLoading={setLoading}/>
                    )):
                pockemons.map(item => (
                    <Card 
                        key={item.name} 
                        {...item}
                        setClick={setClick}
                        handleMore={handleMore}
                        setMoreName={setMoreName}
                        setLoading={setLoading}
                    />
                ))
            }
        </div>
    )
}