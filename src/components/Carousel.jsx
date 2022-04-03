import React, { Component } from 'react'
import "../styles/Carousel.scss"
import arrow from "../assets/arrow.svg"

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayIndex: 0,
        };
        this.plusSlide = this.plusSlide.bind(this);
        this.lessSlide = this.lessSlide.bind(this)
    } 

    plusSlide(){
        this.state.arrayIndex >= this.props.pictures.length -1 
        ? this.setState({ arrayIndex: 0 })
        : this.setState({ arrayIndex: this.state.arrayIndex + 1 })
    }

    lessSlide(){
         this.state.arrayIndex === 0
            ? this.setState({ arrayIndex: this.props.pictures.length - 1})
            : this.setState({ arrayIndex: this.state.arrayIndex - 1 })
    }

    render() {
        
        return (
            <section className="carousel">
                <img className="carouselImg" src={this.props.pictures[this.state.arrayIndex]} alt="appartement"/>
                {this.props.pictures.length > 1 
                ? <div>
                    <img className="carouselArrowLeft" onClick={this.lessSlide} src={arrow} alt="arrow"/>
                    <img className="carouselArrowRight" onClick={this.plusSlide} src={arrow} alt="arrow"/>    
                  </div> 
                : ""
                }
                <p className='carouselCounter'>{this.state.arrayIndex + 1}/{this.props.pictures.length}</p>
            </section>
        )
    }
}
