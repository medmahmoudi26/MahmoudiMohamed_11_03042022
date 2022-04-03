import React, { Component } from 'react'
import starRed from '../assets/star-red.svg'
import starGray from '../assets/star-gray.svg'
export default class Rating extends Component {
    render() {
        const {rating} = this.props
        let stars = []
        const max = 5;

        for(var i = 0 ; i < max ; i++){
             rating > i 
                ? stars.push(<img src={starRed} alt="étoile rouge"/>)
                : stars.push(<img src={starGray} alt="étoile grise"/>)
            }

        return (
            <div className="apartmentHostRating">
                {stars.map((star,index) => {
                    return <span key={`${index}`}>{star}</span> 
                })}
            </div>
        )
    }
}
