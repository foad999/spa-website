import React, { Component } from 'react';
import styled from 'styled-components'
import image from '../assets/images/error.jpg'
class NotFound extends Component {
    render() {
        const Div = styled.div`
        text-align:center;
        margin:10px 0px 0px;
        background:black;
        height: 84vh;
        margin: 20px;
        line-height: 200px;
        border-radius: 20px;
        
        img{
            position:realative;
            width:50%;
            border-radius:20px;
            height:50vh;
        }
            h1{
                font-size:3rem;
                top:290px;
                left:500px;
                color:red;
            }
        `
        return (
            <Div>
                <h1>the page you'r looking for does not exist</h1>
                <img src={image} alt='error404' />
            </Div>
        );
    }
}

export default NotFound;