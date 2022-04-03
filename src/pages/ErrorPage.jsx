import React, { Component } from 'react'
import '../styles/ErrorPage.scss';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
    render() {
        return (
            <main className='errorPage'>
				<p className='errorPage404'>404</p>
				<p className='errorPageText'>Oups ! La page que vous demandez n'existe pas.</p>
				<Link className='errorPageLink' to='/'>Retourner sur la page d’accueil</Link>
			</main>
        )
    }
}
