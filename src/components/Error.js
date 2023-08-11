import './css/Error.css'
export default function Error({setError, setpokeName, setLoading}){
    const ok = () =>{
        setError(false)
        setpokeName('')
        setLoading(false)
    }
    return(
        <div className="content error">
            <h1>Pokemon not found please try again...</h1>
            <button className="btn button okBtn" onClick={ok}>Ok</button>
        </div>
    )
}