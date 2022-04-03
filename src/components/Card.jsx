import React, { Component } from 'react'
import data from '../assets/data.json'
import '../styles/Card.scss';
import { NavLink } from 'react-router-dom';

export default class Card extends Component {
    render() {
        return (
            <section className='appartement'>
                {data.map((apartment,index) => {
                   return  <article className='appartementCard' key={index}>
                            <NavLink className='appartementLink'  to={`/apartment/${apartment.id}`}>
                                <img className='appartementImg' src={apartment.cover} alt={apartment.title} />
                                <h2 className='appartementTitle'>{apartment.title}</h2>
                            </NavLink>
                            </article>
                })}
            </section>
        )
    }
}
