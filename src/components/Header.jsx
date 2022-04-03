import React, { Component } from 'react'
import logo from '../assets/LOGO.svg'
import '../styles/Header.scss';
import {NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to='/'><img src={logo} alt="Kasa" aria-label="logo kasa"/></NavLink>
                <nav>
                    <NavLink to='/' exact>Accueil</NavLink>
                    <NavLink to='/About' className="about">A propos</NavLink>
                </nav>
            </header>
        )
    }
}


export default Header;