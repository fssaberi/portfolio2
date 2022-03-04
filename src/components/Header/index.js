import React from "react";
import Nav from '../Nav';
import './style.css'

function Header({name, lastname}) {
    return (
        <header>
            <h1>{name} {lastname}</h1>
            <Nav />
        </header>
    )
}

export default Header;