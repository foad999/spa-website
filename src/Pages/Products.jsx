import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Card from '../Components/Card';
import styles from "../assets/css/products.module.css";
class Products extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
            .then(res => this.setState({
                products:res.data
            }))
            
    }

    render() {
        const {products} = this.state;
        return (
            <div className={styles.container}>
                
                {
                    products.length ? products.map(product => <Card key={product.id} image={product.image} name={product.title} id={product.id} price={`${product.price} $`} />)
                    : <Loading />
                }
            </div>
        );
    }
}

export default Products;