import React, { Component } from 'react'
import data from '../assets/data.json';
import Carousel from '../components/Carousel';
import Host from '../components/Host';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';
import "../styles/ApartmentPage.scss"
import Rating from '../components/Rating';
import {Redirect} from "react-router-dom";
export default class ApartmentPage extends Component {
    constructor(props) {
        super(props);
        const apartment = data.find((data) => data.id === this.props.match.params.id);
        this.data = apartment
    }

    render() {

        if(!this.data) return <Redirect to="/404"/>

        const {description,equipments,host,location,pictures,rating,tags,title} = this.data;
        return (
            <main>
                <Carousel pictures={pictures}/>
                <section className="apartment">
                    <div className="apartmentInfo">
                        <h2 className="apartmentInfoTitle">{title}</h2>
                        <p className="apartmentInfoLocation">{location}</p>
                        {tags.map((tag,index) => {
                            return <Tag key={`${tag}${index}`} tag={tag}/>
                        })}
                    </div>
                    <div className="apartmentName">
                        <Host name={host.name} picture={host.picture}/>
                        <Rating rating={rating}/>
                    </div>
                </section>
                <section className="details">
                <Dropdown dropDownTitle='Description' dropDownContent={description}/>
                <ul className="dropdown list">
                    <Dropdown dropDownTitle='Équipements' dropDownContent={
                        equipments.map((equipment,index) =>{
                            return <li key={`${equipment}${index}`}>{equipment}</li>
                        })}
                    />
                </ul>
                </section>
            </main>
        )
    }
}
