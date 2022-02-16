import React, { Component } from 'react';
import Main from "../Components/Main";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

class Landing extends Component {
    render() {
        return (
            <div>
                <Main />
                <Cards />
                <br></br>
                <Footer />
            </div>
        );
    }
}

export default Landing;