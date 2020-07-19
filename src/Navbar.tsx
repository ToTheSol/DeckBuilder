import React from 'react';
import  './styles/Navbar.css';

interface NavbarProps {
    buttons: Array<string>
}

export default function Navbar(props : NavbarProps) {
    const navigationItems = props.buttons.map((button) =>
        <li key={button}>{button}</li>
    )

    return (
        <div id='navbar-bg'>
            <h1>Matt's Site</h1>
            <ul>{navigationItems}</ul>
        </div>
    )
}