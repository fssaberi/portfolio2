import React from 'react';
import './style.css';

function Nav(props) {
    // console.log(props)
    function handleClick(e) {
        // console.log(e.target.innerText)
        props.setPage(e.target.innerText)
    }
    console.log(props.page)
    return (
        <nav>
            <span onClick={handleClick}>
                About Me
            </span>
            <span onClick={handleClick}>
                Projects
            </span>
            <span onClick={handleClick}>
                Resume
            </span>
            <span onClick={handleClick}>
                Contact
            </span>
        </nav>
    )
}

export default Nav;