import React from "react";
import Nav from '../Nav';
import './style.css'

function Header({name, lastname, page, setPage}) {
    
    return (
        <header>
            <h1>{name} {lastname}</h1>
            <Nav name={name} page={page} setPage={setPage} />
        </header>
    )
}

export default Header;