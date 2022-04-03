import React, { Component } from 'react'
import '../styles/HomePage.scss';
import Card from '../components/Card'
import Banner from '../components/Banner'
import BannerImg from '../assets/banner_home.png'

export default class HomePage extends Component {
    
    render() {
        return (
            <main>
                <Banner imgClass="bannerImg" imgSrc={BannerImg} imgAlt='bannière' imgContent='Chez vous, partout et ailleurs'/>
                <Card/>
            </main>
        )
    }
}
