import React, { Component } from 'react';
import image from "../assets/images/R.jpg";
import image2 from "../assets/images/finall.png";
import image3 from '../assets/images/finall 2.png'
import Card from './Card';
import styles from '../assets/css/cards.module.css'

class cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={image} name='Lace-back Dress' price="500 $" id='1' />
                <Card image={image2} name='Solange Black' price="100 $" id='2' />
                <Card image={image3} name='Casper Sheath' price="300 $" id='3' />
            </div>
        );
    }
}

export default cards;