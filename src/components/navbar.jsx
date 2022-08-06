import React from "react"
import airbnbLogo from "/src/assets/airbnb-logo.png"


export default function Navbar() {
    return (
        <header>
            <nav>
                <img className="nav--logo" src={airbnbLogo}/>
            </nav>
        </header>
    )
}