import React from "react";
import '../components/css/Header.css'
const Header = ({ pokeName, setpokeName, handleKeyPress, handleSearch, handleNext, handleBack }) => {
    console.log(pokeName)
    const search = () => {
        handleSearch()
    }
    return (
        <nav>
            <div className="nav-wrapper header">
                <a href="#" className="brand-logo">Abdurahim</a>
                <input
                    className="search"
                    type="text"
                    value={pokeName}
                    placeholder="Search pokemon..."
                    onChange={(event) => {
                        setpokeName(event.target.value);
                    }}
                    onKeyDown={handleKeyPress}
                />
                <a href='#' className="waves-effect waves-light btn search-btn" onClick={search}>Search</a>
                <a href='#' className="waves-effect waves-light btn next" onClick={handleNext}>Next</a>
                <a href='#' className="waves-effect waves-light btn back" onClick={handleBack}>Back</a>
            </div>
        </nav>
    )
};

export default Header;