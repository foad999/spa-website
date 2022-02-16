import React, { Component } from 'react';
import style from '../assets/css/contact.module.css'

class ContactUs extends Component {
    render() {
        return (
            <div className={style.contactUs}>
                <h1>the creator :Foad ezami</h1>
                <h2><a href='https://www.instagram.com/foad97_/?hl=en' target="_blank">instagram account</a></h2>
                <p>email address: foadwork876@gmail.com</p>
            </div>
        );
    }
}

export default ContactUs;