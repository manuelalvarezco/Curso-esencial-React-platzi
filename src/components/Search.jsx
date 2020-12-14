import React from 'react';
import '../assets/styles/components/Search.scss'

const Search = () => (
    <div className="search-bg show-bg">
            <h3 className="titulo primary-color mb-4">Tu cuenta de Instagram</h3>
            <form className="hero-search-wrap">
                <input name="buscar" type="search" placeholder="@manuelalvarezco" className="form-control form-control-lg d-block form-control-search"></input>
            </form>
        </div>
);

export default Search;