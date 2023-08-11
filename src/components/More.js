export default function More(props) {
    const {img, name, type, defense, attack, setClick, setLoading} = props
    const back = () => {
        setClick(false)
        setLoading(false)
    }
    return (
             <div className="card searchCard">
             <div className="card-image img">
                 <img src={img} alt={name} />
             </div>
             <div className="card-content">
                 <p>{ }</p>
                 <span className="card-title">Name: {name}, type: {type}, attack: {attack}, defense: {defense}</span>
             </div>
             <div className="card-action">
                 <button className="btn button" onClick={back}>Back</button>
                 <span className="right"></span>
             </div>
         </div>
    )
}