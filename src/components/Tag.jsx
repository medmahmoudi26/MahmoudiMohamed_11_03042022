import React, { Component } from 'react'
import '../styles/Tag.scss';

export default class Tag extends Component {
    render() {
        const {tag} = this.props;

        return (
            <div className="tag">{tag}</div>
        )
    }
}
