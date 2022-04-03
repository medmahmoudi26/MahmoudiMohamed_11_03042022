import React, { Component } from 'react'
import footer_logo from '../assets/FOOTER_LOGO.svg'
import '../styles/Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={footer_logo} alt='logo kasa'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}


