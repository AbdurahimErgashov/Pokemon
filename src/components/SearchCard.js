import './css/SearchCard.css'
export default function SearchCard({ searchPok, pokeName, setSearchPokemon, setLoading}) {
    const { img, name, type, attack, defense, species} = searchPok
    const back = () => {
        setSearchPokemon(null)
        pokeName('')
        setLoading(false)
    }
    return (
        <div className="card searchCard">
            <div className="card-image img">
                <img src={img} alt={name} />
            </div>
            <div className="card-content">
                <p>{ }</p>
                <span className="card-title">Name: {name}, type: {type}, attack: {attack}, defense: {defense}, species: {species}</span>
            </div>
            <div className="card-action">
                <button className="btn button backBtn" onClick={back}>Back</button>
                <span className="right"></span>
            </div>
        </div>
    )
}