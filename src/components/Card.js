import React from 'react';
import '../components/css/Card.css'

const PokemonCard = (props) => {
  const{img, name, type, defense, attack, setClick, handleMore, setMoreName} = props
  const click = () =>{
    setClick(true)
    handleMore({name, img, type, defense, attack})
  }
  return (
    <div className="card goods" id={name}>
        <div className="card-image img">
            <img src={img}  alt={name}/>
        </div>
        <div className="card-content">
            <p>{}</p>
            <span className="card-title">Name: {name}</span>
            <span className="card-title">Type: {type}</span>
        </div>
        <div className="card-action">
            <button className="btn button" onClick={click}>More...</button>
            <span className="right"></span>
        </div>
    </div>
  );
};

export default PokemonCard;