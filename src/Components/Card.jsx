import React, { Component } from 'react';
import styles from "../assets/css/card.module.css";
import up from "../assets/images/up-svgrepo-com.svg";
import down from '../assets/images/down-svgrepo-com.svg'
import { Link } from 'react-router-dom';

class Card extends Component {
     constructor(props){
         super(props);
         this.state={
             number: 0
         }
     }
  
    upper= ()=>{
        this.setState((e)=>({
            number:e.number+1
        }))
    }

    downer=()=>{
        if (this.state.number>=1){
        this.setState((e)=>({
            number:e.number-1
        }))}
    }

    render() {
        const {image,name,price,id}=this.props
        const {number} = this.state
        return (
            <div className={styles.container}>
                <img src={image} alt='image' className={styles.aks}></img>
                <Link className="productName" to={`/products/${id}`}>{name}</Link >
                
                <span></span>
                <div className={styles.counter}>
                        <i>price:{price} {number ? `* ${number} = ${price.split(' ')[0] * number}$` :""}</i>
                        <div>
                            <img src={down} alt='down-flash' onClick={this.downer}  className={!number ? styles.deactive : ''}/>
                            <span className={styles.number}>{number}</span>
                            <img src={up} alt='up-flash' onClick={this.upper} className={styles.counterU}/>
                        </div>
                </div>
            </div>
        );
    }
}

export default Card;