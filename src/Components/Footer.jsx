import React, { Component } from 'react';
import styled from "styled-components"
import style from "../assets/css/Footer.module.css";
import search from "../assets/images/search-svgrepo-com.svg";





class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            condition: false
        }
        
    }

    

    show= ()=>{
        this.setState({
            condition:!(this.state.condition)
        })
        console.log(this.state.condition)
    }
   
    render() {
        const Aside = styled.aside`
        margin-left:200px;
        z-index:3;
        position:relative;
        input{
            visibility:${this.state.condition ? "visible": "hidden"};
            align-items:center;
            background:transparent;
            margin:100px 500px  ;
            border:1px solid;
            outline:0px;
            border-radius:10px;
            height: 30px;
            width: 200px;
            animation: search 1.1s linear;
        }

        img{
            position:absolute;
            height: 30px;
            width: 30px;
            right:468px;
            top: 100px;
            z-index:5;
        }
        @keyframes search{
            0%{
                width:0px ;
            }
            100%{
                width:200px ;
            }
        }
`
        return (
            <div className={style.div} >
                <div className={style.divh1}>
                    <h1 className={style.title}>our priority is</h1>
                    <h1 className={style.title}><span id={style.custumor}>Customer</span> choice</h1>
                </div>
                <Aside>
                    <input type='text' placeholder='search...' />
                    <img src={search} alt='search-button' onClick={this.show}/>
                </Aside>
            </div>
        );
    }
}

export default Footer;