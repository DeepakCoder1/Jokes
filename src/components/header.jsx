import React from "react"
import { Link } from 'react-router-dom';
import "./header.css"
function Header(){
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li className="navbar">
                        <Link to="/" className="linknav">JokeApp</Link>
                        <div className="rightbar">
                        <Link to="/" className="linknav">Home</Link>
                        <Link to="/about" className="linknav">About</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        
        </>

    )
}

export default Header