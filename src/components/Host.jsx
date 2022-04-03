import React, { Component } from 'react'

export default class Host extends Component {
    render() {


        const { name, picture } = this.props;
		const firstName = name.split(' ')[0];
		const lastName = name.split(' ')[1];

        return (
            <div className="apartmentHost">
                <div className="apartmentHostName">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </div>
                <img className="apartmentHostImg" src={picture} alt={name} />
            </div>
        )
    }
}
